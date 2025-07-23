import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import RefLink from '@/components/RefLink';

const Index = () => {
  const jackpots = [
    { name: 'Мега Джекпот', amount: '₽12,543,210', trend: '+5.2%' },
    { name: 'Супер Джекпот', amount: '₽3,847,650', trend: '+3.1%' },
    { name: 'Мини Джекпот', amount: '₽456,789', trend: '+8.7%' }
  ];

  const slots = [
    { name: 'Книга Фараона', provider: 'Play\'n GO', rtp: '96.28%', image: '/img/6f60c554-ff06-40bd-bf35-94651377b339.jpg' },
    { name: 'Сладкая Бонанца', provider: 'Pragmatic Play', rtp: '96.51%', image: '/img/e81b0bfe-c402-4880-ae31-851d42c7ad98.jpg' },
    { name: 'Волк Золото', provider: 'Pragmatic Play', rtp: '96.01%', image: '/img/76d25653-8509-4cd4-b4f1-e7ea72ad9c95.jpg' },
    { name: 'Магия Фруктов', provider: 'Wazdan', rtp: '96.45%', image: '/img/6f60c554-ff06-40bd-bf35-94651377b339.jpg' }
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
              <RefLink>
                <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
                  Войти
                </Button>
              </RefLink>
              <RefLink>
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-semibold hover:from-orange-600 hover:to-yellow-600">
                  Регистрация
                </Button>
              </RefLink>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/76d25653-8509-4cd4-b4f1-e7ea72ad9c95.jpg" 
            alt="Casino background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-6">
            Вавада: Официальный сайт, рабочие зеркала и полное руководство для игроков
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Вавада — это популярная игровая платформа, которая привлекает миллионы пользователей по всему миру. Платформа известна под различными вариантами написания: vadaa, vavadaa, vavada, что связано с особенностями доменных имен и региональными ограничениями.
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
          <RefLink>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold text-lg px-8 py-6 hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
          </RefLink>
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

      {/* Bonuses */}
      <section id="bonuses" className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
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

      {/* Content Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Официальный сайт <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Вавада</span> и рабочие зеркала
          </h2>
          <div className="text-gray-300 space-y-4 max-w-4xl">
            <p>
              Официальный сайт Вавада регулярно подвергается блокировкам со стороны регулирующих органов, поэтому пользователи часто ищут альтернативные способы доступа. Сайт вавады работает через систему зеркал — точных копий основного ресурса с аналогичным функционалом.
            </p>
            <p>
              Рабочее зеркало вавады обеспечивает стабильный доступ к платформе даже при блокировке основного домена. Зеркало вавады на сегодня можно найти через официальные каналы поддержки или специализированные ресурсы. Важно использовать только проверенные источники для получения актуальных ссылок.
            </p>
            <p>
              Вавада зеркало сегодня обновляется автоматически, обеспечивая непрерывную работу сервиса. Пользователи могут получить доступ к вавада зеркало рабочее на сегодня через различные каналы связи.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Доступ к платформе <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Вавада Online</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-300 space-y-4">
              <p>
                Вавада online предоставляет полный доступ к игровой библиотеке без необходимости скачивания дополнительного программного обеспечения. Вавада vadaa online и вавада vavadaa online — это различные варианты доступа к одной и той же платформе.
              </p>
              <p>
                Вавада online официальный сайт обеспечивает максимальную безопасность и стабильность работы. Система автоматически определяет оптимальный сервер для подключения, обеспечивая высокую скорость загрузки.
              </p>
            </div>
            <Card className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Преимущества Online версии</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" />Без скачивания</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" />Автоматические обновления</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" />Высокая безопасность</li>
                  <li className="flex items-center"><Icon name="Check" size={16} className="text-green-400 mr-2" />Быстрый доступ</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Промокоды и <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">бонусная система</span> Вавада
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-white">Промокод Вавада</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Специальный код, который предоставляет пользователям дополнительные преимущества: бесплатные вращения, бонусы к депозиту или другие привилегии.
                </p>
                <Badge className="bg-orange-500/20 text-orange-400">2025</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-white">100 Бесплатных Вращений</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Популярное предложение для новых пользователей. Вавада 100 бесплатных вращений позволяет ознакомиться с игровым процессом без риска.
                </p>
                <Badge className="bg-green-500/20 text-green-400">Для новичков</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-white">Бонусная Система</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Включает приветственные предложения для новых игроков, регулярные акции для постоянных пользователей и специальные турниры.
                </p>
                <Badge className="bg-blue-500/20 text-blue-400">Постоянным</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Мобильная версия и <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">приложения</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-300 space-y-4">
              <p>
                Вавада мобильная версия адаптирована для всех популярных мобильных устройств и планшетов. Мобильная версия сохраняет весь функционал десктопной платформы, включая регистрацию, депозиты, игры и поддержку.
              </p>
              <p>
                Скачать вавада можно через официальные магазины приложений или напрямую с сайта. Вавада приложение предлагает дополнительные возможности: push-уведомления о новых бонусах, быстрый доступ к любимым играм и оптимизированный интерфейс.
              </p>
              <div className="flex gap-4 mt-6">
                <RefLink>
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black">
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать приложение
                  </Button>
                </RefLink>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-gray-900 to-black border-orange-500/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Возможности мобильной версии</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Icon name="Smartphone" size={32} className="text-orange-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-300">Адаптивный дизайн</div>
                  </div>
                  <div className="text-center">
                    <Icon name="Bell" size={32} className="text-orange-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-300">Push-уведомления</div>
                  </div>
                  <div className="text-center">
                    <Icon name="Zap" size={32} className="text-orange-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-300">Быстрый доступ</div>
                  </div>
                  <div className="text-center">
                    <Icon name="Shield" size={32} className="text-orange-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-300">Безопасность</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Для пользователей из <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Казахстана</span>
          </h2>
          <div className="max-w-4xl text-gray-300 space-y-4">
            <p>
              Вавада кз — специальная версия платформы, адаптированная для пользователей из Казахстана. Вавада казахстан предлагает локализованный интерфейс, поддержку местных платежных систем и валют. Служба поддержки работает на казахском и русском языках.
            </p>
            <p>
              Вавада casino 2025 kz включает специальные предложения для казахстанских пользователей. Платформа поддерживает популярные в Казахстане способы пополнения и вывода средств. Все операции проводятся в соответствии с местным законодательством.
            </p>
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
            <Link to="/chat">
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Онлайн чат
              </Button>
            </Link>
            <Link to="/support">
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
                <Icon name="Mail" size={20} className="mr-2" />
                Email
              </Button>
            </Link>
            <Link to="/phone">
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black">
                <Icon name="Phone" size={20} className="mr-2" />
                Телефон
              </Button>
            </Link>
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