import React from 'react';
import {
  Heart,
  Sparkles,
  Users,
  BookOpen,
  Compass,
  Smile,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

export const PreventionSection: React.FC = () => {
  const preventionPillars = [
    {
      title: 'Autocuidado & Bienestar',
      desc: 'Brindar herramientas prácticas para reconectarnos con nuestras emociones, reconocer señales de alerta temprana y priorizar nuestra salud mental.',
      icon: Heart,
    },
    {
      title: 'Desarrollo de la Autonomía',
      desc: 'Fomentar el pensamiento crítico, la toma de decisiones consciente y el fortalecimiento de la autoestima en jóvenes y adultos.',
      icon: Compass,
    },
    {
      title: 'Vínculos de Confianza',
      desc: 'Crear redes afectivas seguras donde sea posible dialogar abiertamente, expresar vulnerabilidad y pedir ayuda a tiempo.',
      icon: Users,
    },
    {
      title: 'Educación & Formación',
      desc: 'Talleres en ámbitos educativos, deportivos y comunitarios para formar multiplicadores de conductas saludables.',
      icon: BookOpen,
    },
    {
      title: 'Construcción de Proyecto Personal',
      desc: 'Promover la búsqueda de pasiones, metas, trabajo y hábitos creativos que le den sentido al proyecto de vida individual.',
      icon: Sparkles,
    },
    {
      title: 'Fortalecimiento Comunitario',
      desc: 'Articular con instituciones locales para transformar los entornos en espacios inclusivos, protectores y estimulantes.',
      icon: Smile,
    },
  ];

  return (
    <Section id="prevencion" background="teal-light" padding="normal">
      <Container>
        <SectionTitle
          eyebrow="Enfoque Positivo y Promocional"
          title="La prevención se construye desde el cuidado, no desde el miedo"
          subtitle="Entendemos la prevención no como una prohibición coercitiva, sino como el fortalecimiento activo de los factores protectores, la salud mental y los lazos que sostienen la vida comunitaria."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preventionPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={idx}
                padding="normal"
                className="bg-white border-teal-100 hover:border-teal-300"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-teal-100/80 text-teal-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Informative Callout Banner */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-teal-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-slate-900 text-base sm:text-lg font-display">
                ¿Querés llevar un taller de prevención a tu escuela, institución o club?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Diseñamos charlas participativas y dispositivos de prevención comunitaria adaptados a cada grupo.
              </p>
            </div>
          </div>

          <a
            href="#contacto"
            className="flex-shrink-0 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
          >
            Solicitar actividad institucional
          </a>
        </div>
      </Container>
    </Section>
  );
};
