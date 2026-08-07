import React from 'react';
import { Shield, HeartHandshake, Users, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface ThreeAreasSectionProps {
  onSelectArea: (area: 'prevencion' | 'acompanamiento' | 'familias') => void;
}

export const ThreeAreasSection: React.FC<ThreeAreasSectionProps> = ({
  onSelectArea,
}) => {
  const areas = [
    {
      id: 'prevencion' as const,
      title: 'Prevención Promocional',
      eyebrow: 'Estrategia Prioritaria',
      badgeText: 'Promoción de Salud',
      icon: Shield,
      color: 'teal',
      description:
        'Acciones educativas y comunitarias orientadas a promover el autocuidado, fortalecer factores de protección, desarrollar vínculos saludables y construir proyectos de vida personales.',
      points: [
        'Promoción del autocuidado y hábitos saludables',
        'Talleres en escuelas, instituciones y empresas',
        'Estrategias basadas en la autonomía y resiliencia',
      ],
      targetHash: '#prevencion',
    },
    {
      id: 'acompanamiento' as const,
      title: 'Acompañamiento & Orientación',
      eyebrow: 'Atención Personalizada',
      badgeText: 'Espacios de Escucha',
      icon: HeartHandshake,
      color: 'emerald',
      description:
        'Espacios de escucha activa y evaluación individualizada. Orientación profesional para abordar situaciones de consumo problemático respetando la singularidad de cada persona.',
      points: [
        'Primeras entrevistas de orientación y diagnóstico',
        'Espacios terapéuticos individuales ambulatorios',
        'Construcción colaborativa de alternativas posibles',
      ],
      targetHash: '#acompanamiento',
    },
    {
      id: 'familias' as const,
      title: 'Acompañamiento a Familias',
      eyebrow: 'Sostén Colectivo',
      badgeText: 'Orientación Familiar',
      icon: Users,
      color: 'amber',
      description:
        'Acompañar a un ser querido también implica aprender a cuidarse a uno mismo. Brindamos contención, orientación y herramientas prácticas para el entorno familiar y afectivo.',
      points: [
        'Grupos de orientación y escucha para familiares',
        'Pautas para una comunicación asertiva y saludable',
        'Espacio de apoyo emocional sin juzgar',
      ],
      targetHash: '#familias',
    },
  ];

  return (
    <Section id="tres-areas" background="slate" padding="normal">
      <Container>
        <SectionTitle
          eyebrow="Ejes de Trabajo Institucional"
          title="Tres pilares para abordar el consumo problemático"
          subtitle="Abordamos la problemática desde un enfoque integral, integrando la prevención positiva, la escucha individualizada y el sostén continuo al núcleo familiar."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area) => {
            const IconComponent = area.icon;
            return (
              <Card
                key={area.id}
                id={`card-area-${area.id}`}
                padding="large"
                className="flex flex-col justify-between relative group border border-slate-200/80 hover:border-teal-300"
              >
                <div className="space-y-5">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        area.id === 'prevencion'
                          ? 'bg-teal-100 text-teal-800'
                          : area.id === 'acompanamiento'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-teal-100/90 text-teal-900'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant={area.id === 'prevencion' ? 'teal' : area.id === 'acompanamiento' ? 'emerald' : 'slate'}>
                      {area.badgeText}
                    </Badge>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 block mb-1">
                      {area.eyebrow}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {area.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {area.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    {area.points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={area.targetHash}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectArea(area.id);
                      const el = document.querySelector(area.targetHash);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-900 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Conocer más sobre {area.id}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
