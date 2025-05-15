import React from 'react';

const PreloadResources = () => {
  return (
    <>
      {/* Preload do CSS principal */}
      <link
        rel="preload"
        href="/src/index.css"
        as="style"
      />
      <noscript><link rel="stylesheet" href="/src/index.css" /></noscript>

      {/* Preload de fontes críticas (Google Fonts) */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        as="style"
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </noscript>
      
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