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
      icon: <Building2 className="w-6 h-6" />,
      title: "Eres agencia inmobiliaria o agente",
      description: "Profesional del sector con experiencia en ventas",
      color: "from-[#6D7FBE] to-[#222952]",
      bgColor: "bg-[#6D7FBE]"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Quieres captar propiedades en exclusiva",
      description: "Buscas expandir tu cartera de inmuebles únicos",
      color: "from-[#222952] to-[#6D7FBE]",
      bgColor: "bg-[#222952]"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Buscas flujo constante de oportunidades mensuales",
      description: "Necesitas leads regulares para hacer crecer tu negocio",
      color: "from-[#6D7FBE] to-[#EBF0CB]",
      bgColor: "bg-[#6D7FBE]"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Estás dispuesto a contactar rápido y con método",
      description: "Tienes el compromiso de seguir leads activamente",
      color: "from-[#222952] to-[#6D7FBE]",
      bgColor: "bg-[#222952]"
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
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-20 w-80 h-80 bg-[#EBF0CB] bg-opacity-40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-16 w-96 h-96 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-[#222952] bg-opacity-15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '5s' }}></div>
      </div>

      {/* Patrón hexagonal de fondo */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23222952' fill-opacity='0.3'%3E%3Cpath d='M20 20.5L24.33 15H35.67L40 20.5L35.67 26H24.33L20 20.5ZM0 20.5L4.33 15H15.67L20 20.5L15.67 26H4.33L0 20.5Z'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-90 px-6 py-3 rounded-full border border-[#6D7FBE] border-opacity-30 text-sm font-semibold text-[#222952] mb-8 shadow-lg">
            <User className="w-5 h-5 text-[#6D7FBE]" />
            Perfil ideal del cliente
            <div className="w-2 h-2 bg-[#6D7FBE] rounded-full animate-ping"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-[#222952] leading-tight mb-6">
            🧑‍💼{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                ¿Es esto para ti?
              </span>
              <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto mb-8">
            Marca cada criterio que te identifique y descubre si eres el{' '}
            <span className="font-semibold text-[#222952]">cliente ideal</span> para nuestro servicio
          </p>
        </div>

        {/* Interactive Checklist */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid gap-6">
            {criteria.map((criterion, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => handleCheck(index)}
              >
                <div className={`relative bg-white backdrop-blur-lg p-8 rounded-3xl shadow-lg border-2 transition-all duration-500 ${
                  checkedItems.includes(index) 
                    ? 'border-[#6D7FBE] shadow-2xl scale-105 bg-gradient-to-r from-[#EBF0CB] to-white bg-opacity-90' 
                    : 'border-gray-200 hover:border-[#6D7FBE] hover:border-opacity-50 hover:shadow-xl'
                }`}>
                  
                  {/* Efecto de brillo */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${criterion.color} rounded-3xl opacity-0 transition-opacity duration-500 ${
                    checkedItems.includes(index) ? 'opacity-10' : 'group-hover:opacity-5'
                  }`}></div>

                  <div className="relative z-10 flex items-center gap-6">
                    {/* Checkbox animado */}
                    <div className={`relative w-16 h-16 rounded-2xl border-3 transition-all duration-500 flex items-center justify-center ${
                      checkedItems.includes(index)
                        ? `${criterion.bgColor} border-transparent shadow-lg scale-110`
                        : 'border-gray-300 bg-white group-hover:border-[#6D7FBE] group-hover:scale-105'
                    }`}>
                      {checkedItems.includes(index) ? (
                        <CheckCircle className="w-8 h-8 text-white animate-bounce" />
                      ) : (
                        <div className={`w-8 h-8 rounded-lg ${criterion.bgColor} bg-opacity-20 flex items-center justify-center text-[#6D7FBE] group-hover:bg-opacity-40 transition-all duration-300`}>
                          {criterion.icon}
                        </div>
                      )}
                      
                      {/* Efecto de ondas al hacer check */}
                      {checkedItems.includes(index) && (
                        <div className="absolute inset-0 rounded-2xl bg-white animate-ping opacity-25"></div>
                      )}
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                      <h3 className={`text-xl md:text-2xl font-bold mb-2 transition-colors duration-300 ${
                        checkedItems.includes(index) ? 'text-[#6D7FBE]' : 'text-[#222952] group-hover:text-[#6D7FBE]'
                      }`}>
                        ✅ {criterion.title}
                      </h3>
                      <p className="text-gray-600 text-base md:text-lg">
                        {criterion.description}
                      </p>
                    </div>

                    {/* Indicador de progreso */}
                    <ArrowRight className={`w-6 h-6 transition-all duration-300 ${
                      checkedItems.includes(index) 
                        ? 'text-[#6D7FBE] translate-x-1 opacity-100' 
                        : 'text-gray-400 opacity-0 group-hover:opacity-100'
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className={`max-w-2xl mx-auto mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-gray-600">Tu compatibilidad</span>
              <span className="text-lg font-bold text-[#6D7FBE]">
                {checkedItems.length}/4 criterios
              </span>
            </div>
            
            {/* Barra de progreso */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] h-3 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(checkedItems.length / criteria.length) * 100}%` }}
              ></div>
            </div>

            {/* Mensaje dinámico */}
            <div className="text-center">
              {checkedItems.length === 0 && (
                <p className="text-gray-500 text-sm">Marca los criterios que te identifiquen</p>
              )}
              {checkedItems.length === 1 && (
                <p className="text-[#6D7FBE] text-sm font-medium">¡Buen comienzo! Sigue marcando</p>
              )}
              {checkedItems.length === 2 && (
                <p className="text-[#6D7FBE] text-sm font-medium">Vas por buen camino 👍</p>
              )}
              {checkedItems.length === 3 && (
                <p className="text-[#222952] text-sm font-semibold">¡Casi perfecto! Solo falta uno</p>
              )}
              {allChecked && (
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <p className="text-[#6D7FBE] text-base font-bold">¡Eres el cliente ideal!</p>
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Result Section */}
        {allChecked && (
          <div className="max-w-4xl mx-auto animate-fadeIn">
            <div className="relative bg-gradient-to-r from-[#EBF0CB] via-white to-[#EBF0CB] bg-opacity-90 backdrop-blur-lg p-10 md:p-12 rounded-3xl shadow-2xl border-2 border-[#6D7FBE] border-opacity-50 overflow-hidden">
              {/* Decoración animada */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#222952] bg-opacity-15 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }}></div>

              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-[#222952] mb-4">
                  🎉 ¡Felicidades!
                </h3>
                
                <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
                  Cumples con <span className="font-bold text-[#6D7FBE]">todos los criterios</span>.{' '}
                  Nuestro servicio está diseñado específicamente para{' '}
                  <span className="font-semibold text-[#222952]">profesionales como tú</span>.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-xl mx-auto">
                  <button className="group flex-1 bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                    <Clock className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    Empezar ahora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mensaje si no cumple todos los criterios */}
        {!allChecked && checkedItems.length > 0 && (
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
              <p className="text-lg text-gray-600 mb-4">
                {checkedItems.length < 3 
                  ? "Puede que nuestro servicio no sea el ideal para tu perfil actual"
                  : "¡Estás muy cerca! Solo te falta cumplir un criterio más"
                }
              </p>
              <p className="text-sm text-gray-500">
                Contacta con nosotros para conocer alternativas personalizadas
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IsThisForYou;