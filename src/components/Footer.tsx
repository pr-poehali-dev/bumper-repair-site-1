import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-drive-red mb-4">ДРАЙВ</h3>
            <p className="text-gray-400 text-sm">
              Профессиональный ремонт бамперов в Тольятти с 2018 года
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <p className="text-gray-400 mb-2">г. Тольятти, ул. Офицерская, 26</p>
            <p className="text-gray-400 mb-2">+7 (996) 621-53-96</p>
            <p className="text-gray-400">alexpro63@mail.ru</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Часы работы</h4>
            <p className="text-gray-400 mb-2">Пн-Пт: 9:00 - 19:00</p>
            <p className="text-gray-400 mb-2">Сб: 9:00 - 17:00</p>
            <p className="text-gray-400">Вс: выходной</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} «Драйв». Все права защищены.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;