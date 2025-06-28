import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Award } from 'lucide-react';
import BrandsCarousel from './Carrousel';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center pt-24 overflow-hidden">
      {/* Imagen de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/video-example.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Overlay encima del video */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>


      {/* Partículas decorativas más sutiles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-24 right-10 w-48 h-48 bg-[#6D7FBE]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-24 left-10 w-72 h-72 bg-[#EBF0CB]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-[#6D7FBE]/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#EBF0CB]/40 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-[#EBF0CB]/70 px-5 py-2 rounded-full mb-6 border border-[#222952]/10 text-sm font-medium transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Award className="w-4 h-4 text-[#222952]" />
            <span className="text-[#222952] font-semibold">
              Agencia líder en marketing inmobiliario
            </span>
          </div>

          {/* Headline */}
          <h1 className={`text-5xl md:text-7xl font-black font-mont tracking-tight leading-tight mb-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="block text-[#222952]">Potenciamos</span>
            <span className="block bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">marcas inmobiliarias</span>
          </h1>

          {/* Subtítulo */}
          <p className={`text-lg md:text-2xl text-gray-700 font-light max-w-2xl leading-relaxed mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Transformamos promotores, inmobiliarias y agentes en 
            <span className="text-[#222952] font-medium mx-1">líderes digitales</span>
            con estrategia, diseño y tecnología.
          </p>

          {/* Botones */}
          <div className={`flex flex-col sm:flex-row gap-6 mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <button className="group relative overflow-hidden bg-[#222952] text-white px-10 py-4 rounded-full font-bold text-base hover:scale-105 hover:shadow-lg transition">
              <span className="relative z-10 flex items-center gap-3">
                Descubre cómo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-[#6D7FBE] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-full"></div>
            </button>

            <button className="group flex items-center gap-3 text-[#222952] font-semibold text-base hover:text-[#6D7FBE] transition">
              <div className="w-10 h-10 bg-[#EBF0CB]/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              Ver casos de éxito
            </button>
          </div>

          {/* Carrusel de marcas */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <BrandsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
