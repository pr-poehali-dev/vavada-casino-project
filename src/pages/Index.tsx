import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-black py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-500">VAVADA</div>
          <div className="space-x-4">
            <button className="bg-orange-500 px-4 py-2 rounded">Войти</button>
            <button className="bg-green-500 px-4 py-2 rounded">Регистрация</button>
          </div>
        </div>
      </header>

      {/* Hero Section with H1 */}
      <section className="py-20 bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Казино Vavada - рабочее зеркало - Лучшие слоты и джекпоты
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Рабочее зеркало Вавада на сегодня 2025 ⚡ Официальный сайт online, регистрация, промокоды. Актуальные ссылки и бонусы 🎁
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded text-lg">
            🎮 Начать играть
          </button>
        </div>
      </section>

      {/* Slots Section with H2 */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Популярные Слоты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-white text-lg mb-2">Книга Фараона</h3>
              <p className="text-gray-400 text-sm mb-4">RTP: 96.28%</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded">Играть</button>
            </div>
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-white text-lg mb-2">Сладкая Бонанза</h3>
              <p className="text-gray-400 text-sm mb-4">RTP: 96.51%</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded">Играть</button>
            </div>
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-white text-lg mb-2">Волк Золото</h3>
              <p className="text-gray-400 text-sm mb-4">RTP: 96.01%</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded">Играть</button>
            </div>
            <div className="bg-gray-800 p-6 rounded">
              <h3 className="text-white text-lg mb-2">Магия Фруктов</h3>
              <p className="text-gray-400 text-sm mb-4">RTP: 96.45%</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded">Играть</button>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section with H2 */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Щедрые Бонусы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
              <h3 className="text-white text-xl mb-2">Приветственный бонус</h3>
              <p className="text-gray-300 mb-4">До 50,000₽ + 200 FS</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded">Получить</button>
            </div>
            <div className="bg-gray-900 p-6 rounded text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">25%</div>
              <h3 className="text-white text-xl mb-2">Ежедневный бонус</h3>
              <p className="text-gray-300 mb-4">Каждый день до 10,000₽</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded">Получить</button>
            </div>
            <div className="bg-gray-900 p-6 rounded text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">10%</div>
              <h3 className="text-white text-xl mb-2">Кэшбэк</h3>
              <p className="text-gray-300 mb-4">Возврат проигранных средств</p>
              <button className="w-full bg-orange-500 text-white py-2 rounded">Получить</button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with H2 */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Официальный сайт Вавада и рабочие зеркала
          </h2>
          <div className="text-gray-300 space-y-4 max-w-4xl">
            <p>
              Официальный сайт Вавада регулярно подвергается блокировкам со стороны регулирующих органов, 
              поэтому пользователи часто ищут альтернативные способы доступа. Сайт вавады работает через 
              систему зеркал — точных копий основного ресурса с аналогичным функционалом.
            </p>
            <p>
              Рабочее зеркало вавады обеспечивает стабильный доступ к платформе даже при блокировке 
              основного домена. Зеркало вавады на сегодня можно найти через официальные каналы поддержки 
              или специализированные ресурсы.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section with H2 */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Часто задаваемые вопросы
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-gray-900 p-6 rounded">
              <h3 className="text-white text-lg mb-2">Как зарегистрироваться в Вавада?</h3>
              <p className="text-gray-300 text-sm">
                Нажмите кнопку "Регистрация", заполните форму с основными данными (email, пароль, телефон). 
                Подтвердите email и можете начинать играть.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded">
              <h3 className="text-white text-lg mb-2">Сколько времени занимает вывод средств?</h3>
              <p className="text-gray-300 text-sm">
                На банковские карты - до 24 часов, на электронные кошельки - до 2 часов, 
                криптовалюты - до 1 часа.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-orange-500 mb-4">VAVADA CASINO</div>
          <p className="text-gray-400 text-sm">Играйте ответственно. 18+</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;