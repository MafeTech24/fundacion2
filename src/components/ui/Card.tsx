import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: 'none' | 'compact' | 'normal' | 'large';
  bordered?: boolean;
  id?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  padding = 'normal',
  bordered = true,
  id,
  onClick,
}) => {
  const paddingStyles = {
    none: 'p-0',
    compact: 'p-4 sm:p-5',
    normal: 'p-6 sm:p-8',
    large: 'p-8 sm:p-10',
  };

  return (
    <div
      id={id}
      onClick={onClick}
      className={`bg-white rounded-2xl transition-all duration-300 ${
        bordered ? 'border border-slate-200/80 shadow-xs' : 'shadow-sm'
      } ${
        hoverEffect
          ? 'hover:shadow-md hover:border-teal-200 hover:-translate-y-0.5'
          : ''
      } ${paddingStyles[padding]} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
