import React, { useState, useEffect } from 'react';
import { CheckCircle, Building2, Target, TrendingUp, Zap, ArrowRight, User, Clock, Star } from 'lucide-react';

const IsThisForYou = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const criteria = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Eres agencia inmobiliaria o agente",
      description: "Profesional del sector con experiencia en ventas"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Quieres captar propiedades en exclusiva",
      description: "Buscas expandir tu cartera de inmuebles únicos"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Buscas flujo constante de oportunidades mensuales",
      description: "Necesitas leads regulares para hacer crecer tu negocio"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Estás dispuesto a contactar rápido y con método",
      description: "Tienes el compromiso de seguir leads activamente"
    }
  ];

  const handleCheck = (index) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(item => item !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const allChecked = checkedItems.length === criteria.length;

  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Background simplificado */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-48 h-48 bg-[#EBF0CB] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header simplificado */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-[#EBF0CB] bg-opacity-60 px-4 py-2 rounded-full text-sm font-medium text-[#222952] mb-6">
            <User className="w-4 h-4 text-[#6D7FBE]" />
            Perfil ideal
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#222952] leading-tight mb-4">
            🧑‍💼{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                ¿Es esto para ti?
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Marca cada criterio que te identifique y descubre si eres nuestro{' '}
            <span className="font-semibold text-[#222952]">cliente ideal</span>
          </p>
        </div>

        {/* Checklist simplificado */}
        <div className="mb-8">
          <div className="space-y-4">
            {criteria.map((criterion, index) => (
              <div
                key={index}
                className={`transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => handleCheck(index)}
              >
                <div className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 ${
                  checkedItems.includes(index) 
                    ? 'border-[#6D7FBE] shadow-lg bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-50' 
                    : 'border-gray-200 hover:border-[#6D7FBE] hover:border-opacity-50'
                }`}>
                  
                  <div className="flex items-center gap-4">
                    {/* Checkbox simplificado */}
                    <div className={`w-12 h-12 rounded-xl border-2 transition-all duration-300 flex items-center justify-center ${
                      checkedItems.includes(index)
                        ? 'bg-[#6D7FBE] border-[#6D7FBE] scale-105'
                        : 'border-gray-300 hover:border-[#6D7FBE]'
                    }`}>
                      {checkedItems.includes(index) ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <div className="text-[#6D7FBE] opacity-50">
                          {criterion.icon}
                        </div>
                      )}
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                      <h3 className={`font-bold mb-1 transition-colors duration-300 ${
                        checkedItems.includes(index) ? 'text-[#6D7FBE]' : 'text-[#222952]'
                      }`}>
                        ✅ {criterion.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {criterion.description}
                      </p>
                    </div>

                    {/* Indicador visual */}
                    <div className={`w-6 h-6 transition-all duration-300 ${
                      checkedItems.includes(index) 
                        ? 'text-[#6D7FBE] opacity-100' 
                        : 'text-gray-400 opacity-0'
                    }`}>
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicador de progreso simplificado */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Tu compatibilidad</span>
              <span className="text-lg font-bold text-[#6D7FBE]">
                {checkedItems.length}/4
              </span>
            </div>
            
            {/* Barra de progreso */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] h-2 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(checkedItems.length / criteria.length) * 100}%` }}
              ></div>
            </div>

            {/* Mensaje dinámico */}
            <div className="text-center text-sm">
              {checkedItems.length === 0 && (
                <p className="text-gray-500">Marca los criterios que te identifiquen</p>
              )}
              {checkedItems.length === 1 && (
                <p className="text-[#6D7FBE] font-medium">¡Buen comienzo!</p>
              )}
              {checkedItems.length === 2 && (
                <p className="text-[#6D7FBE] font-medium">Vas por buen camino 👍</p>
              )}
              {checkedItems.length === 3 && (
                <p className="text-[#222952] font-semibold">¡Casi perfecto! Solo falta uno</p>
              )}
              {allChecked && (
                <p className="text-[#6D7FBE] font-bold flex items-center justify-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  ¡Eres el cliente ideal!
                  <Star className="w-4 h-4 text-yellow-500" />
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Resultado cuando todo está marcado */}
        {allChecked && (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-80 rounded-2xl p-8 border border-[#6D7FBE] border-opacity-30">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#6D7FBE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#222952] mb-3">
                  🎉 ¡Felicidades!
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
                  Cumples con <span className="font-bold text-[#6D7FBE]">todos los criterios</span>.{' '}
                  Nuestro servicio está diseñado para{' '}
                  <span className="font-semibold text-[#222952]">profesionales como tú</span>.
                </p>

                <button className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                  <Clock className="w-5 h-5" />
                  Empezar ahora
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mensaje para criterios parciales */}
        {!allChecked && checkedItems.length > 0 && (
          <div className="text-center">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-gray-600 mb-3">
                {checkedItems.length < 3 
                  ? "Puede que nuestro servicio no sea ideal para tu perfil actual"
                  : "¡Estás muy cerca! Solo te falta un criterio más"
                }
              </p>
              <p className="text-sm text-gray-500">
                Contacta con nosotros para alternativas personalizadas
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IsThisForYou;