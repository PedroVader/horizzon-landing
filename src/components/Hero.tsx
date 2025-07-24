import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Award, X } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const useCalendlyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      const existingScript = document.querySelector('script[src*="calendly"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.head.appendChild(script);
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return { isOpen, openModal, closeModal };
};

const CalendlyModal = ({ isOpen, onClose, t }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl max-w-sm sm:max-w-2xl md:max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-3 sm:p-6 border-b border-gray-200">
          <h3 className="text-lg sm:text-2xl font-bold text-[#222952]">Reserva tu consulta gratuita</h3>
          <button onClick={onClose} className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
          </button>
        </div>
        <div className="p-2 sm:p-4 md:p-6">
          <div className="calendly-inline-widget" data-url="https://calendly.com/endikaibarzabal/30min?hide_gdpr_banner=1" style={{ minWidth:'320px', height: window.innerWidth < 640 ? '450px' : '700px' }} />
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const { t } = useTranslation();
  const { isOpen, openModal, closeModal } = useCalendlyModal();

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const logos = [
    { src: "../images/PNG/remax.png", alt: t('hero.logos.alt1') },
    { src: "../images/PNG/neinor-homes.png", alt: t('hero.logos.alt2') },
    { src: "../images/PNG/new-logo-aedas.png", alt: t('hero.logos.alt3') },
    { src: "../images/PNG/VALENCIAREALESTATELOGOS-01.png", alt: t('hero.logos.alt4') },
    { src: "../images/PNG/Century-21-real-estate-Logo.png", alt: t('hero.logos.alt5') },
  ];

  return (
    <>
      <section className="pt-28 sm:pt-20 md:pt-24 h-screen max-h-[800px] min-h-[700px] md:min-h-screen relative flex items-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="../images/PNG/video-realstate.mp4" type="video/mp4" />
          {t('hero.videoFallback')}
        </video>

        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-16 right-4 w-32 h-32 md:w-48 md:h-48 bg-[#6D7FBE]/15 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-16 left-4 w-40 h-40 md:w-72 md:h-72 bg-[#EBF0CB]/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-[#6D7FBE]/40 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-[#EBF0CB]/50 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div className={`inline-flex items-center gap-3 bg-[#EBF0CB]/80 px-4 py-2.5 md:px-3 md:py-1.5 rounded-full mb-6 border border-[#222952]/10 text-sm font-medium transition-all duration-1000 shadow-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Award className="w-5 h-5 md:w-4 md:h-4 text-[#222952]" />
              <span className="text-[#222952] font-bold">{t('hero.badge')}</span>
            </div>

            <h1 className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block text-[#222952] mb-2">{t('hero.title.line1')}</span>
              <span className="block bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">{t('hero.title.line2')}</span>
            </h1>

            <p className={`text-base sm:text-xl text-gray-700 font-medium max-w-2xl leading-relaxed mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {t('hero.subtitle.main')}<span className="text-[#222952] font-bold mx-1 font-playfair italic">{t('hero.subtitle.highlight')}</span>{t('hero.subtitle.ending')}
            </p>

            <div className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-90 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="relative overflow-hidden py-4">
                <div className="flex animate-fade">
                  <div className="flex space-x-8 md:space-x-12 animate-scroll items-center justify-center min-w-full">
                    {logos.concat(logos).map((logo, index) => (
                      <div key={index} className="flex-shrink-0 opacity-100 hover:opacity-80 transition-all duration-500 transform hover:scale-105">
                        <img src={logo.src} alt={logo.alt} className="h-12 sm:h-14 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 filter brightness-90" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <button onClick={openModal} className="group relative overflow-hidden bg-[#222952] text-white px-8 md:px-10 py-4 md:py-4 rounded-full font-bold text-lg md:text-base hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg">
                <span className="relative z-10 flex items-center justify-center gap-3 md:gap-3">
                  {t('hero.buttons.primary')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-[#6D7FBE] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-full"></div>
              </button>

              <button className="group flex items-center justify-center gap-4 text-[#222952] font-bold text-lg md:text-base hover:text-[#6D7FBE] transition-colors duration-300 py-2">
                <div className="w-12 h-12 md:w-10 md:h-10 bg-[#EBF0CB]/70 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-[#EBF0CB] transition-all duration-300 shadow-md">
                  <Play className="w-5 h-5 md:w-4 md:h-4 ml-1" />
                </div>
                {t('hero.buttons.secondary')}
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes fade {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          .animate-scroll { animation: scroll 30s linear infinite; }
          .animate-fade { animation: fade 10s ease-in-out infinite; }
          @media (max-width: 640px) {
            .animate-scroll { animation: scroll 25s linear infinite; }
          }
        `}</style>
      </section>
      <CalendlyModal isOpen={isOpen} onClose={closeModal} t={t} />
    </>
  );
};

export default Hero;