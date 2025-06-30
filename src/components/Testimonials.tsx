import React, { useState, useEffect } from 'react';
import {
  Quote,
  Star,
  TrendingUp,
  Users,
  Award,
  Heart,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Building2,
  Home,
  Crown
} from 'lucide-react';

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const testimonials = [
    {
      name: 'María González',
      role: 'Directora Comercial',
      company: 'Constructora Elite',
      testimonial:
        'Horizzon Media transformó completamente nuestra estrategia digital. En 8 meses logramos vender el 90% de nuestro desarrollo con una inversión que se pagó sola.',
      image: '/placeholder.svg',
      rating: 5,
      metric: '90% ventas en 8 meses',
      icon: Building2,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgColor: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10',
      initials: 'MG',
      industry: 'Construcción'
    },
    {
      name: 'Carlos Mendoza',
      role: 'CEO',
      company: 'Grupo Inmobiliario Sur',
      testimonial:
        'Su enfoque estratégico y conocimiento profundo del sector inmobiliario nos posicionó como líderes indiscutibles en nuestra zona. Resultados excepcionales.',
      image: '/placeholder.svg',
      rating: 5,
      metric: 'Líderes de mercado',
      icon: Crown,
      gradient: 'from-[#6D7FBE] to-[#222952]',
      bgColor: 'from-[#6D7FBE]/10 to-[#EBF0CB]/20',
      initials: 'CM',
      industry: 'Inmobiliaria'
    },
    {
      name: 'Ana Rodríguez',
      role: 'Gerente de Marketing',
      company: 'Premium Properties',
      testimonial:
        'El ROI que obtuvimos con sus campañas superó todas nuestras expectativas. Equipo altamente profesional con visión de negocio excepcional.',
      image: '/placeholder.svg',
      rating: 5,
      metric: '400% ROI alcanzado',
      icon: Home,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgColor: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10',
      initials: 'AR',
      industry: 'Premium'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              new Set([...prev, parseInt((entry.target as HTMLElement).dataset.index || '0')])
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseEnter = (index: number) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  return (
    <section
      id="testimonios"
      className="py-32 bg-gradient-to-br from-white via-[#EBF0CB]/2 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-[#EBF0CB]/8 to-[#6D7FBE]/4 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-br from-[#6D7FBE]/4 to-[#EBF0CB]/8 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EBF0CB]/80 to-[#6D7FBE]/10 px-6 py-3 rounded-full mb-8 backdrop-blur-sm border border-[#6D7FBE]/20">
            <Heart className="w-4 h-4 text-[#222952]" />
            <span className="text-[#222952] font-mont font-semibold text-sm tracking-wide">
              TESTIMONIOS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#222952] leading-tight mb-6">
          Clientes que <br />
            <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
              confian
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Sus resultados hablan por nosotros. Estas son las voces de quienes han transformado su{' '}
            <span className="text-[#222952] font-medium">negocio inmobiliario</span> con nuestra{' '}
            <span className="text-[#6D7FBE] font-medium">metodología</span>.
          </p>
        </div>

        <div className="mb-16">
  <div className="relative bg-gradient-to-br from-white to-[#EBF0CB]/10 rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
    <div className="absolute -top-5 left-8">
      <div className="w-10 h-10 bg-gradient-to-r from-[#222952] to-[#6D7FBE] rounded-full flex items-center justify-center">
        <Quote className="w-5 h-5 text-white" />
      </div>
    </div>
    <div className="text-center">
      <blockquote className="text-xl md:text-2xl text-gray-700 font-light mb-6 leading-relaxed italic">
        "{testimonials[activeTestimonial].testimonial}"
      </blockquote>
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#EBF0CB] text-[#EBF0CB]" />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <div
          className={`w-16 h-16 bg-gradient-to-r ${testimonials[activeTestimonial].gradient} rounded-xl flex items-center justify-center`}
        >
          <span className="text-white font-black text-lg">
            {testimonials[activeTestimonial].initials}
          </span>
        </div>
        <div className="text-left">
          <div className="font-black text-[#222952] text-lg">
            {testimonials[activeTestimonial].name}
          </div>
          <div className="text-gray-600 text-sm">
            {testimonials[activeTestimonial].role}
          </div>
          <div className="text-[#6D7FBE] font-semibold text-xs">
            {testimonials[activeTestimonial].company}
          </div>
        </div>
      </div>
    </div>

    {/* Navegación */}
    <div className="flex justify-center items-center gap-3 mt-6">
      <button
        onClick={prevTestimonial}
        className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#EBF0CB]/20 hover:border-[#6D7FBE]/30 transition-all duration-300"
      >
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      </button>
      <div className="flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeTestimonial
                ? 'bg-gradient-to-r from-[#222952] to-[#6D7FBE] w-6'
                : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
          />
        ))}
      </div>
      <button
        onClick={nextTestimonial}
        className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#EBF0CB]/20 hover:border-[#6D7FBE]/30 transition-all duration-300"
      >
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  </div>
</div>

