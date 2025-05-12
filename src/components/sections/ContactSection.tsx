import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionTitle 
              subtitle="Fale Comigo" 
              title="Informações de Contato"
            />
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Pronta(o) para cuidar da sua saúde pélvica? Estou aqui para ajudar. Entre em contato pelo WhatsApp para respostas rápidas ou agende uma consulta pelo formulário. Será um prazer te apoiar nessa jornada de bem-estar.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-terracota-100 rounded-full p-3 mr-4">
                  <MapPin className="text-terracota-700 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Endereço</h3>
                  <p className="text-gray-600">Rua Doutor Souza Lima, 139 - Cambuí, Campinas/SP</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-terracota-100 rounded-full p-3 mr-4">
                  <Phone className="text-terracota-700 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Telefone</h3>
                  <p className="text-gray-600">(19) 99622-9571</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-terracota-100 rounded-full p-3 mr-4">
                  <Mail className="text-terracota-700 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">E-mail</h3>
                  <p className="text-gray-600">fisiojessicagodoi@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-terracota-100 rounded-full p-3 mr-4">
                  <Clock className="text-terracota-700 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Horário de Atendimento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 20h</p>
                  <p className="text-gray-600">Sábado: 10h às 14h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <MessageCircle className="text-green-700 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">WhatsApp</h3>
                  <p className="text-gray-600 mb-2">Resposta rápida pelo WhatsApp:</p>
                  <a 
                    href="https://wa.link/32p5y9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button 
                      variant="primary" 
                      className="bg-green-500 hover:bg-green-600 focus:ring-green-400"
                    >
                      <MessageCircle size={18} className="mr-2" />
                      Enviar mensagem no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Agende uma Consulta</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracota-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Sobrenome</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracota-600 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracota-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracota-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Serviço de Interesse</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracota-600 focus:border-transparent"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="dor-pelvica">Tratamento Dor Pélvica</option>
                  <option value="incontinencia">Tratamento de Incontinência</option>
                  <option value="prolapso-pelvico">Assistência a Prolapso Pélvico</option>
                  <option value="disfuncao-sexual">Disfunção Sexual</option>
                  <option value="consulta">Consulta Inicial</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracota-600 focus:border-transparent"
                ></textarea>
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full"
                >
                  Enviar Solicitação
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;