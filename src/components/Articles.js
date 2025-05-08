import React, { useState } from 'react';
import { articles } from '../mock/articles';

const Articles = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">
          Artículos Semanales
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-indigo-500 font-medium">
                  {article.date}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-indigo-900">
                  {article.title}
                </h3>
                <p className="text-gray-600">
                  {expandedId === article.id
                    ? article.fullContent
                    : `${article.summary.substring(0, 120)}...`}
                </p>
                <button
                  onClick={() => toggleExpand(article.id)}
                  className="mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                >
                  {expandedId === article.id ? 'Leer menos' : 'Leer más'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;

// DONE


// DONE