
import React from 'react';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-harmony-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-harmony-heading">Our Services</h1>
          <p className="mt-4 text-lg text-harmony-text max-w-3xl mx-auto">
            We provide a wide range of specialized services tailored to every stage of a woman's life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
