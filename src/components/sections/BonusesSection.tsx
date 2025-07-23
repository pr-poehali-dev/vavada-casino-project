import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
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
    <section id="bonuses" className="py-12 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Щедрые Бонусы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-all">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {bonus.amount}
                </div>
                <CardTitle className="text-white text-xl">{bonus.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">{bonus.description}</p>
                <RefLink>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    <Icon name="Gift" size={16} className="mr-2" />
                    Получить бонус
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