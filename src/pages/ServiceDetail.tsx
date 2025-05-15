import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import incontinenciaImg from '../assets/incontinencia-servico.png';
import dorPelvicaImg from '../assets/dor-pelvica.png';
import disfuncaoServicoImg from '../assets/disfunçao-servico.png';
import prolapsoImg from '../assets/prolapso-servico.png';
import domicilioImg from '../assets/domicilio-servico.png';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Dados do serviço
  const servicos = {
    'dor-pelvica': {
      title: 'Fisioterapia para Dor Pélvica Feminina',
      description: 'Tratamento especializado para dor pélvica, incluindo dispareunia e neuralgia do pudendo. Abordagem baseada em evidências com resultados efetivos. Atendimento em Campinas e região.',
      image: dorPelvicaImg,
      benefits: [
        'Alívio efetivo da dor pélvica',
        'Recuperação da função física',
        'Maior qualidade de vida',
        'Redução do uso de medicamentos',
        'Estratégias práticas de autocuidado',
        'Prevenção de recorrências'
      ],
      whatToExpect: 'Sua primeira consulta (60-90 minutos) é dedicada a uma avaliação detalhada para identificar as causas específicas da sua dor. Desenvolvo um plano personalizado que combina terapia manual, exercícios específicos e educação. Meu objetivo é proporcionar alívio duradouro e autonomia no seu cuidado.',
      faqs: [
        {
          question: 'Quanto tempo leva para ver resultados?',
          answer: 'O tempo de resposta varia conforme a causa e duração da sua dor. Algumas pacientes sentem alívio após 2-3 sessões, enquanto outras com condições mais complexas podem precisar de um tratamento mais extenso. Acompanho seu progresso de perto e ajusto o plano conforme necessário.'
        },
        {
          question: 'A terapia manual é desconfortável?',
          answer: 'Minha abordagem prioriza seu conforto. Embora algumas técnicas possam causar sensibilidade temporária, o tratamento nunca deve ser excessivamente doloroso. Trabalho dentro dos seus limites e uso técnicas suaves para minimizar o desconforto.'
        },
        {
          question: 'Precisarei continuar os exercícios por quanto tempo?',
          answer: 'A maioria das pacientes se beneficia de exercícios de manutenção após o tratamento ativo. Estes exercícios são essenciais para prevenir recorrências e manter os resultados. Oriento você sobre quais exercícios são mais importantes para seu caso específico.'
        }
      ]
    },
    'incontinencia': {
      title: 'Fisioterapia para Incontinência Urinária e Fecal',
      description: 'Tratamento especializado para incontinência urinária e fecal, utilizando técnicas avançadas de fisioterapia pélvica.',
      longDescription: 'A incontinência é uma condição comum entre mulheres, mas não precisa ser permanente. Meu programa de tratamento é personalizado e baseado em evidências científicas, combinando exercícios específicos, técnicas comportamentais e biofeedback quando necessário. Foco em resultados práticos que melhoram sua qualidade de vida e confiança.',
      image: incontinenciaImg,
      benefits: [
        'Melhora do controle da bexiga',
        'Redução da urgência urinária',
        'Fortalecimento do assoalho pélvico',
        'Técnicas de gerenciamento da bexiga',
        'Exercícios personalizados',
        'Orientação sobre hábitos de vida'
      ],
      whatToExpect: [
        'Avaliação completa do assoalho pélvico',
        'Plano de tratamento individualizado',
        'Técnicas de biofeedback',
        'Exercícios específicos para seu caso',
        'Orientação sobre hábitos de vida',
        'Acompanhamento contínuo do progresso'
      ],
      faqs: [
        {
          question: 'Qual a eficácia do tratamento?',
          answer: 'Estudos mostram que a fisioterapia pélvica tem taxa de sucesso de 70-80% para melhora significativa ou resolução dos sintomas. Os resultados são ainda melhores quando as pacientes seguem o programa de tratamento adequadamente.'
        },
        {
          question: 'Quanto tempo leva para ver resultados?',
          answer: 'Muitas pacientes notam melhorias nas primeiras 4-6 semanas de tratamento consistente. Resultados ótimos geralmente são alcançados em 3-6 meses, tempo necessário para fortalecer adequadamente os músculos do assoalho pélvico.'
        },
        {
          question: 'A incontinência tem cura?',
          answer: 'Muitas pacientes alcançam resolução completa dos sintomas. Outras experimentam redução significativa nos episódios. O resultado depende da causa específica, gravidade e compromisso com o tratamento. Durante a avaliação, discutimos expectativas realistas para seu caso.'
        }
      ]
    },
    'prolapso-pelvico': {
      title: 'Tratamento para Prolapso de Órgãos Pélvicos',
      description: 'Fisioterapia especializada para prolapso de bexiga, útero ou reto. Tratamento efetivo com exercícios, educação e acompanhamento personalizado. Atendimento em Campinas e região.',
      longDescription: 'O prolapso pélvico é uma condição que afeta muitas mulheres, causando desconforto e impactando sua qualidade de vida. Meu tratamento é focado em reabilitação do assoalho pélvico, com exercícios personalizados e estratégias preventivas. Trabalho para melhorar seu conforto e função, sempre respeitando seu ritmo e necessidades.',
      image: prolapsoImg,
      benefits: [
        'Redução do desconforto pélvico',
        'Melhora do suporte dos órgãos',
        'Alívio de sintomas urinários e intestinais',
        'Prevenção da progressão do prolapso',
        'Orientação para atividades seguras',
        'Maior qualidade de vida'
      ],
      whatToExpect: 'Sua primeira consulta (60-90 minutos) é dedicada a uma avaliação detalhada do seu assoalho pélvico e fatores de risco. Desenvolvo um plano personalizado com exercícios específicos, orientações posturais e estratégias preventivas. Meu objetivo é melhorar seu conforto e função, prevenindo a progressão do prolapso.',
      faqs: [
        {
          question: 'O que é prolapso pélvico?',
          answer: 'O prolapso ocorre quando órgãos como bexiga, útero ou reto descem de sua posição normal devido à fraqueza dos músculos de suporte. Isso pode causar sensação de peso, desconforto e alterações urinárias ou intestinais.'
        },
        {
          question: 'A fisioterapia realmente ajuda no prolapso?',
          answer: 'Sim! A fisioterapia é o tratamento de primeira linha para prolapso leve a moderado. Exercícios específicos e orientações adequadas podem reduzir sintomas, melhorar o suporte dos órgãos e prevenir a progressão.'
        },
        {
          question: 'Vou precisar de cirurgia?',
          answer: 'Nem todos os casos de prolapso exigem cirurgia. Muitas pacientes apresentam melhora significativa apenas com fisioterapia. A decisão é individualizada e, se necessário, trabalho em conjunto com sua equipe médica.'
        },
        {
          question: 'Posso praticar atividade física?',
          answer: 'Sim! Com orientação adequada, você pode manter uma vida ativa. Ensino quais atividades são seguras e como proteger o assoalho pélvico durante exercícios e tarefas diárias.'
        }
      ]
    },
    'disfuncao-sexual': {
      title: 'Fisioterapia para Disfunções Sexuais Femininas',
      description: 'Tratamento especializado para dor na relação (dispareunia), vaginismo, aderência no clitóris e dificuldade de orgasmo. Abordagem baseada em evidências científicas, com foco em resultados e bem-estar. Atendimento em Campinas e região.',
      longDescription: 'Entendo que questões de saúde sexual podem impactar significativamente sua qualidade de vida. Por isso, ofereço um tratamento especializado e personalizado para condições como dispareunia (dor durante a relação), vaginismo, aderência no clitóris e dificuldade de orgasmo. Minha abordagem combina técnicas de terapia manual, exercícios específicos e educação, sempre com base em evidências científicas. O ambiente é acolhedor e totalmente sigiloso, garantindo sua privacidade e conforto durante todo o processo.',
      image: disfuncaoServicoImg,
      benefits: [
        'Alívio efetivo da dor durante a relação sexual',
        'Tratamento especializado para vaginismo',
        'Recuperação da sensibilidade e função sexual',
        'Maior conforto e satisfação sexual',
        'Autoconhecimento e empoderamento',
        'Resultados baseados em evidências científicas'
      ],
      whatToExpect: 'Sua primeira consulta (60-90 minutos) é dedicada a uma avaliação detalhada para identificar as causas específicas da sua condição. Desenvolvo um plano de tratamento personalizado que inclui terapia manual, exercícios específicos e orientações práticas. Meu objetivo é proporcionar resultados efetivos e duradouros, sempre respeitando seu ritmo e conforto.',
      faqs: [
        {
          question: 'É comum sentir dor durante a relação sexual?',
          answer: 'A dor sexual afeta cerca de 15-20% das mulheres, mas isso não significa que seja normal. Na verdade, é um sinal de que algo precisa ser tratado. Identifico e trato as causas específicas, que podem incluir tensão muscular, aderências ou outras condições físicas tratáveis.'
        },
        {
          question: 'O que é vaginismo e como é o tratamento?',
          answer: 'O vaginismo é uma condição que causa contração involuntária dos músculos do assoalho pélvico, tornando a penetração dolorosa ou impossível. Meu tratamento é progressivo e personalizado, combinando técnicas de relaxamento, exercícios específicos e terapia manual. Os resultados são significativos quando seguimos o plano adequadamente.'
        },
        {
          question: 'Como a fisioterapia ajuda com dificuldade de orgasmo?',
          answer: 'Minha abordagem foca em melhorar a função sexual através de exercícios específicos para os músculos do assoalho pélvico, técnicas de relaxamento e educação sobre anatomia. Trabalho para otimizar a circulação sanguínea, sensibilidade e controle muscular, elementos essenciais para a função sexual feminina.'
        },
        {
          question: 'Como é garantida minha privacidade?',
          answer: 'Sua privacidade é uma prioridade. Atendo em ambiente exclusivo e sigiloso, com horários reservados para garantir sua discrição. Todas as informações são mantidas em absoluto sigilo, seguindo as normas éticas da profissão.'
        }
      ]
    },
    'consultas-virtuais': {
      title: 'Consultas Virtuais em Fisioterapia Pélvica',
      description: 'Atendimento online especializado para avaliação, educação e exercícios em saúde pélvica. Conveniência e qualidade no conforto da sua casa. Atendimento para todo o Brasil.',
      longDescription: 'Ofereço consultas virtuais para garantir seu acesso a cuidados especializados, mesmo à distância. Através de tecnologia segura, realizo avaliações completas, forneço educação personalizada e monitoro seu progresso. Ideal para avaliações iniciais, acompanhamento e situações onde o deslocamento é desafiador.',
      image: 'https://images.pexels.com/photos/4064730/pexels-photo-4064730.jpeg?auto=compress&cs=tinysrgb&w=1600',
      benefits: [
        'Atendimento especializado em sua casa',
        'Economia de tempo e deslocamento',
        'Continuidade do tratamento à distância',
        'Ambiente privado e seguro',
        'Avaliação visual da técnica de exercícios',
        'Horários flexíveis'
      ],
      whatToExpect: 'Sua primeira consulta virtual (60-90 minutos) é dedicada a uma avaliação detalhada e orientação personalizada. Você recebe um plano de exercícios e autocuidado adaptado à sua rotina, com suporte contínuo para garantir resultados.',
      faqs: [
        {
          question: 'Quais problemas podem ser tratados virtualmente?',
          answer: 'Muitos aspectos do cuidado pélvico podem ser abordados virtualmente, incluindo avaliações iniciais, instrução de exercícios, educação sobre autocuidado e treinamento comportamental. Condições que requerem terapia manual eventualmente precisarão de atendimento presencial, mas a consulta virtual pode complementar o tratamento.'
        },
        {
          question: 'Como é garantida a privacidade?',
          answer: 'Uso plataformas seguras com criptografia ponta a ponta. As sessões nunca são gravadas sem seu consentimento, e toda documentação segue rigorosos padrões de confidencialidade. Recomendo um ambiente privado para as consultas.'
        },
        {
          question: 'Que equipamento preciso?',
          answer: 'Basta um dispositivo com câmera e microfone (computador, tablet ou celular), internet estável e um espaço de 2x2 metros para exercícios. Itens básicos como tapete de yoga podem ser úteis. Forneço orientações específicas antes da consulta.'
        }
      ]
    },
    'atendimento-domiciliar': {
      title: 'Fisioterapia Pélvica Domiciliar em Campinas',
      description: 'Atendimento especializado no conforto da sua casa. Ideal para quem busca comodidade, privacidade e resultados. Atendimento em Campinas e região.',
      longDescription: 'Levo o atendimento especializado até você, ideal para quem busca comodidade e privacidade sem sair de casa. Realizo avaliações, tratamentos e orientações de forma segura e acolhedora, adaptando o ambiente para garantir os melhores resultados. Perfeito para pacientes com mobilidade reduzida, pós-operatório, gestantes ou quem prefere o conforto do lar.',
      image: domicilioImg,
      benefits: [
        'Conforto e privacidade em casa',
        'Atendimento personalizado',
        'Ideal para mobilidade reduzida',
        'Continuidade do tratamento',
        'Maior segurança',
        'Horários flexíveis'
      ],
      whatToExpect: 'Sua primeira consulta domiciliar (60-90 minutos) é dedicada a uma avaliação completa e adaptação do tratamento ao seu espaço e necessidades. Meu objetivo é garantir conforto, segurança e resultados efetivos, com orientações detalhadas para seu autocuidado.',
      faqs: [
        {
          question: 'Quem pode se beneficiar do atendimento em casa?',
          answer: 'O atendimento domiciliar é ideal para pacientes com dificuldade de locomoção, pós-operatório, gestantes ou qualquer pessoa que prefira receber o cuidado em casa. Adapto o tratamento às suas necessidades específicas.'
        },
        {
          question: 'O que preciso preparar?',
          answer: 'Apenas um espaço reservado e confortável. Levo todos os materiais necessários e adapto o atendimento ao ambiente disponível, garantindo sua comodidade e segurança.'
        },
        {
          question: 'O atendimento em casa tem a mesma qualidade?',
          answer: 'Sim! O cuidado é idêntico ao do consultório, com a vantagem de ser realizado em um ambiente familiar e confortável para você. Mantenho os mesmos padrões de qualidade e resultados.'
        }
      ]
    }
  };
  
  // Type assertion for TypeScript
  const service = servicos[id as keyof typeof servicos];
  
  if (!service) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Serviço não encontrado</h1>
        <Link to="/servicos" className="text-blue-200 hover:text-white">
          Voltar para todos os serviços
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-sand-to-coral text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/servicos" className="inline-flex items-center text-terracota-100 hover:text-white mb-6">
              <ArrowLeft size={16} className="mr-1" /> Voltar para Todos os Serviços
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Seção de depoimentos removida */}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img 
                src={service.image} 
                alt={service.title + ' - Fisioterapia Pélvica em Campinas, consultório com tons terrosos aesthetic'} 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              
              <div className="mt-12">
                <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Benefícios</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-terracota-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <SectionTitle 
                subtitle="Cuidado Especializado" 
                title={service.title}
              />
              
              <div className="prose prose-lg max-w-none text-gray-600 mb-8">
                <p className="leading-relaxed">{service.description}</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">O que Esperar</h3>
                <div className="prose prose-lg max-w-none text-gray-600">
                  {Array.isArray(service.whatToExpect) ? (
                    <ul className="space-y-2">
                      {service.whatToExpect.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-terracotta mt-1 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-relaxed">{service.whatToExpect}</p>
                  )}
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes</h3>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-gray-800 mb-2">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-terracota-50 p-8 rounded-lg mb-12 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Receba Conteúdo Exclusivo</h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Semanalmente, envio dicas práticas de autocuidado, informações sobre saúde feminina e novidades sobre tratamentos. 
                Tudo para ajudar você a cuidar melhor da sua saúde pélvica, com conteúdo selecionado especialmente para mulheres.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-terracota-500 text-gray-700"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-terracota-600 text-white rounded-lg hover:bg-terracota-700 transition-colors font-medium"
                  >
                    Receber Conteúdo
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Seu e-mail está seguro. Você receberá apenas conteúdo relevante e pode cancelar quando quiser.
                </p>
              </form>
            </div>

            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Pronto para Começar?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Dê o primeiro passo em direção a uma melhor saúde pélvica. Agende uma consulta para discutir suas necessidades e desenvolver um plano de tratamento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Agendar Consulta
                </Button>
              </Link>
              <a 
                href="https://wa.link/32p5y9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  Contato via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;