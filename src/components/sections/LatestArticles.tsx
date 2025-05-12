import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import BlogCard from '../ui/BlogCard';
import Button from '../ui/Button';

const LatestArticles: React.FC = () => {
  const articles = [
    {
      id: 'treinamento-assoalho-pelvico',
      title: 'Exercícios Essenciais para o Assoalho Pélvico e Mais Saúde',
      excerpt: 'Descubra os exercícios mais eficazes para fortalecer a musculatura do assoalho pélvico e melhorar sua saúde pélvica.',
      date: '15 de junho de 2025',
      readTime: '5 min de leitura',
      author: 'Jéssica Godoi',
      image: 'https://images.pexels.com/photos/6551849/pexels-photo-6551849.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Exercícios'
    },
    {
      id: 'prolapso-pelvico-artigo',
      title: 'Entenda o Prolapso Pélvico: Sintomas, Prevenção e Tratamento',
      excerpt: 'Saiba como identificar sinais de prolapso pélvico, estratégias de prevenção e as melhores opções de tratamento fisioterapêutico.',
      date: '28 de maio de 2025',
      readTime: '7 min de leitura',
      author: 'Jéssica Godoi',
      image: 'https://images.pexels.com/photos/5853733/pexels-photo-5853733.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Prolapso Pélvico'
    },
    {
      id: 'dor-pelvica-cronica',
      title: 'Compreendendo e Gerenciando a Dor Pélvica Crônica',
      excerpt: 'Explore as causas da dor pélvica crônica e conheça abordagens baseadas em evidências para alívio e melhora da qualidade de vida.',
      date: '10 de maio de 2025',
      readTime: '6 min de leitura',
      author: 'Jéssica Godoi',
      image: 'https://images.pexels.com/photos/6551841/pexels-photo-6551841.jpeg?auto=compress&cs=tinysrgb&w=1600',
      category: 'Dor Pélvica'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <SectionTitle 
            subtitle="Artigos Recentes" 
            title="Conteúdo para sua Saúde"
            className="mb-0" 
          />
          <Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline">
              Ver Todos os Artigos
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;