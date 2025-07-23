import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import RefLink from '@/components/RefLink';

const ContentSections = () => {
  return (
    <>
      {/* Content Sections */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 px-4">
            Официальный сайт <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Вавада</span> и рабочие зеркала
          </h2>
          <div className="text-gray-300 space-y-4 max-w-4xl text-sm sm:text-base px-4">
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

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 px-4">
            Доступ к платформе <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Вавада Online</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-gray-300 space-y-4 text-sm sm:text-base px-4 md:px-0">
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

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 px-4">
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

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 px-4">
            Мобильная версия и <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">приложения</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-300 space-y-4 text-sm sm:text-base px-4 md:px-0">
              <p>
                Вавада мобильная версия адаптирована для всех популярных мобильных устройств и планшетов. Мобильная версия сохраняет весь функционал десктопной платформы, включая регистрацию, депозиты, игры и поддержку.
              </p>
              <p>
                Скачать вавада можно через официальные магазины приложений или напрямую с сайта. Вавада приложение предлагает дополнительные возможности: push-уведомления о новых бонусах, быстрый доступ к любимым играм и оптимизированный интерфейс.
              </p>
              <div className="flex gap-4 mt-6">
                <RefLink className="w-full sm:w-auto">
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6">
                    <Icon name="Download" size={16} className="mr-2" />
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

      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900/30 to-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 px-4">
            Для пользователей из <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Казахстана</span>
          </h2>
          <div className="max-w-4xl text-gray-300 space-y-4 text-sm sm:text-base px-4">
            <p>
              Вавада кз — специальная версия платформы, адаптированная для пользователей из Казахстана. Вавада казахстан предлагает локализованный интерфейс, поддержку местных платежных систем и валют. Служба поддержки работает на казахском и русском языках.
            </p>
            <p>
              Вавада casino 2025 kz включает специальные предложения для казахстанских пользователей. Платформа поддерживает популярные в Казахстане способы пополнения и вывода средств. Все операции проводятся в соответствии с местным законодательством.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSections;