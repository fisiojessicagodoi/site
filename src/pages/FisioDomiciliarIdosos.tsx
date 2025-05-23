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
              <li>Dores ou limitações nas atividades do dia a dia</li>
              <li>Necessidade de fortalecimento muscular e coordenação</li>
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
