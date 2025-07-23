import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ReviewData {
  name: string;
  rating: number;
  text: string;
  game: string;
  win: string;
}

interface ReviewsSectionProps {
  reviews: ReviewData[];
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12 px-4">
          Отзывы <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">игроков</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30 hover:border-orange-500 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-white text-lg">{review.name}</CardTitle>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-500/20 text-green-400 text-xs">
                    Выигрыш: {review.win}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-3 leading-relaxed">{review.text}</p>
                <div className="text-xs text-gray-400">
                  Игра: <span className="text-orange-400">{review.game}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;