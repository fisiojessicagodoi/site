import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-sand-to-coral text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contato</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Estou aqui para ajudar com todas as suas dúvidas e necessidades em saúde pélvica.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <ContactSection />

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[400px] w-full bg-gray-200">
              {/* In a real implementation, embed an actual map here */}
              <div className="h-full w-full flex items-center justify-center">
                <iframe
                  title="Mapa - Rua Doutor Souza Lima, 139"
                  src="https://www.google.com/maps?q=Rua Doutor Souza Lima, 139, Campinas, SP&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;