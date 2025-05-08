import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-bold">CyberGuardian</span>
            <p className="mt-2 text-indigo-200">
              Tu escudo en el mundo digital.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Links
              </h3>
              <div className="mt-4 space-y-2">
                <a
                  href="#"
                  className="block text-indigo-200 hover:text-white transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="#"
                  className="block text-indigo-200 hover:text-white transition-colors"
                >
                  Artículos
                </a>
                <a
                  href="#"
                  className="block text-indigo-200 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Legal
              </h3>
              <div className="mt-4 space-y-2">
                <a
                  href="#"
                  className="block text-indigo-200 hover:text-white transition-colors"
                >
                  Privacidad
                </a>
                <a
                  href="#"
                  className="block text-indigo-200 hover:text-white transition-colors"
                >
                  Términos
                </a>
                <a
                  href="#"
                  className="block text-indigo-200 hover:text-white transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Social
              </h3>
              <div className="mt-4 space-y-2">
                <a
                  href="#"
                  className="block text-indigo-200 hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="block text-indigo-200 hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block text-indigo-200 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-indigo-800 pt-8 text-center text-indigo-200 text-sm">
          <p>© {new Date().getFullYear()}Risk Zero. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;