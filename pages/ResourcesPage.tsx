
import React from 'react';
import { CONDITIONS_DATA } from '../constants';
import ConditionCard from '../components/ConditionCard';

const ResourcesPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-harmony-heading">Health Resources</h1>
          <p className="mt-4 text-lg text-harmony-text max-w-3xl mx-auto">
            Information on common conditions to help you stay informed about your health.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {CONDITIONS_DATA.map((condition) => (
            <ConditionCard key={condition.title} condition={condition} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
