import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const jackpots = [
    { name: 'Мега Джекпот', amount: '₽12,543,210', trend: '+5.2%' },
    { name: 'Супер Джекпот', amount: '₽3,847,650', trend: '+3.1%' },
    { name: 'Мини Джекпот', amount: '₽456,789', trend: '+8.7%' }
  ];

  const slots = [
    { name: 'Книга Фараона', provider: 'Play\'n GO', rtp: '96.28%' },
    { name: 'Сладкая Бонанца', provider: 'Pragmatic Play', rtp: '96.51%' },
    { name: 'Волк Золото', provider: 'Pragmatic Play', rtp: '96.01%' },
    { name: 'Магия Фруктов', provider: 'Wazdan', rtp: '96.45%' }
  ];

  const bonuses = [
    { title: 'Приветственный бонус', amount: '100%', description: 'До 50,000₽ + 200 FS' },
    { title: 'Ежедневный бонус', amount: '25%', description: 'Каждый день до 10,000₽' },
    { title: 'Кэшбэк', amount: '10%', description: 'Возврат проигранных средств' }
  ];

  const tournaments = [
    { name: 'Битва Слотов', prize: '₽1,000,000', players: '2,847', timeLeft: '2д 14ч' },
    { name: 'Джекпот Гонка', prize: '₽500,000', players: '1,234', timeLeft: '1д 8ч' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-white">VAVADA</div>
              <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold">CASINO</Badge>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-white hover:text-orange-400 transition-colors">Главная</a>
              <a href="#slots" className="text-white hover:text-orange-400 transition-colors">Слоты</a>
              <a href="#bonuses" className="text-white hover:text-orange-400 transition-colors">Бонусы</a>
              <a href="#tournaments" className="text-white hover:text-orange-400 transition-colors">Турниры</a>
              <a href="#support" className="text-white hover:text-orange-400 transition-colors">Поддержка</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:from-orange-600 hover:to-yellow-600">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-6">
            VAVADA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Играй в лучшие слоты и выигрывай крупные джекпоты!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {jackpots.map((jackpot, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                <CardContent className="p-4">
                  <div className="text-sm text-gray-400 mb-1">{jackpot.name}</div>
                  <div className="text-2xl font-bold text-white mb-1">{jackpot.amount}</div>
                  <Badge className="bg-green-500/20 text-green-400 text-xs">
                    <Icon name="TrendingUp" size={12} className="mr-1" />
                    {jackpot.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold text-lg px-8 py-6 hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200">
            <Icon name="Play" size={20} className="mr-2" />
            Начать играть
          </Button>
        </div>
      </section>

      {/* Popular Slots */}
      <section id="slots" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Популярные <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Слоты</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slots.map((slot, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-3">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-lg mb-3 flex items-center justify-center group-hover:from-orange-500/30 group-hover:to-yellow-500/30 transition-all">
                    <Icon name="Gamepad2" size={48} className="text-orange-400" />
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
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Играть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section id="bonuses" className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Щедрые <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Бонусы</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-2">
                    {bonus.amount}
                  </div>
                  <CardTitle className="text-white text-xl">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 mb-4">{bonus.description}</p>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:from-orange-600 hover:to-yellow-600">
                    Получить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section id="tournaments" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Активные <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Турниры</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tournaments.map((tournament, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30 hover:border-orange-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center justify-between">
                    {tournament.name}
                    <Badge className="bg-red-500/20 text-red-400">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {tournament.timeLeft}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
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
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    <Icon name="Trophy" size={16} className="mr-2" />
                    Участвовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Нужна <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Помощь?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Наша служба поддержки работает 24/7 и готова помочь вам в любое время
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Онлайн чат
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
              <Icon name="Mail" size={20} className="mr-2" />
              Email
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
              <Icon name="Phone" size={20} className="mr-2" />
              Телефон
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4">
              VAVADA CASINO
            </div>
            <p className="text-gray-400 mb-6">Играйте ответственно. 18+</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-orange-400 transition-colors">Правила</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Лицензия</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Ответственная игра</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;