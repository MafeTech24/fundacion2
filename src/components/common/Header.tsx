import React, { useState, useEffect } from 'react';
import { Menu, X, HeartHandshake, PhoneCall, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '../ui/Button';

interface HeaderProps {
  onOpenOrientationModal: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenOrientationModal,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'La Fundación', href: '#fundacion' },
    { name: 'Qué hacemos', href: '#tres-areas' },
    { name: 'Prevención', href: '#prevencion' },
    { name: 'Familias', href: '#familias' },
    { name: 'Capacitación', href: '#capacitacion' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white/90 backdrop-blur-xs py-4 border-b border-slate-100/50'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#inicio');
          }}
          className="focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1"
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1.5" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-150 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-teal-700 bg-teal-50/80 font-bold'
                  : 'text-slate-600 hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            onClick={onOpenOrientationModal}
            icon={<HeartHandshake className="w-4 h-4" />}
            className="hidden sm:inline-flex shadow-sm"
            id="nav-cta-btn"
          >
            Necesito orientación
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-slate-100 xl:hidden focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fade-in"
          id="mobile-menu"
        >
          <div className="p-2 mb-2 bg-teal-50/60 rounded-xl border border-teal-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-teal-900">
              Orientación y Prevención confidencial
            </span>
            <span className="text-[11px] font-bold text-teal-700 bg-white px-2 py-0.5 rounded-md border border-teal-200">
              Córdoba, AR
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-teal-800 bg-teal-50 font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-teal-700'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrientationModal();
              }}
              icon={<HeartHandshake className="w-4 h-4" />}
            >
              Necesito orientación
            </Button>

            <a
              href="https://wa.me/5493511234567?text=Hola,%20quisiera%20recibir%20orientaci%C3%B3n%20confidencial%20sobre%20consumo%20problem%C3%A1tico."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 rounded-xl border border-emerald-200/80 hover:bg-emerald-100 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              Contactar por WhatsApp directo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
