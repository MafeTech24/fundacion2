import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  BookOpen,
  FileText,
  Download,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { FaqItem, ResourceGuide } from '../../types';

export const ResourcesFaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'Atención',
      question: '¿La Fundación ofrece servicios de internación?',
      answer:
        'Actualmente la Fundación NO ofrece internación residencial. Nuestros dispositivos se enfocan exclusivamente en la prevención, orientación ambulatoria, espacios terapéuticos individuales y acompañamiento familiar en salud mental.',
    },
    {
      id: 'faq-2',
      category: 'General',
      question: '¿La consulta y orientación es confidencial?',
      answer:
        'Sí, absolutamente. Todo primer contacto, conversación o entrevista se encuentra respaldado por el más estricto compromiso ético y secreto profesional de nuestro equipo interdisciplinario.',
    },
    {
      id: 'faq-3',
      category: 'Familias',
      question: '¿Puedo solicitar orientación si la persona con consumo no quiere asistir?',
      answer:
        'Sí. Gran parte de nuestras consultas iniciales provienen de familiares y seres queridos. Brindamos pautas concretas para abordar la conversación, cuidar tu salud emocional y propiciar la apertura a la ayuda.',
    },
    {
      id: 'faq-4',
      category: 'Atención',
      question: '¿Cómo es el proceso de primera atención?',
      answer:
        'Coordinamos una primera entrevista de orientación de manera presencial o virtual. En ella se realiza una escucha atenta y evaluación integral para acordar los pasos o espacios de acompañamiento más adecuados.',
    },
    {
      id: 'faq-5',
      category: 'Prevención',
      question: '¿Cómo puedo solicitar un taller de prevención para mi escuela o club?',
      answer:
        'Podés enviarnos una solicitud a través de nuestro formulario en la sección de Contacto seleccionando el motivo "Capacitación / Prevención", o escribirnos directamente a nuestro correo institucional.',
    },
  ];

  const guides: ResourceGuide[] = [
    {
      id: 'g-1',
      title: 'Guía de Orientación Inicial para Familias',
      description:
        'Pautas prácticas y recomendadas sobre cómo hablar en el hogar sobre el consumo problemático de sustancias.',
      readTime: 'Lectura de 5 min',
      category: 'Familias',
      iconName: 'Heart',
    },
    {
      id: 'g-2',
      title: 'Decálogo del Autocuidado y la Salud Mental',
      description:
        'Estrategias emocionales y hábitos protectores para fortalecer la resiliencia diaria.',
      readTime: 'Lectura de 4 min',
      category: 'Prevención',
      iconName: 'Shield',
    },
    {
      id: 'g-3',
      title: 'Manual de Prevención en Entornos Educativos',
      description:
        'Herramientas dirigidas a docentes para detectar señales tempranas y acompañar sin juzgar.',
      readTime: 'Lectura de 8 min',
      category: 'Educación',
      iconName: 'Book',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <Section id="recursos" background="slate" padding="normal">
      <Container>
        <SectionTitle
          eyebrow="Recursos & Preguntas Frecuentes"
          title="Respuestas claras para tomar decisiones con tranquilidad"
          subtitle="Aclaramos tus dudas institucionales y ponemos a tu disposición material de lectura sobre prevención y acompañamiento familiar."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* FAQ Column */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-teal-600" />
              Preguntas Frecuentes
            </h3>

            <div className="space-y-3">
              {faqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`bg-white rounded-2xl border transition-all ${
                      isOpen
                        ? 'border-teal-300 shadow-xs'
                        : 'border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-2xl"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base font-display">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Downloadable Guides Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-teal-600" />
              Guías e Información de Interés
            </h3>

            <div className="space-y-4">
              {guides.map((guide) => (
                <Card
                  key={guide.id}
                  padding="normal"
                  className="bg-white border-slate-200 hover:border-teal-300"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="teal">{guide.category}</Badge>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {guide.readTime}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-base font-display">
                      {guide.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {guide.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() =>
                          alert(
                            `Visualizando el documento "${guide.title}". Material institucional de libre descarga.`
                          )
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" /> Leer / Descargar material
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="p-4 bg-teal-50 rounded-2xl border border-teal-100 flex items-center gap-3 text-xs text-teal-900">
              <ShieldCheck className="w-5 h-5 text-teal-700 flex-shrink-0" />
              <span>
                Todos los contenidos son redactados por nuestro equipo técnico respetando criterios de no estigmatización.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
