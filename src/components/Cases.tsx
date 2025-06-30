import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Target,
  Sparkles,
  Building2,
  Home,
  Construction,
} from 'lucide-react';

const Cases = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

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

    const cards = document.querySelectorAll('.case-card');
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const cases = [
    {
      title: 'Torres del Parque',
      category: 'Desarrollo Residencial',
      description: 'Campaña integral que logró 85% de preventa en 6 meses mediante estrategia omnicanal y experiencias inmersivas.',
      metricNumber: '150+',
      metricLabel: 'Leads Calificados',
      icon: Building2,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgGradient: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10',
      accentColor: 'text-[#6D7FBE]',
      tags: ['Branding', 'Digital', 'Preventa'],
      image: '/images/PNG/torres-parque.jpg'
    },
    {
      title: 'Inmobiliaria Premier',
      category: 'Agencia Boutique',
      description: 'Rebranding completo y estrategia digital que triplicó ventas a través de posicionamiento premium y automatización.',
      metricNumber: '300%',
      metricLabel: 'ROI en 12 meses',
      icon: Home,
      gradient: 'from-[#6D7FBE] to-[#222952]',
      bgGradient: 'from-[#6D7FBE]/10 to-[#EBF0CB]/20',
      accentColor: 'text-[#222952]',
      tags: ['Rebranding', 'Premium', 'ROI'],
      image: '/images/PNG/inmobiliria.jpg'
    },
    {
      title: 'Grupo Constructora',
      category: 'Empresa Constructora',
      description: 'Plataforma digital y CRM personalizado que automatizó completamente el proceso comercial y de seguimiento.',
      metricNumber: '60%',
      metricLabel: 'Más Conversiones',
      icon: Construction,
      gradient: 'from-[#222952] to-[#6D7FBE]',
      bgGradient: 'from-[#EBF0CB]/20 to-[#6D7FBE]/10',
      accentColor: 'text-[#6D7FBE]',
      tags: ['CRM', 'Automatización', 'B2B'],
      image: '/images/PNG/constructora.jpg'
    },
  ];

  return (
    <section id="casos" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-32 right-10 w-80 h-80 bg-[#EBF0CB]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#6D7FBE]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#EBF0CB]/60 px-5 py-2 rounded-full border border-[#6D7FBE]/10 text-sm font-semibold text-[#222952] mb-6">
            <Award className="w-4 h-4" />
            CASOS DE ÉXITO
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#222952] leading-tight mb-6">
            Casos que <br />
            <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
              inspiran
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl">
            Resultados reales de marcas inmobiliarias que confiaron en nuestra <span className="text-[#222952] font-medium">expertise</span> para acelerar su <span className="text-[#6D7FBE] font-medium">crecimiento digital</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((c, index) => {
            const Icon = c.icon;
            const visible = visibleCards.has(index);
            const hovered = hoveredCard === index;

            return (
              <div
                key={c.title}
                data-index={index}
                className={`case-card group relative transition-all duration-700 rounded-3xl ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.bgGradient} rounded-3xl transition-opacity duration-500 blur-sm ${
                  hovered ? 'opacity-100' : 'opacity-0'
                }`}></div>

                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 transition-all duration-500 ${
                  hovered ? 'shadow-xl scale-[1.02] border-[#6D7FBE]/30' : ''
                }`}>
                <div className="relative h-56 overflow-hidden rounded-t-3xl">
                    {/* Imagen de fondo con blur y overlay */}
                    <img
                      src={c.image}
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover scale-105 filter blur-[1px] brightness-[0.6]"
                    />


                    <div className="absolute top-5 left-5">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="absolute top-5 right-5">
                      <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                        <span className="text-white text-xs font-semibold">{c.category}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-2xl font-black text-white mb-2 leading-tight">{c.title}</h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            hovered ? 'bg-[#EBF0CB]/80 text-[#222952]' : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{c.description}</p>

                    <div className="bg-[#F9FAFB] rounded-xl p-4 mb-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${c.gradient} rounded-xl flex items-center justify-center`}>
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className={`text-lg font-black ${
                            hovered ? c.accentColor : 'text-[#222952]'
                          }`}>{c.metricNumber}</div>
                          <div className="text-sm text-gray-600">{c.metricLabel}</div>
                        </div>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 font-semibold ${
                      hovered ? c.accentColor : 'text-[#222952]'
                    }`}>
                      <span>Ver caso completo</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
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

export default Cases;
