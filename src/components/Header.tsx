import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-[70vh] min-h-[500px] relative flex flex-col justify-between overflow-hidden">
      {/* Фоновое изображение с затемнением */}
      <div 
        className="absolute inset-0 bg-black/60 z-0"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/files/becdca74-dddc-4127-8f34-a437a9f24928.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Верхняя часть с логотипом и телефоном */}
      <div className="relative z-10 w-full py-6 px-4 md:px-8 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-drive-red">ДРАЙВ</h1>
        </div>
        
        <a 
          href="tel:+79966215396" 
          className="text-white font-medium text-lg md:text-xl hover:text-drive-red transition-colors"
        >
          +7 (996) 621-53-96
        </a>
      </div>
      
      {/* Адрес */}
      <div className="relative z-10 w-full py-6 px-4 flex justify-center">
        <p className="text-gray-400 text-sm">ул. Офицерская 26</p>
      </div>
    </header>
  );
};

export default Header;