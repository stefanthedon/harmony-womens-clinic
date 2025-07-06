
import React from 'react';
import { Condition } from '../types';

interface ConditionCardProps {
  condition: Condition;
}

const ConditionCard: React.FC<ConditionCardProps> = ({ condition }) => {
  return (
    <div className="bg-harmony-purple-100 rounded-xl shadow-md overflow-hidden p-6 text-center">
      <img src={condition.imageUrl} alt={condition.title} className="w-full h-56 object-contain mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-harmony-purple-700 mb-3">{condition.title}</h3>
      <p className="text-harmony-text text-sm leading-relaxed">{condition.description}</p>
    </div>
  );
};

export default ConditionCard;
