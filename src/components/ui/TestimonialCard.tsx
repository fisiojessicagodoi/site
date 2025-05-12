import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  name: string;
  role?: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  role,
  rating,
  image,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">{text}</p>
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        )}
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          {role && <p className="text-gray-500 text-sm">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;