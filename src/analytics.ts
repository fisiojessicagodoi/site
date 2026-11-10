import posthog from './posthog';

/**
 * Site-wide automatic tracking.
 *
 * Everything here is delegated at the document level, so it covers every page
 * and component without touching them. Privacy rules (this is a health site):
 *  - never send what a visitor types into a form (only field names/types),
 *  - never send selected/copied text (only its length),
 *  - search terms are reduced to their length.
 *
 * Names that already exist elsewhere in the code (whatsapp_contact_initiated,
 * appointment_cta_clicked, ...) are intentionally NOT reused here, so
 * conversions are never double counted.
 */

let started = false;

const trim = (value: string | null | undefined, max = 80): string =>
  (value ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

const pagePath = (): string => window.location.pathname;

// ---------------------------------------------------------------- link kind

type LinkKind = 'phone' | 'email' | 'whatsapp' | 'social' | 'maps' | 'outbound' | 'download' | 'internal' | 'anchor';

const SOCIAL_HOSTS = ['instagram.com', 'facebook.com', 'fb.com', 'linkedin.com', 'youtube.com', 'youtu.be', 'tiktok.com', 'x.com', 'twitter.com', 'threads.net'];

const classifyLink = (anchor: HTMLAnchorElement): { kind: LinkKind; host: string } => {
  const raw = anchor.getAttribute('href') ?? '';
  if (raw.startsWith('tel:')) return { kind: 'phone', host: '' };
  if (raw.startsWith('mailto:')) return { kind: 'email', host: '' };
  if (raw.startsWith('#')) return { kind: 'anchor', host: '' };

  let url: URL;
  try {
    url = new URL(anchor.href, window.location.href);
  } catch {
    return { kind: 'internal', host: '' };
  }
  const host = url.hostname.replace(/^www\./, '');

  if (host === 'wa.me' || host.endsWith('whatsapp.com')) return { kind: 'whatsapp', host };
  if (/\.(pdf|docx?|xlsx?|zip|png|jpe?g)$/i.test(url.pathname)) return { kind: 'download', host };
  if (host.includes('google.') && url.pathname.includes('/maps')) return { kind: 'maps', host };
  if (host === 'maps.app.goo.gl' || host === 'goo.gl') return { kind: 'maps', host };
  if (SOCIAL_HOSTS.some((s) => host === s || host.endsWith(`.${s}`))) return { kind: 'social', host };
  if (url.origin !== window.location.origin) return { kind: 'outbound', host };
  return { kind: 'internal', host };
};

// ------------------------------------------------------------------- clicks

const trackClicks = (): void => {
  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest('a');
      if (anchor instanceof HTMLAnchorElement) {
        const { kind, host } = classifyLink(anchor);
        const common = {
          link_kind: kind,
          link_text: trim(anchor.textContent),
          link_url: trim(anchor.getAttribute('href'), 200),
          link_host: host,
          page_path: pagePath(),
        };

        if (kind === 'phone') posthog.capture('phone_link_clicked', common);
        else if (kind === 'email') posthog.capture('email_link_clicked', common);
        else if (kind === 'whatsapp') posthog.capture('whatsapp_link_clicked', common);
        else if (kind === 'social') posthog.capture('social_link_clicked', common);
        else if (kind === 'maps') posthog.capture('maps_link_clicked', common);
        else if (kind === 'download') posthog.capture('file_download_clicked', common);
        else if (kind === 'outbound') posthog.capture('outbound_link_clicked', common);
        else if (kind === 'internal') posthog.capture('internal_link_clicked', common);
        return;
      }

      const button = target.closest('button');
      if (button instanceof HTMLButtonElement && button.type !== 'submit') {
        posthog.capture('button_clicked', {
          button_text: trim(button.textContent || button.getAttribute('aria-label')),
          button_id: button.id || undefined,
          page_path: pagePath(),
        });
      }
    },
    true,
  );
};

// -------------------------------------------------------------------- forms

