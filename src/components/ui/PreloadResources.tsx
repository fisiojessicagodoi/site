import React from 'react';

const PreloadResources = () => {
  return (
    <>
      {/* Preload de imagens críticas */}
      <link
        rel="preload"
        href="/assets/profile.webp"
        as="image"
        type="image/webp"
      />
    </>
  );
};

export default PreloadResources; 