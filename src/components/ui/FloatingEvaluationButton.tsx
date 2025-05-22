import React from 'react';

const FloatingButton: React.FC = () => (
  <>
    <style>
  .floating-button {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #a0522d; /* tom terracota escuro para bom contraste */
    color: white;
    padding: 12px 30px; /* mais largo */
    font-weight: 600;
    border-radius: 9999px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    z-index: 9999;
    font-size: 0.9rem;
    display: none;
    white-space: nowrap; /* impede quebra de linha */
    text-align: center;
  }
  @media (max-width: 768px) {
    .floating-button {
      display: block;
    }
  }
</style>
<a href="https://wa.link/32p5y9" target="_blank" rel="noopener noreferrer" class="floating-button">
  Comece com uma avaliação
</a>
  </>
);

export default FloatingButton;
