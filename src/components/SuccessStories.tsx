import React, { useState, useEffect } from 'react';
import { Star, Quote, MapPin, Award, ArrowRight, Building2, CheckCircle, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const LogosCarousel = ({ isVisible }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // Hook de traducciones
  const { t } = useTranslation();

  const companies = [
    'NovaHabitat', 'Silva Propiedades', 'Torres & Asociados', 
    'Ramírez Inmobiliaria', 'Habitat Premium', 'Central Inmobiliaria',
    'Madrid Properties', 'Barcelona Homes', 'Valencia Real Estate'
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(companies.length / itemsPerSlide);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className={`relative mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
      <div className="text-center">
        <p className="text-[#6D7FBE] mb-8 font-medium">
          {t('successCases.logosCarousel.text')}
        </p>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl px-4 py-2">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="flex justify-center gap-6 px-2">
                    {companies.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((company, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 text-[#6D7FBE] hover:text-[#222952] transition-all duration-300 transform hover:scale-105 bg-gray-50 rounded-full px-6 py-3 border border-gray-100 hover:border-[#6D7FBE] hover:shadow-md"
                      >
                        <span className="text-sm font-medium whitespace-nowrap">{company}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#6D7FBE] hover:bg-[#6D7FBE] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#6D7FBE] hover:bg-[#6D7FBE] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#222952] scale-125' 
                    : 'bg-[#6D7FBE]/50 hover:bg-[#6D7FBE]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessCases = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Hook de traducciones
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Testimonials con traducciones
  const testimonials = [
    {
      id: 1,
      quote: t('successCases.testimonials.testimonial1.quote'),
      author: t('successCases.testimonials.testimonial1.author'),
      company: t('successCases.testimonials.testimonial1.company'),
      location: t('successCases.testimonials.testimonial1.location'),
      stats: { 
        encargos: t('successCases.testimonials.testimonial1.stats.encargos'), 
        leads: t('successCases.testimonials.testimonial1.stats.leads'), 
        tiempo: t('successCases.testimonials.testimonial1.stats.tiempo') 
      }
    },
    {
      id: 2,
      quote: t('successCases.testimonials.testimonial2.quote'),
      author: t('successCases.testimonials.testimonial2.author'),
      company: t('successCases.testimonials.testimonial2.company'),
      location: t('successCases.testimonials.testimonial2.location'),
      stats: { 
        encargos: t('successCases.testimonials.testimonial2.stats.encargos'), 
        leads: t('successCases.testimonials.testimonial2.stats.leads'), 
        tiempo: t('successCases.testimonials.testimonial2.stats.tiempo') 
      }
    },
    {
      id: 3,
      quote: t('successCases.testimonials.testimonial3.quote'),
      author: t('successCases.testimonials.testimonial3.author'),
      company: t('successCases.testimonials.testimonial3.company'),
      location: t('successCases.testimonials.testimonial3.location'),
      stats: { 
        encargos: t('successCases.testimonials.testimonial3.stats.encargos'), 
        leads: t('successCases.testimonials.testimonial3.stats.leads'), 
        tiempo: t('successCases.testimonials.testimonial3.stats.tiempo') 
      }
    },
    {
      id: 4,
      quote: t('successCases.testimonials.testimonial4.quote'),
      author: t('successCases.testimonials.testimonial4.author'),
      company: t('successCases.testimonials.testimonial4.company'),
      location: t('successCases.testimonials.testimonial4.location'),
      stats: { 
        encargos: t('successCases.testimonials.testimonial4.stats.encargos'), 
        leads: t('successCases.testimonials.testimonial4.stats.leads'), 
        tiempo: t('successCases.testimonials.testimonial4.stats.tiempo') 
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      <section className="py-24 bg-gray-50 relative overflow-hidden" id="casos">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-100 rounded-full blur-3xl opacity-80"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-full blur-3xl opacity-40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#6D7FBE]"></div>
              <Award className="w-6 h-6 text-[#6D7FBE]" />
              <div className="h-px w-12 bg-[#6D7FBE]"></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[#222952]">{t('successCases.title.main')}</span>
              <span className="block text-3xl md:text-4xl font-light text-[#6D7FBE] mt-2">
                {t('successCases.title.subtitle')}
              </span>
            </h2>
            
            <p className="text-xl text-[#222952] max-w-3xl mx-auto leading-relaxed">
              {t('successCases.description')}
            </p>
          </div>

          {/* Navegación simple */}
          <div className={`flex justify-center gap-2 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-[#222952] scale-125'
                    : 'bg-[#6D7FBE] hover:bg-[#222952]'
                }`}
              />
            ))}
          </div>

          {/* Testimonial principal */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '400ms' }}>
            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-white border border-gray-200 rounded-3xl p-12 shadow-md">
                <div className="text-center mb-8">
                  <Quote className="w-12 h-12 text-[#6D7FBE] mx-auto mb-6 opacity-60" />
                  
                  <blockquote className="text-3xl font-bold text-[#222952] leading-tight mb-8">
                    "{testimonials[activeTestimonial].quote}"
                  </blockquote>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#222952] mb-1">
                      {testimonials[activeTestimonial].author}
                    </h3>
                    <p className="text-lg text-[#6D7FBE] font-medium mb-2">
                      {testimonials[activeTestimonial].company}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-[#222952]">
                      <MapPin className="w-4 h-4" />
                      <span>{testimonials[activeTestimonial].location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-[#222952] font-medium">{t('successCases.verification.rating')}</span>
                    <span className="text-[#6D7FBE] text-sm">• {t('successCases.verification.verified')}</span>
                  </div>
                </div>
                
                {/* Stats simples */}
                <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-gray-100 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#222952] mb-2">
                      {testimonials[activeTestimonial].stats.encargos}
                    </div>
                    <div className="text-[#6D7FBE] text-sm">
                      {t('successCases.statsLabels.encargos')}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#222952] mb-2">
                      {testimonials[activeTestimonial].stats.leads}
                    </div>
                    <div className="text-[#6D7FBE] text-sm">
                      {t('successCases.statsLabels.leads')}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#222952] mb-2">
                      {testimonials[activeTestimonial].stats.tiempo}h
                    </div>
                    <div className="text-[#6D7FBE] text-sm">
                      {t('successCases.statsLabels.tiempo')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel de logos */}
          <LogosCarousel isVisible={isVisible} />

          {/* CTA final */}
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
            <h3 className="text-3xl font-bold text-[#222952] mb-4">
              {t('successCases.cta.title')}
            </h3>
            <p className="text-[#6D7FBE] mb-8 max-w-xl mx-auto font-playfair italic">
              {t('successCases.cta.description')}
            </p>
            
            <button className="group bg-[#222952] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6D7FBE] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl mx-auto">
              <Play className="w-5 h-5" />
              {t('successCases.cta.button')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-[#6D7FBE]">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {t('successCases.cta.benefits.benefit1')}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {t('successCases.cta.benefits.benefit2')}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                {t('successCases.cta.benefits.benefit3')}
              </span>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default SuccessCases;