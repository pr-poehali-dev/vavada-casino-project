import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
            VAVADA CASINO
          </div>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">Играйте ответственно. 18+</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-400 transition-colors">Условия использования</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Ответственная игра</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;