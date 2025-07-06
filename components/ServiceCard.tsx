
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-harmony-purple-700 mb-2">{service.title}</h3>
        <p className="text-harmony-text text-sm leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
