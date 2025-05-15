import React from 'react';

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
  return (
    <picture className={className}>
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
        className="w-full h-full object-cover"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
    </picture>
  );
};

export default OptimizedImage; 