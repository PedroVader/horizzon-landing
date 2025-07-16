import React, { useState, useEffect } from 'react';
import { Users, Award, Clock, MapPin, Calendar, Phone, ChevronDown, CheckCircle, Zap, ArrowRight, Target, Shield, MessageCircle, Layers, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LogosCarousel = ({ isVisible }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const companies = [
    { name: 'Remax', logo: '/logos/novahabitat.png' },
    { name: 'Neinor Homes', logo: '/logos/silva.png' },
    { name: 'Century', logo: '/logos/torres.png' },
    { name: 'Ramírez Inmobiliaria', logo: '/logos/ramirez.png' },
    { name: 'Habitat Premium', logo: '/logos/habitat.png' },
    { name: 'Central Inmobiliaria', logo: '/logos/central.png' },
    { name: 'Madrid Properties', logo: '/logos/madrid.png' },
    { name: 'Barcelona Homes', logo: '/logos/barcelona.png' },
    { name: 'Valencia Real Estate', logo: '/logos/valencia.png' }
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(companies.length / itemsPerSlide);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className={`relative mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
      <div className="text-center">
        <p className="text-white/80 mb-8 font-medium">
          Confían en nosotros más de 70 agencias inmobiliarias
        </p>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="flex justify-center gap-8">
                    {companies.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((company, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 text-white/70 hover:text-white transition-all duration-300 transform hover:scale-105 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                      >
                        <Building2 className="w-5 h-5" />
                        <span className="text-sm font-medium whitespace-nowrap">{company}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

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
    { value: "4+", label: "Años experiencia" },
    { value: "20+", label: "Agencias activas" },
    { value: "8k+", label: "Leads generados" },
    { value: "94%", label: "Satisfacción" }
  ];

  const timeline = [
    {
      year: "2021",
      event: "Inicio en el mercado español",
      img: "/public/images/PNG/españa-bander.png"
    },
    {
      year: "2022",
      event: "Más de 50 agencias confían en nosotros",
      img: "/public/images/PNG/century-21.jpg"
    },
    {
      year: "2023",
      event: "Sistema perfeccionado y probado",
      img: "/public/images/PNG/workflow-n8n.webp"
    },
    {
      year: "2024",
      event: "Expansión a Portugal",
      img: "/public/images/PNG/bandera-portugal.jpg"
    }
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
              <h3 className="text-4xl font-bold text-[#222952] mb-4 font-playfair italic">
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
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
  {timeline.map((item, idx) => (
    <div key={idx} className="text-center">
      {/* Versión con backgroundImage mejorada */}
      <div
        className="w-24 h-24 md:w-20 md:h-20 rounded-full bg-cover bg-center mx-auto mb-3 border-4 border-white shadow-md hover:scale-105 transition-transform duration-300"
        style={{ 
          backgroundImage: `url(${item.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full h-full bg-[#6D7FBE]/30 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-sm">
          {item.year}
        </div>
      </div>
    </div> // ← faltaba cerrar este div
  ))} // ← y este paréntesis
</div>
          </div>

        );

      case 1: // FAQ
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#222952] mb-4 font-playfair italic">
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
                      <span className="font-semibold text-[#222952] font-playfair italic">{faq.question}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#6D7FBE] transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.1, ease: 'easeInOut' }}
                      className="overflow-hidden px-6 pb-4 border-t border-gray-100 bg-gray-50"
                    >
                      <div className="pt-4">
                        <p className="text-[#222952] leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                </div>
              ))}
            </div>
          </div>
        );

      case 2: // Contacto
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-4xl font-bold text-[#222952] mb-4 font-playfair italic">
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
    <div key={idx} className="text-center group">
      {/* Icono con gradiente - mismo estilo */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6D7FBE] to-[#222952] text-white mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110 mx-auto">
        {benefit.icon}
      </div>
      <h4 className="font-bold text-[#222952] mb-2">{benefit.title}</h4>
      <p className="text-[#222952] text-sm font-playfair italic">{benefit.description}</p>
    </div>
  ))}
</div>

            {/* CTA destacado con imagen de fondo */}
<div
  className="relative rounded-2xl p-8 text-white overflow-hidden"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay suave */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#222952]/45 to-[#6D7FBE]/80 z-0"></div>

  {/* Contenido encima */}
  <div className="relative z-10 text-center">
    <Phone className="w-12 h-12 mx-auto mb-4 opacity-80" />
    <h4 className="text-2xl font-bold mb-2">¡Hablemos!</h4>
    <p className="opacity-90 mb-4">Respuesta en menos de 2 horas</p>
    <div className="flex items-center justify-center gap-6 text-sm opacity-80">
      <span>✓ 100% Gratuito</span>
      <span>✓ 15 minutos</span>
      <span>✓ Sin compromiso</span>
    </div>
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
                <div className="text-[#6D7FBE] font-playfair italic">
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
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Hablemos y te contamos todo lo que necesitas saber
            </p>
            
            <button className="group bg-white text-[#222952] px-8 py-4 rounded-full font-semibold hover:bg-[#6D7FBE] hover:text-white transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl mx-auto transform hover:scale-105">
              <Phone className="w-5 h-5" />
              Hablar con un asesor
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-white/70">
              <span className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <CheckCircle className="w-4 h-4" />
                100% Gratuito
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                <CheckCircle className="w-4 h-4" />
                Solo 15 minutos
              </span>
              <span className="flex items-center gap-2 hover:text-white transition-colors duration-300">
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