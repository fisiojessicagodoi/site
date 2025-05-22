import React from "react";

export default function FisioDomiciliarIdosos() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2B4C7E] font-sans pt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Conteúdo principal */}
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B4C7E] mb-4">
            Mais segurança e qualidade de vida para quem você ama, sem sair de casa.
          </h1>
          <p className="text-lg text-[#3E556E] mb-8">
            Atendimento de fisioterapia domiciliar especializado para idosos em Campinas e região.
          </p>

          <div className="bg-[#D0EBE6] rounded-2xl p-6 mb-10 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#2B4C7E]">
              Para quem é indicado?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#2B4C7E]">
              <li>Idosos com dificuldade para andar, levantar ou manter o equilíbrio</li>
              <li>Histórico de quedas ou medo de cair</li>
              <li>Dores ou limitações nas atividades do dia a dia</li>
              <li>Necessidade de fortalecimento muscular e coordenação</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#2B4C7E]">
              Por que é importante?
            </h2>
            <p className="text-[#3E556E] mb-4">
              Com o envelhecimento, é comum haver perda de força, equilíbrio e agilidade. A fisioterapia domiciliar ajuda a prevenir quedas, melhorar a mobilidade e manter o idoso mais independente e ativo dentro da sua própria casa — com toda a atenção que ele merece.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-[#2B4C7E]">
              Quem cuida?
            </h2>
            <p className="text-[#3E556E]">
              Meu nome é Jéssica Godoi, sou fisioterapeuta especializada em saúde e funcionalidade do corpo ao longo das fases da vida. Tenho experiência com idosos e realizo atendimentos domiciliares com acolhimento, escuta e respeito ao tempo e às necessidades de cada pessoa.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-[#2B4C7E]">
              Atendimento em:
            </h2>
            <p className="text-[#3E556E]">Campinas – Cambuí e Sousas</p>
          </div>

          <div className="text-center mt-10">
            <a
              href="https://wa.me/55SEUNUMERO?text=Olá%2C+gostaria+de+agendar+uma+avaliação+de+fisioterapia+domiciliar+para+idosos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2B4C7E] text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-[#244166] transition"
            >
              Agendar uma avaliação pelo WhatsApp
            </a>
          </div>
        </div>

        {/* Lateral direita com imagens */}
        <div className="space-y-6">
          <img
            src="/src/assets/profile.webp" // Substitua pelo caminho correto da sua foto
            alt="Jéssica Godoi"
            className="w-full rounded-2xl shadow-md"
          />

          <img
            src="/src/assets/fisio-idoso-1.jpg" // Adicione imagens ilustrativas aqui
            alt="Fisioterapia com idoso"
            className="w-full rounded-2xl shadow-md"
          />

          <img
            src="/src/assets/fisio-idoso-2.jpg"
            alt="Idoso recebendo cuidados"
            className="w-full rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