const describeForm = (form: HTMLFormElement) => ({
  form_id: form.id || undefined,
  form_name: form.getAttribute('name') || undefined,
  form_fields: Array.from(form.elements)
    .map((el) => (el as HTMLInputElement).name || (el as HTMLInputElement).type || el.tagName.toLowerCase())
    .slice(0, 20),
  page_path: pagePath(),
});

const trackForms = (): void => {
  const startedForms = new WeakSet<HTMLFormElement>();

  document.addEventListener(
    'focusin',
    (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement)) return;
      const form = target.form;
      if (!form || startedForms.has(form)) return;
      startedForms.add(form);
      posthog.capture('form_started', { ...describeForm(form), first_field: target.name || target.type });
    },
    true,
  );

  document.addEventListener(
    'submit',
    (event) => {
      if (event.target instanceof HTMLFormElement) {
        posthog.capture('form_submitted', describeForm(event.target));
      }
    },
    true,
  );

  // Blog search box: only the length of the term, never the term itself.
  let searchTimer: number | undefined;
  document.addEventListener('input', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;
    const looksLikeSearch = target.type === 'search' || /busca|search|pesquis/i.test(`${target.name} ${target.placeholder} ${target.id}`);
    if (!looksLikeSearch) return;
    window.clearTimeout(searchTimer);
    searchTimer = window.setTimeout(() => {
      if (target.value.length > 0) {
        posthog.capture('search_performed', { term_length: target.value.length, page_path: pagePath() });
      }
    }, 1200);
  });

  // Category / filter dropdowns.
  document.addEventListener('change', (event) => {
    const target = event.target;
    if (target instanceof HTMLSelectElement && !target.form) {
      posthog.capture('filter_changed', { filter_name: target.name || target.id || 'select', selected_label: trim(target.selectedOptions[0]?.textContent) });
    }
  });
};

// ------------------------------------------------------- per-page engagement

const SCROLL_STEPS = [25, 50, 75, 90, 100];
const TIME_STEPS_SECONDS = [15, 30, 60, 120, 300];

const trackPageEngagement = (): void => {
  let reachedScroll = new Set<number>();
  let timers: number[] = [];
  let pageStart = Date.now();
  let activeMs = 0;
  let lastActive = Date.now();
  let sentLeave = false;

  const reset = () => {
    timers.forEach((t) => window.clearTimeout(t));
    reachedScroll = new Set<number>();
    pageStart = Date.now();
    activeMs = 0;
    lastActive = Date.now();
    sentLeave = false;

    timers = TIME_STEPS_SECONDS.map((seconds) =>
      window.setTimeout(() => {
        if (document.visibilityState === 'visible') {
          posthog.capture('time_on_page_reached', { seconds, page_path: pagePath() });
        }
      }, seconds * 1000),
    );
  };

  const onScroll = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const percent = Math.min(100, Math.round(((window.scrollY || doc.scrollTop) / scrollable) * 100));
    SCROLL_STEPS.forEach((step) => {
      if (percent >= step && !reachedScroll.has(step)) {
        reachedScroll.add(step);
        posthog.capture('scroll_depth_reached', { percent: step, page_path: pagePath() });
      }
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  const sendLeaveSummary = () => {
    if (sentLeave) return;
    sentLeave = true;
    if (document.visibilityState === 'visible') activeMs += Date.now() - lastActive;
    posthog.capture('page_engagement_summary', {
      page_path: pagePath(),
      visible_seconds: Math.round(activeMs / 1000),
      total_seconds: Math.round((Date.now() - pageStart) / 1000),
      max_scroll_percent: Math.max(0, ...Array.from(reachedScroll)),
    });
  };

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      activeMs += Date.now() - lastActive;
      sendLeaveSummary();
    } else {
      lastActive = Date.now();
      sentLeave = false;
    }
  });
  window.addEventListener('pagehide', sendLeaveSummary);

  // Single-page-app navigation: start a fresh page measurement.
  const notify = () => window.dispatchEvent(new Event('analytics:routechange'));
  (['pushState', 'replaceState'] as const).forEach((method) => {
    const original = history[method];
    history[method] = function (this: History, ...args: Parameters<History['pushState']>) {
      const before = window.location.pathname;
      const result = original.apply(this, args);
      if (window.location.pathname !== before) notify();
      return result;
    } as History['pushState'];
  });
  window.addEventListener('popstate', notify);
  window.addEventListener('analytics:routechange', () => {
    sendLeaveSummary();
    reset();
    window.setTimeout(onScroll, 500);
  });

  reset();
};

