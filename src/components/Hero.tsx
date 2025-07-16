import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Award } from 'lucide-react';

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

  // Logos de ejemplo de Unsplash
  const logos = [
    {
      src: "/images/PNG/logo-inmobiliaria-1.png",
      alt: "Inmobiliaria 1"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&crop=center",
      alt: "Inmobiliaria 2"
    },
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=100&fit=crop&crop=center",
      alt: "Inmobiliaria 3"
    },
    {
      src: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=200&h=100&fit=crop&crop=center",
      alt: "Inmobiliaria 4"
    },
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=100&fit=crop&crop=center",
      alt: "Inmobiliaria 5"
    },
    {
      src: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=200&h=100&fit=crop&crop=center",
      alt: "Inmobiliaria 6"
    }
  ];

  return (
    <section className="min-h-screen relative flex items-center pt-24 overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="../images/PNG/video-realstate.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      {/* Decoraciones */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-24 right-10 w-48 h-48 bg-[#6D7FBE]/10 rounded-full blur-2xl animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-24 left-10 w-72 h-72 bg-[#EBF0CB]/10 rounded-full blur-2xl animate-pulse delay-1000 hidden sm:block"></div>
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-[#6D7FBE]/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#EBF0CB]/40 rounded-full animate-bounce delay-1000"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-[#EBF0CB]/70 px-4 py-1.5 rounded-full mb-6 border border-[#222952]/10 text-sm font-medium transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Award className="w-4 h-4 text-[#222952]" />
            <span className="text-[#222952] font-semibold text-xs sm:text-sm">
              Líderes en captación online para inmobiliarias
            </span>
          </div>

          {/* Título - Más grande */}
          <h1 className={`text-6xl sm:text-6xl lg:text-6xl font-black tracking-tight leading-tight mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="block text-[#222952]">Consigue propietarios</span>
            <span className="block bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
              listos para vender en tu zona
            </span>
          </h1>

          {/* Subtítulo */}
          <p className={`text-base sm:text-xl text-gray-700 font-light max-w-xl leading-relaxed mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Leads exclusivos para inmobiliarias.
            <span className="text-[#222952] font-medium mx-1">Sin permanencia.</span>
            Con resultados.
          </p>

          {/* Carrusel de logos */}
          <div className={`mb-10 sm:mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="relative overflow-hidden">
              <div className="flex animate-pulse">
                <div className="flex space-x-8 animate-scroll">
                  {logos.concat(logos).map((logo, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-32 h-16 bg-white/80 rounded-lg shadow-sm flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="w-full h-full object-cover rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <button className="group relative overflow-hidden bg-[#222952] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:scale-105 hover:shadow-lg transition">
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
                Quiero ver cómo funciona
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-[#6D7FBE] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-full"></div>
            </button>

            <button className="group flex items-center justify-center gap-3 text-[#222952] font-semibold text-sm sm:text-base hover:text-[#6D7FBE] transition">
              <div className="w-10 h-10 bg-[#EBF0CB]/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-4 h-4 ml-0.5" />
              </div>
              Ver casos de exito
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;  