import React, { useState } from 'react';
import { Logo } from './Logo';
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Heart,
  ExternalLink,
} from 'lucide-react';
import { Modal } from '../ui/Modal';

export const Footer: React.FC = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" />
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Fundación para la atención y prevención de las adicciones en Córdoba. Promovemos la salud mental, el autocuidado, los vínculos saludables y la construcción de proyectos de vida con enfoque humano y comunitario.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/fundacion.porunmundomejor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Instagram de Fundación Por Un Mundo Mejor"
                title="Instagram @fundacion.porunmundomejor"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/fundacionporunmundomejor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Facebook de la Fundación"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:contacto@fundacionporunmundomejor.org.ar"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-teal-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors shadow-xs"
                aria-label="Enviar correo electrónico"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Atención y Orientación Confidencial
              </span>
            </div>
          </div>

          {/* Col 2: Institutional Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Navegación Institucional
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#inicio" className="hover:text-teal-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#fundacion" className="hover:text-teal-300 transition-colors">
                  La Fundación & Filosofía
                </a>
              </li>
              <li>
                <a href="#tres-areas" className="hover:text-teal-300 transition-colors">
                  Qué hacemos (Tres Áreas)
                </a>
              </li>
              <li>
                <a href="#prevencion" className="hover:text-teal-300 transition-colors">
                  Prevención y Autocuidado
                </a>
              </li>
              <li>
                <a href="#familias" className="hover:text-teal-300 transition-colors">
                  Orientación a Familias
                </a>
              </li>
              <li>
                <a href="#capacitacion" className="hover:text-teal-300 transition-colors">
                  Capacitación y Comunidad
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-teal-300 transition-colors">
                  Recursos y Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-teal-300 transition-colors">
                  Contacto y Formulario
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Datos Institucionales & Contacto
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-1" />
                <span>[DIRECCION] Córdoba, República Argentina</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Teléfono: [TELEFONO] / WhatsApp: [WHATSAPP]</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>[EMAIL] (contacto@fundacionporunmundomejor.org.ar)</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Atención: [HORARIOS] (Lunes a Viernes 9:00 a 18:00 hs)</span>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Instagram className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-medium text-slate-300">Instagram Oficial:</span>
                  <a
                    href="https://www.instagram.com/fundacion.porunmundomejor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal-300 hover:underline font-semibold text-xs"
                  >
                    @fundacion.porunmundomejor <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Note on Care Modalities */}
            <div className="mt-4 p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs text-slate-300">
              <span className="font-semibold text-teal-300 block mb-1">
                Aviso de Modalidades Institucionales:
              </span>
              La Fundación brinda espacios de orientación, evaluación, acompañamiento individual y familiar y prevención comunitaria. Actúa bajo modalidad ambulatoria y <strong>NO ofrece servicios de internación residencial</strong>.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Fundación Por Un Mundo Mejor. Todos los derechos reservados. Córdoba, Argentina.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="hover:text-teal-300 underline cursor-pointer"
            >
              Política de Privacidad y Confidencialidad
            </button>
            <span className="inline-flex items-center gap-1 text-slate-400">
              Diseñado con <Heart className="w-3.5 h-3.5 text-teal-400 fill-teal-400" /> para la comunidad
            </span>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      <Modal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        title="Política de Privacidad y Confidencialidad"
        subtitle="Compromiso institucional de resguardo de datos"
      >
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            En la <strong>Fundación Por Un Mundo Mejor</strong> nos tomamos con la máxima responsabilidad el resguardo de la privacidad, el anonimato y la confidencialidad de todas las personas que solicitan orientación o se comunican con nuestro equipo.
          </p>
          <h4 className="font-bold text-slate-900 pt-2">1. Uso de la Información</h4>
          <p>
            Los datos facilitados a través del formulario de contacto o vías de comunicación directas (nombre, WhatsApp, email o motivo de consulta) se utilizan exclusivamente para brindar la orientación solicitada y coordinar espacios de escucha.
          </p>
          <h4 className="font-bold text-slate-900 pt-2">2. Confidencialidad Ética y Profesional</h4>
          <p>
            Ninguna información personal es compartida con terceros sin el consentimiento expreso y previo del consultante, resguardando el secreto profesional e institucional.
          </p>
          <h4 className="font-bold text-slate-900 pt-2">3. Protección Anti-Spam</h4>
          <p>
            El sitio web cuenta con medidas de seguridad para garantizar una interacción protegida y libre de abusos digitales.
          </p>
        </div>
      </Modal>
    </footer>
  );
};
