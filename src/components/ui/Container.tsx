import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'normal' | 'small' | 'wide';
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'normal',
  id,
}) => {
  const sizeClasses = {
    small: 'max-w-4xl',
    normal: 'max-w-7xl',
    wide: 'max-w-[88rem]',
  };

  return (
    <div
      id={id}
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </div>
  );
};
