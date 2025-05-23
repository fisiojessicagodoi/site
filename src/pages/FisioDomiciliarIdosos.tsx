import React, { useEffect } from "react";
// Ensure this path is correct based on your project structure.
import profileImg from '../assets/profile.webp';
import confortoLarImg from '../assets/fisioterapia-idoso-1.webp'; // Nova importação para a imagem de conforto do lar
import { Home, UserCheck, ShieldCheck, TrendingUp, ThumbsUp, Users, ClipboardList, Target, Bike, Lightbulb, Repeat, AlertTriangle, Accessibility, Activity, Stethoscope, Clock, FileWarning, Footprints, Wind, HeartPulse, MapPin } from 'lucide-react';

export default function FisioDomiciliarIdosos() {
  // This useEffect hook attempts to hide a floating button with id 'botao-avaliacao-flutuante'
  // when the component mounts and show it again when the component unmounts.
  useEffect(() => {
    const botaoFlutuante = document.querySelector("#botao-avaliacao-flutuante");
    if (botaoFlutuante) {
      botaoFlutuante.style.display = "none";
    }
    return () => {
      if (botaoFlutuante) {
        botaoFlutuante.style.display = ""; // Reset display when component unmounts
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  // Helper component for list items with icons
  const ListItemWithIcon = ({ icon: Icon, text, boldText }) => (
    <li className="flex items-start space-x-3">
      <Icon className="flex-shrink-0 h-6 w-6 text-[#E87A5B]" aria-hidden="true" />
      <span>{boldText && <strong>{boldText}:</strong>} {text}</span>
    </li>
  );

  return (
    <div className="bg-white"> {/* Added a default background for the whole page */}
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-terracota-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Fisioterapia Domiciliar para Idosos</h1>
            <p className="text-lg text-white leading-relaxed font-medium">
              Mais segurança e qualidade de vida para quem você ama, sem sair de casa.
            </p>
          </div>
        </div>
      </section>

      {/* Main content grid */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left column: Text content */}
        <div className="md:col-span-2">
          <p className="text-lg text-[#555] mb-12 text-center md:text-left"> {/* Increased bottom margin and centered on mobile */}
            Atendimento de fisioterapia domiciliar especializado para idosos em Campinas e região.
          </p>

          {/* "Para quem é indicado?" section */}
          <div className="bg-[#FAE5DE] rounded-2xl p-6 md:p-8 mb-12 shadow-lg"> {/* Increased padding and shadow */}
            <h2 className="text-3xl font-semibold mb-6 text-[#9A6A59] flex items-center">
              Para quem é indicado?
            </h2>
            <ul className="space-y-3 text-[#9A6A59]">
              <ListItemWithIcon icon={Accessibility} text="Idosos com dificuldade para andar, levantar ou manter o equilíbrio" />
              <ListItemWithIcon icon={AlertTriangle} text="Histórico de quedas ou medo de cair" />
              <ListItemWithIcon icon={Stethoscope} text="Dores ou limitações nas atividades do dia a dia" />
              <ListItemWithIcon icon={Bike} text="Necessidade de fortalecimento muscular e coordenação" />
            </ul>
          </div>

          {/* "Por que é importante?" section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-[#3A3A3A]">
              Por que é importante?
            </h2>
            <p className="text-lg text-[#555] leading-relaxed mb-4"> {/* Increased font size and line height */}
              Com o envelhecimento, é comum haver perda de força, equilíbrio e agilidade. A fisioterapia domiciliar ajuda a prevenir quedas, melhorar a mobilidade e manter o idoso mais independente e ativo dentro da sua própria casa — com toda a atenção que ele merece.
            </p>
          </div>

          {/* SECTION: Benefícios Detalhados */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-[#3A3A3A]">
              Benefícios Detalhados da Fisioterapia Domiciliar
            </h2>
            <div className="md:flex md:space-x-6 items-center">
              <div className="md:w-2/3">
                <ul className="space-y-4 text-[#555]">
                  <ListItemWithIcon icon={Home} boldText="Conforto e Segurança do Lar" text="Tratamento no ambiente familiar, reduzindo o estresse e os riscos de deslocamento." />
                  <ListItemWithIcon icon={UserCheck} boldText="Atendimento Personalizado" text="Foco total nas necessidades individuais do paciente, com um plano de tratamento exclusivo." />
                  <ListItemWithIcon icon={ShieldCheck} boldText="Prevenção de Quedas" text="Exercícios específicos para fortalecimento e equilíbrio, adaptados ao ambiente doméstico." />
                  <ListItemWithIcon icon={TrendingUp} boldText="Recuperação Acelerada" text="Ideal para pós-operatórios ou após longos períodos de internação, promovendo uma reabilitação mais rápida." />
                  <ListItemWithIcon icon={ThumbsUp} boldText="Maior Adesão ao Tratamento" text="A comodidade do atendimento em casa facilita a continuidade e o engajamento do paciente." />
                  <ListItemWithIcon icon={Users} boldText="Envolvimento Familiar" text="Permite que familiares acompanhem de perto e participem ativamente do processo de recuperação." />
                </ul>
              </div>
              <div className="md:w-1/3 mt-6 md:mt-0">
                <img 
                  src={confortoLarImg} // Imagem atualizada aqui
                  alt="Fisioterapeuta atendendo idoso em casa, demonstrando conforto e segurança" // Alt text atualizado
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x400/EEEEEE/777777?text=Imagem+Indisponível"; }}
                />
                 <p className="text-sm text-gray-500 mt-2 text-center">Fisioterapia no conforto e segurança do seu lar.</p>
              </div>
            </div>
          </div>

          {/* SECTION: Como Funciona uma Sessão Típica? */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-[#3A3A3A]">
              Como Funciona uma Sessão Típica?
            </h2>
            <p className="text-lg text-[#555] leading-relaxed mb-4">
              Cada sessão é cuidadosamente planejada para atender às suas necessidades específicas, mas geralmente seguimos alguns passos:
            </p>
            <ol className="space-y-4 text-[#555]">
              <ListItemWithIcon icon={ClipboardList} boldText="Avaliação Inicial Completa" text="Na primeira consulta, realizo uma anamnese detalhada, avalio sua mobilidade, força, equilíbrio e identifico suas principais queixas e objetivos." />
              <ListItemWithIcon icon={Target} boldText="Plano de Tratamento Individualizado" text="Com base na avaliação, elaboramos juntos um plano de tratamento com metas realistas e focadas na sua melhora funcional." />
              <ListItemWithIcon icon={Bike} boldText="Exercícios Terapêuticos" text="Realizamos exercícios de fortalecimento, alongamento, equilíbrio, coordenação e treino de marcha, utilizando técnicas e recursos adequados." />
              <ListItemWithIcon icon={Lightbulb} boldText="Orientações e Adaptações" text="Forneço orientações para o dia a dia e sugestões de adaptações no ambiente doméstico para maior segurança e independência." />
              <ListItemWithIcon icon={Repeat} boldText="Reavaliação Contínua" text="Acompanho sua evolução de perto, ajustando o plano de tratamento conforme necessário para garantir os melhores resultados." />
            </ol>
            <p className="text-lg text-[#555] leading-relaxed mt-6 bg-terracota-800 bg-opacity-10 p-4 rounded-lg"> {/* Light terracotta background for emphasis */}
              As sessões têm duração aproximada de <strong>50 minutos a 1 hora</strong>, respeitando sempre o seu ritmo e disposição.
            </p>
          </div>

          {/* SECTION: Sinais de Alerta */}
          <div className="bg-[#F1F5F9] rounded-2xl p-6 md:p-8 mb-12 shadow-lg"> {/* Increased padding and shadow */}
            <h2 className="text-3xl font-semibold mb-6 text-[#3A3A3A] flex items-center">
              <AlertTriangle className="h-8 w-8 mr-3 text-red-500" /> Sinais de Alerta: Quando Procurar Fisioterapia?
            </h2>
            <p className="text-lg text-[#555] leading-relaxed mb-4">
              Fique atento a alguns sinais que podem indicar a necessidade de acompanhamento fisioterapêutico para você ou seu familiar idoso:
            </p>
            <ul className="space-y-3 text-[#555]">
              <ListItemWithIcon icon={Accessibility} text="Dificuldade crescente para levantar da cama ou de cadeiras." />
              <ListItemWithIcon icon={Wind} text="Perda de equilíbrio frequente ou sensação de tontura ao caminhar." />
              <ListItemWithIcon icon={AlertTriangle} text="Medo de cair, levando à redução de atividades e isolamento." />
              <ListItemWithIcon icon={Stethoscope} text="Dores persistentes nas articulações, costas ou músculos." />
              <ListItemWithIcon icon={Clock} text="Lentidão excessiva para realizar tarefas simples do dia a dia." />
              <ListItemWithIcon icon={FileWarning} text="Após uma queda, cirurgia, AVC ou período de imobilização." />
              <ListItemWithIcon icon={Footprints} text="Observação de que o idoso está andando com passos mais curtos ou arrastando os pés." />
              <ListItemWithIcon icon={HeartPulse} text="Cansaço fácil ao realizar pequenas caminhadas ou atividades domésticas." />
            </ul>
            <p className="text-lg text-[#555] leading-relaxed mt-6">
              Identificar esses sinais precocemente e buscar ajuda profissional pode fazer uma grande diferença na manutenção da independência e qualidade de vida.
            </p>
          </div>

          {/* "Quem cuida?" section */}
          <div className="mb-12 text-center md:text-left"> {/* Centered on mobile */}
            <h2 className="text-3xl font-semibold mb-6 text-[#3A3A3A]">
              Quem Cuida?
            </h2>
            <p className="text-lg text-[#555] leading-relaxed">
              Meu nome é Jéssica Godoi, sou fisioterapeuta especializada em saúde em saúde da mulher ao longo das fases da vida. Tenho experiência com idosos e realizo atendimentos domiciliares com acolhimento, escuta e respeito ao tempo e às necessidades de cada pessoa.
            </p>
          </div>

          {/* "Atendimento em:" section */}
          <div className="mb-12 text-center md:text-left"> {/* Centered on mobile */}
            <h2 className="text-3xl font-semibold mb-6 text-[#3A3A3A] flex items-center justify-center md:justify-start">
              <MapPin className="h-8 w-8 mr-3 text-[#E87A5B]" /> Atendimento em:
            </h2>
            <p className="text-xl text-[#555] leading-relaxed font-medium"> {/* Increased font size and weight */}
              Campinas – Cambuí e Sousas
            </p>
          </div>

          {/* Call to Action Button section */}
          <div className="text-center mt-10">
            <a
              href="https://wa.link/32p5y9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-[#E87A5B] text-white text-xl px-8 py-4 rounded-full shadow-lg hover:bg-[#D46A4B] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E87A5B]" 
            >
              Descubra como a fisioterapia pode ajudar: Fale comigo
            </a>
          </div>
        </div>

        {/* Right column: Profile Image */}
        <div className="space-y-6 md:sticky md:top-24"> {/* Made profile image sticky on larger screens */}
          <img
            src={profileImg} 
            alt="Foto de perfil da Dra. Jéssica Godoi" 
            className="object-cover w-full h-auto rounded-lg shadow-xl" 
          />
           <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-[#9A6A59] mb-3">Dra. Jéssica Godoi</h3>
            <p className="text-sm text-[#555] mb-1"><strong className="text-[#9A6A59]">Especialidade:</strong> Saúde da Mulher (Unicamp)</p>
            <p className="text-sm text-[#555] mb-1"><strong className="text-[#9A6A59]">Foco:</strong> Reabilitação e qualidade de vida para idosos.</p>
            <p className="text-sm text-[#555]"><strong className="text-[#9A6A59]">Abordagem:</strong> Humanizada, individual e no conforto do lar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
