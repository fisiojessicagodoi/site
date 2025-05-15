import React, { useState } from 'react';
import { SearchIcon, Filter } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import BlogCard from '../components/ui/BlogCard';

// Categorias principais organizadas
const mainCategories = [
  'Incontinência Urinária',
  'Dor na Relação',
  'Saúde Pélvica',
  'Exercícios',
  'Dicas de Saúde'
];

// Array de artigos
const articles = [
  {
    id: 'fisioterapia-pelvica-campinas',
    title: 'Fisioterapia Pélvica em Campinas: O que você precisa saber',
    excerpt: 'Descubra como a fisioterapia pélvica pode transformar sua saúde e qualidade de vida em Campinas.',
    date: '10 de junho de 2024',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog/fisioterapia-pelvica-campinas.webp',
    category: 'Saúde Pélvica',
    content: `<p>A <strong>fisioterapia pélvica</strong> é uma especialidade voltada para o cuidado da saúde íntima da mulher, promovendo bem-estar, prevenção e tratamento de diversas disfunções.</p>
      <h2>Principais benefícios</h2>
      <ul>
        <li>Prevenção e tratamento de incontinência urinária e fecal</li>
        <li>Melhora da qualidade de vida e autoestima</li>
        <li>Atendimento humanizado e personalizado em Campinas</li>
        <li>Auxílio em casos de dor pélvica, prolapso e disfunções sexuais</li>
      </ul>
      <h2>Como funciona o atendimento?</h2>
      <p>O atendimento é individualizado, baseado em evidências científicas e adaptado às necessidades de cada paciente. O objetivo é promover autonomia, educação e empoderamento feminino.</p>
      <p>Agende uma avaliação e descubra como a fisioterapia pélvica pode transformar sua saúde!</p>`
  },
  {
    id: 'prolapso-pelvico',
    title: 'Prolapso Pélvico: Sintomas, Tratamento e Prevenção em Campinas',
    excerpt: 'Descubra os sinais do prolapso pélvico, opções de tratamento com fisioterapia pélvica e estratégias de prevenção. Atendimento especializado em Campinas.',
    date: '17 de fevereiro de 2025',
    readTime: '7 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog/prolapso-pelvico.webp',
    category: 'Saúde Pélvica'
  },
  {
    id: 'dor-pelvica-cronica',
    title: 'Dor Pélvica Crônica: Causas, Tratamento e Como a Fisioterapia Pélvica Ajuda',
    excerpt: 'Entenda as causas da dor pélvica crônica, sintomas comuns e como a fisioterapia pélvica pode ajudar no alívio da dor. Tratamento especializado em Campinas.',
    date: '24 de fevereiro de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog/dor-pelvica.webp',
    category: 'Saúde Pélvica'
  },
  {
    id: 'incontinencia-mitos',
    title: 'Incontinência Urinária: Mitos e Verdades que Você Precisa Saber',
    excerpt: 'Desmistifique os principais mitos sobre incontinência urinária e descubra as verdades sobre prevenção e tratamento com fisioterapia pélvica em Campinas.',
    date: '3 de março de 2025',
    readTime: '4 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog/incontinencia-urinaria.webp',
    category: 'Incontinência Urinária'
  },
  {
    id: 'endometriosis-management',
    title: 'Endometriose: Como a Fisioterapia Pélvica Pode Ajudar no Tratamento',
    excerpt: 'Descubra como a fisioterapia pélvica especializada complementa o tratamento da endometriose, reduz a dor e melhora a qualidade de vida. Atendimento em Campinas.',
    date: '17 de março de 2025',
    readTime: '8 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog/endometriose.webp',
    category: 'Saúde Pélvica'
  },
  {
    id: 'sitting-pelvic-health',
    title: 'Postura e Saúde Pélvica: Como Sentar Corretamente para Prevenir Problemas',
    excerpt: 'Aprenda a relação entre postura e saúde pélvica, dicas para sentar corretamente e exercícios para prevenir disfunções do assoalho pélvico.',
    date: '24 de março de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog/postura-saude-pelvica.webp',
    category: 'Dicas de Saúde'
  },
  {
    id: 'exercise-prolapse',
    title: 'Exercícios para Prolapso Pélvico: Guia Seguro e Eficaz',
    excerpt: 'Descubra exercícios seguros e eficazes para quem tem prolapso pélvico. Aprenda como se manter ativa sem comprometer a saúde do assoalho pélvico.',
    date: '31 de março de 2025',
    readTime: '7 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog/exercicios-prolapso.webp',
    category: 'Exercícios'
  },
  {
    id: 'breathing-pelvic-floor',
    title: 'Respiração e Assoalho Pélvico: Técnicas para Fortalecimento e Controle',
    excerpt: 'Aprenda como a respiração afeta o assoalho pélvico e técnicas simples para melhorar a coordenação e fortalecimento. Guia prático com exercícios.',
    date: '7 de abril de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog/respiracao-assoalho-pelvico.webp',
    category: 'Exercícios'
  },
  {
    id: 'prolapso-pelvico-artigo',
    title: 'Prolapso Pélvico: Diagnóstico, Tratamento e Prevenção em Campinas',
    excerpt: 'Guia completo sobre prolapso pélvico: sintomas, diagnóstico, opções de tratamento com fisioterapia pélvica e estratégias de prevenção em Campinas.',
    date: '14 de abril de 2025',
    readTime: '7 min de leitura',
    author: 'Jéssica Godoi',
    image: 'https://images.pexels.com/photos/5853733/pexels-photo-5853733.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Saúde Pélvica'
  },
  {
    id: 'sindrome-rokitansky',
    title: 'Síndrome de Rokitansky: Tratamento e Qualidade de Vida com Fisioterapia Pélvica',
    excerpt: 'Entenda a Síndrome de Rokitansky, sintomas, diagnóstico e como a fisioterapia pélvica pode melhorar a qualidade de vida. Atendimento especializado em Campinas.',
    date: '21 de abril de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog/sindrome-rokitansky.webp',
    category: 'Saúde Pélvica'
  }
];

