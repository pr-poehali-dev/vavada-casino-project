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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardTitle className="text-white text-lg">{slot.name}</CardTitle>
                <div className="text-sm text-gray-400">{slot.provider}</div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-3">
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    RTP {slot.rtp}
                  </Badge>
                </div>
                <RefLink>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Играть
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

export default SlotsSection;