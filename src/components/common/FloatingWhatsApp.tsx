import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  const whatsappNumber = '5493511234567'; // Córdoba placeholder format
  const defaultMessage = encodeURIComponent(
    'Hola, me comunico desde la web de la Fundación Por Un Mundo Mejor. Quisiera solicitar orientación confidencial.'
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 group select-none">
      {/* Tooltip Popup */}
      {tooltipOpen && (
        <div className="relative bg-white text-slate-800 text-xs font-medium px-3.5 py-2.5 rounded-2xl shadow-xl border border-teal-100 max-w-[220px] animate-fade-in flex items-start gap-2">
          <div className="flex-1">
            <p className="font-bold text-teal-800 leading-tight">¿Necesitás orientación?</p>
            <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
              Escribinos por WhatsApp. Consulta confidencial y gratuita.
            </p>
          </div>
          <button
            onClick={() => setTooltipOpen(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer rounded-full hover:bg-slate-100"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-teal-100" />
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp con Fundación Por Un Mundo Mejor"
        className="flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-600/30 ring-4 ring-emerald-500/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-emerald-500" />
      </a>
    </div>
  );
};
