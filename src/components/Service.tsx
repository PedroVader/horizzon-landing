import React, { useState, useEffect, useRef } from 'react';
import { Users, Target, MessageCircle, Shield, Calendar, Phone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const ServiceIncludes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const roiRef = useRef(null);
  const [roiVisible, setRoiVisible] = useState(false);

  // Hook de traducciones
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setRoiVisible(true);
    }, { threshold: 0.1 });

    if (roiRef.current) observer.observe(roiRef.current);
    return () => {
      if (roiRef.current) observer.unobserve(roiRef.current);
    };
  }, []);

  // Features con traducciones
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: t('serviceIncludes.features.feature1.title'),
      subtitle: t('serviceIncludes.features.feature1.subtitle'),
      description: t('serviceIncludes.features.feature1.description'),
      color: "from-blue-500 to-indigo-600",
      highlight: t('serviceIncludes.features.feature1.highlight')
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('serviceIncludes.features.feature2.title'),
      subtitle: t('serviceIncludes.features.feature2.subtitle'),
      description: t('serviceIncludes.features.feature2.description'),
      color: "from-purple-500 to-pink-600",
      highlight: t('serviceIncludes.features.feature2.highlight')
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: t('serviceIncludes.features.feature3.title'),
      subtitle: t('serviceIncludes.features.feature3.subtitle'),
      description: t('serviceIncludes.features.feature3.description'),
      color: "from-green-500 to-teal-600",
      highlight: t('serviceIncludes.features.feature3.highlight')
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('serviceIncludes.features.feature4.title'),
      subtitle: t('serviceIncludes.features.feature4.subtitle'),
      description: t('serviceIncludes.features.feature4.description'),
      color: "from-orange-500 to-red-600",
      highlight: t('serviceIncludes.features.feature4.highlight')
    }
  ];

  // ROI Metrics con traducciones
  const roiMetrics = [
    { 
      value: t('serviceIncludes.roi.metrics.metric1.value'), 
      label: t('serviceIncludes.roi.metrics.metric1.label') 
    },
    { 
      value: t('serviceIncludes.roi.metrics.metric2.value'), 
      label: t('serviceIncludes.roi.metrics.metric2.label') 
    },
    { 
      value: t('serviceIncludes.roi.metrics.metric3.value'), 
      label: t('serviceIncludes.roi.metrics.metric3.label') 
    }
  ];

  return (
    <>
      {/* Transition section */}
      <div className="h-12 bg-white"></div>
      
      <section className="py-24 bg-[#EBF0CB]/30 relative overflow-hidden" id="servicio">
        {/* Background decorativo con amarillo sutil */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#EBF0CB]/50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="text-sm font-semibold uppercase text-[#6D7FBE] tracking-wider font-playfair italic">
              {t('serviceIncludes.subtitle')}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-[#222952] mt-4">
              {t('serviceIncludes.title.main')}
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent mt-2">
                {t('serviceIncludes.title.highlight')}
              </span>
            </h2>
            <p className="text-xl text-[#222952]/70 font-light max-w-3xl mx-auto mt-6">
              {t('serviceIncludes.description')}
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {features.map((f, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredFeature(i)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="relative bg-white border-2 border-[#EBF0CB]/70 hover:border-[#6D7FBE] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className={`absolute -top-6 -right-6 text-7xl font-bold transition-colors duration-300 ${hoveredFeature === i ? 'text-[#6D7FBE]/15' : 'text-[#EBF0CB]/60'}`}>
                    {f.highlight}
                  </div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-lg`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#222952]">{f.title}</h3>
                  <p className="text-lg text-[#6D7FBE] font-medium ">{f.subtitle}</p>
                  <p className="text-sm text-[#222952]/70 mt-2 font-playfair italic">{f.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Block */}
          <div ref={roiRef} className={`mb-24 transition-all duration-1000 ${roiVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-white border-2 border-[#EBF0CB]/70 rounded-3xl p-12 text-center shadow-lg relative overflow-hidden">
              {/* Fondo sutil */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EBF0CB]/10 to-transparent"></div>
              
              <div className="relative z-10">
                <Sparkles className="w-10 h-10 text-[#6D7FBE] mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-[#222952] mb-4 font-playfair italic">
                  {t('serviceIncludes.roi.heading')}
                </h3>
                <p className="text-2xl text-[#222952]/80 max-w-2xl mx-auto mb-10">
                  {t('serviceIncludes.roi.description.part1')} <span className="text-[#6D7FBE] font-bold font-playfair italic">{t('serviceIncludes.roi.description.highlight')}</span> {t('serviceIncludes.roi.description.part2')}
                  <br />
                  <span className="text-[#222952] font-semibold mt-2 block font-playfair italic">{t('serviceIncludes.roi.description.part3')}</span>
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  {roiMetrics.map((m, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 border border-[#EBF0CB]/50 shadow-sm group hover:shadow-lg hover:border-[#6D7FBE] transition-all duration-300">
                      <div className="text-4xl font-bold text-[#6D7FBE] mb-2">{m.value}</div>
                      <div className="text-sm text-[#222952]/70">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
              <button className="group bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-10 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 transform hover:scale-105">
                <Calendar className="w-5 h-5" />
                {t('serviceIncludes.cta.buttons.demo')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white text-[#222952] px-10 py-5 rounded-full font-semibold border-2 border-[#6D7FBE] transition-all duration-300 flex items-center gap-3 transform hover:scale-105">
                <Phone className="w-5 h-5" />
                {t('serviceIncludes.cta.buttons.advisor')}
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-[#222952]/70">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {t('serviceIncludes.cta.benefits.benefit1')}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {t('serviceIncludes.cta.benefits.benefit2')}
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                {t('serviceIncludes.cta.benefits.benefit3')}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceIncludes;