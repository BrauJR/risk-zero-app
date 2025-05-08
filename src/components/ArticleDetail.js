import React from 'react';

const ArticleDetail = ({ article, onBack }) => {
  if (!article) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a artículos
        </button>
        
        <article>
          <span className="text-sm text-emerald-500 font-medium">
            {article.date}
          </span>
          <h1 className="text-3xl font-bold mt-2 mb-6 text-emerald-900">
            {article.title}
          </h1>
          <div className="h-96 overflow-hidden rounded-lg mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">{article.fullContent}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ArticleDetail;