{/* Cards en grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
  {testimonials.map((testimonial, index) => {
    const IconComponent = testimonial.icon;
    const isVisible = visibleCards.has(index);
    const isHovered = hoveredCard === index;

    return (
      <div
        key={testimonial.name}
        data-index={index}
        className={`testimonial-card relative cursor-pointer transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} rounded-2xl transition-opacity duration-500 blur-md ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        <div
          className={`relative bg-white rounded-3xl p-8 shadow-md border border-gray-100 transition-all duration-500 h-full ${
            isHovered
              ? 'shadow-2xl shadow-[#6D7FBE]/10 scale-[1.03] border-[#6D7FBE]/20'
              : ''
          }`}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div
                className={`relative w-14 h-14 bg-gradient-to-r ${testimonial.gradient} rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isHovered ? 'scale-110' : ''
                }`}
              >
                <span className="text-white font-mont font-black text-base">
                  {testimonial.initials}
                </span>
              </div>
              <div>
                <div className="font-mont font-semibold text-[#222952] text-base">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 font-mont text-sm">
                  {testimonial.role}
                </div>
              </div>
            </div>
            <div
              className={`p-2 rounded-lg transition-all duration-300 ${
                isHovered ? 'bg-[#EBF0CB]/40' : 'bg-gray-100'
              }`}
            >
              <IconComponent
                className={`w-5 h-5 transition-colors duration-300 ${
                  isHovered ? 'text-[#6D7FBE]' : 'text-gray-500'
                }`}
              />
            </div>
          </div>
          <div className="flex gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#EBF0CB] text-[#EBF0CB]" />
            ))}
          </div>
          <blockquote className="text-gray-600 font-mont font-light mb-6 leading-relaxed italic text-sm">
            "{testimonial.testimonial}"
          </blockquote>
          <div className="mt-auto">
            <div className="text-[#6D7FBE] font-mont font-medium mb-2 text-sm">
              {testimonial.company}
            </div>
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mont font-medium transition-all duration-300 ${
                isHovered
                  ? 'bg-gradient-to-r from-[#EBF0CB] to-[#6D7FBE]/20 text-[#222952]'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              {testimonial.metric}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 rounded-b-2xl overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${testimonial.gradient} transition-all duration-700 ${
                isHovered ? 'w-full' : 'w-0'
              }`}
            ></div>
          </div>
        </div>
      </div>
    );
  })}
</div>

{/* CTA final */}
<div className="text-center">
  <div className="bg-gradient-to-r from-[#EBF0CB]/40 to-[#6D7FBE]/10 rounded-3xl p-12 backdrop-blur-sm border border-[#6D7FBE]/20 shadow-md">
    <Sparkles className="w-12 h-12 text-[#6D7FBE] mx-auto mb-6" />
    <h3 className="text-3xl md:text-4xl font-mont font-black text-[#222952] mb-4">
      Únete a nuestros clientes satisfechos
    </h3>
    <p className="text-lg text-gray-600 font-mont font-light mb-8 max-w-2xl mx-auto leading-relaxed">
      Descubre por qué las mejores marcas inmobiliarias eligen trabajar con nosotros.
    </p>
    <button className="group relative overflow-hidden bg-gradient-to-r from-[#222952] to-[#6D7FBE] text-white px-10 py-5 font-mont font-bold rounded-full hover:shadow-2xl hover:shadow-[#6D7FBE]/30 transition-all duration-500 hover:scale-105">
      <span className="absolute inset-0 bg-gradient-to-r from-[#6D7FBE] to-[#222952] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="relative flex items-center gap-3">
        <Users className="w-5 h-5" />
        Comienza tu transformación
        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      </span>
    </button>
  </div>
</div>
      </div>  
    </section>
  );
};

export default Testimonials;
