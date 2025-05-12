import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <p className="text-terracota-600 font-medium mb-2 uppercase tracking-wider text-sm">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-terracota-600 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;