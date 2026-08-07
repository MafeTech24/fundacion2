import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Send,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { OrientationFormData, OrientationReason } from '../../types';

interface ContactSectionProps {
  initialMotivo?: string;
  initialDetails?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialMotivo = 'para_mi',
  initialDetails = '',
}) => {
  const [formData, setFormData] = useState<OrientationFormData>({
    nombre: '',
    apellido: '',
    email: '',
    whatsapp: '',
    motivo: (initialMotivo as OrientationReason) || 'para_mi',
    mensaje: initialDetails || '',
    consentimiento: true,
    spamCheck: '',
  });

  const [num1] = useState(4);
  const [num2] = useState(3);
  const expectedSpamAnswer = '7';

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, motivo: e.target.value as OrientationReason });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.nombre.trim() || !formData.whatsapp.trim()) {
      setErrorMessage('Por favor completá al menos tu Nombre y WhatsApp para ponernos en contacto.');
      return;
    }

    if (formData.spamCheck.trim() !== expectedSpamAnswer) {
      setErrorMessage(`Respuesta anti-spam incorrecta. ¿Cuánto es ${num1} + ${num2}?`);
      return;
    }

    if (!formData.consentimiento) {
      setErrorMessage('Es necesario aceptar el consentimiento de confidencialidad para enviar el formulario.');
      return;
    }

    // Success simulation
    setFormSubmitted(true);
  };

  return (
    <Section id="contacto" background="white" padding="normal">
      <Container>
        <SectionTitle
          eyebrow="Atención & Orientación Confidencial"
          title="¿Necesitás orientación?"
          subtitle="Estamos para escucharte. Podés comunicarte directamente por WhatsApp o dejarnos tu mensaje para coordinar una primera conversación de orientación."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-teal-950 text-white p-6 sm:p-8 rounded-3xl shadow-lg space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                  Contacto Inmediato
                </span>
                <h3 className="text-2xl font-bold font-display leading-tight">
                  Atención rápida vía WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Si estás atravesando una situación de duda o urgencia orientativa, podés enviarnos un mensaje directo a nuestro equipo.
                </p>
              </div>

              <a
                href="https://wa.me/5493511234567?text=Hola,%20me%20comunico%20desde%20la%20web.%20Necesito%20orientaci%C3%B3n%20confidencial."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm shadow-md transition-all hover:scale-[1.02] cursor-pointer"
                id="contact-whatsapp-direct-btn"
              >
                <MessageCircle className="w-5 h-5 fill-white stroke-emerald-600" />
                <span>Escribir por WhatsApp directo</span>
              </a>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>[DIRECCION] Córdoba, Argentina</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>[TELEFONO] / WhatsApp: [WHATSAPP]</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>[EMAIL] (contacto@fundacionporunmundomejor.org.ar)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>[HORARIOS] (Lunes a Viernes 9:00 a 18:00 hs)</span>
                </div>
              </div>
            </div>

            {/* Instagram Banner Card */}
            <Card padding="normal" className="bg-slate-50 border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">Seguinos en Instagram</h4>
                  <p className="text-xs text-slate-600">
                    Novedades institucionales, actividades y consejos de prevención.
                  </p>
                  <a
                    href="https://www.instagram.com/fundacion.porunmundomejor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:underline pt-1"
                  >
                    @fundacion.porunmundomejor <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Complete Form */}
          <div className="lg:col-span-7">
            <Card padding="large" className="bg-white border-slate-200/90 shadow-sm">
              {formSubmitted ? (
                <div className="py-10 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    Mensaje Recibido
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Gracias, <strong>{formData.nombre}</strong>. Hemos recibido tu consulta confidencial. Un profesional de nuestro equipo se pondrá en contacto a la brevedad.
                  </p>

                  <div className="pt-4">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          nombre: '',
                          apellido: '',
                          email: '',
                          whatsapp: '',
                          motivo: 'para_mi',
                          mensaje: '',
                          consentimiento: true,
                          spamCheck: '',
                        });
                      }}
                    >
                      Enviar otra consulta
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" id="orientation-form">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      Formulario de Orientación Confidencial
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      Campos protegidos
                    </span>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Nombre y Apellido */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-bold text-slate-700 mb-1">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        placeholder="Ej: María"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="apellido" className="block text-xs font-bold text-slate-700 mb-1">
                        Apellido
                      </label>
                      <input
                        type="text"
                        id="apellido"
                        value={formData.apellido}
                        onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                        placeholder="Ej: González"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  {/* Email y WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                        Correo Electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@email.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsapp" className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Teléfono de contacto *
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="Ej: +54 351 1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  {/* Motivo Select */}
                  <div>
                    <label htmlFor="motivo" className="block text-xs font-bold text-slate-700 mb-1">
                      Motivo de la consulta *
                    </label>
                    <select
                      id="motivo"
                      value={formData.motivo}
                      onChange={handleReasonChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="para_mi">Necesito orientación para mí</option>
                      <option value="para_familiar">Necesito orientación para un familiar</option>
                      <option value="prevencion">Prevención y talleres</option>
                      <option value="capacitacion">Capacitación comunitaria</option>
                      <option value="consulta_institucional">Consulta institucional</option>
                      <option value="otro">Otro motivo</option>
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-xs font-bold text-slate-700 mb-1">
                      Mensaje o breve descripción (Opcional y confidencial)
                    </label>
                    <textarea
                      id="mensaje"
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="Contanos brevemente qué tipo de orientación o información estás buscando..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  {/* Anti-spam math protection */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-4">
                    <label htmlFor="spamCheck" className="text-xs font-semibold text-slate-700">
                      Protección Anti-Spam: ¿Cuánto es {num1} + {num2}? *
                    </label>
                    <input
                      type="text"
                      id="spamCheck"
                      required
                      value={formData.spamCheck}
                      onChange={(e) => setFormData({ ...formData, spamCheck: e.target.value })}
                      placeholder="7"
                      className="w-20 px-3 py-1.5 rounded-lg border border-slate-300 text-center text-sm font-bold focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="consentimiento"
                      checked={formData.consentimiento}
                      onChange={(e) =>
                        setFormData({ ...formData, consentimiento: e.target.checked })
                      }
                      className="mt-1 w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500 cursor-pointer"
                    />
                    <label htmlFor="consentimiento" className="text-xs text-slate-600 leading-snug">
                      Acepto el resguardo confidencial de mis datos con arreglo a la política de privacidad de la Fundación.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Send className="w-4 h-4" />}
                  >
                    Enviar Solicitud de Orientación
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};
