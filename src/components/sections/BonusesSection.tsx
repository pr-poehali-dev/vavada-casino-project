import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RefLink from '@/components/RefLink';

interface BonusData {
  title: string;
  amount: string;
  description: string;
}

interface BonusesSectionProps {
  bonuses: BonusData[];
}

const BonusesSection: React.FC<BonusesSectionProps> = ({ bonuses }) => {
  return (
    <section id="bonuses" className="py-12 md:py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12 px-4">
          Щедрые <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Бонусы</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-2">
                  {bonus.amount}
                </div>
                <CardTitle className="text-white text-xl">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">{bonus.description}</p>
                <RefLink>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:from-orange-600 hover:to-yellow-600">
                    Получить
                  </Button>
                </RefLink>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;