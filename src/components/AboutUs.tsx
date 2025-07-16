import React, { useState, useEffect } from 'react';
import { Users, Award, Clock, MapPin, Calendar, Phone, ChevronDown, CheckCircle, Zap, ArrowRight, Target, Shield, MessageCircle, Layers, Building2 } from 'lucide-react';

const AboutFaqClosing = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      id: "historia",
      title: "Nuestra historia",
      subtitle: "Experiencia comprobada",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: "faq",
      title: "Preguntas frecuentes",
      subtitle: "Dudas resueltas",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      id: "contacto",
      title: "Agenda tu reunión",
      subtitle: "Último paso",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  const stats = [
    { value: "3+", label: "Años experiencia" },
    { value: "70+", label: "Agencias activas" },
    { value: "8k+", label: "Leads generados" },
    { value: "94%", label: "Satisfacción" }
  ];

  const timeline = [
    { year: "2021", event: "Inicio en el mercado español" },
    { year: "2022", event: "Más de 50 agencias confían en nosotros" },
    { year: "2023", event: "Sistema perfeccionado y probado" },
    { year: "2024", event: "Expansión a Portugal" }
  ];

  const faqs = [
    {
      question: "¿Hay permanencia?",
      answer: "No, trabajamos mes a mes. Puedes cancelar cuando quieras sin penalizaciones.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: "¿Qué tipo de leads recibo?",
      answer: "Propietarios con intención real de vender, filtrados a través de nuestro sistema de IA predictiva.",
      icon: <Target className="w-5 h-5" />
    },
    {
      question: "¿Cuándo empiezo a recibir contactos?",
      answer: "En menos de 7 días tras definir tu zona y configurar las campañas personalizadas.",
      icon: <Clock className="w-5 h-5" />
    },
    {
      question: "¿Qué zonas están disponibles?",
      answer: "Trabajamos en las principales ciudades de España y Portugal con disponibilidad limitada.",
      icon: <MapPin className="w-5 h-5" />
    },
    {
      question: "¿Incluye soporte y acompañamiento?",
      answer: "Sí, incluye guión de contacto profesional, grupo de WhatsApp exclusivo y revisión mensual personalizada.",
      icon: <MessageCircle className="w-5 h-5" />
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Análisis personalizado",
      description: "Revisamos tu zona específica"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Demo en vivo",
      description: "Sistema funcionando en tiempo real"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Sin compromiso",
      description: "Solo información, sin presión"
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const renderSectionContent = () => {
    switch(activeSection) {
      case 0: // Historia
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-[#222952] mb-4">
                Nuestra historia
              </h3>
              <p className="text-xl text-[#6D7FBE] font-medium mb-8">
                Experiencia comprobada
              </p>
              
              <div className="text-[#222952] text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                <p className="mb-4">
                  <span className="font-bold">Desde 2021</span> ayudamos a agencias inmobiliarias a captar propietarios interesados en vender. Hemos perfeccionado nuestro sistema en España.
                </p>
                <p>
                  Conocemos el sector y entendemos lo que cuesta conseguir un encargo. Por eso te acompañamos en todo el proceso.
                </p>
              </div>
            </div>
            
            {/* Timeline horizontal */}
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-[#6D7FBE] text-white rounded-full flex items-center justify-center font-bold text-sm mb-3 mx-auto">
                    {item.year}
                  </div>
                  <p className="text-[#222952] text-sm leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 1: // FAQ
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#222952] mb-4">
                Preguntas frecuentes
              </h3>
              <p className="text-xl text-[#6D7FBE] font-medium">
                Dudas resueltas
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-100 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#6D7FBE] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                        {faq.icon}
                      </div>
                      <span className="font-semibold text-[#222952]">{faq.question}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#6D7FBE] transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {openFaq === idx && (
                    <div className="px-6 pb-4 border-t border-gray-100 bg-gray-50">
                      <p className="text-[#222952] leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 2: // Contacto
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-[#222952] mb-4">
                Agenda tu reunión
              </h3>
              <p className="text-xl text-[#6D7FBE] font-medium mb-8">
                Último paso
              </p>
              
              <p className="text-[#222952] text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                En <span className="font-bold text-[#6D7FBE]">15 minutos</span> te mostramos cómo funcionamos y si{' '}
                <span className="font-bold">tu zona está libre</span>.
              </p>
            </div>
            
            {/* Beneficios en grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-[#6D7FBE] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-[#222952] mb-2">{benefit.title}</h4>
                  <p className="text-[#222952] text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* CTA destacado */}
            <div className="bg-gradient-to-br from-[#222952] to-[#6D7FBE] rounded-2xl p-8 text-white">
              <Phone className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h4 className="text-2xl font-bold mb-2">
                ¡Hablemos!
              </h4>
              <p className="opacity-90 mb-4">
                Respuesta en menos de 2 horas
              </p>
              <div className="flex items-center justify-center gap-6 text-sm opacity-80">
                <span>✓ 100% Gratuito</span>
                <span>✓ 15 minutos</span>
                <span>✓ Sin compromiso</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* White transition section */}
      <div className="h-12 bg-white"></div>
      
      <section className="py-24 bg-gradient-to-br from-[#1a1f3a] to-[#2d3561] relative overflow-hidden" id="historia">
        {/* Background animado con olas y formas flotantes */}
        <div className="absolute inset-0">
          {/* Olas animadas */}
          <svg 
            className="absolute bottom-0 left-0 w-full h-40 text-[#6D7FBE]" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
              fill="currentColor"
              className="opacity-20 animate-pulse"
              style={{ animationDuration: '4s' }}
            />
          </svg>
          <svg 
            className="absolute bottom-0 left-0 w-full h-32 text-white" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,80 C400,40 800,120 1200,80 L1200,120 L0,120 Z" 
              fill="currentColor"
              className="opacity-10"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 20 0; 0 0"
              dur="8s"
              repeatCount="indefinite"
            />
          </svg>
          
          {/* Olas superiores animadas */}
          <svg 
            className="absolute top-0 left-0 w-full h-40 text-[#6D7FBE] transform rotate-180" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
              fill="currentColor"
              className="opacity-15 animate-pulse"
              style={{ animationDuration: '6s' }}
            />
          </svg>

          {/* Formas flotantes animadas */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#6D7FBE] rounded-full opacity-10 animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-white rounded-full opacity-5 animate-pulse" style={{ animationDuration: '2s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-[#6D7FBE] rounded-full opacity-8 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white rounded-full opacity-10 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 right-10 w-14 h-14 bg-[#6D7FBE] rounded-full opacity-6 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>

          {/* Gradiente superpuesto para suavizar */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#6D7FBE]"></div>
              <Layers className="w-6 h-6 text-[#6D7FBE]" />
              <div className="h-px w-12 bg-[#6D7FBE]"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Conocenos</span>
              <span className="block text-3xl md:text-4xl font-light text-[#6D7FBE] mt-2">
                y resuelve tus dudas
              </span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Todo lo que necesitas saber sobre nosotros y nuestro servicio
            </p>
          </div>

          {/* Métricas */}
          <div className={`grid md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[#6D7FBE]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Navegación simple */}
          <div className={`flex justify-center gap-2 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => setActiveSection(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 ${
                  activeSection === index
                    ? 'bg-white text-[#222952] shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm'
                }`}
              >
                {section.icon}
                <span className="hidden sm:inline">{section.title}</span>
              </button>
            ))}
          </div>

          {/* Contenido principal */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '600ms' }}>
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-white/20 mb-12 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-500">
              {renderSectionContent()}
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mb-12">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-150 ${
                    index === activeSection 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA final */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-white mb-8 max-w-xl mx-auto">
              Hablemos y te contamos todo lo que necesitas saber
            </p>
            
            <button className="group bg-[#222952] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6D7FBE] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl mx-auto">
              <Phone className="w-5 h-5" />
              Hablar con un asesor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-[#6D7FBE]">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                100% Gratuito
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Solo 15 minutos
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Sin compromiso
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFaqClosing;