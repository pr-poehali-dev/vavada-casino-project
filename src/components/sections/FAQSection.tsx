import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import RefLink from '@/components/RefLink';

interface FAQData {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqData: FAQData[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqData }) => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900/30 to-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12 px-4">
          Часто задаваемые <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">вопросы</span>
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-orange-500/50 transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-lg flex items-center">
                  <Icon name="HelpCircle" size={20} className="text-orange-400 mr-3 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg">{faq.question}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-400 mb-4 text-sm sm:text-base px-4">
            Не нашли ответ на свой вопрос?
          </p>
          <RefLink>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:from-orange-600 hover:to-yellow-600 w-full sm:w-auto">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Связаться с поддержкой
            </Button>
          </RefLink>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;