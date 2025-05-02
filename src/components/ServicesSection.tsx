import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: 'Покраска',
    description: 'Профессиональная покраска бамперов с использованием качественных материалов и точным подбором цвета.',
    price: 'от 3000 ₽',
    imageUrl: 'https://cdn.poehali.dev/files/060cbda9-1cad-47a7-8ef3-e5582ce95f4e.jpg'
  },
  {
    id: 2,
    title: 'Полировка',
    description: 'Восстановление внешнего вида бампера, устранение мелких царапин, потертостей и следов эксплуатации.',
    price: 'от 1500 ₽',
    imageUrl: 'https://cdn.poehali.dev/files/e1e9ae73-3a37-48b6-a6c0-ac3a20387fda.jpg'
  },
  {
    id: 3,
    title: 'Ремонт трещин и сколов',
    description: 'Профессиональный ремонт повреждений бампера любой сложности, включая сквозные трещины и глубокие сколы.',
    price: 'от 500 ₽',
    imageUrl: 'https://cdn.poehali.dev/files/f3903c47-7d01-4e58-b0ec-ed7a8970853b.jpg'
  },
  {
    id: 4,
    title: 'Восстановление геометрии',
    description: 'Полное восстановление первоначальной формы бампера после деформации, вмятин и других повреждений.',
    price: 'от 1500 ₽',
    imageUrl: 'https://cdn.poehali.dev/files/39bfcc35-f6f3-41e9-a3fc-3d50796b7934.jpg'
  }
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;