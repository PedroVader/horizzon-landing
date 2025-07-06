import React, { useState, useEffect } from 'react';
import { Star, Quote, TrendingUp, Calendar, MapPin, Users, Award, ArrowRight, Building2, Target, Zap } from 'lucide-react';

const SuccessCases = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "Cerramos 3 encargos el primer mes. Bestial.",
      author: "Carlos Mendoza",
      company: "Agencia NovaHabitat",
      location: "Madrid",
      avatar: "🏢",
      stats: { encargos: 3, leads: 38, tiempo: 4 },
      color: "from-[#6D7FBE] to-[#222952]",
      bgColor: "bg-[#6D7FBE]"
    },
    {
      id: 2,
      quote: "Los leads que recibimos son de una calidad impresionante. Ya no perdemos tiempo con curiosos.",
      author: "Marina Silva",
      company: "Silva Propiedades",
      location: "Barcelona",
      avatar: "🏠",
      stats: { encargos: 5, leads: 42, tiempo: 3 },
      color: "from-[#222952] to-[#6D7FBE]",
      bgColor: "bg-[#222952]"
    },
    {
      id: 3,
      quote: "En 6 meses hemos triplicado nuestra cartera de exclusivas. El ROI es increíble.",
      author: "Alejandro Torres",
      company: "Torres & Asociados",
      location: "Valencia",
      avatar: "🏆",
      stats: { encargos: 8, leads: 45, tiempo: 2 },
      color: "from-[#6D7FBE] to-[#EBF0CB]",
      bgColor: "bg-[#6D7FBE]"
    },
    {
      id: 4,
      quote: "Llevábamos años buscando algo así. Ahora tenemos leads constantemente sin hacer publicidad nosotros.",
      author: "Isabel Ramírez",
      company: "Ramírez Inmobiliaria",
      location: "Sevilla",
      avatar: "⭐",
      stats: { encargos: 4, leads: 36, tiempo: 5 },
      color: "from-[#222952] to-[#6D7FBE]",
      bgColor: "bg-[#222952]"
    }
  ];

  const metrics = [
    { icon: <Award className="w-6 h-6" />, value: "94%", label: "Tasa de satisfacción", color: "text-[#6D7FBE]" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "3.8x", label: "ROI promedio", color: "text-[#222952]" },
    { icon: <Target className="w-6 h-6" />, value: "40+", label: "Leads mensuales", color: "text-[#6D7FBE]" },
    { icon: <Calendar className="w-6 h-6" />, value: "<30", label: "Días para primer encargo", color: "text-[#222952]" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isVisible) {
      testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
          setAnimatedStats(prev => ({
            ...prev,
            [testimonial.id]: testimonial.stats
          }));
        }, index * 500);
      });
    }
  }, [isVisible]);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-12 w-96 h-96 bg-[#EBF0CB] bg-opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-[#6D7FBE] bg-opacity-25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#222952] bg-opacity-15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }}></div>
      </div>

      {/* Patrón de estrellas de fondo */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23222952' fill-opacity='0.4'%3E%3Cpath d='M30 6l3.09 9.26L42 18l-8.91 2.74L30 30l-3.09-9.26L18 18l8.91-2.74L30 6zm0 24l1.545 4.635L36 36l-4.455 1.365L30 42l-1.545-4.635L24 36l4.455-1.365L30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-90 px-6 py-3 rounded-full border border-[#6D7FBE] border-opacity-30 text-sm font-semibold text-[#222952] mb-8 shadow-lg">
            <Star className="w-5 h-5 text-yellow-500" />
            Resultados reales de clientes
            <div className="w-2 h-2 bg-[#6D7FBE] rounded-full animate-ping"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-[#222952] leading-tight mb-6">
            <span className="relative">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                Casos de éxito
              </span>
              <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            Descubre cómo otros profesionales como tú han{' '}
            <span className="font-semibold text-[#222952]">transformado su negocio</span> con nuestro servicio
          </p>
        </div>

        {/* Métricas principales */}
        <div className={`grid md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group"
            >
              <div className={`w-12 h-12 ${metric.color} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={metric.color}>
                  {metric.icon}
                </div>
              </div>
              <div className={`text-3xl font-black ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimoniales principales */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Testimonio destacado */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="relative bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-100 overflow-hidden group hover:shadow-3xl transition-all duration-500">
              {/* Efecto de brillo */}
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[activeTestimonial].color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icono de comillas */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-60 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-[#6D7FBE]" />
              </div>

              <div className="relative z-10">
                {/* Avatar y empresa */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${testimonials[activeTestimonial].color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                    {testimonials[activeTestimonial].avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#222952]">
                      {testimonials[activeTestimonial].author}
                    </h3>
                    <p className="text-[#6D7FBE] font-semibold">
                      {testimonials[activeTestimonial].company}
                    </p>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      {testimonials[activeTestimonial].location}
                    </div>
                  </div>
                </div>

                {/* Testimonio */}
                <blockquote className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2 font-medium">5.0/5</span>
                </div>

                {/* Stats del testimonio activo */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#6D7FBE] mb-1">
                      {animatedStats[testimonials[activeTestimonial].id]?.encargos || 0}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Encargos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#222952] mb-1">
                      {animatedStats[testimonials[activeTestimonial].id]?.leads || 0}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Leads/mes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#6D7FBE] mb-1">
                      {animatedStats[testimonials[activeTestimonial].id]?.tiempo || 0}h
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Ahorradas/sem</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Indicadores de testimoniales */}
            <div className="flex justify-center gap-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-[#6D7FBE] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Grid de testimoniales mini */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '600ms' }}>
            {testimonials.filter((_, index) => index !== activeTestimonial).map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:bg-opacity-80 transition-all duration-300 cursor-pointer group"
                onClick={() => setActiveTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-xl flex items-center justify-center text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#222952] text-lg">
                      {testimonial.author}
                    </h4>
                    <p className="text-[#6D7FBE] text-sm font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#6D7FBE] group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-[#6D7FBE] font-semibold">
                    {animatedStats[testimonial.id]?.encargos || 0} encargos cerrados
                  </span>
                </div>
              </div>
            ))}

            {/* CTA en la columna derecha */}
            <div className="bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#6D7FBE] border-opacity-30">
              <div className="text-center">
                <Zap className="w-12 h-12 text-[#6D7FBE] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#222952] mb-2">
                  ¿Quieres ser el siguiente?
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  Únete a más de 200 agencias que ya han transformado su captación
                </p>
                <button className="w-full bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  Ver más casos de éxito
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Logos de empresas (simulados) */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <p className="text-gray-500 text-sm mb-8 font-medium">
            Confían en nosotros más de 200 agencias inmobiliarias
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['NovaHabitat', 'Silva Propiedades', 'Torres & Asociados', 'Ramírez Inmobiliaria', 'García Properties', 'Mediterráneo Real Estate'].map((company, index) => (
              <div key={index} className="bg-white bg-opacity-50 px-6 py-3 rounded-lg border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-opacity-80 transition-all duration-300">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;