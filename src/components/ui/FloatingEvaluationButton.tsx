import React from 'react';
import posthog, { isPostHogConfigured } from '../../posthog';

const FloatingEvaluationButton: React.FC = () => {
  const captureAppointmentCta = () => {
    if (isPostHogConfigured) {
      posthog.capture('appointment_cta_clicked', { placement: 'floating_evaluation_button' });
    }
  };

  return (
    <a
      href="https://wa.link/32p5y9"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 left-1/2 -translate-x-1/2 
        bg-terracota-600 hover:bg-terracota-700 
        text-white px-6 py-3 text-base font-semibold 
        rounded-full shadow-lg z-50 
        transition-colors duration-300
      "
      onClick={captureAppointmentCta}
    >
      Comece com uma avaliação
    </a>
  );
};

export default FloatingEvaluationButton;
