import React, { useState } from 'react';
import { Users, TrendingUp, MessageCircle, Clock, Star, CheckCircle, ArrowRight, Zap, Target, Shield, Phone, Calendar } from 'lucide-react';

const ServiceIncludes = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Hasta 40 leads exclusivos",
      description: "cada mes, adaptados a tu zona y tipo de cliente",
      highlight: "Leads cualificados mensualmente",
      color: "from-[#6D7FBE] to-[#222952]"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Campañas activas en Meta y Google",
      description: "gestionadas por expertos en captación inmobiliaria",
      highlight: "Gestión profesional 24/7",
      color: "from-[#222952] to-[#6D7FBE]"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Acompañamiento personalizado",
      description: "guión de contacto, grupo de WhatsApp y revisión a mitad de mes",
      highlight: "Soporte continuo incluido",
      color: "from-[#6D7FBE] to-[#EBF0CB]"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sin compromiso de permanencia",
      description: "trabajamos mes a mes, solo si estás satisfecho",
      highlight: "Flexibilidad total garantizada",
      color: "from-[#222952] to-[#6D7FBE]"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-72 h-72 bg-[#EBF0CB] bg-opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-12 w-96 h-96 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#222952] bg-opacity-10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Patrón geométrico de fondo */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23222952' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header de la sección */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-80 px-6 py-3 rounded-full border border-[#6D7FBE] border-opacity-30 text-sm font-semibold text-[#222952] mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <Zap className="w-5 h-5 text-[#6D7FBE]" />
            Todo incluido en el servicio
            <div className="w-2 h-2 bg-[#6D7FBE] rounded-full animate-ping"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#222952] leading-tight mb-8 max-w-5xl mx-auto">
            Un canal extra de{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                captación
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
            </span>
            ,<br />
            con todo lo que necesitas para que funcione
          </h2>
        </div>

        {/* Grid de características */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="relative bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 h-full">
                {/* Efecto de brillo en hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icono animado */}
                <div className={`relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                  <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Contenido */}
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-[#222952] mb-3 group-hover:text-[#6D7FBE] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  {/* Badge destacado */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    hoveredFeature === index 
                      ? 'bg-[#6D7FBE] text-white shadow-lg' 
                      : 'bg-[#EBF0CB] bg-opacity-60 text-[#222952]'
                  }`}>
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-semibold">
                      {feature.highlight}
                    </span>
                  </div>
                </div>

                {/* Flecha indicadora */}
                <ArrowRight className={`absolute top-8 right-8 w-6 h-6 text-[#6D7FBE] transition-all duration-300 ${
                  hoveredFeature === index ? 'translate-x-1 opacity-100' : 'opacity-0'
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Sección destacada del beneficio principal */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="relative bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-90 backdrop-blur-lg p-10 md:p-12 rounded-3xl shadow-2xl border-2 border-[#6D7FBE] border-opacity-30 hover:border-opacity-50 transition-all duration-500 group overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#6D7FBE] bg-opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#222952]">
                  💡 Y lo mejor:
                </h3>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8 max-w-4xl mx-auto">
                Con cerrar{' '}
                <span className="font-bold text-[#6D7FBE] text-2xl md:text-3xl">un solo encargo al mes</span>
                , ya rentabilizas el servicio.{' '}
                <span className="font-semibold text-[#222952]">
                  Todo lo demás, es ganancia para tu agencia.
                </span>
              </p>

              {/* ROI Visual */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white bg-opacity-60 rounded-2xl p-6 border border-[#6D7FBE] border-opacity-20">
                  <div className="text-3xl font-black text-[#6D7FBE] mb-2">1x</div>
                  <div className="text-sm text-gray-600 font-medium">Encargo = ROI</div>
                </div>
                <div className="bg-white bg-opacity-60 rounded-2xl p-6 border border-[#222952] border-opacity-20">
                  <div className="text-3xl font-black text-[#222952] mb-2">2x+</div>
                  <div className="text-sm text-gray-600 font-medium">Ganancia pura</div>
                </div>
                <div className="bg-white bg-opacity-60 rounded-2xl p-6 border border-[#EBF0CB] border-opacity-60 bg-[#EBF0CB] bg-opacity-40">
                  <div className="text-3xl font-black text-[#6D7FBE] mb-2">40</div>
                  <div className="text-sm text-gray-600 font-medium">Leads/mes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <button className="group flex-1 bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Solicita una demo gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group flex-1 bg-white text-[#222952] px-8 py-4 rounded-2xl font-bold text-lg shadow-xl border-2 border-[#6D7FBE] border-opacity-30 hover:border-opacity-100 hover:bg-[#EBF0CB] hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Quiero hablar con un asesor
            </button>
          </div>
          
          <p className="text-gray-500 text-sm mt-4 font-medium">
            👉 Sin compromiso • Respuesta en menos de 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludes;