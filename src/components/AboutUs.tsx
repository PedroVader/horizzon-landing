import React, { useState, useEffect } from 'react';
import { Users, Award, Clock, MapPin, Calendar, Phone, ChevronDown, CheckCircle, Zap, ArrowRight, Target, Shield, MessageCircle } from 'lucide-react';

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
      answer: "No, trabajamos mes a mes. Puedes cancelar cuando quieras sin penalizaciones.",
      icon: <Shield className="w-4 h-4" />
    },
    {
      question: "¿Qué tipo de leads recibo?",
      answer: "Propietarios con intención real de vender, filtrados a través de nuestro sistema.",
      icon: <Target className="w-4 h-4" />
    },
    {
      question: "¿Cuándo empiezo a recibir contactos?",
      answer: "En menos de 7 días tras definir tu zona y configurar las campañas.",
      icon: <Clock className="w-4 h-4" />
    },
    {
      question: "¿Qué zonas están disponibles?",
      answer: "Trabajamos en las principales ciudades de España y Portugal.",
      icon: <MapPin className="w-4 h-4" />
    },
    {
      question: "¿Incluye soporte y acompañamiento?",
      answer: "Sí, incluye guión de contacto, grupo de WhatsApp y revisión mensual.",
      icon: <MessageCircle className="w-4 h-4" />
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
    <div className="bg-gray-50" id='historia'>
      {/* SECCIÓN SOBRE NOSOTROS */}
      <section className="py-24 relative">
        {/* Background simplificado */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-20 left-20 w-48 h-48 bg-[#EBF0CB] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido izquierdo */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-[#EBF0CB] bg-opacity-60 px-4 py-2 rounded-full text-sm font-medium text-[#222952] mb-6">
                <Users className="w-4 h-4 text-[#6D7FBE]" />
                Nuestra historia
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#222952] leading-tight mb-6">
                Impulsamos inmobiliarias con{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                    leads que sí responden
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
                </span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-6">
                <p>
                  <span className="font-semibold text-[#222952]">Desde 2021</span> ayudamos a agencias inmobiliarias a captar propietarios interesados en vender. Hemos perfeccionado nuestro sistema en España y ahora lo traemos a Portugal.
                </p>
                <p>
                  Conocemos el sector y entendemos lo que cuesta conseguir un encargo. Por eso te acompañamos en todo el proceso.
                </p>
                <p className="text-[#6D7FBE] font-semibold">
                  Un equipo pequeño, experto y siempre disponible.
                </p>
              </div>

              {/* Timeline simplificado */}
              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-[#6D7FBE] rounded-full flex items-center justify-center text-sm">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-[#6D7FBE] font-bold text-sm">{item.year}</span>
                      <p className="text-gray-600 text-sm">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estadísticas simplificadas */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="text-center mb-6">
                  <Award className="w-12 h-12 text-[#6D7FBE] mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-[#222952] mb-2">
                    Números que nos respaldan
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-[#6D7FBE] mb-1">
                      {Math.round(animatedStats.years)}+
                    </div>
                    <div className="text-xs text-gray-600">Años experiencia</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-[#222952] mb-1">
                      {Math.round(animatedStats.clients)}+
                    </div>
                    <div className="text-xs text-gray-600">Agencias activas</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-[#6D7FBE] mb-1">
                      {Math.round(animatedStats.leads/1000)}k+
                    </div>
                    <div className="text-xs text-gray-600">Leads generados</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-[#222952] mb-1">
                      {Math.round(animatedStats.success)}%
                    </div>
                    <div className="text-xs text-gray-600">Satisfacción</div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#6D7FBE] rounded-xl text-white text-center">
                  <p className="text-sm font-medium">
                    "El partner de confianza para hacer crecer tu agencia"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FAQ */}
      <section className="py-24 bg-white relative" id='faq'>
        <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-[#EBF0CB] bg-opacity-60 px-4 py-2 rounded-full text-sm font-medium text-[#222952] mb-6">
              <MessageCircle className="w-4 h-4 text-[#6D7FBE]" />
              Preguntas frecuentes
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#222952] leading-tight mb-4">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                Resolvemos tus dudas
              </span>
            </h2>
            <p className="text-gray-600">
              Las respuestas a las preguntas más comunes
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border border-gray-200 transition-all duration-300 ${
                  openFaq === index ? 'border-[#6D7FBE] shadow-lg' : 'hover:border-gray-300'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      openFaq === index 
                        ? 'bg-[#6D7FBE] text-white' 
                        : 'bg-[#EBF0CB] bg-opacity-60 text-[#6D7FBE]'
                    }`}>
                      {faq.icon}
                    </div>
                    <h3 className="font-bold text-[#222952]">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-5 h-5 text-[#6D7FBE]" />
                  </div>
                </button>
                
                <div className={`transition-all duration-500 overflow-hidden ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-4 pb-4">
                    <div className="pl-11">
                      <p className="text-gray-600 text-sm leading-relaxed">
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
      <section className="py-24 bg-[#EBF0CB] bg-opacity-40 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-80 px-4 py-2 rounded-full text-sm font-medium text-[#222952] mb-6">
              <Calendar className="w-4 h-4 text-[#6D7FBE]" />
              Último paso
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#222952] leading-tight mb-6">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                  Agenda tu reunión
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
              </span>
              <br />
              gratuita
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              En <span className="font-bold text-[#6D7FBE]">15 minutos</span> te mostramos cómo funcionamos y si{' '}
              <span className="font-semibold text-[#222952]">tu zona está libre</span>.
            </p>

            {/* Beneficios simplificados */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="bg-white bg-opacity-80 rounded-xl p-4 text-center">
                <Target className="w-8 h-8 text-[#6D7FBE] mx-auto mb-2" />
                <h3 className="font-bold text-[#222952] text-sm mb-1">
                  Análisis personalizado
                </h3>
                <p className="text-gray-600 text-xs">
                  Revisamos tu zona específica
                </p>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-4 text-center">
                <Zap className="w-8 h-8 text-[#222952] mx-auto mb-2" />
                <h3 className="font-bold text-[#222952] text-sm mb-1">
                  Demo en vivo
                </h3>
                <p className="text-gray-600 text-xs">
                  Sistema funcionando en tiempo real
                </p>
              </div>
              <div className="bg-white bg-opacity-80 rounded-xl p-4 text-center">
                <CheckCircle className="w-8 h-8 text-[#6D7FBE] mx-auto mb-2" />
                <h3 className="font-bold text-[#222952] text-sm mb-1">
                  Sin compromiso
                </h3>
                <p className="text-gray-600 text-xs">
                  Solo información, sin presión
                </p>
              </div>
            </div>

            {/* CTA principal simplificado */}
            <div className="relative">
              <button className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 mx-auto">
                <Phone className="w-6 h-6" />
                👉 Hablar con un asesor
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Garantías simplificadas */}
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-gray-600">
                <div className="flex items-center gap-1 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>100% Gratuito</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>Solo 15 minutos</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Sin compromiso</span>
                </div>
              </div>

              <p className="text-gray-500 text-sm mt-4">
                📞 Respuesta en menos de 2 horas
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFaqClosing;