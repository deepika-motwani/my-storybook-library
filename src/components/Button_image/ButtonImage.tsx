import React from 'react';

export interface ButtonImageProps {
  src: string;
  alt: string;
}

const ButtonImage: React.FC<ButtonImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default ButtonImage;