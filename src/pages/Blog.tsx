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
    id: 'treinamento-assoalho-pelvico',
    title: 'Exercícios para Assoalho Pélvico: Guia Completo de Treinamento e Benefícios',
    excerpt: 'Aprenda os exercícios mais eficazes para fortalecer o assoalho pélvico, prevenir incontinência e melhorar a saúde íntima. Guia completo com técnicas e benefícios.',
    date: '10 de fevereiro de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-minimal-1.jpg',
    category: 'Exercícios'
  },
  {
    id: 'prolapso-pelvico',
    title: 'Prolapso Pélvico: Sintomas, Tratamento e Prevenção em Campinas',
    excerpt: 'Descubra os sinais do prolapso pélvico, opções de tratamento com fisioterapia pélvica e estratégias de prevenção. Atendimento especializado em Campinas.',
    date: '17 de fevereiro de 2025',
    readTime: '7 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-minimal-2.jpg',
    category: 'Saúde Pélvica'
  },
  {
    id: 'dor-pelvica-cronica',
    title: 'Dor Pélvica Crônica: Causas, Tratamento e Como a Fisioterapia Pélvica Ajuda',
    excerpt: 'Entenda as causas da dor pélvica crônica, sintomas comuns e como a fisioterapia pélvica pode ajudar no alívio da dor. Tratamento especializado em Campinas.',
    date: '24 de fevereiro de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-minimal-3.jpg',
    category: 'Saúde Pélvica'
  },
  {
    id: 'incontinencia-mitos',
    title: 'Incontinência Urinária: Mitos e Verdades que Você Precisa Saber',
    excerpt: 'Desmistifique os principais mitos sobre incontinência urinária e descubra as verdades sobre prevenção e tratamento com fisioterapia pélvica em Campinas.',
    date: '3 de março de 2025',
    readTime: '4 min de leitura',
    author: 'Jéssica Godoi',
    image: 'https://images.pexels.com/photos/6551803/pexels-photo-6551803.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Incontinência Urinária'
  },
  {
    id: 'endometriosis-management',
    title: 'Endometriose: Como a Fisioterapia Pélvica Pode Ajudar no Tratamento',
    excerpt: 'Descubra como a fisioterapia pélvica especializada complementa o tratamento da endometriose, reduz a dor e melhora a qualidade de vida. Atendimento em Campinas.',
    date: '17 de março de 2025',
    readTime: '8 min de leitura',
    author: 'Jéssica Godoi',
    image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Saúde Pélvica'
  },
  {
    id: 'sitting-pelvic-health',
    title: 'Postura e Saúde Pélvica: Como Sentar Corretamente para Prevenir Problemas',
    excerpt: 'Aprenda a relação entre postura e saúde pélvica, dicas para sentar corretamente e exercícios para prevenir disfunções do assoalho pélvico.',
    date: '24 de março de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: 'https://images.pexels.com/photos/8941790/pexels-photo-8941790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Dicas de Saúde'
  },
  {
    id: 'exercise-prolapse',
    title: 'Exercícios para Prolapso Pélvico: Guia Seguro e Eficaz',
    excerpt: 'Descubra exercícios seguros e eficazes para quem tem prolapso pélvico. Aprenda como se manter ativa sem comprometer a saúde do assoalho pélvico.',
    date: '31 de março de 2025',
    readTime: '7 min de leitura',
    author: 'Jéssica Godoi',
    image: 'https://images.pexels.com/photos/8436744/pexels-photo-8436744.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Exercícios'
  },
  {
    id: 'breathing-pelvic-floor',
    title: 'Respiração e Assoalho Pélvico: Técnicas para Fortalecimento e Controle',
    excerpt: 'Aprenda como a respiração afeta o assoalho pélvico e técnicas simples para melhorar a coordenação e fortalecimento. Guia prático com exercícios.',
    date: '7 de abril de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: 'https://images.pexels.com/photos/3758056/pexels-photo-3758056.jpeg?auto=compress&cs=tinysrgb&w=1600',
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
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'Saúde Pélvica'
  },
  {
    id: 'homenagem-dia-das-maes',
    title: 'Dia das Mães: A Importância do Autocuidado na Saúde da Mulher',
    excerpt: 'Reflexão sobre o cuidado com a saúde da mulher, a importância do autocuidado e como a fisioterapia pélvica pode ajudar na qualidade de vida das mães.',
    date: '12 de maio de 2024',
    readTime: '4 min de leitura',
    author: 'Jéssica Godoi',
    image: '',
    category: 'Dicas de Saúde'
  },
  {
    id: 'incontinencia-urinaria-urgencia',
    title: 'Incontinência Urinária de Urgência: Sintomas, Tratamento e Prevenção em Campinas',
    excerpt: 'Descubra os sintomas da incontinência urinária de urgência, causas, tratamento com fisioterapia pélvica e estratégias de prevenção. Atendimento em Campinas.',
    date: '01 de julho de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-incontinencia-urgencia.jpg',
    category: 'Incontinência Urinária'
  },
  {
    id: 'incontinencia-urinaria-esforco',
    title: 'Incontinência Urinária de Esforço: Tratamento e Prevenção em Campinas',
    excerpt: 'Aprenda sobre incontinência urinária de esforço, sintomas, causas e como a fisioterapia pélvica pode ajudar no tratamento. Atendimento especializado em Campinas.',
    date: '02 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-incontinencia-esforco.jpg',
    category: 'Incontinência Urinária'
  },
  {
    id: 'incontinencia-urinaria-mista',
    title: 'Incontinência Urinária Mista: Sintomas, Diagnóstico e Tratamento em Campinas',
    excerpt: 'Entenda a incontinência urinária mista, diferenças dos outros tipos e como a fisioterapia pélvica pode ajudar no tratamento. Atendimento em Campinas.',
    date: '03 de julho de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-incontinencia-mista.jpg',
    category: 'Incontinência Urinária'
  },
  {
    id: 'diferenca-incontinencias',
    title: 'Tipos de Incontinência Urinária: Como Identificar e Tratar Cada Caso',
    excerpt: 'Guia completo sobre os diferentes tipos de incontinência urinária: sintomas, diagnóstico e tratamento com fisioterapia pélvica em Campinas.',
    date: '04 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-diferenca-incontinencias.jpg',
    category: 'Incontinência Urinária'
  },
  {
    id: 'urgencia-miccional',
    title: 'Urgência Miccional: Causas, Sintomas e Tratamento em Campinas',
    excerpt: 'Saiba tudo sobre urgência miccional: causas, sintomas e como a fisioterapia pélvica pode ajudar no controle. Atendimento especializado em Campinas.',
    date: '05 de julho de 2025',
    readTime: '4 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-urgencia-miccional.jpg',
    category: 'Incontinência Urinária'
  },
  {
    id: 'hesitacao-miccional',
    title: 'Hesitação Miccional: Causas, Sintomas e Tratamento em Campinas',
    excerpt: 'Entenda a hesitação miccional, suas causas e como a fisioterapia pélvica pode ajudar no tratamento. Atendimento especializado em Campinas.',
    date: '06 de julho de 2025',
    readTime: '4 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-hesitacao-miccional.jpg',
    category: 'Incontinência Urinária'
  },
  {
    id: 'esvaziamento-incompleto',
    title: 'Esvaziamento Vesical Incompleto: Causas e Tratamento em Campinas',
    excerpt: 'Descubra as causas da sensação de esvaziamento vesical incompleto e como a fisioterapia pélvica pode ajudar no tratamento. Atendimento em Campinas.',
    date: '07 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-esvaziamento-incompleto.jpg',
    category: 'Incontinência Urinária'
  },
  {
    id: 'gotejamento-pos-miccional',
    title: 'Gotejamento Pós-Miccional: Causas e Tratamento',
    excerpt: 'Saiba o que é gotejamento pós-miccional, por que acontece e como a fisioterapia pélvica pode ajudar no controle desse sintoma.',
    date: '08 de julho de 2025',
    readTime: '4 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-gotejamento.jpg',
    category: 'Incontinência Urinária'
  },
  {
    id: 'diario-miccional',
    title: 'Diário Miccional: O que é e Por que é Importante no Tratamento',
    excerpt: 'Descubra como o diário miccional pode ajudar no diagnóstico e acompanhamento do tratamento de sintomas urinários. Saiba como preencher corretamente.',
    date: '09 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-diario-miccional.jpg',
    category: 'Dicas de Saúde'
  },
  {
    id: 'tempo-sem-urinar',
    title: 'Ficar Muito Tempo sem Urinar: Quais os Riscos para a Bexiga?',
    excerpt: 'Entenda por que segurar o xixi por muito tempo pode ser prejudicial para a bexiga e o assoalho pélvico. Dicas de saúde urinária.',
    date: '10 de julho de 2025',
    readTime: '4 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-tempo-sem-urinar.jpg',
    category: 'Dicas de Saúde'
  },
  {
    id: 'habitos-ruins-bexiga',
    title: 'Hábitos Ruins para sua Bexiga e Assoalho Pélvico',
    excerpt: 'Conheça os hábitos que prejudicam a saúde da bexiga e do assoalho pélvico e saiba como evitá-los. Atendimento em Campinas.',
    date: '11 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-habitos-ruins.jpg',
    category: 'Dicas de Saúde'
  },
  {
    id: 'constipacao-intestinal',
    title: 'Constipação Intestinal: Sintomas, Causas e Tratamento',
    excerpt: 'Saiba como identificar a constipação intestinal, principais causas e como a fisioterapia pode ajudar no tratamento. Atendimento domiciliar e em Campinas.',
    date: '12 de julho de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-constipacao.jpg',
    category: 'Saúde Pélvica'
  },
  {
    id: 'criterios-roma',
    title: 'Critérios de Roma: O que São e Como Avaliar a Constipação',
    excerpt: 'Entenda os critérios de Roma para diagnóstico de constipação intestinal e sua importância no tratamento fisioterapêutico.',
    date: '13 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-criterios-roma.jpg',
    category: 'Saúde Pélvica'
  },
  {
    id: 'escala-bristol',
    title: 'Escala de Bristol: Como Avaliar as Fezes e sua Relação com a Saúde Intestinal',
    excerpt: 'Saiba o que é a Escala de Bristol, como ela auxilia no diagnóstico de constipação e outros distúrbios intestinais.',
    date: '14 de julho de 2025',
    readTime: '4 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-bristol.jpg',
    category: 'Saúde Pélvica'
  },
  {
    id: 'dispareunia-vaginismo',
    title: 'Dispareunia e Vaginismo: Diferenças, Sintomas e Tratamento',
    excerpt: 'Entenda o que é dispareunia, o que é vaginismo, as diferenças entre eles e como a fisioterapia pélvica pode ajudar.',
    date: '15 de julho de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-dispareunia-vaginismo.jpg',
    category: 'Dor na Relação'
  },
  {
    id: 'vulvodinia',
    title: 'Vulvodínia: O que é, Sintomas e Opções de Tratamento',
    excerpt: 'Saiba o que é vulvodínia, principais sintomas, causas e como a fisioterapia pode ajudar no alívio da dor.',
    date: '16 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-vulvodinia.jpg',
    category: 'Dor na Relação'
  },
  {
    id: 'clitoris-prazer-feminino',
    title: 'O que é o Clitóris e sua Importância no Prazer Feminino',
    excerpt: 'Descubra a anatomia do clitóris, sua função no prazer feminino e como a fisioterapia pode ajudar em casos de dor ou alteração de sensibilidade.',
    date: '17 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-clitoris.jpg',
    category: 'Dor na Relação'
  },
  {
    id: 'aderencia-clitoris',
    title: 'Aderência no Clitóris: O que é e Como Tratar',
    excerpt: 'Saiba o que é aderência no clitóris, como identificar alterações de sensibilidade e as opções de tratamento fisioterapêutico.',
    date: '18 de julho de 2025',
    readTime: '4 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-aderencia-clitoris.jpg',
    category: 'Dor na Relação'
  },
  {
    id: 'desejo-sexual-baixo',
    title: 'Diminuição do Desejo Sexual: Causas e Tratamento',
    excerpt: 'Entenda os fatores que podem levar à diminuição do desejo sexual e como a fisioterapia pélvica pode ajudar a recuperar o prazer.',
    date: '19 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-desejo-baixo.jpg',
    category: 'Dor na Relação'
  },
  {
    id: 'dificuldade-orgasmo',
    title: 'Dificuldade de Chegar ao Orgasmo: O que Pode Influenciar?',
    excerpt: 'Saiba quais fatores podem dificultar o orgasmo feminino e como a fisioterapia pode ajudar a melhorar a função sexual.',
    date: '20 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-dificuldade-orgasmo.jpg',
    category: 'Dor na Relação'
  },
  {
    id: 'dispareunia-profundidade-superficie',
    title: 'Dispareunia de Profundidade x Superfície: Diferenças e Tratamento',
    excerpt: 'Entenda a diferença entre dispareunia de profundidade e de superfície, sintomas e abordagens fisioterapêuticas.',
    date: '21 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-dispareunia-tipos.jpg',
    category: 'Dor na Relação'
  },
  {
    id: 'fatores-disfuncao-sexual',
    title: 'Fatores que Podem Influenciar nas Disfunções Sexuais Femininas',
    excerpt: 'Conheça os principais fatores físicos, emocionais e comportamentais que podem impactar a função sexual da mulher.',
    date: '22 de julho de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-fatores-disfuncao.jpg',
    category: 'Dor na Relação'
  },
  {
    id: 'prolapso-pelvico',
    title: 'Prolapso Pélvico: O que é, Sintomas e Como a Fisioterapia Pode Ajudar',
    excerpt: 'Saiba o que é prolapso pélvico, principais sintomas, fatores de risco e como a fisioterapia pélvica pode ajudar no tratamento. Atendimento em Campinas.',
    date: '23 de julho de 2025',
    readTime: '6 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-prolapso.jpg',
    category: 'Saúde Pélvica'
  },
  {
    id: 'fisioterapia-pelvica-campinas',
    title: 'Fisioterapia Pélvica em Campinas: Quando Procurar e Como Funciona',
    excerpt: 'Entenda quando procurar um fisioterapeuta pélvico, como funciona o atendimento presencial e domiciliar em Campinas e os benefícios para a saúde da mulher.',
    date: '24 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-fisioterapia-campinas.jpg',
    category: 'Dicas de Saúde'
  },
  {
    id: 'atendimento-domiciliar-campinas',
    title: 'Atendimento Domiciliar em Fisioterapia Pélvica em Campinas',
    excerpt: 'Saiba como funciona o atendimento domiciliar em fisioterapia pélvica, para quem é indicado e os diferenciais do serviço em Campinas.',
    date: '25 de julho de 2025',
    readTime: '5 min de leitura',
    author: 'Jéssica Godoi',
    image: '/images/blog-atendimento-domiciliar.jpg',
    category: 'Dicas de Saúde'
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
      <section className="relative pt-32 pb-16 bg-sand-to-coral text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Blog & Recursos</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Artigos educativos, novidades e dicas práticas para sua saúde pélvica
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