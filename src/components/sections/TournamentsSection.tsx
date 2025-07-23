import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import RefLink from '@/components/RefLink';

interface TournamentData {
  name: string;
  prize: string;
  players: string;
  timeLeft: string;
}

interface TournamentsSectionProps {
  tournaments: TournamentData[];
}

const TournamentsSection: React.FC<TournamentsSectionProps> = ({ tournaments }) => {
  return (
    <section id="tournaments" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12 px-4">
          Активные <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Турниры</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tournaments.map((tournament, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30 hover:border-orange-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{tournament.name}</h3>
                  <Badge className="bg-red-500/20 text-red-400 animate-pulse">
                    <Icon name="Clock" size={12} className="mr-1" />
                    {tournament.timeLeft}
                  </Badge>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
                      {tournament.prize}
                    </div>
                    <div className="text-sm text-gray-400">Призовой фонд</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">{tournament.players}</div>
                    <div className="text-sm text-gray-400">Участников</div>
                  </div>
                </div>
                <RefLink>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    <Icon name="Trophy" size={16} className="mr-2" />
                    Участвовать
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

export default TournamentsSection;