// ----------------------------------------------------------- section views

const trackSectionViews = (): void => {
  if (!('IntersectionObserver' in window)) return;
  const seen = new Set<string>();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const heading = trim(el.querySelector('h1, h2, h3')?.textContent, 60);
        const name = el.id || heading;
        const key = `${pagePath()}|${name}`;
        if (!name || seen.has(key)) return;
        seen.add(key);
        posthog.capture('section_viewed', { section: name, section_heading: heading, page_path: pagePath() });
      });
    },
    { threshold: 0.4 },
  );

  const observeAll = () => document.querySelectorAll('main section, section[id]').forEach((el) => observer.observe(el));

  // Content is rendered by React after load and on every route change.
  const mutation = new MutationObserver(() => {
    window.clearTimeout(observeTimer);
    observeTimer = window.setTimeout(observeAll, 300);
  });
  let observeTimer: number | undefined;
  mutation.observe(document.body, { childList: true, subtree: true });
  observeAll();
};

// -------------------------------------------------------------------- media

const trackMediaAndMisc = (): void => {
  document.addEventListener(
    'play',
    (event) => {
      const el = event.target;
      if (el instanceof HTMLMediaElement) {
        posthog.capture('media_played', { media_type: el.tagName.toLowerCase(), media_src: trim(el.currentSrc, 160), page_path: pagePath() });
      }
    },
    true,
  );

  document.addEventListener(
    'ended',
    (event) => {
      const el = event.target;
      if (el instanceof HTMLMediaElement) {
        posthog.capture('media_completed', { media_type: el.tagName.toLowerCase(), media_src: trim(el.currentSrc, 160), page_path: pagePath() });
      }
    },
    true,
  );

  // Images that failed to load (broken assets hurt trust and SEO).
  document.addEventListener(
    'error',
    (event) => {
      const el = event.target;
      if (el instanceof HTMLImageElement) {
        posthog.capture('image_load_failed', { image_src: trim(el.currentSrc || el.src, 200), page_path: pagePath() });
      }
    },
    true,
  );

  // Copying text: only how much, never what.
  document.addEventListener('copy', () => {
    const length = window.getSelection()?.toString().length ?? 0;
    if (length > 0) posthog.capture('text_copied', { length, page_path: pagePath() });
  });

  // Going offline / back online while browsing.
  window.addEventListener('offline', () => posthog.capture('connection_lost', { page_path: pagePath() }));
  window.addEventListener('online', () => posthog.capture('connection_restored', { page_path: pagePath() }));

  // Print / share intent.
  window.addEventListener('beforeprint', () => posthog.capture('page_printed', { page_path: pagePath() }));
};

// ----------------------------------------------------------- session context

const registerContext = (): void => {
  const nav = navigator as Navigator & { connection?: { effectiveType?: string } };
  posthog.register({
    site_language: document.documentElement.lang || undefined,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    device_pixel_ratio: window.devicePixelRatio,
    connection_type: nav.connection?.effectiveType,
    color_scheme: window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    is_touch_device: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
  });
};

export const initAnalytics = (): void => {
  if (started || typeof window === 'undefined') return;
  started = true;

  registerContext();
  trackClicks();
  trackForms();
  trackPageEngagement();
  trackSectionViews();
  trackMediaAndMisc();
};