// Exportando o array de artigos
export { articles };

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  // Ordenar do mais recente para o mais antigo
  articles.sort((a, b) => {
    const parseDate = (str: string): number => {
      // Exemplo: '14 de abril de 2025'
      const [dia, mes, ano] = str.split(' de ');
      const meses: { [key: string]: number } = {
        'janeiro': 0, 'fevereiro': 1, 'março': 2, 'abril': 3, 'maio': 4, 'junho': 5,
        'julho': 6, 'agosto': 7, 'setembro': 8, 'outubro': 9, 'novembro': 10, 'dezembro': 11
      };
      return new Date(Number(ano), meses[mes as string], Number(dia)).getTime();
    };
    return parseDate(b.date) - parseDate(a.date);
  });
  
  // Função para encontrar artigos relacionados (mantida para uso nas páginas individuais)
  const findRelatedArticles = (currentArticle: any, allArticles: any[]) => {
    return allArticles
      .filter(article => 
        article.id !== currentArticle.id && 
        (article.category === currentArticle.category || 
         article.title.toLowerCase().includes(currentArticle.title.toLowerCase().split(' ')[0]))
      )
      .slice(0, 3);
  };

  // Função de busca melhorada
  const searchArticles = (articles: any[], term: string) => {
    const searchTerms = term.toLowerCase().split(' ');
    return articles.filter(article => {
      const titleMatch = article.title.toLowerCase();
      const excerptMatch = article.excerpt.toLowerCase();
      const categoryMatch = article.category.toLowerCase();
      
      return searchTerms.every(term => 
        titleMatch.includes(term) || 
        excerptMatch.includes(term) || 
        categoryMatch.includes(term)
      );
    });
  };

  const filteredArticles = searchArticles(articles, searchTerm)
    .filter(article => selectedCategory === '' || article.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-terracota-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Blog & Recursos</h1>
            <p className="text-lg text-white leading-relaxed font-medium">
              Artigos educativos, novidades e dicas práticas para sua saúde pélvica.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Barra de Pesquisa */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Buscar artigos por tema, sintoma ou tratamento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-terracota-600 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            {/* Filtro de Categorias */}
            <div className="w-full md:w-auto flex">
              <div className="relative w-full md:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full appearance-none focus:outline-none focus:ring-2 focus:ring-terracota-600 focus:border-transparent"
                >
                  <option value="">Todas as categorias</option>
                  {mainCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Tags de Categorias */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {mainCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category 
                    ? 'bg-terracota-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-terracota-50'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {filteredArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <BlogCard key={article.id} {...article} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Nenhum artigo encontrado para sua busca.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="mt-4 text-gray-600 hover:text-terracota-500 font-medium"
              >
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-terracota-50 p-8 rounded-lg shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Receba Conteúdo Exclusivo</h3>
              <p className="text-gray-600 mb-6">
                Semanalmente, envio dicas práticas de autocuidado, informações sobre saúde feminina e novidades sobre tratamentos. 
                Tudo para ajudar você a cuidar melhor da sua saúde pélvica, com conteúdo selecionado especialmente para mulheres.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-terracota-500 text-gray-700"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-terracota-600 text-white rounded-lg hover:bg-terracota-700 transition-colors font-medium"
                  >
                    Receber Conteúdo
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Seu e-mail está seguro. Você receberá apenas conteúdo relevante e pode cancelar quando quiser.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;