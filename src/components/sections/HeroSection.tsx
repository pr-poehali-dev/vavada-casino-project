import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import RefLink from '@/components/RefLink';

interface JackpotData {
  name: string;
  amount: string;
  trend: string;
}

interface HeroSectionProps {
  jackpots: JackpotData[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ jackpots }) => {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/img/76d25653-8509-4cd4-b4f1-e7ea72ad9c95.jpg" 
          alt="Casino background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 animate-pulse"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4 md:mb-6 leading-tight">
          Вавада: Официальный сайт, рабочие зеркала и полное руководство для игроков
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto px-2">
          Вавада — это популярная игровая платформа, которая привлекает миллионы пользователей по всему миру. Платформа известна под различными вариантами написания: vadaa, vavadaa, vavada, что связано с особенностями доменных имен и региональными ограничениями.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12 px-2">
          {jackpots.map((jackpot, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105">
              <CardContent className="p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-gray-400 mb-1">{jackpot.name}</div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">{jackpot.amount}</div>
                <Badge className="bg-green-500/20 text-green-400 text-xs">
                  <Icon name="TrendingUp" size={12} className="mr-1" />
                  {jackpot.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        <RefLink>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
            <Icon name="Play" size={20} className="mr-2" />
            Начать играть
          </Button>
        </RefLink>
      </div>
    </section>
  );
};

export default HeroSection;