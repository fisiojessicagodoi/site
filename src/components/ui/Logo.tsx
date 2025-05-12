import React from 'react';
import JessicaLogo from '../../assets/Jéssica.png';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'currentColor' }) => {
  return (
    <div className="flex items-center">
      <img
        src={JessicaLogo}
        alt="Logo Jéssica Godoi"
        className="h-10 w-10 object-contain"
        style={{ filter: color === 'white' ? 'brightness(0) invert(1)' : 'none' }}
      />
    </div>
  );
};

export default Logo;