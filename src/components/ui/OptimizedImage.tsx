import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  webpSrc,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const aspectRatio = (height / width) * 100;

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = webpSrc || src;
      img.onload = () => setIsLoaded(true);
    }
  }, [src, webpSrc, priority]);

  return (
    <div 
      className={`relative ${className}`}
      style={{ 
        paddingBottom: `${aspectRatio}%`,
        backgroundColor: '#f3f4f6', // Cor de placeholder
      }}
    >
      <picture className="absolute inset-0">
        {webpSrc && (
          <source
            srcSet={webpSrc}
            type="image/webp"
          />
        )}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          decoding={priority ? 'sync' : 'async'}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
          onLoad={() => setIsLoaded(true)}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage; 