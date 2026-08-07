import React, { useState } from 'react';
import { Eye, Type, RotateCcw } from 'lucide-react';

export const AccessibilityBar: React.FC = () => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState(false);

  const applyFontSize = (size: 'normal' | 'large' | 'xlarge') => {
    setFontSize(size);
    const root = document.documentElement;
    if (size === 'normal') {
      root.style.fontSize = '100%';
    } else if (size === 'large') {
      root.style.fontSize = '112.5%';
    } else {
      root.style.fontSize = '125%';
    }
  };

  const toggleContrast = () => {
    const next = !highContrast;
    setHighContrast(next);
    if (next) {
      document.documentElement.classList.add('contrast-125', 'saturate-150');
    } else {
      document.documentElement.classList.remove('contrast-125', 'saturate-150');
    }
  };

  const resetAccess = () => {
    applyFontSize('normal');
    setHighContrast(false);
    document.documentElement.classList.remove('contrast-125', 'saturate-150');
  };

  return (
    <div className="bg-slate-800 text-slate-200 text-xs py-1.5 px-4 hidden sm:block border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] text-slate-300">
          <span className="font-semibold text-teal-300">Accesibilidad Web:</span>
          <span>Cumple con pautas WCAG 2.1</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Font Size Adjuster */}
          <div className="flex items-center gap-1.5">
            <Type className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] text-slate-400 mr-1">Tamaño de letra:</span>
            <button
              onClick={() => applyFontSize('normal')}
              className={`px-1.5 py-0.5 rounded font-bold text-[11px] ${
                fontSize === 'normal' ? 'bg-teal-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
              title="Tamaño normal"
            >
              A
            </button>
            <button
              onClick={() => applyFontSize('large')}
              className={`px-1.5 py-0.5 rounded font-bold text-xs ${
                fontSize === 'large' ? 'bg-teal-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
              title="Tamaño grande"
            >
              A+
            </button>
            <button
              onClick={() => applyFontSize('xlarge')}
              className={`px-1.5 py-0.5 rounded font-bold text-sm ${
                fontSize === 'xlarge' ? 'bg-teal-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
              title="Tamaño extra grande"
            >
              A++
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button
            onClick={toggleContrast}
            className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
              highContrast ? 'bg-amber-400 text-slate-900 font-bold' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            <Eye className="w-3 h-3" />
            {highContrast ? 'Alto contraste activo' : 'Alto contraste'}
          </button>

          {/* Reset */}
          {(fontSize !== 'normal' || highContrast) && (
            <button
              onClick={resetAccess}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white underline"
            >
              <RotateCcw className="w-3 h-3" /> Restablecer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
