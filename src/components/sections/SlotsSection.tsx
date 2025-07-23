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
    <section id="slots" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12 px-4">
          Популярные <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Слоты</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {slots.map((slot, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-3">
                <div className="w-full h-32 rounded-lg mb-3 overflow-hidden relative group-hover:scale-105 transition-all">
                  <img 
                    src={slot.image} 
                    alt={slot.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
                    <Button className="w-full mt-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:from-orange-600 hover:to-yellow-600">
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