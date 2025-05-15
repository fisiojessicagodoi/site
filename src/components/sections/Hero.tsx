import React from 'react';
import { Link } from 'react-router-dom';
import profileImageWebp from '../../assets/profile.webp';
import profileImageJpg from '../../assets/profile.jpg';
import OptimizedImage from '../ui/OptimizedImage';
import PreloadResources from '../ui/PreloadResources';

const Hero = () => {
  return (
    <>
      <PreloadResources />
      <div className="relative min-h-screen bg-sand-to-coral">
        {/* Background otimizado */}
        <div className="absolute inset-0 opacity-30">
          <OptimizedImage
            src={profileImageJpg}
            webpSrc={profileImageWebp}
            alt="Fisioterapeuta"
            width={1920}
            height={1080}
            loading="eager"
            priority={true}
            className="w-full h-full"
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pt-48 pb-20">
          <div className="text-center text-white mb-16">
          <h1 class="text-4xl font-bold mb-6" style="font-family: 'Inter', system-ui, sans-serif;">
              Fisioterapia Pélvica em Campinas
          </h1>

            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Atendimento particular, personalizado e baseado em evidências. Sinta-se à vontade para cuidar de você.
            </p>
            <Link to="/contact">
              <button 
                className="bg-white text-terracota-700 px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
                aria-label="Agendar consulta"
              >
                Agendar consulta
              </button>
            </Link>
          </div>

          <div className="text-white">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Tratamentos oferecidos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Sintomas Urinários e Intestinais</h3>
                <p>
                  Tratamento para incontinência urinária, escapes, urgência, constipação intestinal e outros desconfortos do dia a dia.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Disfunções Sexuais</h3>
                <p>
                  Atendimento para dor na relação, vaginismo, dificuldade de penetração e desconfortos íntimos.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">Prolapso Pélvico</h3>
                <p>
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