import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Users,
  MapPin,
  CheckCircle,
  Sparkles,
  Search,
  Filter,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { CommunityActivity } from '../../types';

export const CommunitySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const activities: CommunityActivity[] = [
    {
      id: '1',
      title: 'Taller de Prevención y Primeros Auxilios Emocionales',
      category: 'Talleres',
      description:
        'Espacio práctico para docentes, preconceptores y referentes comunitarios sobre detección temprana y escucha activa en adolescentes.',
      targetAudience: 'Docentes, educadores y agentes comunitarios',
      mode: 'Presencial',
      dateInfo: 'Consutar próximas fechas',
      location: 'Sede Fundación / Instituciones Educativas',
      isPopular: true,
    },
    {
      id: '2',
      title: 'Jornada de Reflexión sobre Consumo y Vínculos en Jóvenes',
      category: 'Jornadas',
      description:
        'Encuentros participativos con dinámicas grupales sobre proyecto de vida, presión de pares y comunicación asertiva.',
      targetAudience: 'Estudiantes secundarios y jóvenes',
      mode: 'Presencial',
      dateInfo: 'Actividad bajo demanda',
      location: 'Córdoba Capital y Gran Córdoba',
    },
    {
      id: '3',
      title: 'Curso de Formación en Abordaje Comunitario de Adicciones',
      category: 'Cursos',
      description:
        'Capacitación técnica e institucional de 4 módulos teóricos-prácticos sobre herramientas de prevención y acompañamiento.',
      targetAudience: 'Profesionales, estudiantes y voluntariado',
      mode: 'Híbrido',
      dateInfo: 'Inscripciones abiertas por cohorte',
      isPopular: true,
    },
    {
      id: '4',
      title: 'Charla Informativa para Madres, Padres y Tutores',
      category: 'Charlas',
      description:
        'Orientación clara y cercana sobre qué observar, cómo hablar sobre consumos en casa y cómo fijar límites afectivos.',
      targetAudience: 'Familias y comunidades escolares',
      mode: 'Virtual',
      dateInfo: 'Modalidad mensual vía Zoom',
    },
    {
      id: '5',
      title: 'Acciones Preventivas en Espacios Públicos y Festivales',
      category: 'Actividades Comunitarias',
      description:
        'Puestos de hidratación, información amigable, reducción de riesgos y promoción del cuidado entre pares en eventos juveniles.',
      targetAudience: 'Comunidad en general',
      mode: 'Presencial',
      dateInfo: 'Calendario de eventos en Córdoba',
    },
  ];

  const categories = [
    'Todos',
    'Cursos',
    'Talleres',
    'Jornadas',
    'Charlas',
    'Actividades Comunitarias',
  ];

  const filteredActivities =
    selectedCategory === 'Todos'
      ? activities
      : activities.filter((act) => act.category === selectedCategory);

  return (
    <Section id="capacitacion" background="white" padding="normal">
      <Container>
        <SectionTitle
          eyebrow="Formación & Red Social"
          title="Capacitación y acciones comunitarias"
          subtitle="Formamos recursos humanos, capacitamos a educadores y realizamos intervenciones territoriales para fortalecer la red comunitaria en toda la provincia."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" id="community-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((act) => (
            <Card
              key={act.id}
              padding="normal"
              className="flex flex-col justify-between border-slate-200 hover:border-teal-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="teal">{act.category}</Badge>
                  <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md">
                    {act.mode}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display">
                  {act.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {act.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span>Dirigido a: {act.targetAudience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span>{act.dateInfo}</span>
                  </div>
                  {act.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                      <span>{act.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <a
                  href="#contacto"
                  className="block text-center w-full py-2 px-3 bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold rounded-xl transition-colors"
                >
                  Consultar inscripciones / Solicitar
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
