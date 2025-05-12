import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import profileImg from '../../assets/profile.jpg';

const About: React.FC = () => {
  const benefits = [
    'Conhecimento especializado em reabilitação do assoalho pélvico',
    'Protocolos de tratamento baseados em evidências',
    'Planos de cuidado personalizados para suas necessidades únicas',
    'Atualização contínua nas técnicas mais modernas',
    'Ambiente de atendimento privado e confortável',
    'Abordagem holística considerando sua saúde integral'
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle 
              subtitle="Sobre mim"
              title="Cuidado individual, ciência e acolhimento"
              className="mb-8"
            />
            
            <p className="text-gray-700 mb-10 leading-relaxed text-lg">
              Atendimento acolhedor, individualizado e baseado em ciência.
            </p>
            
            <ul className="text-gray-600 space-y-2 text-base mb-8">
              <li>Dedicação à pesquisa e estudos em saúde da mulher desde 2019</li>
              <li>Publicações científicas na área</li>
              <li>Atendimento humanizado, particular e individualizado</li>
            </ul>
            
            <Link to="/about">
              <Button variant="primary" size="lg">
                Saiba mais sobre mim
              </Button>
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={profileImg} 
                alt="Foto de perfil da Dra. Jéssica Godoi" 
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-terracota-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-serif text-lg font-semibold mb-1">
                Jéssica Godoi
              </p>
              <p className="text-sm text-terracota-100">
                Fisioterapeuta pela Universidade Federal de São Carlos (UFSCar)
                Especialização em Saúde da Mulher pelo CAISM-UNICAMP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;