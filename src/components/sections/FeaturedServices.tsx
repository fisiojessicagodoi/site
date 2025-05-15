import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Droplet, Heart, Home } from 'lucide-react';
import SectionTitle from '../../components/ui/SectionTitle';
import ServiceCard from '../../components/ui/ServiceCard';
import Button from '../../components/ui/Button';
import dorPelvicaImg from '../../assets/dor-pelvica.png';
import incontinenciaImg from '../../assets/incontinencia-servico.png';
import disfuncaoServicoImg from '../../assets/disfunçao-servico.png';
import prolapsoImg from '../../assets/prolapso-servico.png';
import domicilioImg from '../../assets/domicilio-servico.png';

// SVG minimalista de útero
const UteroIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-terracota-600">
    <path d="M8 10C8 6.686 10.686 4 14 4h4c3.314 0 6 2.686 6 6v2c0 2.21-1.79 4-4 4h-2v8a2 2 0 1 1-4 0v-8h-2c-2.21 0-4-1.79-4-4v-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="22" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const FeaturedServices: React.FC = () => {
  const servicos = [
    {
      id: 'dor-pelvica',
      title: 'Fisioterapia para Dor Pélvica Crônica e Aguda',
      description: 'Tratamento especializado para dor pélvica crônica e aguda, incluindo dispareunia, neuralgia do pudendo, prostatite crônica e outras causas. Abordagem baseada em evidências com terapia manual, exercícios e educação para alívio duradouro.',
      image: dorPelvicaImg,
      icon: <Activity className="w-8 h-8" />,
    },
    {
      id: 'incontinencia',
      title: 'Fisioterapia para Incontinência Urinária e Fecal',
      description: 'Recupere o controle da bexiga e do intestino com técnicas avançadas de fisioterapia pélvica. Tratamento para incontinência urinária de esforço, urgência, mista e incontinência fecal, com exercícios, biofeedback e orientações personalizadas.',
      image: incontinenciaImg,
      icon: <Droplet className="w-8 h-8" />,
    },
    {
      id: 'prolapso-pelvico',
      title: 'Tratamento para Prolapso de Órgãos Pélvicos',
      description: 'Fisioterapia especializada para prolapso de bexiga, útero ou reto. Alívio dos sintomas, melhora do suporte pélvico e prevenção da progressão do prolapso com exercícios, educação e acompanhamento individualizado.',
      image: prolapsoImg,
      icon: <UteroIcon />,
    },
    {
      id: 'disfuncao-sexual',
      title: 'Fisioterapia para Disfunções Sexuais Femininas',
      description: 'Abordagem fisioterapêutica para dor na relação (dispareunia), vaginismo, dificuldade de orgasmo, desejo sexual baixo e outras disfunções sexuais femininas. Tratamento humanizado, sigiloso e baseado em ciência.',
      image: disfuncaoServicoImg,
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          subtitle="Serviços de Fisioterapia Pélvica" 
          title="Como posso te ajudar?"
          centered 
        />
        <p className="text-center text-gray-700 mb-10 mt-6 text-base md:text-lg">
          Explico cada etapa do tratamento, sem mistério. Você participa das decisões e entende o que está acontecendo com seu corpo.
        </p>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/servicos">
            <Button variant="primary" size="lg">
              Ver todos os serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;