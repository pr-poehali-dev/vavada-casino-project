import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import RefLink from '@/components/RefLink';

const Header = () => {
  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="text-xl sm:text-2xl font-bold text-white">VAVADA</div>
            <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold text-xs sm:text-sm">CASINO</Badge>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-orange-400 transition-colors">Главная</a>
            <a href="#slots" className="text-white hover:text-orange-400 transition-colors">Слоты</a>
            <a href="#bonuses" className="text-white hover:text-orange-400 transition-colors">Бонусы</a>
            <a href="#tournaments" className="text-white hover:text-orange-400 transition-colors">Турниры</a>
            <a href="#support" className="text-white hover:text-orange-400 transition-colors">Поддержка</a>
          </nav>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <RefLink>
              <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black text-xs sm:text-sm px-3 sm:px-4">
                Войти
              </Button>
            </RefLink>
            <RefLink>
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:from-orange-600 hover:to-yellow-600 text-xs sm:text-sm px-3 sm:px-4">
                Регистрация
              </Button>
            </RefLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;