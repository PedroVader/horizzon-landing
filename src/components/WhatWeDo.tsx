import React, { useState, useEffect } from 'react';
import { Target, Search, Users, TrendingUp, MessageCircle, Clock, Star, CheckCircle, ArrowRight, Zap, Filter, Building2, Calendar, Shield } from 'lucide-react';

const WhatWeDo = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcess((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Definimos tu zona objetivo",
      description: "Analizamos tu mercado local y identificamos las mejores oportunidades de captación en tu área específica",
      highlight: "Análisis de mercado personalizado",
      color: "from-[#6D7FBE] to-[#222952]",
      bgColor: "bg-[#6D7FBE]",
      stats: "72h para configurar"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Lanzamos campañas dirigidas",
      description: "Creamos y gestionamos campañas en Meta y Google optimizadas para captar propietarios interesados en vender",
      highlight: "Campañas profesionales 24/7",
      color: "from-[#222952] to-[#6D7FBE]",
      bgColor: "bg-[#222952]",
      stats: "Meta + Google activos"
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Filtramos los contactos",
      description: "Aplicamos nuestro sistema de filtrado para asegurar que solo recibas leads cualificados y con intención real",
      highlight: "Solo leads de calidad garantizada",
      color: "from-[#6D7FBE] to-[#EBF0CB]",
      bgColor: "bg-[#6D7FBE]",
      stats: "95% de precisión"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Te entregamos los leads",
      description: "Recibes contactos cualificados en tiempo real con toda la información necesaria para contactar efectivamente",
      highlight: "Entrega inmediata y organizada",
      color: "from-[#222952] to-[#6D7FBE]",
      bgColor: "bg-[#222952]",
      stats: "Hasta 40 leads/mes"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Ahorro de tiempo",
      description: "No gastes horas en prospección. Nosotros hacemos el trabajo por ti",
      value: "4h/semana"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Mayor conversión",
      description: "Leads pre-cualificados con mayor probabilidad de cierre",
      value: "3x más efectivo"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Sin riesgo",
      description: "Trabajamos mes a mes, sin permanencia ni compromisos largos",
      value: "100% flexible"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Soporte continuo",
      description: "Equipo experto siempre disponible para acompañarte",
      value: "24/7 disponible"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
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
            Nuestro proceso probado
            <div className="w-2 h-2 bg-[#6D7FBE] rounded-full animate-ping"></div>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#222952] leading-tight mb-8 max-w-5xl mx-auto">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                ¿Qué hacemos?
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto">
            Un sistema completo y automatizado para{' '}
            <span className="font-semibold text-[#222952]">generar leads cualificados</span> mientras tú te concentras en cerrar encargos
          </p>
        </div>

        {/* Proceso paso a paso */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Pasos del proceso */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                } ${activeProcess === index ? 'scale-105' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveProcess(index)}
              >
                <div className={`relative bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border-2 transition-all duration-500 ${
                  activeProcess === index 
                    ? 'border-[#6D7FBE] shadow-2xl bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-90' 
                    : 'border-gray-100 group-hover:border-[#6D7FBE] group-hover:border-opacity-50 group-hover:shadow-2xl'
                }`}>
                  
                  {/* Número del paso */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  {/* Efecto de brillo en hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl opacity-0 transition-opacity duration-500 ${
                    activeProcess === index ? 'opacity-10' : 'group-hover:opacity-5'
                  }`}></div>
                  
                  {/* Icono animado */}
                  <div className={`relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} mb-6 transition-transform duration-300 shadow-lg ${
                    activeProcess === index ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                    <div className="absolute inset-0 bg-white rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>

                  {/* Contenido */}
                  <div className="relative z-10">
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 ${
                      activeProcess === index ? 'text-[#6D7FBE]' : 'text-[#222952] group-hover:text-[#6D7FBE]'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    {/* Badge destacado */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeProcess === index || hoveredStep === index
                        ? 'bg-[#6D7FBE] text-white shadow-lg' 
                        : 'bg-[#EBF0CB] bg-opacity-60 text-[#222952]'
                    }`}>
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm font-semibold">
                        {step.highlight}
                      </span>
                    </div>

                    {/* Estadística */}
                    <div className="mt-4 text-sm font-bold text-[#6D7FBE]">
                      📊 {step.stats}
                    </div>
                  </div>

                  {/* Flecha indicadora */}
                  <ArrowRight className={`absolute top-8 right-8 w-6 h-6 text-[#6D7FBE] transition-all duration-300 ${
                    activeProcess === index || hoveredStep === index ? 'translate-x-1 opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Línea conectora */}
                {index < processSteps.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[#6D7FBE] to-[#222952] opacity-30"></div>
                )}
              </div>
            ))}
          </div>

          {/* Visualización del proceso activo */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="sticky top-8">
              <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Decoración animada */}
                <div className={`absolute inset-0 bg-gradient-to-r ${processSteps[activeProcess].color} rounded-3xl opacity-10 transition-all duration-700`}></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${processSteps[activeProcess].color} flex items-center justify-center shadow-xl animate-pulse`}>
                      <div className="text-white text-2xl">
                        {processSteps[activeProcess].icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#222952] mb-4">
                      Paso {activeProcess + 1}: {processSteps[activeProcess].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {processSteps[activeProcess].description}
                    </p>
                  </div>

                  {/* Indicadores de proceso */}
                  <div className="flex justify-center gap-3 mb-8">
                    {processSteps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveProcess(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeProcess 
                            ? 'bg-[#6D7FBE] w-8' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Beneficio destacado */}
                  <div className="p-6 bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-80 rounded-2xl border border-[#6D7FBE] border-opacity-20">
                    <div className="flex items-center gap-3 mb-3">
                      <Star className="w-6 h-6 text-[#6D7FBE]" />
                      <span className="font-bold text-[#222952]">Resultado:</span>
                    </div>
                    <p className="text-gray-700 font-medium">
                      {processSteps[activeProcess].highlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios adicionales */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-[#222952] mb-4">
              ¿Por qué funciona tan bien?
            </h3>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Años de experiencia y optimización continua nos han llevado a perfeccionar cada paso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#222952] mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {benefit.description}
                </p>
                <div className="text-[#6D7FBE] font-bold text-lg">
                  {benefit.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
          <div className="bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-90 backdrop-blur-lg p-10 md:p-12 rounded-3xl shadow-2xl border-2 border-[#6D7FBE] border-opacity-30 hover:border-opacity-50 transition-all duration-500 group overflow-hidden max-w-4xl mx-auto">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#6D7FBE] bg-opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
            
            <div className="relative z-10 text-center">
              <Building2 className="w-16 h-16 text-[#6D7FBE] mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-black text-[#222952] mb-4">
                ¿Listo para automatizar tu captación?
              </h3>
              <p className="text-xl text-gray-700 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                Únete a las +70 agencias que ya han revolucionado su forma de captar propiedades
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                <button className="group flex-1 bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                  <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Ver el sistema en acción
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              <p className="text-gray-500 text-sm mt-4 font-medium">
                🚀 Demo gratuita de 15 minutos • Sin compromiso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;