import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import posthog, { isPostHogConfigured } from '../../posthog';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  image,
  icon,
}) => {
  const captureServiceDetailsOpened = () => {
    if (isPostHogConfigured) {
      posthog.capture('service_details_opened', { placement: 'service_card', service_id: id });
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow">
        {icon && <div className="text-terracota-600 mb-4 flex items-center">{icon}</div>}
        <h3 className="font-serif text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <Link 
          to={`/services/${id}`} 
          className="inline-flex items-center text-terracota-600 hover:text-terracota-800 font-medium"
          onClick={captureServiceDetailsOpened}
        >
          Saiba mais <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;