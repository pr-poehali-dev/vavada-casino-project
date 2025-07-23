import React from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import SlotsSection from '@/components/sections/SlotsSection';
import BonusesSection from '@/components/sections/BonusesSection';
import TournamentsSection from '@/components/sections/TournamentsSection';
import ContentSections from '@/components/sections/ContentSections';
import ReviewsSection from '@/components/sections/ReviewsSection';
import FAQSection from '@/components/sections/FAQSection';
import SupportSection from '@/components/sections/SupportSection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  const jackpots = [
    { name: 'Мега Джекпот', amount: '₽12,543,210', trend: '+5.2%' },
    { name: 'Супер Джекпот', amount: '₽3,847,650', trend: '+3.1%' },
    { name: 'Мини Джекпот', amount: '₽456,789', trend: '+8.7%' }
  ];

  const slots = [
    { name: 'Книга Фараона', provider: 'Play\'n GO', rtp: '96.28%', image: '/img/6f60c554-ff06-40bd-bf35-94651377b339.jpg' },
    { name: 'Сладкая Бонанза', provider: 'Pragmatic Play', rtp: '96.51%', image: '/img/e81b0bfe-c402-4880-ae31-851d42c7ad98.jpg' },
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

  const reviews = [
    { 
      name: 'Александр К.', 
      rating: 5, 
      text: 'Отлично работает, быстрые выплаты! Играю уже полгода, проблем не было. Поддержка отвечает быстро.', 
      game: 'Book of Ra',
      win: '₽45,000'
    },
    { 
      name: 'Мария С.', 
      rating: 5, 
      text: 'Крутое казино! Бонусы хорошие, особенно приветственный. Мобильная версия работает без глюков.', 
      game: 'Sweet Bonanza',
      win: '₽23,500'
    },
    { 
      name: 'Дмитрий П.', 
      rating: 4, 
      text: 'Играю месяц, пока доволен. RTP честный, выводил уже несколько раз - все четко и без задержек.', 
      game: 'Wolf Gold',
      win: '₽67,200'
    },
    { 
      name: 'Елена В.', 
      rating: 5, 
      text: 'Лучшее казино! Огромный выбор слотов, красивый дизайн. Выиграла крупную сумму, вывели за день.', 
      game: 'Gates of Olympus',
      win: '₽89,400'
    }
  ];

  const faqData = [
    {
      question: 'Как зарегистрироваться в Вавада?',
      answer: 'Нажмите кнопку "Регистрация", заполните форму с основными данными (email, пароль, телефон). Подтвердите email и можете начинать играть. Регистрация занимает менее 2 минут.'
    },
    {
      question: 'Какие способы пополнения и вывода средств доступны?',
      answer: 'Банковские карты (Visa/MasterCard/МИР), электронные кошельки (Qiwi, WebMoney, ЮMoney), банковские переводы, криптовалюты. Минимальный депозит - 100₽, вывод от 500₽.'
    },
    {
      question: 'Сколько времени занимает вывод средств?',
      answer: 'На банковские карты - до 24 часов, на электронные кошельки - до 2 часов, криптовалюты - до 1 часа. Первый вывод может занять до 72 часов для верификации.'
    },
    {
      question: 'Нужно ли проходить верификацию?',
      answer: 'Верификация обязательна для всех игроков. Загрузите фото паспорта и подтверждающий адрес документ в личном кабинете. Процесс занимает 24-48 часов.'
    },
    {
      question: 'Какие бонусы доступны новым игрокам?',
      answer: 'Приветственный бонус 100% до 50,000₽ + 200 фриспинов, еженедельные бонусы до 25%, кэшбэк 10%, участие в турнирах с призовыми фондами до 1,000,000₽.'
    },
    {
      question: 'Безопасно ли играть в Вавада?',
      answer: 'Да, платформа использует SSL-шифрование, лицензирована, проходит регулярные аудиты RNG, средства игроков хранятся на отдельных счетах. Поддержка работает 24/7.'
    },
    {
      question: 'Есть ли мобильное приложение?',
      answer: 'Да, доступно приложение для iOS и Android, а также адаптивная мобильная версия сайта. Все функции доступны на мобильных устройствах.'
    },
    {
      question: 'Что делать если сайт заблокирован?',
      answer: 'Используйте рабочие зеркала, VPN, или мобильное приложение. Актуальные ссылки всегда доступны в службе поддержки. Зеркала обновляются автоматически.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <HeroSection jackpots={jackpots} />
      <SlotsSection slots={slots} />
      <BonusesSection bonuses={bonuses} />
      <TournamentsSection tournaments={tournaments} />
      <ContentSections />
      <ReviewsSection reviews={reviews} />
      <FAQSection faqData={faqData} />
      <SupportSection />
      <Footer />
    </div>
  );
};

export default Index;