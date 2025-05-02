import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Александр М.',
    date: 'Март 2025',
    text: 'Отличный сервис! Быстро отремонтировали трещину на бампере, качество на высоте. Цена адекватная, всем рекомендую.',
    rating: 5
  },
  {
    id: 2,
    name: 'Елена К.',
    date: 'Январь 2025',
    text: 'Обращалась для восстановления геометрии бампера после небольшого ДТП. Ребята сделали всё очень аккуратно, не отличить от нового. Спасибо!',
    rating: 5
  },
  {
    id: 3,
    name: 'Дмитрий В.',
    date: 'Апрель 2024',
    text: 'Делал покраску бампера. Цвет подобрали идеально, переход не видно вообще. Работают быстро и профессионально.',
    rating: 4
  }
];

const ReviewSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Отзывы клиентов</h2>
        <p className="text-center text-gray-500 text-sm mb-12">*отзывы с приложения 2GIS</p>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {reviews.map(review => (
                <CarouselItem key={review.id} className="md:basis-1/1 lg:basis-1/2">
                  <div className="bg-white rounded-lg shadow-md p-6 m-2 h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{review.name}</h3>
                        <p className="text-gray-500 text-sm">{review.date}</p>
                      </div>
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" className="text-yellow-400 w-5 h-5" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;