import React, { useState } from 'react';
import { Users, TrendingUp, MessageCircle, Clock, Star, CheckCircle, ArrowRight, Zap, Target, Shield, Phone, Calendar } from 'lucide-react';

const ServiceIncludes = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Hasta 40 leads exclusivos",
      description: "cada mes, adaptados a tu zona y tipo de cliente"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Campañas activas en Meta y Google",
      description: "gestionadas por expertos en captación inmobiliaria"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Acompañamiento personalizado",
      description: "guión de contacto, grupo de WhatsApp y revisión a mitad de mes"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Sin compromiso de permanencia",
      description: "trabajamos mes a mes, solo si estás satisfecho"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Background simplificado */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 left-20 w-48 h-48 bg-[#EBF0CB] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header simplificado */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-[#EBF0CB] bg-opacity-60 px-4 py-2 rounded-full text-sm font-medium text-[#222952] mb-6">
            <Zap className="w-4 h-4 text-[#6D7FBE]" />
            Todo incluido
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#222952] leading-tight mb-6 max-w-4xl mx-auto">
            Un canal extra de{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                captación
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
            </span>
            ,<br />
            con todo lo que necesitas
          </h2>
        </div>

        {/* Grid de características simplificado */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm h-full">
                {/* Icono */}
                <div className="w-10 h-10 flex items-center justify-center rounded-xl border border-[#6D7FBE] mb-4 text-[#6D7FBE]">
                  {feature.icon}
                </div>

                {/* Contenido */}
                <div>
                  <h3 className="text-lg font-bold text-[#222952] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección del beneficio principal simplificada */}
        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-80 rounded-2xl p-8 border border-[#6D7FBE] border-opacity-30">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6D7FBE] rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#222952]">
                  💡 Y lo mejor:
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                Con cerrar{' '}
                <span className="font-bold text-[#6D7FBE] text-xl">un solo encargo al mes</span>
                , ya rentabilizas el servicio.{' '}
                <span className="font-semibold text-[#222952]">
                  Todo lo demás, es ganancia.
                </span>
              </p>

              {/* ROI Visual simplificado */}
              <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <div className="bg-white bg-opacity-60 rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-[#6D7FBE] mb-1">1x</div>
                  <div className="text-xs text-gray-600">Encargo = ROI</div>
                </div>
                <div className="bg-white bg-opacity-60 rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-[#222952] mb-1">2x+</div>
                  <div className="text-xs text-gray-600">Ganancia pura</div>
                </div>
                <div className="bg-white bg-opacity-60 rounded-xl p-4 border border-gray-200">
                  <div className="text-2xl font-bold text-[#6D7FBE] mb-1">40</div>
                  <div className="text-xs text-gray-600">Leads/mes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs simplificados */}
        <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
            <button className="flex-1 bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Demo gratuita
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button className="flex-1 bg-white text-[#222952] px-6 py-3 rounded-xl font-semibold border-2 border-[#6D7FBE] border-opacity-30 hover:border-opacity-100 hover:bg-[#EBF0CB] hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Hablar con asesor
            </button>
          </div>
          
          <p className="text-gray-500 text-xs mt-3">
            ✓ Sin compromiso • Respuesta en 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludes;