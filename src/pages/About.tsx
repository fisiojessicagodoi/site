import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { CheckCircle2, Award, GraduationCap, Heart, Clock } from 'lucide-react';
import jessicaPerfilImg from '../assets/jessica-perfil.jpg.jpg';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const qualifications = [
    'Mestrado em Fisioterapia, Universidade de Ciências da Saúde, 2015',
    'Certificação em Reabilitação do Assoalho Pélvico, 2016',
    'Aperfeiçoamento em Fisioterapia na Saúde da Mulher, 2018',
    'Certificada em Cuidados Pré e Pós-Natal, 2019',
    'Atualização em Ciência e Manejo da Dor, 2020-presente'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-sand-to-coral text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Sobre a Dra. Jéssica Godoi – Fisioterapia Pélvica em Campinas</h1>
            <p className="text-lg text-terracota-50 leading-relaxed font-medium">
              Cuidado especializado em saúde pélvica feminina, com ciência, acolhimento e resultados. Atendimento humanizado para mulheres que buscam qualidade de vida e bem-estar.
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Prompt para IA: Mulher jovem, profissional de saúde, sorrindo, consultório moderno, tons terrosos e quentes, luz suave, estética clean, fundo desfocado, estilo fotográfico realista, alta resolução. */}
              <img 
                src={jessicaPerfilImg} 
                alt="Foto de perfil da Dra. Jéssica Godoi" 
                className="rounded-lg shadow-xl object-cover w-full max-w-md mx-auto h-auto border-4 border-terracota-200"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs border border-terracota-200">
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-terracota-600 h-10 w-10" />
                </div>
                <p className="font-serif text-lg font-semibold text-center text-gray-800 mb-1">
                  Fisioterapeuta Especializada
                </p>
              </div>
            </div>
            
            <div>
              <SectionTitle 
                subtitle="Minha História" 
                title="Dedicada à Saúde Pélvica Feminina em Campinas"
              />
              
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                Desde cedo, fui inspirada pelo cuidado feminino e pela busca por saúde integral. Minha trajetória une pesquisa científica, atendimento clínico e atualização constante para oferecer fisioterapia pélvica baseada em evidências, com foco em empoderamento e acolhimento. Atuo em Campinas e região, ajudando mulheres a superarem dores, incontinência, prolapso e disfunções sexuais com respeito e privacidade.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                Meu compromisso é tratar cada paciente de forma única, promovendo autonomia, bem-estar e qualidade de vida. Aqui, você encontra um espaço seguro para falar sobre saúde íntima, receber orientação clara e conquistar resultados duradouros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            subtitle="Minhas Qualificações" 
            title="Formação & Certificações em Fisioterapia Pélvica"
            centered 
          />
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4 mt-8">
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-terracota-600">
                <CheckCircle2 className="text-terracota-600 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">Graduada em Fisioterapia pela UFSCar</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-terracota-600">
                <CheckCircle2 className="text-terracota-600 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">Especialista em Saúde da Mulher pelo CAISM-UNICAMP</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-terracota-600">
                <CheckCircle2 className="text-terracota-600 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">Certificação em Reabilitação do Assoalho Pélvico</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-terracota-600">
                <CheckCircle2 className="text-terracota-600 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">Pesquisadora em saúde da mulher desde 2019</span>
              </li>
              <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-terracota-600">
                <CheckCircle2 className="text-terracota-600 mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-gray-800 font-medium">Publicações científicas nacionais e internacionais</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scientific Publications Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            subtitle="Produção Científica" 
            title="Publicações em Saúde Pélvica"
            centered 
          />
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-gray-800 mb-8 text-base md:text-lg font-medium">
              Meu trabalho é fundamentado em ciência. Conheça algumas publicações que contribuem para o avanço da fisioterapia pélvica e saúde da mulher.
            </p>
            <ul className="space-y-6">
              <li className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-terracota-600">
                <span className="block text-xs text-gray-500 mb-1 font-semibold uppercase">2025 • Mais recente</span>
                <Link to="/blog/treinamento-assoalho-pelvico" className="text-terracota-700 font-bold hover:underline text-base md:text-lg">
                  Adherence and self-efficacy of pregnant women to perform pelvic floor muscle training through a health education application: a feasibility study
                </Link>
                <div className="text-gray-700 text-sm mt-1">
                  Angélico C, Dos Santos Sousa AJ, <b>de Godoi Fernandes JG</b>, da Costa Vilela I, Pereira Baldon VS, Driusso P<br/>
                  <span className="italic">Mhealth</span>. 2025 Mar 14;11:17.
                </div>
                <p className="mt-2 text-gray-800 text-sm">
                  Estudo sobre adesão e autoconfiança de gestantes ao realizar exercícios para o assoalho pélvico usando um app educativo. Resultados práticos para quem busca saúde feminina baseada em tecnologia e ciência.
                </p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-terracota-600">
                <span className="block text-xs text-gray-500 mb-1 font-semibold uppercase">2023</span>
                <Link to="/blog/breathing-pelvic-floor" className="text-terracota-700 font-bold hover:underline text-base md:text-lg">
                  Development and validation of a prototype multimedia application to enhance health education on the pelvic floor muscles among pregnant and puerperal women in Brazil
                </Link>
                <div className="text-gray-600 text-sm mt-1">
                  Ana Jéssica Dos Santos Sousa, <b>Jessica Gabriela de Godoi Fernandes</b>, Carolina Angélico, Patricia Driusso<br/>
                  <span className="italic">Mhealth</span>. 2023 Apr 10:9:14.
                </div>
                <p className="mt-2 text-gray-700 text-sm">
                  Pesquisa que resultou em um aplicativo inovador para educação em saúde do assoalho pélvico, ampliando o acesso à informação de qualidade para gestantes e puérperas.
                </p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-terracota-600">
                <span className="block text-xs text-gray-500 mb-1 font-semibold uppercase">2021</span>
                <Link to="/blog/fisioterapia-pelvica-campinas" className="text-terracota-700 font-bold hover:underline text-base md:text-lg">
                  Reliability of the PERFECT scheme assessed by unidigital and bidigital vaginal palpation
                </Link>
                <div className="text-gray-600 text-sm mt-1">
                  Jordana Barbosa da Silva, <b>Jéssica Gabriela de Godoi Fernandes</b>, Bruna Raquel Caracciolo, Sara Campana Zanello, Tatiana de Oliveira Sato, Patricia Driusso<br/>
                  <span className="italic">Int Urogynecol J</span>. 2021 Dec;32(12):3199-3207.
                </div>
                <p className="mt-2 text-gray-700 text-sm">
                  Estudo sobre métodos de avaliação do assoalho pélvico, referência para profissionais da área e utilizado em protocolos internacionais.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                subtitle="Minha Abordagem" 
                title="Filosofia de Tratamento"
              />
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Minha filosofia de atendimento se baseia em três pilares: cuidado personalizado, educação e empoderamento. Acredito que cada jornada é única e exige uma abordagem individualizada para atender necessidades e objetivos específicos.
              </p>
              
              <div className="space-y-6 mt-8">
                <div className="bg-terracota-100 p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-bold text-terracota-800 mb-3">Cuidado Personalizado</h3>
                  <p className="text-gray-700">
                    Nenhum paciente é igual ao outro, por isso crio planos de tratamento sob medida para sua condição, histórico e estilo de vida. Dedico tempo para entender suas particularidades e adaptar o tratamento conforme necessário.
                  </p>
                </div>
                
                <div className="bg-terracota-100 p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-bold text-terracota-900 mb-3">Educação do Paciente</h3>
                  <p className="text-gray-700">
                    Conhecimento é poder. Faço questão de educar meus pacientes sobre suas condições e tratamentos, explicando o "porquê" de cada exercício e técnica. Esse entendimento favorece a adesão e melhores resultados.
                  </p>
                </div>
                
                <div className="bg-terracota-100 p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-bold text-terracota-800 mb-3">Autonomia a Longo Prazo</h3>
                  <p className="text-gray-700">
                    Meu objetivo não é apenas tratar sintomas, mas proporcionar autonomia para que você cuide da sua saúde pélvica de forma independente. Foco em estratégias sustentáveis, que possam ser incorporadas no seu dia a dia, promovendo resultados duradouros e autoconfiança no cuidado com o próprio corpo.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/ai-consultorio-pelvico.jpg" 
                alt="Consultório de fisioterapia pélvica aesthetic, tons terrosos, luz natural, ambiente acolhedor" 
                className="rounded-lg shadow-md w-full h-auto object-cover border-4 border-terracota-200"
              />
              <img 
                src="https://images.pexels.com/photos/6551844/pexels-photo-6551844.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Treatment session" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/6551793/pexels-photo-6551793.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Patient exercising" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/6551833/pexels-photo-6551833.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Educational materials" 
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;