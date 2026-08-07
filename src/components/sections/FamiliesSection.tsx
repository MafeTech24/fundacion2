import React from 'react';
import {
  Heart,
  Users,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  HelpCircle,
  ArrowRight,
  Smile,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface FamiliesSectionProps {
  onOpenOrientationModal: () => void;
}

export const FamiliesSection: React.FC<FamiliesSectionProps> = ({
  onOpenOrientationModal,
}) => {
  const familyTools = [
    {
      title: 'Espacios de Escucha para el Entorno',
      desc: 'Un lugar seguro donde los familiares pueden expresar sus temores, dudas y cansancio sin sentirse juzgados.',
      icon: Heart,
    },
    {
      title: 'Pautas de Comunicación Asertiva',
      desc: 'Herramientas para transformar discusiones agotadoras en diálogos constructivos que abran caminos de acuerdo.',
      icon: MessageSquare,
    },
    {
      title: 'Establecimiento de Límites Saludables',
      desc: 'Aprender a cuidar la propia salud emocional y física mientras se acompaña con firmeza y afecto.',
      icon: ShieldCheck,
    },
    {
      title: 'Red de Apoyo Mutuo',
      desc: 'Encuentros grupales con otras familias que atraviesan vivencias similares para compartir aprendizajes y aliviar la soledad.',
      icon: Users,
    },
  ];

  return (
    <Section id="familias" background="slate" padding="normal">
      <Container>
        {/* Main Emotional Heading */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-200 mb-4">
            <Heart className="w-3.5 h-3.5 text-teal-600 fill-teal-600" />
            Orientación para Familias & Entornos Afectivos
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
            “Acompañar también significa aprender a acompañarse”
          </h2>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            Cuando un familiar o ser querido atraviesa un consumo problemático, todo el entorno sufre el impacto. Quien acompaña también necesita contención, información clara y herramientas para cuidar su propia vida emocional.
          </p>
        </div>

        {/* 4 Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {familyTools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <Card
                key={idx}
                padding="normal"
                className="bg-white border-slate-200/80 hover:border-teal-300"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-teal-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base font-display">
                    {tool.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Emotional Highlight Box */}
        <div className="mt-12 bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white p-8 sm:p-10 rounded-3xl shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
              No estás solo/a en este proceso
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display leading-tight">
              ¿No sabés cómo abordar la conversación con tu familiar?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Te orientamos de manera confidencial. Te ayudamos a preparar esa primera charla, evaluar las opciones y dar pasos seguros hacia la búsqueda de ayuda profesional.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <Button
                variant="white"
                size="md"
                onClick={onOpenOrientationModal}
                icon={<ArrowRight className="w-4 h-4 text-teal-800" />}
              >
                Solicitar orientación para familiares
              </Button>

              <a
                href="https://wa.me/5493511234567?text=Hola,%20quisiera%20recibir%20orientaci%C3%B3n%20para%20un%20familiar."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
