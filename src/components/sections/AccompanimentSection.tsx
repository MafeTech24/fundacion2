import React from 'react';
import {
  HeartHandshake,
  ClipboardList,
  UserCheck,
  Compass,
  CheckCircle,
  HelpCircle,
  ShieldAlert,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

interface AccompanimentSectionProps {
  onOpenOrientationModal: () => void;
}

export const AccompanimentSection: React.FC<AccompanimentSectionProps> = ({
  onOpenOrientationModal,
}) => {
  const steps = [
    {
      num: '01',
      title: 'Primer Contacto & Orientación',
      desc: 'Un espacio confidencial y respetuoso para escuchar la inquietud inicial, despejar dudas y brindar primera contención.',
      icon: HeartHandshake,
    },
    {
      num: '02',
      title: 'Evaluación Integral e Individualizada',
      desc: 'Cada trayectoria de vida es única. Profesionales de la salud mental realizan una mirada multidimensional de la situación.',
      icon: ClipboardList,
    },
    {
      num: '03',
      title: 'Espacios Terapéuticos & Seguimiento',
      desc: 'Se acuerdan intervenciones ambulatorias, espacios de diálogo individual y orientación familiar con objetivos claros y progresivos.',
      icon: UserCheck,
    },
  ];

  return (
    <Section id="acompanamiento" background="white" padding="normal">
      <Container>
        <SectionTitle
          eyebrow="Acompañamiento & Orientación Respetuosa"
          title="Cada persona es única, cada proceso requiere una mirada singular"
          subtitle="No existen fórmulas preconcebidas. Abordamos cada consulta a través de una evaluación particular para ofrecer la orientación y el espacio de escucha más adecuado para la persona y su entorno."
        />

        {/* 3 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Card
                key={idx}
                padding="large"
                className="relative bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-teal-300 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center font-bold font-display shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-teal-200 font-display">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Informative Clarification Box on Modalities */}
        <div className="mt-12 bg-teal-50/80 p-6 sm:p-8 rounded-3xl border border-teal-200/90 text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white text-teal-800 text-xs font-bold border border-teal-200">
                <Compass className="w-3.5 h-3.5 text-teal-600" />
                Modalidad de Asistencia Ambulatoria
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                Modalidades de Orientación y Acompañamiento
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Nuestros dispositivos actuales están enfocados en la orientación ambulatoria, la contención en salud mental y el acompañamiento familiar. <strong>La Fundación no dispone de servicios de internación residencial.</strong> En caso de que la evaluación inicial sugiera la necesidad de otro nivel de atención, orientamos éticamente hacia los recursos de la red pública y comunitaria de Córdoba.
              </p>
            </div>

            <button
              onClick={onOpenOrientationModal}
              className="flex-shrink-0 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white text-sm font-bold rounded-xl shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              Solicitar entrevista de orientación
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
