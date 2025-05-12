import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-terracota-800 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo color="white" />
              <span className="ml-2 font-serif font-bold text-xl">Jéssica Godoi</span>
            </div>
            <p className="text-terracota-100 mt-4 text-sm leading-relaxed">
              Fisioterapia pélvica especializada, focada em melhorar sua qualidade de vida através de tratamentos baseados em evidências, educação e planos de cuidado personalizados.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/fisiojessicagodoi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-terracota-100 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/fisiojessicagodoi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-terracota-100 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com/in/jéssicaggodoi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-terracota-100 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-terracota-100 hover:text-white transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/about" className="text-terracota-100 hover:text-white transition-colors">Sobre</Link>
              </li>
              <li>
                <Link to="/services" className="text-terracota-100 hover:text-white transition-colors">Serviços</Link>
              </li>
              <li>
                <Link to="/blog" className="text-terracota-100 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-terracota-100 hover:text-white transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/dor-pelvica" className="text-terracota-100 hover:text-white transition-colors">Dor Pélvica</Link>
              </li>
              <li>
                <Link to="/services/incontinencia" className="text-terracota-100 hover:text-white transition-colors">Incontinência Urinária e Fecal</Link>
              </li>
              <li>
                <Link to="/services/prolapso-pelvico" className="text-terracota-100 hover:text-white transition-colors">Prolapso de Órgãos Pélvicos</Link>
              </li>
              <li>
                <Link to="/services/disfuncao-sexual" className="text-terracota-100 hover:text-white transition-colors">Disfunções Sexuais Femininas</Link>
              </li>
              <li>
                <Link to="/services/atendimento-domiciliar" className="text-terracota-100 hover:text-white transition-colors">Atendimento Domiciliar</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-terracota-700" />
                <span className="text-terracota-100">Rua Doutor Souza Lima, 139 - Cambuí, Campinas/SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-terracota-700" />
                <a href="tel:+5519996229571" className="text-terracota-100 hover:text-white transition-colors">(19) 99622-9571</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-terracota-700" />
                <a href="mailto:fisiojessicagodoi@gmail.com" className="text-terracota-100 hover:text-white transition-colors">fisiojessicagodoi@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2 flex-shrink-0 text-terracota-700" />
                <span className="text-terracota-100">Segunda a Sexta: 8h às 20h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-terracota-800 mt-10 pt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-terracota-700 text-sm">© {new Date().getFullYear()} Jéssica Godoi. Todos direitos reservados.</p>
          <div className="mt-3 md:mt-0">
            <Link to="/privacy-policy" className="text-terracota-700 text-sm hover:text-white transition-colors mr-4">Política de Privacidade</Link>
            <Link to="/terms-of-service" className="text-terracota-700 text-sm hover:text-white transition-colors">Termos de Serviço</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;