import React, { useState } from 'react';
import {
  Compass,
  User,
  Users,
  Shield,
  ArrowRight,
  RotateCcw,
  MessageCircle,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface OrientationWizardProps {
  onSelectOption: (motivo: string, details: string) => void;
}

export const OrientationWizard: React.FC<OrientationWizardProps> = ({
  onSelectOption,
}) => {
  const [step, setStep] = useState(1);
  const [target, setTarget] = useState<'mi' | 'familiar' | 'institucional' | null>(null);
  const [urgency, setUrgency] = useState<'orientacion' | 'informacion' | 'urgente' | null>(null);

  const handleFinish = (method: 'whatsapp' | 'form') => {
    let motivoStr = 'para_mi';
    let details = 'Consulta desde la Guía de Primeros Pasos.';

    if (target === 'familiar') {
      motivoStr = 'para_familiar';
      details = 'Solicitud de orientación familiar sobre consumo problemático.';
    } else if (target === 'institucional') {
      motivoStr = 'capacitacion';
      details = 'Consulta sobre talleres o actividades institucionales de prevención.';
    }

    if (method === 'form') {
      onSelectOption(motivoStr, details);
    } else {
      const msg = encodeURIComponent(
        `Hola Fundación Por Un Mundo Mejor. Utilicé la Guía de Orientación en la web. Mi consulta es: ${details}`
      );
      window.open(`https://wa.me/5493511234567?text=${msg}`, '_blank');
    }
  };

  const reset = () => {
    setStep(1);
    setTarget(null);
    setUrgency(null);
  };

  return (
    <Section background="teal-light" padding="normal" id="orientador-wizard">
      <Container size="small">
        <Card padding="large" className="bg-white border-teal-200 shadow-md">
          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800">
              <Compass className="w-3.5 h-3.5 text-teal-600" />
              Guía Guiada de Primeros Pasos
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              ¿No sabés por dónde empezar? Te ayudamos a orientarte
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto">
              Respondé 2 breves preguntas y te indicaremos la mejor vía de contacto según tu situación actual.
            </p>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-center text-sm font-bold text-slate-800">
                Paso 1: ¿Cuál es el motivo principal de tu consulta?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                  onClick={() => {
                    setTarget('mi');
                    setStep(2);
                  }}
                  className="p-5 rounded-2xl border-2 border-slate-200 hover:border-teal-600 hover:bg-teal-50/50 text-left transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <User className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Necesito ayuda para mí</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Busco orientación o un espacio de escucha personal.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setTarget('familiar');
                    setStep(2);
                  }}
                  className="p-5 rounded-2xl border-2 border-slate-200 hover:border-teal-600 hover:bg-teal-50/50 text-left transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Busco orientación para un familiar</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Quiero saber cómo acompañar a un ser querido.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setTarget('institucional');
                    setStep(2);
                  }}
                  className="p-5 rounded-2xl border-2 border-slate-200 hover:border-teal-600 hover:bg-teal-50/50 text-left transition-all cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-3 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">Consulta institucional / Prevención</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Charlas, talleres o capacitación para escuelas o empresas.
                  </p>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <p className="text-center text-sm font-bold text-slate-800">
                Paso 2: ¿Qué tipo de respuesta estás buscando?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setUrgency('orientacion');
                    setStep(3);
                  }}
                  className="p-5 rounded-2xl border-2 border-slate-200 hover:border-teal-600 hover:bg-teal-50/50 text-left transition-all cursor-pointer group"
                >
                  <h4 className="font-bold text-slate-900 text-sm">
                    Agendar o solicitar entrevista de orientación
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Quiero coordinar un espacio presencial o virtual de evaluación.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setUrgency('informacion');
                    setStep(3);
                  }}
                  className="p-5 rounded-2xl border-2 border-slate-200 hover:border-teal-600 hover:bg-teal-50/50 text-left transition-all cursor-pointer group"
                >
                  <h4 className="font-bold text-slate-900 text-sm">
                    Recibir información general confidencial
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Quiero que me contacten con guías y detalles del servicio.
                  </p>
                </button>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-500 hover:text-slate-800 underline"
                >
                  Volver al paso 1
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 - RESULT */}
          {step === 3 && (
            <div className="space-y-6 text-center animate-fade-in">
              <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 text-teal-900 text-xs sm:text-sm space-y-1">
                <div className="inline-flex items-center gap-1 font-bold text-teal-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" /> Opción sugerida para vos
                </div>
                <p className="font-medium">
                  {target === 'familiar'
                    ? 'Te recomendamos el Área de Orientación Familiar. Podés iniciar por WhatsApp directo para una respuesta rápida o completar el formulario confidencial.'
                    : target === 'institucional'
                    ? 'Te orientaremos con nuestro Equipo de Prevención Comunitaria para coordinar la actividad.'
                    : 'Te asignaremos un turno de primera escucha y orientación individualizada.'}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                <Button
                  variant="whatsapp"
                  onClick={() => handleFinish('whatsapp')}
                  icon={<MessageCircle className="w-4 h-4" />}
                >
                  Contactar por WhatsApp
                </Button>

                <Button
                  variant="primary"
                  onClick={() => handleFinish('form')}
                  icon={<Mail className="w-4 h-4" />}
                >
                  Ir al Formulario de Orientación
                </Button>
              </div>

              <button
                onClick={reset}
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 underline pt-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Volver a empezar la guía
              </button>
            </div>
          )}
        </Card>
      </Container>
    </Section>
  );
};
