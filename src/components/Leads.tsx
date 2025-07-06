import React, { useState } from 'react';
import { CheckCircle, Filter, Sparkles, Target, TrendingUp, Users, ArrowRight, Zap } from 'lucide-react';

const RealLeads = () => {
  const features = [
    {
      icon: <Target className="w-4 h-4" />,
      text: 'Formularios online con filtros que verifican el interés real del contacto'
    },
    {
      icon: <Filter className="w-4 h-4" />,
      text: 'Preguntas clave para descartar perfiles poco comprometidos'
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: 'Segmentación avanzada por zona, tipo de inmueble y situación del vendedor'
    },
    {
      icon: <Zap className="w-4 h-4" />,
      text: 'Aunque puede colarse algún lead no deseado, no es lo habitual'
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      text: 'Resultado: Leads más calientes, más abiertos a hablar, y con más probabilidades de acabar en encargo'
    }
  ];

  const stats = [
    { number: '3x', label: 'Más conversión' },
    { number: '85%', label: 'Contacto exitoso' },
    { number: '60%', label: 'Menos tiempo perdido' }
  ];

  return (
    <section className="py-24 bg-white relative">
      {/* Background simplificado */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-20 left-20 w-48 h-48 bg-[#EBF0CB] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido izquierdo */}
          <div>
            {/* Header simplificado */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-[#EBF0CB] bg-opacity-60 px-4 py-2 rounded-full text-sm font-medium text-[#222952] mb-6">
                <Sparkles className="w-4 h-4 text-[#6D7FBE]" />
                Calidad garantizada
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#222952] leading-tight mb-6">
                Leads reales,{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                    no curiosos
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Sistema diseñado para filtrar y atraer propietarios{' '}
                <span className="font-semibold text-[#222952]">listos para avanzar</span>.
              </p>

              {/* Estadísticas simplificadas */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="text-xl font-bold text-[#6D7FBE] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card simplificada */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              {/* Icono principal */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#EBF0CB] bg-opacity-60 mb-6">
                <Filter className="w-6 h-6 text-[#222952]" />
              </div>

              {/* Lista de características simplificada */}
              <div className="space-y-4 mb-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 text-gray-700 text-sm"
                  >
                    <div className="flex-shrink-0 p-1.5 rounded-lg bg-[#EBF0CB] bg-opacity-40 text-[#6D7FBE]">
                      {feature.icon}
                    </div>
                    <span className="leading-relaxed">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Footer simplificado */}
              <div className="pt-4 border-t border-gray-100 text-center">
                <div className="text-sm font-semibold text-[#6D7FBE] mb-1">
                  ✓ Resultado garantizado
                </div>
                <div className="text-xs text-gray-500">
                  Leads de mayor calidad y conversión
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de confianza simplificada */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-16 relative z-10">
        <div className="bg-[#EBF0CB] bg-opacity-40 rounded-xl p-6 text-center">
          <div className="text-base font-semibold text-[#222952] mb-2">
            💡 Dato clave
          </div>
          <p className="text-gray-600 text-sm">
            Los agentes ahorran{' '}
            <span className="font-bold text-[#6D7FBE]">4h semanales</span> y aumentan{' '}
            <span className="font-bold text-[#222952]">40% su tasa de cierre</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealLeads;