import React, { useState, useEffect } from 'react';
import { CheckCircle, Building2, Target, TrendingUp, Zap, ArrowRight, User, Clock, Star, Sparkles, Award, Shield, Rocket } from 'lucide-react';

const IsThisForYou = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (checkedItems.length === criteria.length) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [checkedItems]);

  const criteria = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Eres agencia inmobiliaria o agente",
      description: "Profesional del sector con experiencia en ventas",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quieres captar propiedades en exclusiva",
      description: "Buscas expandir tu cartera de inmuebles únicos",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Buscas flujo constante de oportunidades",
      description: "Necesitas leads regulares para hacer crecer tu negocio",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Estás dispuesto a contactar rápido",
      description: "Tienes el compromiso de seguir leads activamente",
      color: "from-orange-500 to-red-600",
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

  // Componente de confetti
  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        >
          <div className={`w-3 h-3 ${i % 3 === 0 ? 'bg-[#6D7FBE]' : i % 3 === 1 ? 'bg-[#EBF0CB]' : 'bg-[#222952]'} rounded-full`} />
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {showConfetti && <Confetti />}
      
      {/* Fondo minimalista mejorado */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-96 -left-96 w-[800px] h-[800px] bg-[#EBF0CB] rounded-full blur-[200px] opacity-20"></div>
        <div className="absolute -bottom-96 -right-96 w-[800px] h-[800px] bg-[#6D7FBE] rounded-full blur-[200px] opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header visual mejorado */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="text-sm font-semibold tracking-wider uppercase text-[#6D7FBE]">
              Perfil ideal
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-[#222952] mb-6">
            ¿Es esto para ti?
          </h2>

          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Marca cada criterio que te identifique y descubre si eres nuestro cliente ideal
          </p>
        </div>

        {/* Grid de criterios visual */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {criteria.map((criterion, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 cursor-pointer group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleCheck(index)}
            >
              <div className={`relative h-full transition-all duration-500 ${
                checkedItems.includes(index) ? 'scale-[1.02]' : 'hover:scale-[1.01]'
              }`}>
                {/* Card principal */}
                <div className={`relative bg-white rounded-3xl p-8 h-full border-2 transition-all duration-300 overflow-hidden ${
                  checkedItems.includes(index) 
                    ? 'border-[#222952] shadow-2xl' 
                    : 'border-gray-100 hover:border-[#6D7FBE] hover:shadow-xl'
                }`}>
                  {/* Fondo gradiente cuando está seleccionado */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${criterion.color} transition-opacity duration-300 ${
                    checkedItems.includes(index) ? 'opacity-5' : 'opacity-0'
                  }`} />
                  
                  {/* Emoji decorativo grande */}
                  <div className={`absolute -top-6 -right-6 text-8xl transition-all duration-300 select-none ${
                    checkedItems.includes(index) ? 'opacity-20' : 'opacity-5'
                  }`}>
                  </div>
                  
                  {/* Contenido */}
                  <div className="relative z-10 flex items-start gap-6">
                    {/* Checkbox visual mejorado */}
                    <div className={`relative flex-shrink-0 w-16 h-16 rounded-2xl transition-all duration-300 ${
                      checkedItems.includes(index)
                        ? 'bg-gradient-to-br from-[#6D7FBE] to-[#222952] shadow-lg'
                        : 'bg-gray-100 group-hover:bg-gray-200'
                    }`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        {checkedItems.includes(index) ? (
                          <CheckCircle className="w-8 h-8 text-white animate-scale-in" />
                        ) : (
                          <div className={`text-gray-400 group-hover:text-[#6D7FBE] transition-colors duration-300`}>
                            {criterion.icon}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Texto */}
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        checkedItems.includes(index) ? 'text-[#222952]' : 'text-gray-800'
                      }`}>
                        {criterion.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {criterion.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Indicador de selección */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${criterion.color} transform transition-transform duration-300 ${
                    checkedItems.includes(index) ? 'scale-x-100' : 'scale-x-0'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de progreso visual mejorado */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '500ms' }}>
          <div className="max-w-2xl mx-auto">
            <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg overflow-hidden">
              {/* Fondo animado según progreso */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#EBF0CB] via-[#6D7FBE] to-[#222952] opacity-5 transition-opacity duration-700"
                style={{ opacity: checkedItems.length * 0.025 }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#222952]">Tu compatibilidad</h3>
                    <p className="text-sm text-gray-500">Marca todos los criterios que apliquen</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-br from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                      {Math.round((checkedItems.length / criteria.length) * 100)}%
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      {checkedItems.length}/{criteria.length} criterios
                    </div>
                  </div>
                </div>
                
                {/* Barra de progreso visual */}
                <div className="relative h-6 bg-gray-100 rounded-full overflow-hidden mb-6">
                  <div 
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full transition-all duration-700 ease-out flex items-center justify-end px-2"
                    style={{ width: `${(checkedItems.length / criteria.length) * 100}%` }}
                  >
                    {checkedItems.length > 0 && (
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Mensaje dinámico con iconos */}
                <div className="text-center">
                  {checkedItems.length === 0 && (
                    <p className="text-gray-500 flex items-center justify-center gap-2">
                      <User className="w-5 h-5" />
                      Marca los criterios que te identifiquen
                    </p>
                  )}
                  {checkedItems.length === 1 && (
                    <p className="text-[#6D7FBE] font-medium flex items-center justify-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      ¡Buen comienzo!
                    </p>
                  )}
                  {checkedItems.length === 2 && (
                    <p className="text-[#6D7FBE] font-medium flex items-center justify-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Vas por buen camino 👍
                    </p>
                  )}
                  {checkedItems.length === 3 && (
                    <p className="text-[#222952] font-semibold flex items-center justify-center gap-2">
                      <Award className="w-5 h-5" />
                      ¡Casi perfecto! Solo falta uno
                    </p>
                  )}
                  {allChecked && (
                    <p className="text-[#6D7FBE] font-bold flex items-center justify-center gap-2 text-lg">
                      ¡Eres el cliente ideal!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resultado cuando todo está marcado - Mejorado */}
        {allChecked && (
          <div className="animate-fadeIn">
            <div className="relative">
              {/* Glow de fondo */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6D7FBE] to-[#222952] opacity-20 blur-3xl"></div>
              
              <div className="relative bg-gradient-to-br from-white to-[#EBF0CB]/20 rounded-3xl p-12 border-2 border-[#6D7FBE] shadow-2xl overflow-hidden">
                {/* Patrón de fondo */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#6D7FBE] rounded-full"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#222952] rounded-full"></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#6D7FBE] to-[#222952] rounded-3xl mb-6 shadow-xl">
                    <Rocket className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-4xl font-bold text-[#222952] mb-4">
                    ¡Felicidades!
                  </h3>
                  
                  <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                    Cumples con <span className="font-bold text-[#6D7FBE]">todos los criterios</span>.{' '}
                    Nuestro servicio está diseñado para{' '}
                    <span className="font-semibold text-[#222952]">profesionales como tú</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="group bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-10 py-5 rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3">
                      <Clock className="w-6 h-6" />
                      <span className="text-lg">Empezar ahora</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <p className="text-sm text-gray-500">
                      ✨ Acceso inmediato • Sin compromiso
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mensaje mejorado para criterios parciales */}
        {!allChecked && checkedItems.length > 0 && (
          <div className="text-center animate-fadeIn">
            <div className="max-w-2xl mx-auto bg-gray-50 rounded-3xl p-8 border border-gray-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-xl mb-4">
                <User className="w-6 h-6 text-gray-600" />
              </div>
              <p className="text-gray-700 mb-3 text-lg">
                {checkedItems.length < 3 
                  ? "Puede que nuestro servicio no sea ideal para tu perfil actual"
                  : "¡Estás muy cerca! Solo te falta un criterio más"
                }
              </p>
              <p className="text-sm text-gray-500">
                Contacta con nosotros para explorar alternativas personalizadas
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IsThisForYou;