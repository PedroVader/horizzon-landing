import React, { useState, useEffect } from 'react';
import { Target, Search, Users, TrendingUp, MessageCircle, Clock, Star, CheckCircle, ArrowRight, Filter, Building2, Calendar, Shield, Workflow } from 'lucide-react';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Definimos tu zona objetivo",
      description: "Analizamos tu mercado local y identificamos las mejores oportunidades de captación",
      stats: "72h para configurar"
    },
    {
      icon: <Search className="w-5 h-5" />,
      title: "Lanzamos campañas dirigidas",
      description: "Creamos y gestionamos campañas en Meta y Google optimizadas para propietarios",
      stats: "Meta + Google activos"
    },
    {
      icon: <Filter className="w-5 h-5" />,
      title: "Filtramos los contactos",
      description: "Solo recibes leads cualificados con intención real de vender",
      stats: "95% de precisión"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Te entregamos los leads",
      description: "Contactos cualificados en tiempo real listos para contactar",
      stats: "Hasta 40 leads/mes"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-4 h-4" />,
      title: "Ahorro de tiempo",
      value: "4h/semana"
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      title: "Mayor conversión",
      value: "3x más efectivo"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      title: "Sin riesgo",
      value: "100% flexible"
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      title: "Soporte continuo",
      value: "24/7 disponible"
    }
  ];

  return (
    <section id="que-hacemos" className="py-24 bg-white relative">
      {/* Background sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-48 h-48 bg-[#EBF0CB] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header simplificado */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-[#EBF0CB] bg-opacity-60 px-4 py-2 rounded-full text-sm font-medium text-[#222952] mb-6">
            <Workflow className="w-4 h-4 text-[#6D7FBE]" />
            Nuestro proceso
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#222952] mb-6 max-w-3xl mx-auto">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                ¿Qué hacemos?
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sistema automatizado para generar{' '}
            <span className="font-semibold text-[#222952]">leads cualificados</span>
          </p>
        </div>

        {/* Proceso simplificado */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Pasos del proceso */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                } ${activeProcess === index ? 'scale-105' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setActiveProcess(index)}
              >
                <div className={`bg-white rounded-2xl p-6 border transition-all duration-300 ${
                  activeProcess === index 
                    ? 'border-[#6D7FBE] shadow-lg bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-50' 
                    : 'border-gray-200 hover:border-[#6D7FBE] hover:border-opacity-50'
                }`}>
                  
                  {/* Número del paso */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#6D7FBE] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Contenido */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#6D7FBE] rounded-full flex items-center justify-center text-[#6D7FBE] flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold mb-2 transition-colors duration-300 ${
                        activeProcess === index ? 'text-[#6D7FBE]' : 'text-[#222952]'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="text-xs font-semibold text-[#6D7FBE]">
                        📊 {step.stats}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Línea conectora */}
                {index < processSteps.length - 1 && (
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-[#6D7FBE] bg-opacity-30"></div>
                )}
              </div>
            ))}
          </div>

          {/* Panel lateral simplificado */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl border border-[#6D7FBE] flex items-center justify-center text-[#6D7FBE]">
                    <div className="text-xl">
                      {processSteps[activeProcess].icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#222952] mb-2">
                    Paso {activeProcess + 1}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {processSteps[activeProcess].description}
                  </p>
                </div>

                {/* Indicadores de proceso */}
                <div className="flex justify-center gap-2 mb-6">
                  {processSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProcess(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeProcess 
                          ? 'bg-[#6D7FBE] w-6' 
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Resultado */}
                <div className="p-4 bg-[#EBF0CB] bg-opacity-40 rounded-xl text-center">
                  <p className="text-[#222952] text-sm font-medium">
                    📈 {processSteps[activeProcess].stats}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios simplificados */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-[#222952] mb-2">
              ¿Por qué funciona?
            </h3>
            <p className="text-gray-600 text-sm">
              Años de experiencia optimizando cada paso
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-8 h-8 border border-[#6D7FBE] rounded-full flex items-center justify-center mx-auto mb-3 text-[#6D7FBE]">
                  {benefit.icon}
                </div>
                <h4 className="text-sm font-semibold text-[#222952] mb-1">
                  {benefit.title}
                </h4>
                <div className="text-[#6D7FBE] font-bold text-sm">
                  {benefit.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA simplificado */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-[#EBF0CB] bg-opacity-40 rounded-2xl p-8 max-w-2xl mx-auto">
            <Building2 className="w-12 h-12 text-[#6D7FBE] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#222952] mb-3">
              ¿Listo para automatizar tu captación?
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              Únete a las +70 agencias que ya lo han hecho
            </p>

            <button className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              <Calendar className="w-5 h-5" />
              Ver demo gratuita
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <p className="text-gray-500 text-xs mt-3">
              🚀 15 minutos • Sin compromiso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;