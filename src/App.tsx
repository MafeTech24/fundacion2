import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { AccessibilityBar } from './components/common/AccessibilityBar';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

import { HeroSection } from './components/sections/HeroSection';
import { ThreeAreasSection } from './components/sections/ThreeAreasSection';
import { AboutSection } from './components/sections/AboutSection';
import { PreventionSection } from './components/sections/PreventionSection';
import { AccompanimentSection } from './components/sections/AccompanimentSection';
import { FamiliesSection } from './components/sections/FamiliesSection';
import { CommunitySection } from './components/sections/CommunitySection';
import { OrientationWizard } from './components/sections/OrientationWizard';
import { ResourcesFaqSection } from './components/sections/ResourcesFaqSection';
import { ContactSection } from './components/sections/ContactSection';

import { Modal } from './components/ui/Modal';
import { Button } from './components/ui/Button';
import { MessageCircle, Mail, HeartHandshake } from 'lucide-react';

export default function App() {
  const [isOrientationModalOpen, setIsOrientationModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [modalInitialMotivo, setModalInitialMotivo] = useState('para_mi');
  const [modalInitialDetails, setModalInitialDetails] = useState('');

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'inicio',
        'tres-areas',
        'fundacion',
        'prevencion',
        'acompanamiento',
        'familias',
        'capacitacion',
        'recursos',
        'contacto',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModalWithMotivo = (motivo: string = 'para_mi', details: string = '') => {
    setModalInitialMotivo(motivo);
    setModalInitialDetails(details);
    setIsOrientationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* WCAG Accessibility bar */}
      <AccessibilityBar />

      {/* Main Header / Navbar */}
      <Header
        onOpenOrientationModal={() => openModalWithMotivo('para_mi')}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection
          onOpenOrientationModal={() => openModalWithMotivo('para_mi')}
        />

        {/* 2. Tres áreas principales (Prevención, Acompañamiento, Familias) */}
        <ThreeAreasSection
          onSelectArea={(area) => openModalWithMotivo(area)}
        />

        {/* 3. Sobre la Fundación (Propósito, Trayectoria, Filosofía) */}
        <AboutSection />

        {/* 4. Prevención (Sin Miedo, Autocuidado, Vínculos, Proyectos) */}
        <PreventionSection />

        {/* 5. Acompañamiento (Evaluación individualizada, Pasos) */}
        <AccompanimentSection
          onOpenOrientationModal={() => openModalWithMotivo('para_mi', 'Solicitud de evaluación y orientación individual.')}
        />

        {/* 6. Familias ("Acompañar también significa aprender a acompañarse") */}
        <FamiliesSection
          onOpenOrientationModal={() => openModalWithMotivo('para_familiar', 'Solicitud de orientación familiar.')}
        />

        {/* Interactive Guided Step-by-Step Wizard */}
        <OrientationWizard
          onSelectOption={(motivo, details) => openModalWithMotivo(motivo, details)}
        />

        {/* 7. Capacitación y Comunidad (Cursos, Talleres, Jornadas, Charlas) */}
        <CommunitySection />

        {/* 8. Recursos Gratis & Preguntas Frecuentes */}
        <ResourcesFaqSection />

        {/* 9. Contacto & Formulario Confidencial */}
        <ContactSection
          initialMotivo={modalInitialMotivo}
          initialDetails={modalInitialDetails}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* High Priority Guidance Modal Dialog */}
      <Modal
        isOpen={isOrientationModalOpen}
        onClose={() => setIsOrientationModalOpen(false)}
        title="Atención y Orientación Confidencial"
        subtitle="Fundación Por Un Mundo Mejor · Córdoba, Argentina"
        maxWidth="lg"
      >
        <div className="space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            Elegí la vía de contacto que te resulte más cómoda. Nuestro equipo profesional te responderá con total reserva y respeto.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/5493511234567?text=Hola,%20quisiera%20solicitar%20orientaci%C3%B3n%20confidencial."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-2xl flex flex-col justify-between transition-colors cursor-pointer group"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-white stroke-emerald-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-base font-display">
                  WhatsApp Directo
                </h4>
                <p className="text-xs text-slate-600">
                  Respuesta inmediata en horario institucional o al siguiente día hábil.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 mt-4 group-hover:translate-x-1 transition-transform">
                Iniciar chat confidencial →
              </span>
            </a>

            <button
              onClick={() => {
                setIsOrientationModalOpen(false);
                const el = document.querySelector('#contacto');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-5 bg-teal-50 hover:bg-teal-100/80 border border-teal-200 rounded-2xl flex flex-col justify-between text-left transition-colors cursor-pointer group"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-base font-display">
                  Formulario Web
                </h4>
                <p className="text-xs text-slate-600">
                  Dejanos tus datos de contacto y motivo para llamarte.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 mt-4 group-hover:translate-x-1 transition-transform">
                Completar formulario web →
              </span>
            </button>
          </div>

          <div className="pt-2 text-center text-xs text-slate-400">
            * Recordá que actualmente la Fundación no ofrece servicios de internación residencial.
          </div>
        </div>
      </Modal>
    </div>
  );
}
