import React, { useEffect } from "react";

export default function FisioDomiciliarIdosos() {
  useEffect(() => {
    const botaoFlutuante = document.querySelector("#botao-avaliacao-flutuante");
    if (botaoFlutuante) botaoFlutuante.style.display = "none";
    return () => {
      if (botaoFlutuante) botaoFlutuante.style.display = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#3A3A3A] font-sans">
      {/* Hero visual para contraste e espaçamento */}
      <div className="w-full h-48 bg-gradient-to-r from-[#f1f5f9] to-[#e2e8f0] flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] px-4 text-center">
          Mais segurança e qualidade de vida para quem você ama, sem sair de casa.
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Conteúdo principal */}
        <div className="md:col-span-2">
          <p className="text-lg text-[#555] mb-8">
            Atendimento de fisioterapia domiciliar especializado para idosos em Campinas e região.
          </p>

          <div className="bg-[#F1F5F9] rounded-2xl p-6 mb-10 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#3A3A3A]">
              Para quem é indicado?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#3A3A3A]">
              <li>Idosos com dificuldade para andar, levantar ou manter o equilíbrio</li>
              <li>Histórico de quedas ou medo de cair</li>
              <li>Recuperação pós-cirurgia ou internação</li>
              <li>Doenças como Parkinson, Alzheimer ou AVC</li>
              <li>Dores ou limitações nas atividades do dia a dia</li>
              <li>Necessidade de fortalecimento muscular e coordenação</li>
              <li>Isolamento social ou necessidade de atenção contínua</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#3A3A3A]">
              Por que é importante?
            </h2>
            <p className="text-[#555] mb-4">
              Com o envelhecimento, é comum haver perda de força, equilíbrio e agilidade. A fisioterapia domiciliar ajuda a prevenir quedas, melhorar a mobilidade e manter o idoso mais independente e ativo dentro da sua própria casa — com toda a atenção que ele merece.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#3A3A3A]">
              Quem cuida?
            </h2>
            <p className="text-[#555]">
              Meu nome é Jéssica Godoi, sou fisioterapeuta especializada em saúde e funcionalidade do corpo ao longo das fases da vida. Tenho experiência com idosos e realizo atendimentos domiciliares com acolhimento, escuta e respeito ao tempo e às necessidades de cada pessoa.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-[#3A3A3A]">
              Atendimento em:
            </h2>
            <p className="text-[#555]">Campinas – Cambuí e bairros próximos</p>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://wa.me/55SEUNUMERO?text=Olá%2C+gostaria+de+agendar+uma+avaliação+de+fisioterapia+domiciliar+para+idosos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#3A3A3A] text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-[#2A2A2A] transition"
            >
              Agendar uma avaliação pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Lateral direita com imagens */}
        <div className="space-y-6">
          <img
            src="/src/assets/profile.webp"
            alt="Jéssica Godoi"
            className="w-full rounded-2xl shadow-md"

          />
        </div>
      </div>
    </div>
  );
}
