import React from 'react';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section className="py-16 bg-white" id="contacts">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Наш адрес</h3>
              <p className="text-gray-700 flex items-center mb-2">
                <Icon name="MapPin" className="mr-2 text-drive-red" />
                г. Тольятти, ул. Офицерская, 26
              </p>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Телефоны:</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+79966215396" className="text-gray-700 hover:text-drive-red transition-colors flex items-center">
                      <Icon name="Phone" className="mr-2 text-drive-red" />
                      +7 (996) 621-53-96
                    </a>
                  </li>
                  <li>
                    <a href="tel:740877" className="text-gray-700 hover:text-drive-red transition-colors flex items-center">
                      <Icon name="Phone" className="mr-2 text-drive-red" />
                      740877
                    </a>
                  </li>
                  <li>
                    <a href="tel:+79277703126" className="text-gray-700 hover:text-drive-red transition-colors flex items-center">
                      <Icon name="Phone" className="mr-2 text-drive-red" />
                      +7 927 770 3126
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Email:</h4>
                <a href="mailto:alexpro63@mail.ru" className="text-gray-700 hover:text-drive-red transition-colors flex items-center">
                  <Icon name="Mail" className="mr-2 text-drive-red" />
                  alexpro63@mail.ru
                </a>
              </div>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Мы в социальных сетях:</h4>
                <a 
                  href="https://t.me/alexander_prodrive" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-drive-red transition-colors flex items-center"
                >
                  <Icon name="Send" className="mr-2 text-drive-red" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2347.2882347444395!2d49.402943977063786!3d53.5084605726558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416879a4a4e84b1b%3A0xe5c05425e7fac33!2z0J7RhNC40YbQtdGA0YHQutCw0Y8g0YPQuy4sIDI2LCDQotC-0LvRjNGP0YLRgtC4LCDQodCw0LzQsNGA0YHQutCw0Y8g0L7QsdC7LiwgNDQ1MDMw!5e0!3m2!1sru!2sru!4v1714588104947!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;