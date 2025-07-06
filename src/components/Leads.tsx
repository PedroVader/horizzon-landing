import React, { useState } from 'react';
import { CheckCircle, Filter, Sparkles, Target, TrendingUp, Users, ArrowRight, Zap } from 'lucide-react';

const RealLeads = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: <Target className="w-5 h-5" />,
      text: 'Formularios online con filtros que verifican el interés real del contacto',
      highlight: 'formularios inteligentes'
    },
    {
      icon: <Filter className="w-5 h-5" />,
      text: 'Preguntas clave para descartar perfiles poco comprometidos',
      highlight: 'filtrado avanzado'
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: 'Segmentación avanzada por zona, tipo de inmueble y situación del vendedor',
      highlight: 'segmentación precisa'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: 'Aunque puede colarse algún lead no deseado, no es lo habitual',
      highlight: '95% efectividad'
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: 'Resultado: Leads más calientes, más abiertos a hablar, y con más probabilidades de acabar en encargo',
      highlight: 'conversión superior'
    }
  ];

  const stats = [
    { number: '3x', label: 'Más conversión que leads fríos' },
    { number: '85%', label: 'Tasa de contacto exitoso' },
    { number: '60%', label: 'Menos tiempo perdido' }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background decor mejorado */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-32 left-10 w-64 h-64 bg-[#EBF0CB] bg-opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#6D7FBE] bg-opacity-15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-64 right-32 w-32 h-32 bg-[#222952] bg-opacity-10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>

      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, #6D7FBE 2px, transparent 0), radial-gradient(circle at 75px 75px, #EBF0CB 2px, transparent 0)`,
        backgroundSize: '100px 100px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido izquierdo */}
          <div>
            {/* Section header mejorado */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#EBF0CB] to-[#EBF0CB] bg-opacity-60 px-6 py-3 rounded-full border border-[#6D7FBE] border-opacity-20 text-sm font-semibold text-[#222952] mb-8 shadow-sm hover:shadow-md transition-all duration-300">
                <Sparkles className="w-5 h-5 text-[#6D7FBE]" />
                Calidad de leads garantizada
                <div className="w-2 h-2 bg-[#6D7FBE] rounded-full animate-ping"></div>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-[#222952] leading-tight mb-8">
                Leads reales,{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                    no curiosos
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed mb-8">
                Un sistema diseñado para filtrar y atraer propietarios{' '}
                <span className="font-semibold text-[#222952]">listos para avanzar</span>.
              </p>

              {/* Estadísticas rápidas */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-white bg-opacity-50 rounded-xl border border-[#6D7FBE] border-opacity-20 hover:bg-opacity-80 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-black text-[#6D7FBE] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card mejorada */}
          <div className="relative">
            <div className="relative bg-white bg-opacity-90 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group">
              {/* Gradiente de borde animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              <div className="absolute inset-0.5 bg-white rounded-3xl -z-10"></div>

              {/* Icono principal mejorado */}
              <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#EBF0CB] to-[#EBF0CB] bg-opacity-80 mb-8 group-hover:scale-110 transition-transform duration-300">
                <Filter className="w-8 h-8 text-[#222952]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#6D7FBE] to-[#222952] rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Lista de características mejorada */}
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 text-gray-700 text-base md:text-lg group/item hover:bg-[#EBF0CB] hover:bg-opacity-30 p-3 rounded-xl transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className={`flex-shrink-0 p-2 rounded-lg transition-all duration-300 ${
                      hoveredCard === index 
                        ? 'bg-[#6D7FBE] text-white shadow-lg' 
                        : 'bg-[#EBF0CB] bg-opacity-40 text-[#6D7FBE]'
                    }`}>
                      {hoveredCard === index ? <CheckCircle className="w-5 h-5" /> : feature.icon}
                    </div>
                    <div className="flex-1">
                      <span className={`transition-all duration-300 ${
                        hoveredCard === index ? 'text-[#222952] font-semibold' : ''
                      }`}>
                        {feature.text}
                      </span>
                      {hoveredCard === index && (
                        <div className="text-sm text-[#6D7FBE] font-semibold mt-1 opacity-0 animate-fadeIn">
                          ✨ {feature.highlight}
                        </div>
                      )}
                    </div>
                    <ArrowRight className={`w-5 h-5 text-[#6D7FBE] transition-all duration-300 ${
                      hoveredCard === index ? 'translate-x-1 opacity-100' : 'opacity-0'
                    }`} />
                  </div>
                ))}
              </div>

              {/* CTA mejorado */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#6D7FBE] mb-1">
                      Resultado garantizado
                    </div>
                    <div className="text-xs text-gray-500">
                      Leads de mayor calidad y conversión
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos decorativos adicionales */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#EBF0CB] rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#6D7FBE] bg-opacity-20 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Sección adicional de confianza */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-20 relative z-10">
        <div className="bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-60 rounded-2xl p-8 border border-[#6D7FBE] border-opacity-20">
          <div className="text-center">
            <div className="text-lg font-semibold text-[#222952] mb-2">
              💡 Dato interesante
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Los agentes que utilizan nuestro sistema de filtrado ahorran{' '}
              <span className="font-bold text-[#6D7FBE]">4 horas semanales</span> y aumentan su{' '}
              <span className="font-bold text-[#222952]">tasa de cierre en un 40%</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealLeads;