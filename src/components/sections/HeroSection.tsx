import React from 'react';
import { HeartHandshake, ArrowDownRight, ShieldCheck, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

interface HeroSectionProps {
  onOpenOrientationModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenOrientationModal,
}) => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-teal-50/70 via-white to-slate-50/50 overflow-hidden"
    >
      {/* Abstract Background Design Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-teal-900 border border-teal-200/70 text-xs sm:text-sm font-semibold tracking-tight shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>Fundación en Córdoba · Prevención y Salud Mental</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display leading-[1.15]">
              Prevenir, acompañar y construir{' '}
              <span className="text-teal-700 underline decoration-teal-300 decoration-wavy decoration-2 underline-offset-4">
                nuevas posibilidades
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              Trabajamos en prevención, orientación y acompañamiento frente al consumo problemático, promoviendo la autonomía, el cuidado de la salud mental y la construcción de proyectos de vida.
            </p>

            {/* Main CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenOrientationModal}
                icon={<HeartHandshake className="w-5 h-5" />}
                id="hero-cta-orientacion"
              >
                Necesito orientación
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#fundacion')}
                icon={<ArrowDownRight className="w-5 h-5 text-teal-600" />}
                id="hero-cta-conocenos"
              >
                Conocé la Fundación
              </Button>
            </div>

            {/* Key Value Pill Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200/60">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Atención Confidencial</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Orientación Familiar</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-100 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Enfoque Humano</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Graphic Illustration */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white p-6 sm:p-8 rounded-3xl border border-teal-100/80 shadow-xl shadow-teal-900/5">
              {/* Photo representation using warm, human, empathetic SVG/Canvas theme */}
              <div className="relative h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-700 overflow-hidden flex flex-col justify-between p-6 text-white shadow-inner">
                {/* Decorative background shapes */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white">
                    <Sparkles className="w-3.5 h-3.5 text-teal-200" />
                    Córdoba, Argentina
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="relative z-10 space-y-2">
                  <p className="text-xs font-bold text-teal-100 uppercase tracking-wider">
                    Espacios de Escucha & Acompañamiento
                  </p>
                  <p className="text-xl sm:text-2xl font-bold font-display leading-tight">
                    "Un espacio humano para volver a empezar con autonomía y respeto."
                  </p>
                </div>

                <div className="relative z-10 flex items-center gap-3 pt-2 border-t border-white/20">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-teal-200 ring-2 ring-teal-600 flex items-center justify-center text-[10px] font-bold text-teal-900">
                      PS
                    </div>
                    <div className="w-7 h-7 rounded-full bg-emerald-200 ring-2 ring-teal-600 flex items-center justify-center text-[10px] font-bold text-emerald-900">
                      TS
                    </div>
                    <div className="w-7 h-7 rounded-full bg-teal-100 ring-2 ring-teal-600 flex items-center justify-center text-[10px] font-bold text-teal-800">
                      ED
                    </div>
                  </div>
                  <span className="text-xs text-teal-100 font-medium">
                    Equipo Interdisciplinario de Salud
                  </span>
                </div>
              </div>

              {/* Floating Quick Action Box */}
              <div className="mt-4 p-4 bg-teal-50/80 rounded-2xl border border-teal-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">
                    ¿Buscás ayuda para vos o un familiar?
                  </span>
                  <span className="text-slate-600">
                    Nuestras vías de orientación confidencial están abiertas.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
