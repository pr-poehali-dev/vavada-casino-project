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
            Вавада — это популярная игровая платформа, которая привлекает миллионы пользователей по всему миру. 
            Платформа известна под различными вариантами написания: vadaa, vavadaa, vavada, что связано с 
            особенностями доменных имен и региональными ограничениями.
          </p>
          
          {/* Jackpots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-sm text-gray-400">Мега Джекпот</div>
              <div className="text-xl font-bold text-white">₽12,543,210</div>
              <div className="text-green-400 text-xs">📈 +5.2%</div>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-sm text-gray-400">Супер Джекпот</div>
              <div className="text-xl font-bold text-white">₽3,847,650</div>
              <div className="text-green-400 text-xs">📈 +3.1%</div>
            </div>
            <div className="bg-gray-700 p-4 rounded">
              <div className="text-sm text-gray-400">Мини Джекпот</div>
              <div className="text-xl font-bold text-white">₽456,789</div>
              <div className="text-green-400 text-xs">📈 +8.7%</div>
            </div>
          </div>
          
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
          <div className="text-gray-300 space-y-6 max-w-4xl">
            <p className="text-base leading-relaxed">
              Официальный сайт Вавада регулярно подвергается блокировкам со стороны регулирующих органов, поэтому пользователи часто ищут альтернативные способы доступа. Сайт вавады работает через систему зеркал — точных копий основного ресурса с аналогичным функционалом.
            </p>
            <p className="text-base leading-relaxed">
              Рабочее зеркало вавады обеспечивает стабильный доступ к платформе даже при блокировке основного домена. Зеркало вавады на сегодня можно найти через официальные каналы поддержки или специализированные ресурсы. Важно использовать только проверенные источники для получения актуальных ссылок.
            </p>
            <p className="text-base leading-relaxed">
              Вавада зеркало сегодня обновляется автоматически, обеспечивая непрерывную работу сервиса. Пользователи могут получить доступ к вавада зеркало рабочее на сегодня через различные каналы связи. Все зеркала полностью дублируют функционал основного сайта, включая регистрацию, депозиты, игры и вывод средств.
            </p>
            <div className="bg-gray-800 p-6 rounded mt-6">
              <h3 className="text-white text-xl mb-4">Преимущества использования зеркал Вавада:</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Полная идентичность основному сайту</li>
                <li>Защищенное SSL-соединение</li>
                <li>Сохранение всех пользовательских данных</li>
                <li>Доступность всех игр и функций</li>
                <li>Быстрая загрузка и стабильная работа</li>
              </ul>
            </div>
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
                криптовалюты - до 1 часа. Первый вывод может занять до 72 часов для верификации.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded">
              <h3 className="text-white text-lg mb-2">Какие бонусы доступны новым игрокам?</h3>
              <p className="text-gray-300 text-sm">
                Приветственный бонус 100% до 50,000₽ + 200 фриспинов, еженедельные бонусы до 25%, 
                кэшбэк 10%, участие в турнирах с призовыми фондами до 1,000,000₽.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded">
              <h3 className="text-white text-lg mb-2">Безопасно ли играть в Вавада?</h3>
              <p className="text-gray-300 text-sm">
                Да, платформа использует SSL-шифрование, лицензирована, проходит регулярные аудиты RNG, 
                средства игроков хранятся на отдельных счетах. Поддержка работает 24/7.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded">
              <h3 className="text-white text-lg mb-2">Что делать если сайт заблокирован?</h3>
              <p className="text-gray-300 text-sm">
                Используйте рабочие зеркала, VPN, или мобильное приложение. Актуальные ссылки всегда 
                доступны в службе поддержки. Зеркала обновляются автоматически.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Section with H2 */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Турниры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded border border-orange-500/30">
              <h3 className="text-white text-xl font-bold mb-2">🏆 Битва Слотов</h3>
              <div className="text-orange-500 text-2xl font-bold mb-2">₽1,000,000</div>
              <div className="text-gray-300 text-sm mb-4">
                <div>👥 Участников: 2,847</div>
                <div>⏱️ Осталось: 2д 14ч</div>
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded">Участвовать</button>
            </div>
            <div className="bg-gray-800 p-6 rounded border border-orange-500/30">
              <h3 className="text-white text-xl font-bold mb-2">🎰 Джекпот Гонка</h3>
              <div className="text-orange-500 text-2xl font-bold mb-2">₽500,000</div>
              <div className="text-gray-300 text-sm mb-4">
                <div>👥 Участников: 1,234</div>
                <div>⏱️ Осталось: 1д 8ч</div>
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded">Участвовать</button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section with H2 */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Регистрация в казино Вавада
          </h2>
          <div className="text-gray-300 space-y-6 max-w-4xl">
            <p className="text-base leading-relaxed">
              Регистрация в казино Вавада - это простой процесс, который займет всего несколько минут. Процедура создания аккаунта включает заполнение базовой информации и подтверждение контактных данных.
            </p>
            <div className="bg-gray-900 p-6 rounded">
              <h3 className="text-white text-xl mb-4">Пошаговая инструкция по регистрации:</h3>
              <ol className="text-gray-300 space-y-2 list-decimal list-inside">
                <li>Нажмите кнопку "Регистрация" на главной странице</li>
                <li>Заполните форму: email, пароль, номер телефона</li>
                <li>Подтвердите согласие с правилами казино</li>
                <li>Нажмите кнопку "Создать аккаунт"</li>
                <li>Подтвердите email адрес по ссылке из письма</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section with H2 */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">
            Способы пополнения и вывода средств
          </h2>
          <div className="text-gray-300 space-y-6 max-w-4xl">
            <p className="text-base leading-relaxed">
              Вавада предлагает широкий выбор платежных методов для удобства игроков. Все транзакции защищены современными системами шифрования, обеспечивающими безопасность финансовых операций.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded">
                <h3 className="text-white text-lg mb-4">💳 Банковские карты</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Visa, MasterCard, МИР</li>
                  <li>• Пополнение: от 100₽</li>
                  <li>• Вывод: от 500₽</li>
                  <li>• Время: до 24 часов</li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded">
                <h3 className="text-white text-lg mb-4">💰 Электронные кошельки</h3>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Qiwi, WebMoney, ЮMoney</li>
                  <li>• Пополнение: от 100₽</li>
                  <li>• Вывод: от 500₽</li>
                  <li>• Время: до 2 часов</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section with H2 */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Отзывы игроков
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-6 rounded">
              <div className="flex items-center mb-3">
                <div className="text-orange-500 mr-2">⭐⭐⭐⭐⭐</div>
                <div className="text-white font-semibold">Александр К.</div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                "Отлично работает, быстрые выплаты! Играю уже полгода, проблем не было. Поддержка отвечает быстро."
              </p>
              <div className="text-green-400 text-sm">Выигрыш: ₽45,000 • Book of Ra</div>
            </div>
            <div className="bg-gray-900 p-6 rounded">
              <div className="flex items-center mb-3">
                <div className="text-orange-500 mr-2">⭐⭐⭐⭐⭐</div>
                <div className="text-white font-semibold">Мария С.</div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                "Крутое казино! Бонусы хорошие, особенно приветственный. Мобильная версия работает без глюков."
              </p>
              <div className="text-green-400 text-sm">Выигрыш: ₽23,500 • Sweet Bonanza</div>
            </div>
            <div className="bg-gray-900 p-6 rounded">
              <div className="flex items-center mb-3">
                <div className="text-orange-500 mr-2">⭐⭐⭐⭐</div>
                <div className="text-white font-semibold">Дмитрий П.</div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                "Играю месяц, пока доволен. RTP честный, выводил уже несколько раз - все четко и без задержек."
              </p>
              <div className="text-green-400 text-sm">Выигрыш: ₽67,200 • Wolf Gold</div>
            </div>
            <div className="bg-gray-900 p-6 rounded">
              <div className="flex items-center mb-3">
                <div className="text-orange-500 mr-2">⭐⭐⭐⭐⭐</div>
                <div className="text-white font-semibold">Елена В.</div>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                "Лучшее казино! Огромный выбор слотов, красивый дизайн. Выиграла крупную сумму, вывели за день."
              </p>
              <div className="text-green-400 text-sm">Выигрыш: ₽89,400 • Gates of Olympus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section with H2 */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Нужна помощь?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Наша служба поддержки работает 24/7 и готова помочь вам в любое время
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded">
              💬 Онлайн чат
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded">
              📧 Email
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded">
              📞 Телефон
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-orange-500 mb-4">VAVADA CASINO</div>
          <p className="text-gray-400 mb-6 text-sm">Играйте ответственно. 18+</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-orange-400 transition-colors">Условия использования</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Ответственная игра</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;