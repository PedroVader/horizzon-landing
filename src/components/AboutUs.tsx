import React, { useState, useEffect } from 'react';
import { Users, Award, Clock, MapPin, Calendar, Phone, ChevronDown, ChevronUp, CheckCircle, Star, Zap, ArrowRight, Building2, Target, Shield, MessageCircle } from 'lucide-react';

const AboutFaqClosing = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    clients: 0,
    leads: 0,
    success: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimatedStats(prev => ({
          years: prev.years < 3 ? prev.years + 0.1 : 3,
          clients: prev.clients < 200 ? prev.clients + 5 : 200,
          leads: prev.leads < 8500 ? prev.leads + 200 : 8500,
          success: prev.success < 94 ? prev.success + 2 : 94
        }));
      }, 50);

      setTimeout(() => clearInterval(interval), 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const faqs = [
    {
      question: "¿Hay permanencia?",
      answer: "No, trabajamos mes a mes. Puedes cancelar cuando quieras sin penalizaciones. Creemos en ganarnos tu confianza cada mes con resultados, no con contratos largos.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: "¿Qué tipo de leads recibo?",
      answer: "Propietarios con intención real de vender, filtrados a través de nuestro sistema. Cada lead pasa por múltiples filtros para asegurar calidad y evitar curiosos o especuladores.",
      icon: <Target className="w-5 h-5" />
    },
    {
      question: "¿Cuándo empiezo a recibir contactos?",
      answer: "En menos de 7 días tras definir tu zona y configurar las campañas. Nuestro equipo trabaja rápido para que no pierdas tiempo y empieces a generar oportunidades inmediatamente.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      question: "¿Qué zonas están disponibles?",
      answer: "Trabajamos en las principales ciudades de España y Portugal. Te confirmamos disponibilidad en tu zona específica durante la reunión inicial.",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      question: "¿Incluye soporte y acompañamiento?",
      answer: "Sí, incluye guión de contacto personalizado, grupo de WhatsApp exclusivo, revisión mensual de resultados y soporte continuo de nuestro equipo experto.",
      icon: <MessageCircle className="w-5 h-5" />
    }
  ];

  const timeline = [
    { year: "2021", event: "Inicio en el mercado español", icon: "🚀" },
    { year: "2022", event: "Más de 50 agencias confían en nosotros", icon: "📈" },
    { year: "2023", event: "Sistema perfeccionado y probado", icon: "⚙️" },
    { year: "2024", event: "Expansión a Portugal", icon: "🌍" }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* SECCIÓN SOBRE NOSOTROS */}
      <section className="py-32 relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-16 w-80 h-80 bg-[#EBF0CB] bg-opacity-40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-12 w-96 h-96 bg-[#6D7FBE] bg-opacity-25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contenido izquierdo */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-80 px-6 py-3 rounded-full border border-[#6D7FBE] border-opacity-30 text-sm font-semibold text-[#222952] mb-8 shadow-lg">
                <Users className="w-5 h-5 text-[#6D7FBE]" />
                Nuestra historia
                <div className="w-2 h-2 bg-[#6D7FBE] rounded-full animate-ping"></div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-[#222952] leading-tight mb-8">
                Impulsamos inmobiliarias con{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                    leads que sí responden
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
                </span>
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                <p>
                  <span className="font-semibold text-[#222952]">Desde 2021</span> ayudamos a agencias inmobiliarias a captar propietarios interesados en vender. Hemos probado, ajustado y perfeccionado nuestro sistema en el mercado español, y ahora lo traemos a Portugal con el mismo objetivo: que cada lead que recibas tenga sentido.
                </p>
                <p>
                  Conocemos el sector, hablamos tu idioma y entendemos lo que cuesta conseguir un encargo. Por eso no solo lanzamos campañas: te acompañamos, te guiamos y medimos juntos los resultados.
                </p>
                <p className="text-[#6D7FBE] font-semibold text-xl">
                  Un equipo pequeño, experto y siempre disponible.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[#6D7FBE] font-bold text-lg">{item.year}</span>
                      <p className="text-gray-600">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estadísticas y métricas */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-100">
                <div className="text-center mb-8">
                  <Award className="w-16 h-16 text-[#6D7FBE] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#222952] mb-2">
                    Números que hablan por sí solos
                  </h3>
                  <p className="text-gray-600">
                    La experiencia nos respalda
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-[#EBF0CB] to-white bg-opacity-60 rounded-2xl border border-[#6D7FBE] border-opacity-20">
                    <div className="text-4xl font-black text-[#6D7FBE] mb-2">
                      {Math.round(animatedStats.years)}+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Años de experiencia</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#EBF0CB] to-white bg-opacity-60 rounded-2xl border border-[#222952] border-opacity-20">
                    <div className="text-4xl font-black text-[#222952] mb-2">
                      {Math.round(animatedStats.clients)}+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Agencias activas</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#EBF0CB] to-white bg-opacity-60 rounded-2xl border border-[#6D7FBE] border-opacity-20">
                    <div className="text-4xl font-black text-[#6D7FBE] mb-2">
                      {Math.round(animatedStats.leads).toLocaleString()}+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Leads generados</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-[#EBF0CB] to-white bg-opacity-60 rounded-2xl border border-[#222952] border-opacity-20">
                    <div className="text-4xl font-black text-[#222952] mb-2">
                      {Math.round(animatedStats.success)}%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Satisfacción</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-2xl text-white text-center">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="font-semibold">
                    "El partner de confianza para hacer crecer tu agencia"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FAQ */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 right-20 w-72 h-72 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-80 px-6 py-3 rounded-full border border-[#6D7FBE] border-opacity-30 text-sm font-semibold text-[#222952] mb-8 shadow-lg">
              <MessageCircle className="w-5 h-5 text-[#6D7FBE]" />
              Preguntas frecuentes
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#222952] leading-tight mb-6">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                Resolvemos tus dudas
              </span>
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Las respuestas a las preguntas más comunes de nuestros clientes
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 ${
                  openFaq === index ? 'shadow-2xl border-[#6D7FBE] border-opacity-50' : 'hover:shadow-xl'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#EBF0CB] hover:bg-opacity-30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openFaq === index 
                        ? 'bg-[#6D7FBE] text-white scale-110' 
                        : 'bg-[#EBF0CB] bg-opacity-60 text-[#6D7FBE]'
                    }`}>
                      {faq.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#222952]">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-[#6D7FBE]" />
                  </div>
                </button>
                
                <div className={`transition-all duration-500 overflow-hidden ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CIERRE/CALENDLY */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#EBF0CB] to-white bg-opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-16 w-80 h-80 bg-[#222952] bg-opacity-15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 bg-white bg-opacity-80 px-6 py-3 rounded-full border border-[#6D7FBE] border-opacity-30 text-sm font-semibold text-[#222952] mb-8 shadow-lg">
              <Calendar className="w-5 h-5 text-[#6D7FBE]" />
              Último paso
              <div className="w-2 h-2 bg-[#6D7FBE] rounded-full animate-ping"></div>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-[#222952] leading-tight mb-8">
              <span className="relative">
                <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                  Agenda tu reunión
                </span>
                <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
              </span>
              <br />
              gratuita
            </h2>

            <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed mb-12 max-w-4xl mx-auto">
              En <span className="font-bold text-[#6D7FBE]">15 minutos</span> te mostramos cómo funcionamos y si{' '}
              <span className="font-semibold text-[#222952]">tu zona está libre</span>.
            </p>

            {/* Beneficios de la reunión */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Target className="w-12 h-12 text-[#6D7FBE] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#222952] mb-2">
                  Análisis personalizado
                </h3>
                <p className="text-gray-600 text-sm">
                  Revisamos tu zona y competencia específica
                </p>
              </div>
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Zap className="w-12 h-12 text-[#222952] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#222952] mb-2">
                  Demo en vivo
                </h3>
                <p className="text-gray-600 text-sm">
                  Te mostramos el sistema funcionando en tiempo real
                </p>
              </div>
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CheckCircle className="w-12 h-12 text-[#6D7FBE] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#222952] mb-2">
                  Sin compromiso
                </h3>
                <p className="text-gray-600 text-sm">
                  Solo información, sin presión comercial
                </p>
              </div>
            </div>

            {/* CTA principal */}
            <div className="relative">
              <button className="group bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-12 py-6 rounded-3xl font-black text-2xl md:text-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 flex items-center justify-center gap-4 mx-auto relative overflow-hidden">
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:animate-slide"></div>
                
                <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                👉 Hablar con un asesor
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              {/* Garantías */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Solo 15 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium">Sin compromiso</span>
                </div>
              </div>

              <p className="text-gray-500 text-lg mt-6 font-medium">
                📞 Respuesta garantizada en menos de 2 horas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFaqClosing;