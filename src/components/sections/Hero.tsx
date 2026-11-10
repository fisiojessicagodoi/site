import React from 'react';
import profileImageWebp from '../../assets/profile.webp';
import profileImageJpg from '../../assets/profile.jpg';
import OptimizedImage from '../ui/OptimizedImage';
import PreloadResources from '../ui/PreloadResources';
import posthog, { isPostHogConfigured } from '../../posthog';

const Hero = () => {
  const captureAppointmentCta = () => {
    if (isPostHogConfigured) {
      posthog.capture('appointment_cta_clicked', { placement: 'hero' });
    }
  };

  return (
    <>
      <PreloadResources />
      <div className="relative min-h-screen bg-gradient-to-b from-terracota-900/95 to-terracota-900/95">
        {/* Background otimizado com overlay quente */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-terracota-900/60 z-10"></div>
          <OptimizedImage
            src={profileImageJpg}
            webpSrc={profileImageWebp}
            alt="Fisioterapeuta"
            width={1920}
            height={1080}
            loading="eager"
            priority={true}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 pt-48 pb-20">
          <div className="text-center text-white mb-16">
            <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
              Fisioterapia Pélvica em Campinas
            </h1>

            <p className="text-lg mb-4 max-w-2xl mx-auto text-white/90 drop-shadow-md">
              Atendimento particular, personalizado e baseado em evidências. Sinta-se à vontade para cuidar de você.
            </p>

            <p className="text-sm mb-8 max-w-2xl mx-auto text-white/80 drop-shadow-md">
              Fisioterapeuta pélvica formada pela UFSCar e Unicamp · Atendimento em Campinas e domiciliar
            </p>

            <div className="mt-8 mb-12">
              <a
                href="https://wa.link/32p5y9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={captureAppointmentCta}
                className="inline-flex items-center justify-center font-medium rounded-full transition-all
                         px-10 py-5 text-lg text-terracota-900 bg-white hover:bg-white/90
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                         min-h-[56px] min-w-[200px]"
              >
                Agendar avaliação pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="text-white">
            <h2 className="text-3xl font-bold mb-12 text-center drop-shadow-lg">
              Tratamentos oferecidos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-terracota-800/30 p-6 rounded-lg backdrop-blur-sm border border-terracota-700/30 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-white drop-shadow-md">Sintomas Urinários e Intestinais</h3>
                <p className="text-white/90">
                  Tratamento para incontinência urinária, escapes, urgência, constipação intestinal e outros desconfortos do dia a dia.
                </p>
              </div>
              
              <div className="bg-terracota-800/30 p-6 rounded-lg backdrop-blur-sm border border-terracota-700/30 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-white drop-shadow-md">Disfunções Sexuais</h3>
                <p className="text-white/90">
                  Atendimento para dor na relação, vaginismo, dificuldade de penetração e desconfortos íntimos.
                </p>
              </div>
              
              <div className="bg-terracota-800/30 p-6 rounded-lg backdrop-blur-sm border border-terracota-700/30 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-white drop-shadow-md">Prolapso Pélvico</h3>
                <p className="text-white/90">
                  Cuidado especializado para sensação de peso, abaulamento ou desconforto vaginal, com foco em qualidade de vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;