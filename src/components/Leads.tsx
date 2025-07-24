import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Filter, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const RealLeads = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Hook de traducciones
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

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
    return <span>{prefix}{displayValue}{suffix}</span>;
  };

  // Features con traducciones
  const features = [
    { 
      icon: <Filter className="w-8 h-8" />, 
      title: t('realLeads.features.feature1.title'), 
      text: t('realLeads.features.feature1.text') 
    },
    { 
      icon: <CheckCircle className="w-8 h-8" />, 
      title: t('realLeads.features.feature2.title'), 
      text: t('realLeads.features.feature2.text') 
    },
    { 
      icon: <Sparkles className="w-8 h-8" />, 
      title: t('realLeads.features.feature3.title'), 
      text: t('realLeads.features.feature3.text') 
    },
    { 
      icon: <ArrowRight className="w-8 h-8" />, 
      title: t('realLeads.features.feature4.title'), 
      text: t('realLeads.features.feature4.text') 
    }
  ];

  const stats = [
    { 
      number: t('realLeads.stats.stat1.number'), 
      suffix: t('realLeads.stats.stat1.suffix'), 
      label: t('realLeads.stats.stat1.label') 
    },
    { 
      number: t('realLeads.stats.stat2.number'), 
      suffix: t('realLeads.stats.stat2.suffix'), 
      label: t('realLeads.stats.stat2.label') 
    },
    { 
      number: t('realLeads.stats.stat3.number'), 
      suffix: t('realLeads.stats.stat3.suffix'), 
      label: t('realLeads.stats.stat3.label') 
    }
  ];

  // Carousel logic
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(features.length / itemsPerSlide);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {/* Transition section */}
      <div className="h-12 bg-white"></div>
      
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decorativo muy sutil */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gray-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-50 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-5xl md:text-7xl font-bold text-[#222952] mb-4">
              {t('realLeads.title.main')} <span className="bg-gradient-to-r from-[#222952] to-[#EBF0CB] bg-clip-text text-transparent">{t('realLeads.title.highlight')}</span> {t('realLeads.title.ending')}
            </h2>
            <p className="text-xl text-[#222952]/70 max-w-xl mx-auto">
              {t('realLeads.subtitle')}
            </p>
          </div>

          <div ref={statsRef} className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-[#6D7FBE]">
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-base text-[#222952]/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div 
            className={`mb-20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }, (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 gap-6 p-4">
                        {features.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((feature, index) => (
                          <div 
                            key={index} 
                            className="relative bg-white rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                          >
                            {/* Borde animado con destello */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-[#EBF0CB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                            <div className="absolute inset-0 rounded-xl border-2 border-[#EBF0CB]/30 group-hover:border-[#EBF0CB]/60 transition-colors duration-300"></div>
                            
                            {/* Contenido */}
                            <div className="relative z-10">
                              <div className="mb-6 text-[#6D7FBE] flex justify-center">{feature.icon}</div>
                              <h3 className="text-xl font-semibold text-[#222952] mb-3">{feature.title}</h3>
                              <p className="text-base text-[#222952]/70 leading-relaxed font-playfair italic">{feature.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#6D7FBE] hover:bg-[#6D7FBE] hover:text-white transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#6D7FBE] hover:bg-[#6D7FBE] hover:text-white transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#6D7FBE] scale-125' 
                      : 'bg-[#6D7FBE]/30 hover:bg-[#6D7FBE]/60'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h3 className="text-4xl font-bold text-[#222952] mb-6">
                {t('realLeads.opportunities.title')}
              </h3>
              <p className="text-xl text-[#222952]/70 mb-8">
                {t('realLeads.opportunities.description')}
              </p>
              <ul className="space-y-4 text-[#222952]/80 text-lg mb-8 font-playfair italic">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6D7FBE] flex-shrink-0" />
                  {t('realLeads.opportunities.benefits.benefit1')}
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6D7FBE] flex-shrink-0" />
                  {t('realLeads.opportunities.benefits.benefit2')}
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#6D7FBE] flex-shrink-0" />
                  {t('realLeads.opportunities.benefits.benefit3')}
                </li>
              </ul>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#222952] text-white text-lg rounded-full hover:bg-[#6D7FBE] transition-all duration-300 transform hover:scale-105">
                {t('realLeads.opportunities.cta')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative bg-gray-50 rounded-xl p-8 text-center border border-gray-100 overflow-hidden">
              {/* Borde con brillo rotatorio */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-[#EBF0CB] to-transparent opacity-30 animate-clockwise"></div>
              
              {/* Contenido */}
              <div className="relative z-10">
                <Sparkles className="w-12 h-12 text-[#6D7FBE] mx-auto mb-6" />
                <p className="text-xl text-[#222952]/70 leading-relaxed">
                  {t('realLeads.testimonial.text')} <span className="font-bold text-[#6D7FBE]">{t('realLeads.testimonial.time')}</span> {t('realLeads.testimonial.timeLabel')} <span className="font-bold text-[#222952]">{t('realLeads.testimonial.percentage')}</span> {t('realLeads.testimonial.ending')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition section */}
      <div className="h-12 bg-white"></div>
      
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes clockwise {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-clockwise {
          animation: clockwise 3s linear infinite;
        }
      `}</style>
    </>
  );
};

export default RealLeads;