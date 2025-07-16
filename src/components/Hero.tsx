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

  // Logos de ejemplo
  const logos = [
    {
      src: "../images/PNG/remax.png",
      alt: "Inmobiliaria 1"
    },
    {
      src: "../images/PNG/neinor-homes.png",
      alt: "Inmobiliaria 2"
    },
    {
      src: "../images/PNG/new-logo-aedas.png",
      alt: "Inmobiliaria 3"
    },
    {
      src: "../images/PNG/VALENCIAREALESTATELOGOS-01.png",
      alt: "Inmobiliaria 4"
    },
    {
      src: "../images/PNG/Century-21-real-estate-Logo.png",
      alt: "Inmobiliaria 5"
    },
  ];

  return (
    <section className="h-screen max-h-[800px] min-h-[600px] md:min-h-screen relative flex items-center pt-16 md:pt-24 overflow-hidden">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-[#EBF0CB]/70 px-3 py-1.5 rounded-full mb-4 md:mb-6 border border-[#222952]/10 text-xs md:text-sm font-medium transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Award className="w-3 h-3 md:w-4 md:h-4 text-[#222952]" />
            <span className="text-[#222952] font-semibold">
              Líderes en captación online para inmobiliarias
            </span>
          </div>

          {/* Título - Optimizado para mobile */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-4 md:mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="block text-[#222952]">Consigue propietarios</span>
            <span className="block bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
              listos para vender en tu zona
            </span>
          </h1>

          {/* Subtítulo */}
          <p className={`text-sm sm:text-base md:text-xl text-gray-700 font-light max-w-xl leading-relaxed mb-6 md:mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Leads exclusivos para inmobiliarias.
            <span className="text-[#222952] font-medium mx-1">Sin permanencia.</span>
            Con resultados.
          </p>

          {/* Carousel de logos elegante - Más compacto en mobile */}
          <div className={`mb-6 md:mb-10 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-85 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="relative overflow-hidden">
              <div className="flex animate-fade">
                <div className="flex space-x-6 md:space-x-12 animate-scroll items-center justify-center min-w-full">
                  {logos.concat(logos).map((logo, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 opacity-100 hover:opacity-80 transition-all duration-500 transform hover:scale-105"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Botones - Más compactos en mobile */}
          <div className={`flex flex-col sm:flex-row gap-3 md:gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <button className="group relative overflow-hidden bg-[#222952] text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:scale-105 hover:shadow-lg transition">
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                Quiero ver cómo funciona
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-[#6D7FBE] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-full"></div>
            </button>

            <button className="group flex items-center justify-center gap-3 text-[#222952] font-semibold text-sm md:text-base hover:text-[#6D7FBE] transition">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#EBF0CB]/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-3 h-3 md:w-4 md:h-4 ml-0.5" />
              </div>
              Ver casos de éxito
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
        
        @keyframes fade {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-fade {
          animation: fade 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;