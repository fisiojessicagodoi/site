import React from 'react';
import { MessageCircle } from 'lucide-react';
import posthog, { isPostHogConfigured } from '../../posthog';

const WhatsAppButton: React.FC = () => {
  const captureWhatsAppContact = () => {
    if (isPostHogConfigured) {
      posthog.capture('whatsapp_contact_initiated', { placement: 'floating_whatsapp_button' });
    }
  };

  return (
    <a
      href="https://wa.link/32p5y9"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-40"
      aria-label="Contact via WhatsApp"
      onClick={captureWhatsAppContact}
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;