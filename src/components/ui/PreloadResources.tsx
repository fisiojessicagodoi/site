import React from 'react';

const PreloadResources = () => {
  return (
    <>
      {/* Preload de fontes críticas */}
      <link
        rel="preload"
        href="/fonts/inter-var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Preload de imagens críticas */}
      <link
        rel="preload"
        href="/assets/profile.webp"
        as="image"
        type="image/webp"
      />
      
      {/* Preload de CSS crítico */}
      <link
        rel="preload"
        href="/styles/critical.css"
        as="style"
      />
    </>
  );
};

export default PreloadResources; 