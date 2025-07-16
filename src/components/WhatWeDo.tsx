import React, { useState, useEffect, useRef } from 'react';
import { Target, Search, Users, Filter, Sparkles, ArrowRight, Zap } from 'lucide-react';

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

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

  // Observer para animación de números
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Animación de números
  const AnimatedNumber = ({ value, duration = 2000, prefix = '', suffix = '' }) => {
    const [displayValue, setDisplayValue] = useState(0);
    
    useEffect(() => {
      if (!statsVisible) return;
      
      const numericValue = parseInt(value.toString().replace(/\D/g, ''));
      const increment = numericValue / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setDisplayValue(numericValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [value, duration, statsVisible]);
    
    return (
      <span>
        {prefix}{displayValue.toLocaleString()}{suffix}
      </span>
    );
  };

  const processSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Definimos",
      subtitle: "tu zona objetivo",
      description: "Analizamos tu mercado local para maximizar oportunidades",
      color: "from-[#222952] to-[#6D7FBE]",
      stats: { value: "72", suffix: "h", label: "configuración rápida" }
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Lanzamos",
      subtitle: "campañas dirigidas",
      description: "Meta y Google Ads optimizadas para propietarios",
      color: "from-[#6D7FBE] to-[#222952]",
      stats: { value: "10", suffix: "+", label: "inmobiliarias activas" }
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Filtramos",
      subtitle: "los contactos",
      description: "Solo leads cualificados con intención real",
      color: "from-[#222952] via-[#6D7FBE] to-[#222952]",
      stats: { value: "95", suffix: "%", label: "de precisión" }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Entregamos",
      subtitle: "leads listos",
      description: "Contactos verificados directo a tu CRM",
      color: "from-[#6D7FBE] via-[#222952] to-[#6D7FBE]",
      stats: { value: "40", suffix: "+", label: "leads mensuales" }
    }
  ];

  return (
    <section id="que-hacemos" className="py-24 bg-gradient-to-br from-white via-[#EBF0CB]/30 to-[#EBF0CB] relative overflow-hidden">
      {/* Fondo minimalista profesional */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-[#EBF0CB] rounded-full blur-[200px] opacity-40"></div>
        <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] bg-[#6D7FBE] rounded-full blur-[200px] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[150px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header ultra minimalista */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-sm font-semibold tracking-wider uppercase text-[#6D7FBE]">
              Nuestro proceso
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-[#222952] mb-6">
            Que hacemos?
          </h2>
          
          <p className="text-xl text-[#222952]/70 font-light max-w-3xl mx-auto">
            Sistema automatizado para generar leads cualificados de propietarios vendedores
          </p>
        </div>

        {/* Visualización principal del proceso */}
        <div className="relative mb-32">
          {/* Timeline visual */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6D7FBE] via-[#222952] to-[#6D7FBE] opacity-30"></div>
          
          {/* Steps con diseño visual profesional */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setActiveProcess(index)}
              >
                {/* Card con efecto visual profesional */}
                <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border-2 transition-all duration-500 overflow-hidden ${
                  activeProcess === index 
                    ? 'border-[#222952] shadow-2xl shadow-[#6D7FBE]/10 scale-105' 
                    : 'border-[#EBF0CB] hover:border-[#6D7FBE] hover:shadow-xl hover:shadow-[#222952]/5'
                }`}>
                  {/* Fondo gradiente dinámico */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} transition-opacity duration-500 ${
                    activeProcess === index ? 'opacity-10' : 'opacity-0'
                  }`}></div>
                  
                  {/* Número grande de fondo */}
                  <div className="absolute -top-4 -right-4 text-8xl font-bold text-[#EBF0CB] select-none">
                    0{index + 1}
                  </div>
                  
                  {/* Contenido */}
                  <div className="relative z-10">
                    {/* Icono con gradiente */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      {step.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#222952] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-lg text-[#6D7FBE] font-medium mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-[#222952]/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Indicador activo */}
                  {activeProcess === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6D7FBE] to-[#222952]"></div>
                  )}
                </div>
                
                {/* Conector visual entre steps (desktop) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className={`w-8 h-8 transition-all duration-500 ${
                      activeProcess > index ? 'text-[#6D7FBE]' : 'text-[#EBF0CB]'
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas animadas */}
        <div ref={statsRef} className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-[#222952] mb-4">
              Resultados que importan
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#6D7FBE] to-[#222952] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`text-5xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-2`}>
                  <AnimatedNumber 
                    value={step.stats.value} 
                    suffix={step.stats.suffix}
                    duration={2000 + index * 300}
                  />
                </div>
                <p className="text-[#222952]/70 text-sm">
                  {step.stats.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA minimalista profesional */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#222952] text-white rounded-full hover:bg-[#6D7FBE] transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl">
            <span className="font-semibold">Empezar ahora</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;