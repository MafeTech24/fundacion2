export type OrientationReason =
  | 'para_mi'
  | 'para_familiar'
  | 'prevencion'
  | 'capacitacion'
  | 'consulta_institucional'
  | 'otro';

export interface OrientationFormData {
  nombre: string;
  apellido: string;
  email: string;
  whatsapp: string;
  motivo: OrientationReason;
  mensaje: string;
  consentimiento: boolean;
  spamCheck: string; // Math challenge
}

export interface CommunityActivity {
  id: string;
  title: string;
  category: 'Cursos' | 'Talleres' | 'Jornadas' | 'Charlas' | 'Actividades Comunitarias';
  description: string;
  targetAudience: string;
  mode: 'Presencial' | 'Virtual' | 'Híbrido';
  dateInfo: string;
  location?: string;
  isPopular?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Familias' | 'Atención' | 'Prevención';
}

export interface ResourceGuide {
  id: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
  iconName: string;
}
