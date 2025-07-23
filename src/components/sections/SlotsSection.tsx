import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import RefLink from '@/components/RefLink';

interface SlotData {
  name: string;
  provider: string;
  rtp: string;
  image: string;
}

interface SlotsSectionProps {
  slots: SlotData[];
}

const SlotsSection: React.FC<SlotsSectionProps> = ({ slots }) => {
  return (
    <section id="slots" className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Популярные Слоты
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slots.map((slot, index) => (
            <Card key={index} className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-all">
              <CardHeader className="pb-3">
                <div className="w-full h-32 rounded-lg mb-3 overflow-hidden bg-gray-700">
                  <img 
                    src={slot.image} 
                    alt={slot.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-white text-lg">{slot.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Провайдер</span>
                    <span className="text-white">{slot.provider}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">RTP</span>
                    <Badge className="bg-green-500/20 text-green-400">{slot.rtp}</Badge>
                  </div>
                  <RefLink>
                    <Button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white">
                      Играть
                    </Button>
                  </RefLink>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlotsSection;