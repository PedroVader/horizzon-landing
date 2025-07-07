import React, { useState, useEffect } from 'react';
import { Star, Quote, TrendingUp, Calendar, MapPin, Users, Award, ArrowRight, Building2, Target, Zap } from 'lucide-react';

const SuccessCases = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
      stats: { encargos: 3, leads: 38, tiempo: 4 }
    },
    {
      id: 2,
      quote: "Los leads que recibimos son de una calidad impresionante. Ya no perdemos tiempo con curiosos.",
      author: "Marina Silva",
      company: "Silva Propiedades",
      location: "Barcelona",
      avatar: "🏠",
      stats: { encargos: 5, leads: 42, tiempo: 3 }
    },
    {
      id: 3,
      quote: "En 6 meses hemos triplicado nuestra cartera de exclusivas. El ROI es increíble.",
      author: "Alejandro Torres",
      company: "Torres & Asociados",
      location: "Valencia",
      avatar: "🏆",
      stats: { encargos: 8, leads: 45, tiempo: 2 }
    },
    {
      id: 4,
      quote: "Llevábamos años buscando algo así. Ahora tenemos leads constantemente sin hacer publicidad nosotros.",
      author: "Isabel Ramírez",
      company: "Ramírez Inmobiliaria",
      location: "Sevilla",
      avatar: "⭐",
      stats: { encargos: 4, leads: 36, tiempo: 5 }
    }
  ];

  const metrics = [
    { icon: <Award className="w-5 h-5" />, value: "94%", label: "Satisfacción", color: "text-[#6D7FBE]" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "3.8x", label: "ROI promedio", color: "text-[#222952]" },
    { icon: <Target className="w-5 h-5" />, value: "40+", label: "Leads/mes", color: "text-[#6D7FBE]" },
    { icon: <Calendar className="w-5 h-5" />, value: "<30", label: "Días primer encargo", color: "text-[#222952]" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Background simplificado */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-20 w-48 h-48 bg-[#EBF0CB] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header simplificado */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-[#EBF0CB] bg-opacity-60 px-4 py-2 rounded-full text-sm font-medium text-[#222952] mb-6" id='casos'>
            <Star className="w-4 h-4 text-yellow-500" />
            Resultados reales
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#222952] leading-tight mb-4">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                Casos de éxito
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesionales como tú que han{' '}
            <span className="font-semibold text-[#222952]">transformado su negocio</span>
          </p>
        </div>

        {/* Métricas simplificadas */}
        <div className={`grid md:grid-cols-4 gap-4 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 border border-gray-200 text-center"
            >
              <div className="w-8 h-8 mx-auto mb-3 flex items-center justify-center">
                <div className={metric.color}>
                  {metric.icon}
                </div>
              </div>
              <div className={`text-2xl font-bold ${metric.color} mb-1`}>
                {metric.value}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial principal simplificado */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Testimonio destacado */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              {/* Avatar y empresa */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#6D7FBE] rounded-xl flex items-center justify-center text-lg">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <h3 className="font-bold text-[#222952]">
                    {testimonials[activeTestimonial].author}
                  </h3>
                  <p className="text-[#6D7FBE] text-sm font-medium">
                    {testimonials[activeTestimonial].company}
                  </p>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin className="w-3 h-3" />
                    {testimonials[activeTestimonial].location}
                  </div>
                </div>
              </div>

              {/* Testimonio */}
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
                <span className="text-gray-600 ml-1 text-sm">5.0</span>
              </div>

              {/* Stats simplificadas */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-xl font-bold text-[#6D7FBE] mb-1">
                    {testimonials[activeTestimonial].stats.encargos}
                  </div>
                  <div className="text-xs text-gray-600">Encargos</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#222952] mb-1">
                    {testimonials[activeTestimonial].stats.leads}
                  </div>
                  <div className="text-xs text-gray-600">Leads/mes</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-[#6D7FBE] mb-1">
                    {testimonials[activeTestimonial].stats.tiempo}h
                  </div>
                  <div className="text-xs text-gray-600">Ahorradas</div>
                </div>
              </div>
            </div>

            {/* Indicadores simplificados */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-[#6D7FBE] w-6' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Lista de testimoniales */}
          <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '600ms' }}>
            {testimonials.filter((_, index) => index !== activeTestimonial).map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl p-4 border border-gray-200 cursor-pointer hover:border-[#6D7FBE] hover:border-opacity-50 transition-all duration-300"
                onClick={() => setActiveTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#6D7FBE] rounded-lg flex items-center justify-center text-sm">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#222952] text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-[#6D7FBE] text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}

            {/* CTA simplificado */}
            <div className="bg-[#EBF0CB] bg-opacity-40 rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-[#6D7FBE] mx-auto mb-3" />
              <h3 className="font-bold text-[#222952] mb-2">
                ¿Quieres ser el siguiente?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Únete a +200 agencias exitosas
              </p>
              <button className="w-full bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                <Users className="w-4 h-4" />
                Ver más casos
              </button>
            </div>
          </div>
        </div>

        {/* Logos empresas simplificado */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <p className="text-gray-500 text-sm mb-4">
            Confían en nosotros +200 agencias inmobiliarias
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 opacity-60">
            {['NovaHabitat', 'Silva Propiedades', 'Torres & Asociados', 'Ramírez Inmobiliaria'].map((company, index) => (
              <div key={index} className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-xs font-medium">
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