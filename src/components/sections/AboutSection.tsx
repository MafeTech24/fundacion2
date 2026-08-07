import React from 'react';
import { Compass, Heart, Shield, Users, Award, Sparkles, BookOpen } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

export const AboutSection: React.FC = () => {
  const philosophyItems = [
    {
      title: 'Autonomía y Resiliencia',
      desc: 'Creemos en la capacidad de cada persona para tomar decisiones informadas y reconstruir su proyecto de vida.',
      icon: Compass,
    },
    {
      title: 'Autocuidado y Salud Mental',
      desc: 'Promovemos el bienestar integral y emocional como pilar fundamental de la prevención continua.',
      icon: Heart,
    },
    {
      title: 'Vínculos Saludables',
      desc: 'Fortalecemos la red afectiva y familiar para construir entornos de sostén y escucha sin prejuicios.',
      icon: Users,
    },
    {
      title: 'Inclusión y Comunidad',
      desc: 'El trabajo territorial y comunitario es esencial para generar oportunidades reales y libres de estigma.',
      icon: Sparkles,
    },
  ];

  return (
    <Section id="fundacion" background="white" padding="normal">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              eyebrow="Propósito e Identidad Institucional"
              title="Una trayectoria basada en el respeto humano y el compromiso social"
              align="left"
              className="mb-6"
            />

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              La <strong>Fundación Por Un Mundo Mejor</strong> es una organización no gubernamental con una destacada trayectoria en la provincia de Córdoba dedicada a la promoción de la salud mental, la prevención del consumo problemático de sustancias y la orientación comunitaria.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Nuestra filosofía concibe el cuidado de la salud como un proceso dinámico de empoderamiento personal y social. No etiquetamos a la persona por la problemática que atraviesa; en su lugar, trabajamos junto a ella para fortalecer sus capacidades, sus lazos afectivos y sus posibilidades de desarrollo pleno.
            </p>

            {/* Key Value Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-teal-600 text-white flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Trayectoria en Córdoba</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Años de trabajo institucional, técnico y social continuo.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-600 text-white flex-shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Enfoque de Derechos</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Respeto irrestricto por los derechos humanos y la dignidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards Column - Philosophy */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Ejes de Nuestra Filosofía
                </h3>
                <span className="text-xs font-semibold px-3 py-1 bg-teal-100 text-teal-800 rounded-full">
                  Valores Clave
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {philosophyItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={index}
                      padding="compact"
                      className="bg-white border-slate-200/60"
                      hoverEffect={false}
                    >
                      <div className="space-y-2">
                        <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="p-4 bg-white rounded-2xl border border-teal-100 text-xs text-slate-600 flex items-center gap-3 shadow-2xs">
                <Shield className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span>
                  <strong>Principios rectores:</strong> Autonomía · Autocuidado · Vínculos · Responsabilidad · Educación e Inclusión.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
