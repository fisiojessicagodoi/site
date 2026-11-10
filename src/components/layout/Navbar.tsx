import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import posthog, { isPostHogConfigured } from '../../posthog';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const captureWhatsAppContact = (placement: 'navbar_desktop' | 'navbar_mobile') => {
    if (isPostHogConfigured) {
      posthog.capture('whatsapp_contact_initiated', { placement });
    }
  };

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Quem sou', path: '/about' },
    { name: 'Serviços', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Fisio Idosos', path: '/fisioterapia-idoso' },
    { name: 'Contato', path: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-1/4">
            <Link to="/" className="flex items-center">
              <Logo />
              <span className={`ml-2 font-serif font-bold text-xl md:text-2xl ${isScrolled ? 'text-terracota-800' : 'text-white'}`}>
                Jéssica Godoi
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${location.pathname === link.path
                    ? isScrolled ? 'text-terracota-600' : 'text-terracota-100'
                    : isScrolled ? 'text-gray-800 hover:text-terracota-600' : 'text-white hover:text-terracota-100'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Botão Agende Agora */}
          <div className="hidden md:block w-1/4 text-right">
            <a
              href="https://wa.link/32p5y9"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-medium px-4 py-2 rounded-full transition-colors duration-200 ${isScrolled
                ? 'bg-terracota-600 text-white hover:bg-terracota-700'
                : 'bg-white text-terracota-800 hover:bg-gray-100'
                }`}
              onClick={() => captureWhatsAppContact('navbar_desktop')}
            >
              Agende agora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg absolute left-4 right-4 top-16 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium py-2 ${location.pathname === link.path
                    ? 'text-terracota-600'
                    : 'text-gray-800 hover:text-terracota-600'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.link/32p5y9"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium bg-terracota-600 text-white py-3 rounded-full text-center hover:bg-terracota-700 transition-colors duration-200"
                onClick={() => {
                  setIsMenuOpen(false);
                  captureWhatsAppContact('navbar_mobile');
                }}
              >
                Agende agora
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;