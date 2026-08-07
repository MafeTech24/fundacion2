import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showSubtitle = true,
}) => {
  const textColor = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const subtitleColor = variant === 'dark' ? 'text-teal-200' : 'text-teal-700';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="brand-logo">
      {/* SVG Icon representing caring hands forming a globe and protective leaf */}
      <div className="relative flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-500 flex items-center justify-center shadow-sm shadow-teal-700/20 ring-1 ring-white/20">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-white"
          aria-hidden="true"
        >
          {/* Globe & Leaf / Hands icon */}
          <circle cx="12" cy="12" r="9" className="opacity-40" strokeWidth="1.2" />
          <path d="M12 3a9 9 0 0 1 9 9c0 4.97-4.03 9-9 9a9 9 0 0 1-9-9" strokeDasharray="2 2" className="opacity-60" />
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="currentColor" className="opacity-90" />
          <path d="M12 21c-4.97 0-9-4.03-9-9 0-2.5 1-4.8 2.6-6.4" />
          <path d="M16.5 7.5A8.96 8.96 0 0 1 21 12c0 2.5-1 4.8-2.6 6.4" />
          <path d="M12 6v6l4 2" strokeWidth="2" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-extrabold text-base md:text-lg tracking-tight leading-none font-display ${textColor}`}>
          FUNDACIÓN
        </span>
        <span className="text-xs md:text-sm font-bold text-teal-600 tracking-wide uppercase leading-tight">
          Por Un Mundo Mejor
        </span>
        {showSubtitle && (
          <span className={`text-[10px] font-medium tracking-tight mt-0.5 ${subtitleColor}`}>
            Atención y Prevención de Adicciones
          </span>
        )}
      </div>
    </div>
  );
};
