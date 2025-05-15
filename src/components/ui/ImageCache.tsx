import React, { useEffect, useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface ImageCacheProps {
  src: string;
  webpSrc?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const ImageCache: React.FC<ImageCacheProps> = (props) => {
  const [isCached, setIsCached] = useState(false);

  useEffect(() => {
    const cacheImage = async () => {
      try {
        const cache = await caches.open('image-cache');
        const response = await fetch(props.src);
        await cache.put(props.src, response);
        setIsCached(true);
      } catch (error) {
        console.error('Erro ao cachear imagem:', error);
      }
    };

    if (props.priority) {
      cacheImage();
    }
  }, [props.src, props.priority]);

  return (
    <OptimizedImage
      {...props}
      className={`${props.className} ${isCached ? 'opacity-100' : 'opacity-0'}`}
    />
  );
};

export default ImageCache; 