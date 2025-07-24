import React, { useEffect, useState } from 'react';
import { CheckCircle, Play, ArrowRight } from 'lucide-react';

const SuccessCases = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const cases = [
    {
      author: "Carlos Mendoza",
      company: "NovaHabitat",
      result: "3 encargos exclusivos el primer mes",
      detail: "Con solo 38 leads cualificados, lograron cerrar 3 operaciones exclusivas en Madrid.",
      image: "/images/PNG/remax-maximum.jpg"
    },
    {
      author: "Marina Silva",
      company: "Silva Propiedades",
      result: "Leads de altísima calidad",
      detail: "Eliminó por completo los contactos no cualificados. Enfoque total en vendedores reales.",
      image: "/images/PNG/don-piso.jpg"
    },
    {
      author: "Alejandro Torres",
      company: "Torres & Asociados",
      result: "Triplicaron su cartera en 6 meses",
      detail: "Captación continua sin invertir en Ads. ROI evidente desde el primer mes.",
      image: "/images/PNG/century-21.jpg"
    },
    {
      author: "Isabel Ramírez",
      company: "Ramírez Inmobiliaria",
      result: "Leads sin hacer campañas",
      detail: "Por fin una fuente constante de contactos sin dependencia de portales ni publicidad.",
      image: "/images/PNG/engelandvolkers.jpg"
    }
  ];

  return (
    <section className="py-24 bg-white" id="casos">
      <div className="max-w-6xl mx-auto px-6">
        {/* Intro */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold text-[#222952] mb-4">Casos que marcan la diferencia</h2>
          <p className="text-xl text-[#6D7FBE] max-w-2xl mx-auto">
            Historias reales de agencias que ya están captando sin complicaciones
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#F0F0F0] pl-6 space-y-16">
          {cases.map((item, index) => (
            <div key={index} className="relative group">
              {/* Línea con bolita */}
              <span className="absolute -left-[13px] top-2 w-6 h-6 bg-[#6D7FBE] border-4 border-white rounded-full shadow-md z-10"></span>

              {/* Card */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F8FAED]">
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div className="col-span-2">
                    <h3 className="text-2xl font-bold text-[#222952]">{item.result}</h3>
                    <p className="text-lg text-[#6D7FBE] font-semibold mt-1">{item.author} – {item.company}</p>
                    <p className="text-[#222952]/70 mt-4">{item.detail}</p>
                  </div>
                  <div className="h-48 rounded-xl overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.company}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h4 className="text-3xl font-bold text-[#222952] mb-4">¿Qué tienen en común?</h4>
          <p className="text-lg text-[#6D7FBE] mb-8">
            Todas apostaron por captar de forma más inteligente y eficiente.
          </p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { label: 'Satisfacción', value: '94%' },
              { label: 'ROI promedio', value: '3.8x' },
              { label: 'Leads/mes', value: '40+' },
              { label: 'Días hasta primer encargo', value: '<30' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-[#F0F0F0] shadow-sm">
                <div className="text-3xl font-bold text-[#222952] mb-2">{item.value}</div>
                <div className="text-[#6D7FBE] text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-20 text-center">
          <h4 className="text-2xl font-bold text-[#222952] mb-4">¿Te imaginas resultados así para tu agencia?</h4>
          <p className="text-[#6D7FBE] mb-6">Hablemos. Sin compromiso.</p>
          <button className="group bg-[#222952] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#6D7FBE] transition-all duration-300 flex items-center gap-3 mx-auto">
            <Play className="w-5 h-5" />
            Ver casos completos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-[#6D7FBE]">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Casos verificados</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Resultados reales</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Sin compromiso</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
