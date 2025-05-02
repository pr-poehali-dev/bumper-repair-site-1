import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  imageUrl,
  className
}) => {
  return (
    <div className={cn("service-card", className)}>
      <div className="relative h-48 overflow-hidden rounded-md mb-4">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      
      <div className="flex items-center mb-4">
        <span className="text-drive-red font-semibold whitespace-nowrap">{price}</span>
        <span className="text-gray-500 text-xs ml-2">*зависит от сложности выполнения работ</span>
      </div>
      
      <a 
        href="tel:+79966215396" 
        className="call-button inline-block w-full text-center"
      >
        Позвонить
      </a>
    </div>
  );
};

export default ServiceCard;