import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, BookmarkPlus } from 'lucide-react';
import { articles } from './Blog'; // Importando os artigos do Blog.tsx

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image?: string;
  category: string;
  content?: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((a: Article) => a.id === id);

  // Função para encontrar artigos relacionados
  const findRelatedArticles = (currentArticle: Article, allArticles: Article[]) => {
    return allArticles
      .filter(article => 
        article.id !== currentArticle.id && 
        (article.category === currentArticle.category || 
         article.title.toLowerCase().includes(currentArticle.title.toLowerCase().split(' ')[0]))
      )
      .slice(0, 3);
  };

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Artigo não encontrado</h1>
            <Link to="/blog" className="text-terracota-600 hover:text-terracota-700">
              Voltar para o blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedArticles = findRelatedArticles(article, articles);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-terracota-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <div className="mb-4">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-medium">Voltar para o blog</span>
              </Link>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-2 md:mb-4 break-words leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/80 text-sm md:text-base">
              <span>{article.date}</span>
              <span className="hidden md:inline">•</span>
              <span>{article.readTime}</span>
              <span className="hidden md:inline">•</span>
              <span>{article.author}</span>
              <span className="hidden md:inline">•</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs md:text-sm">
                {article.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {article.content ? (
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
              ) : (
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg">{article.excerpt}</p>
                  <div className="bg-terracota-50 p-6 rounded-lg">
                    <p className="text-gray-700">
                      Este artigo está em desenvolvimento. Em breve você encontrará aqui um conteúdo completo e detalhado sobre este tema.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Artigos Relacionados */}
            {relatedArticles.length > 0 && (
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Artigos Relacionados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {relatedArticles.map((related) => (
                    <Link 
                      key={related.id}
                      to={`/blog/${related.id}`}
                      className="group"
                    >
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform group-hover:shadow-md">
                        {related.image && (
                          <div className="aspect-w-16 aspect-h-9">
                            <img 
                              src={related.image} 
                              alt={related.title}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <h3 className="font-medium text-gray-800 group-hover:text-terracota-600 transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                            {related.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter Section */}
            <div className="mt-16 bg-terracota-50 rounded-lg p-8">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Receba Conteúdo Exclusivo</h3>
              <p className="text-gray-600 mb-6">
                Semanalmente, envio dicas práticas de autocuidado, informações sobre saúde feminina e novidades sobre tratamentos. 
                Tudo para ajudar você a cuidar melhor da sua saúde pélvica.
              </p>
              <form className="max-w-md">
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

export default BlogPost; 