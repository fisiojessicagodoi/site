import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-sand-to-coral">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 pt-48 pb-20">
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl font-bold mb-6">
            Fisioterapia Pélvica em Campinas
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Atendimento particular, personalizado e baseado em evidências. Sinta-se à vontade para cuidar de você.
          </p>
          <Link to="/contact">
            <button className="bg-white text-terracota-700 px-8 py-3 rounded-full">
              Agendar consulta
            </button>
          </Link>
        </div>

        <div className="text-white">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Tratamentos oferecidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Sintomas Urinários e Intestinais</h3>
              <p>
                Tratamento para incontinência urinária, escapes, urgência, constipação intestinal e outros desconfortos do dia a dia.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Disfunções Sexuais</h3>
              <p>
                Atendimento para dor na relação, vaginismo, dificuldade de penetração e desconfortos íntimos.
              </p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Prolapso Pélvico</h3>
              <p>
                Cuidado especializado para sensação de peso, abaulamento ou desconforto vaginal, com foco em qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;