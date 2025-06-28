import React, { useState, useEffect } from 'react';
import {
  Palette,
  Globe,
  Search,
  Target,
  Camera,
  ArrowRight,
  CheckCircle,
  Sparkles,
  MousePointer
} from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set<number>());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) =>
            new Set([...prev, parseInt((entry.target as HTMLElement).dataset.index || '0')])
          );
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Branding',
      description: 'Identidad visual que distingue tu marca inmobiliaria en el mercado.',
      features: ['Identidad corporativa', 'Manual de marca', 'Aplicaciones digitales'],
      icon: Palette,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgImage: '/images/services-bg/branding.jpg'
    },
    {
      title: 'Web',
      description: 'Sitios web optimizados que convierten visitantes en clientes potenciales.',
      features: ['Diseño responsive', 'CRM integrado', 'Tours virtuales'],
      icon: Globe,
      gradient: 'from-[#6D7FBE] to-[#222952]',
      bgImage: '/images/services-bg/web.jpg'
    },
    {
      title: 'SEO Local',
      description: 'Posicionamiento estratégico para aparecer en búsquedas locales.',
      features: ['Optimización técnica', 'Google My Business', 'Contenido localizado'],
      icon: Search,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgImage: '/images/services-bg/seo.jpg'
    },
    {
      title: 'Paid Media',
      description: 'Campañas precisas en Facebook, Instagram y Google Ads.',
      features: ['Meta Ads', 'Google Ads', 'Remarketing avanzado'],
      icon: Target,
      gradient: 'from-[#6D7FBE] to-[#222952]',
      bgImage: '/images/services-bg/ads.jpg'
    },
    {
      title: 'Contenido',
      description: 'Gestión profesional de redes sociales y creación de contenido.',
      features: ['Social media', 'Fotografía profesional', 'Video marketing'],
      icon: Camera,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgImage: '/images/services-bg/content.jpg'
    }
  ];

  return (
    <section id="servicios" className="py-32 bg-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-32 left-10 w-64 h-64 bg-[#EBF0CB]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#6D7FBE]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#EBF0CB]/60 px-5 py-2 rounded-full border border-[#6D7FBE]/10 text-sm font-semibold text-[#222952] mb-6">
            <Sparkles className="w-4 h-4" />
            NUESTROS SERVICIOS
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#222952] leading-tight mb-6">
            Servicios que <br />
            <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
              transforman
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl">
            Diseñados para el sector inmobiliario, combinamos <span className="text-[#222952] font-medium">estrategia creativa</span> y <span className="text-[#6D7FBE] font-medium">tecnología de vanguardia</span>.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={service.title}
                data-index={index}
                className={`service-card group relative transition-all duration-700 rounded-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Background image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img src={service.bgImage} alt={`Fondo ${service.title}`} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div className="relative z-10 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md transition">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#EBF0CB]/60 mb-5">
                    <Icon className={`w-6 h-6 text-[#222952]`} />
                  </div>

                  <h3 className="text-xl font-bold text-[#222952] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-4">
                    {service.features.map((f, i) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-[#6D7FBE]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-[#222952] font-semibold text-sm group-hover:text-[#6D7FBE] transition">
                    <MousePointer className="w-4 h-4" />
                    Explorar servicio
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
