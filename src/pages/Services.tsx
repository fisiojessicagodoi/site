import React from 'react';
import { Activity, Heart, Baby, Droplet, Smile, Video, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import incontinenciaImg from '../assets/incontinencia-servico.png';
import dorPelvicaImg from '../assets/dor-pelvica.png';
import disfuncaoServicoImg from '../assets/disfunçao-servico.png';
import prolapsoImg from '../assets/prolapso-servico.png';
import domicilioImg from '../assets/domicilio-servico.png';
import posthog, { isPostHogConfigured } from '../posthog';

// SVG minimalista de útero
const UteroIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-terracota-600">
    <path d="M8 10C8 6.686 10.686 4 14 4h4c3.314 0 6 2.686 6 6v2c0 2.21-1.79 4-4 4h-2v8a2 2 0 1 1-4 0v-8h-2c-2.21 0-4-1.79-4-4v-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="22" cy="10" r="2" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const Services: React.FC = () => {
  const captureServiceDetailsOpened = () => {
    if (isPostHogConfigured) {
      posthog.capture('service_details_opened', { placement: 'services_page' });
    }
  };

  const services = [
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
    {
      id: 'atendimento-domiciliar',
      title: 'Fisioterapia Pélvica Domiciliar em Campinas',
      description: 'Receba atendimento especializado de fisioterapia pélvica no conforto da sua casa em Campinas e região. Ideal para quem busca comodidade, privacidade e acompanhamento personalizado.',
      image: domicilioImg,
      icon: <Home className="w-8 h-8" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-terracota-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Serviços</h1>
            <p className="text-lg text-white leading-relaxed font-medium">
              Tratamentos abrangentes de fisioterapia pélvica adaptados às suas necessidades únicas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            subtitle="Cuidado Especializado" 
            title="Serviços de Fisioterapia Pélvica"
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
                <div className="p-6 flex-grow">
                  <div className="text-terracota-600 mb-4">{service.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <div className="px-6 pb-6">
                  <Link 
                    to={`/services/${service.id}`} 
                    className="inline-flex items-center text-terracota-600 hover:text-terracota-800 font-medium"
                    onClick={captureServiceDetailsOpened}
                  >
                    Saiba mais <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            subtitle="Minha Abordagem" 
            title="Processo de Tratamento"
            centered 
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-terracota-600 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 md:mt-4">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">Avaliação Inicial</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Sua primeira consulta inclui uma discussão detalhada do seu histórico de saúde e preocupações, seguida por uma avaliação física completa. Isso me ajuda a entender as causas profundas dos seus sintomas e a desenvolver um plano de tratamento personalizado.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-terracota-600 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 md:mt-4">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">Plano de Tratamento Personalizado</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Com base na sua avaliação, crio um protocolo de tratamento personalizado combinando várias técnicas, como terapia manual, exercícios direcionados, biofeedback e educação. Seu plano é projetado para atender às suas necessidades e objetivos específicos.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-terracota-600 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 md:mt-4">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">Sessões de Tratamento Ativo</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    As sessões de tratamento regulares concentram-se na implementação do seu plano através de terapia manual, exercícios guiados e monitoramento do progresso. Ajusto as técnicas conforme necessário, com base na sua resposta e necessidades em evolução.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-terracota-600 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 md:mt-4">
                  4
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">Programa Domiciliar e Educação</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Um componente essencial do seu tratamento é aprender estratégias de autogerenciamento e exercícios para praticar em casa. Forneço instruções claras e recursos para apoiar seu progresso entre as sessões.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-terracota-600 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 md:mt-4">
                  5
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-gray-800 mb-3">Avaliação do Progresso e Bem-estar a Longo Prazo</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Avalio regularmente sua melhora e ajusto seu plano de acordo. Conforme você progride, faço a transição para um programa de manutenção focado em prevenir recorrências e otimizar sua saúde pélvica a longo prazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            subtitle="Perguntas Comuns" 
            title="Perguntas Frequentes"
            centered 
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">O que devo esperar durante minha primeira consulta?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sua primeira consulta incluirá uma discussão detalhada sobre seus sintomas e histórico médico, seguida por uma avaliação física. Explicaremos nossas descobertas e delinearemos um plano de tratamento recomendado. As consultas iniciais geralmente duram de 60 a 75 minutos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">De quantas sessões precisarei?</h3>
                <p className="text-gray-600 leading-relaxed">
                  O número de sessões varia dependendo da sua condição, sua gravidade e como seu corpo responde ao tratamento. Alguns pacientes observam melhora em 4-6 sessões, enquanto outros com condições complexas podem se beneficiar de um curso de tratamento mais longo. Forneceremos uma estimativa mais específica após sua avaliação.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">A fisioterapia pélvica é dolorosa?</h3>
                <p className="text-gray-600 leading-relaxed">
                  O objetivo é reduzir a dor, não causá-la. Algumas técnicas podem causar desconforto temporário, especialmente ao tratar áreas sensíveis, mas o tratamento nunca deve ser excessivamente doloroso. Trabalhamos dentro do seu nível de conforto e ajustamos nossa abordagem com base no seu feedback.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">Preciso de um encaminhamento para marcar uma consulta?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Não, um encaminhamento médico não é necessário para marcar uma consulta comigo. No entanto, alguns planos de seguro podem exigir um encaminhamento para cobertura, então é melhor verificar com sua operadora se você planeja solicitar reembolso.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">O que devo vestir para minha consulta?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Recomenda-se roupas confortáveis e folgadas. Para tratamentos na parte inferior do corpo, pode ser necessário vestir shorts ou uma bata que fornecemos. Seu conforto e dignidade são sempre priorizados durante os tratamentos.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">Ainda tem dúvidas? Ficarei feliz em ajudar.</p>
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Entre em Contato
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;