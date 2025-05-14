import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import profileImage from '../../assets/profile.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] bg-sand-to-coral flex items-center text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
        style={{
          backgroundImage: `url(${profileImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-center">
          Fisioterapeuta Pélvica em Campinas
        </h1>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4 text-center">
          Tratamentos Oferecidos
        </h2>
        <ul className="text-lg md:text-xl text-white mb-8 max-w-2xl text-center space-y-2">
          <li>Incontinência urinária</li>
          <li>Disfunções sexuais como dor na relação</li>
          <li>Vaginismo, vulvodínia e aderências</li>
          <li>Reabilitação do assoalho pélvico</li>
          <li>Prolapso pélvico</li>
        </ul>
        <p className="text-lg md:text-xl text-white italic mb-8 max-w-2xl leading-relaxed text-center">
          Atendimento particular, personalizado e baseado em evidências. Sinta-se à vontade para cuidar de você.
        </p>
        <Link to="/contact">
          <button className="bg-white text-terracota-700 font-semibold px-8 py-3 rounded-full shadow hover:bg-terracota-100 transition">
            Agendar consulta
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;