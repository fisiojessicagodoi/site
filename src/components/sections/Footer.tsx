import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-terracota-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1 - Logo e Redes Sociais */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/logo-white.png" 
                alt="Logo Jéssica Godoi" 
                className="h-12 w-auto"
                width={48}
                height={48}
              />
            </Link>
            <p className="text-white/80 mb-6">
              Cuidando da sua saúde íntima com profissionalismo e acolhimento.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/fisiojessicagodoi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-terracota-100 transition-colors"
                aria-label="Siga Jéssica Godoi no Instagram"
              >
                <FaInstagram className="w-6 h-6" aria-hidden="true" />
                <span className="sr-only">Siga Jéssica Godoi no Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/fisiojessicagodoi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-terracota-100 transition-colors"
                aria-label="Siga Jéssica Godoi no Facebook"
              >
                <FaFacebook className="w-6 h-6" aria-hidden="true" />
                <span className="sr-only">Siga Jéssica Godoi no Facebook</span>
              </a>
              <a
                href="https://linkedin.com/in/jéssicaggodoi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-terracota-100 transition-colors"
                aria-label="Conecte-se com Jéssica Godoi no LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" aria-hidden="true" />
                <span className="sr-only">Conecte-se com Jéssica Godoi no LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-white/80 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-white/80">
                <a 
                  href="https://wa.me/5519999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Enviar mensagem no WhatsApp"
                >
                  (19) 99999-9999
                  <span className="sr-only"> - Enviar mensagem no WhatsApp</span>
                </a>
              </li>
              <li className="text-white/80">
                <a 
                  href="mailto:contato@jessicagodoi.com.br"
                  className="hover:text-white transition-colors"
                  aria-label="Enviar e-mail para contato@jessicagodoi.com.br"
                >
                  contato@jessicagodoi.com.br
                  <span className="sr-only"> - Enviar e-mail</span>
                </a>
              </li>
              <li className="text-white/80">
                Campinas, SP
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Jéssica Godoi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 