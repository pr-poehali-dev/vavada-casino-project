import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const SupportSection = () => {
  return (
    <section id="support" className="py-12 md:py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 px-4">
          Нужна <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Помощь?</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Наша служба поддержки работает 24/7 и готова помочь вам в любое время
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
          <Link to="/chat">
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black w-full sm:w-auto text-sm sm:text-base">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Онлайн чат
            </Button>
          </Link>
          <Link to="/support">
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black w-full sm:w-auto text-sm sm:text-base">
              <Icon name="Mail" size={16} className="mr-2" />
              Email
            </Button>
          </Link>
          <Link to="/phone">
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black w-full sm:w-auto text-sm sm:text-base">
              <Icon name="Phone" size={16} className="mr-2" />
              Телефон
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;