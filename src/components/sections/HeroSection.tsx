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
    <section className="py-12 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Казино Vavada - рабочее зеркало - Лучшие слоты и джекпоты
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
          Вавада — это популярная игровая платформа, которая привлекает миллионы пользователей по всему миру. 
          Платформа известна под различными вариантами написания: vadaa, vavadaa, vavada, что связано с 
          особенностями доменных имен и региональными ограничениями.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
          {jackpots.map((jackpot, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-4 text-center">
                <div className="text-sm text-gray-400 mb-1">{jackpot.name}</div>
                <div className="text-xl font-bold text-white mb-1">{jackpot.amount}</div>
                <Badge className="bg-green-500/20 text-green-400 text-xs">
                  <Icon name="TrendingUp" size={12} className="mr-1" />
                  {jackpot.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <RefLink>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4">
            <Icon name="Play" size={20} className="mr-2" />
            Начать играть
          </Button>
        </RefLink>
      </div>
    </section>
  );
};

export default HeroSection;