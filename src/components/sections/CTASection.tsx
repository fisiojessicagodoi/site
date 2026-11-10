import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import posthog, { isPostHogConfigured } from '../../posthog';

const CTASection: React.FC = () => {
  const capture = (event: 'appointment_cta_clicked' | 'whatsapp_contact_initiated') => {
    if (isPostHogConfigured) {
      posthog.capture(event, { placement: 'cta_section' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-sand-to-coral text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight text-terracota-900">
            Pronta para cuidar da sua saúde pélvica?
          </h2>
          
          <p className="text-lg text-white font-semibold mb-8 max-w-2xl mx-auto leading-relaxed">
            Se sentir que é o momento de buscar orientação especializada, agende uma consulta comigo. O cuidado começa com uma conversa.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" onClick={() => capture('appointment_cta_clicked')}> 
              <Button variant="primary" size="lg" className="bg-terracota-600 text-white hover:bg-white hover:text-terracota-700">
                Consulte-se comigo
              </Button>
            </Link>
            <a 
              href="https://wa.link/32p5y9" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => capture('whatsapp_contact_initiated')}
            >
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                Contato via WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;