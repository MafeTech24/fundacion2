import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'slate' | 'teal-light' | 'dark' | 'gradient';
  padding?: 'normal' | 'compact' | 'large';
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
  padding = 'normal',
}) => {
  const bgClasses = {
    white: 'bg-white text-slate-800',
    slate: 'bg-slate-50 text-slate-800',
    'teal-light': 'bg-teal-50/60 text-slate-800 border-y border-teal-100/50',
    dark: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-b from-teal-50/80 via-white to-slate-50 text-slate-800',
  };

  const paddingClasses = {
    compact: 'py-10 sm:py-14',
    normal: 'py-16 sm:py-24',
    large: 'py-20 sm:py-32',
  };

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${bgClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
};
