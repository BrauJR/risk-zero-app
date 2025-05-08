import React, { useState } from 'react';
import { dailyTips } from '../mock/tips';

const Tips = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const nextTip = () => {
    setCurrentTipIndex((prevIndex) =>
      prevIndex === dailyTips.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTip = () => {
    setCurrentTipIndex((prevIndex) =>
      prevIndex === 0 ? dailyTips.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">
          Consejos Diarios
        </h2>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 relative">
          <div className="text-center mb-6">
            <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
              Consejo #{currentTipIndex + 1}
            </span>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4 text-indigo-900">
              {dailyTips[currentTipIndex].title}
            </h3>
            <p className="text-gray-600">
              {dailyTips[currentTipIndex].content}
            </p>
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={prevTip}
              className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Anterior
            </button>
            <button
              onClick={nextTip}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
            >
              Siguiente
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;