import React, { useEffect } from "react";
// Ensure this path is correct based on your project structure.
// If FisioDomiciliarIdosos.tsx is in 'src/pages/' and profile.webp is in 'src/assets/',
// then '../assets/profile.webp' is correct.
import profileImg from '../assets/profile.webp';

export default function FisioDomiciliarIdosos() {
  // This useEffect hook attempts to hide a floating button with id 'botao-avaliacao-flutuante'
  // when the component mounts and show it again when the component unmounts.
  // Note: This is direct DOM manipulation and might be better handled via React state
  // if 'botao-avaliacao-flutuante' is part of the React application.
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

  return (
    <div>
      {/* Hero Section */}
      {/* This section serves as the main banner of the page. */}
      <section className="relative pt-32 pb-16 bg-terracota-800 text-white"> {/* Assuming terracota-800 is your primary dark terracotta color */}
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
          <p className="text-lg text-[#555] mb-8">
            Atendimento de fisioterapia domiciliar especializado para idosos em Campinas e região.
          </p>

          {/* "Para quem é indicado?" section with updated colors */}
          <div className="bg-[#FAE5DE] rounded-2xl p-6 mb-10 shadow-md"> {/* Light terracotta background */}
            <h2 className="text-2xl font-semibold mb-4 text-[#9A6A59]"> {/* Darker terracotta text for title */}
              Para quem é indicado?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#9A6A59]"> {/* Darker terracotta text for list items */}
              <li>Idosos com dificuldade para andar, levantar ou manter o equilíbrio</li>
              <li>Histórico de quedas ou medo de cair</li>
              <li>Recuperação pós-cirurgia ou internação</li>
              <li>Doenças como Parkinson, Alzheimer ou AVC</li>
              <li>Dores ou limitações nas atividades do dia a dia</li>
              <li>Necessidade de fortalecimento muscular e coordenação</li>
              <li>Isolamento social ou necessidade de atenção contínua</li>
            </ul>
          </div>

          {/* "Por que é importante?" section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#3A3A3A]">
              Por que é importante?
            </h2>
            <p className="text-[#555] mb-4">
              Com o envelhecimento, é comum haver perda de força, equilíbrio e agilidade. A fisioterapia domiciliar ajuda a prevenir quedas, melhorar a mobilidade e manter o idoso mais independente e ativo dentro da sua própria casa — com toda a atenção que ele merece.
            </p>
          </div>

          {/* NEW SECTION: Benefícios Detalhados */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#3A3A3A]">
              Benefícios Detalhados da Fisioterapia Domiciliar
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-[#555]">
              <li>
                <strong>Conforto e Segurança do Lar:</strong> Tratamento no ambiente familiar, reduzindo o estresse e os riscos de deslocamento.
              </li>
              <li>
                <strong>Atendimento Personalizado:</strong> Foco total nas necessidades individuais do paciente, com um plano de tratamento exclusivo.
              </li>
              <li>
                <strong>Prevenção de Quedas:</strong> Exercícios específicos para fortalecimento e equilíbrio, adaptados ao ambiente doméstico.
              </li>
              <li>
                <strong>Recuperação Acelerada:</strong> Ideal para pós-operatórios ou após longos períodos de internação, promovendo uma reabilitação mais rápida.
              </li>
              <li>
                <strong>Maior Adesão ao Tratamento:</strong> A comodidade do atendimento em casa facilita a continuidade e o engajamento do paciente.
              </li>
              <li>
                <strong>Envolvimento Familiar:</strong> Permite que familiares acompanhem de perto e participem ativamente do processo de recuperação.
              </li>
            </ul>
          </div>

          {/* NEW SECTION: Como Funciona uma Sessão Típica? */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#3A3A3A]">
              Como Funciona uma Sessão Típica?
            </h2>
            <p className="text-[#555] mb-2">
              Cada sessão é cuidadosamente planejada para atender às suas necessidades específicas, mas geralmente seguimos alguns passos:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-[#555]">
              <li>
                <strong>Avaliação Inicial Completa:</strong> Na primeira consulta, realizo uma anamnese detalhada, avalio sua mobilidade, força, equilíbrio e identifico suas principais queixas e objetivos.
              </li>
              <li>
                <strong>Plano de Tratamento Individualizado:</strong> Com base na avaliação, elaboramos juntos um plano de tratamento com metas realistas e focadas na sua melhora funcional.
              </li>
              <li>
                <strong>Exercícios Terapêuticos:</strong> Realizamos exercícios de fortalecimento, alongamento, equilíbrio, coordenação e treino de marcha, utilizando técnicas e recursos adequados.
              </li>
              <li>
                <strong>Orientações e Adaptações:</strong> Forneço orientações para o dia a dia e sugestões de adaptações no ambiente doméstico para maior segurança e independência.
              </li>
              <li>
                <strong>Reavaliação Contínua:</strong> Acompanho sua evolução de perto, ajustando o plano de tratamento conforme necessário para garantir os melhores resultados.
              </li>
            </ol>
            <p className="text-[#555] mt-4">
              As sessões têm duração aproximada de 50 minutos a 1 hora, respeitando sempre o seu ritmo e disposição.
            </p>
          </div>

          {/* NEW SECTION: Sinais de Alerta */}
          <div className="bg-[#F1F5F9] rounded-2xl p-6 mb-10 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#3A3A3A]">
              Sinais de Alerta: Quando Procurar Fisioterapia para Idosos?
            </h2>
            <p className="text-[#555] mb-4">
              Fique atento a alguns sinais que podem indicar a necessidade de acompanhamento fisioterapêutico para você ou seu familiar idoso:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#555]">
              <li>Dificuldade crescente para levantar da cama ou de cadeiras.</li>
              <li>Perda de equilíbrio frequente ou sensação de tontura ao caminhar.</li>
              <li>Medo de cair, levando à redução de atividades e isolamento.</li>
              <li>Dores persistentes nas articulações, costas ou músculos.</li>
              <li>Lentidão excessiva para realizar tarefas simples do dia a dia.</li>
              <li>Após uma queda, cirurgia, AVC ou período de imobilização.</li>
              <li>Observação de que o idoso está andando com passos mais curtos ou arrastando os pés.</li>
              <li>Cansaço fácil ao realizar pequenas caminhadas ou atividades domésticas.</li>
            </ul>
            <p className="text-[#555] mt-4">
              Identificar esses sinais precocemente e buscar ajuda profissional pode fazer uma grande diferença na manutenção da independência e qualidade de vida.
            </p>
          </div>

          {/* "Quem cuida?" section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#3A3A3A]">
              Quem cuida?
            </h2>
            <p className="text-[#555]">
              Meu nome é Jéssica Godoi, sou fisioterapeuta especializada em saúde e funcionalidade do corpo ao longo das fases da vida. Tenho experiência com idosos e realizo atendimentos domiciliares com acolhimento, escuta e respeito ao tempo e às necessidades de cada pessoa.
            </p>
          </div>

          {/* "Atendimento em:" section */}
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-[#3A3A3A]">
              Atendimento em:
            </h2>
            <p className="text-[#555]">Campinas – Cambuí e bairros próximos</p>
          </div>

          {/* Call to Action Button section with updated colors and text */}
          <div className="text-center mt-10">
            <a
              href="https://wa.link/32p5y9" // WhatsApp link
              target="_blank" // Opens link in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
              // Updated button styling: terracotta background, white text, and hover effect
              className="inline-block bg-[#E87A5B] text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-[#D46A4B] transition" 
            >
              Descubra como a fisioterapia pode ajudar: Fale conosco {/* Updated CTA text */}
            </a>
          </div>
        </div>

        {/* Right column: Profile Image */}
        <div className="space-y-6">
          <img
            src={profileImg} // Source of the image, imported from assets
            alt="Foto de perfil da Dra. Jéssica Godoi" // Alt text for accessibility
            className="object-cover w-full h-auto rounded-lg shadow-md" // Styling for the image
          />
        </div>
      </div>
    </div>
  );
}
