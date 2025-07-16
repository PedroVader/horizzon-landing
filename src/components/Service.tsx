import React, { useState, useEffect, useRef } from 'react';
import { Users, Target, MessageCircle, Shield, Calendar, Phone, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const ServiceIncludes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const roiRef = useRef(null);
  const [roiVisible, setRoiVisible] = useState(false);

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

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "+ 40 leads exclusivos",
      subtitle: "cada mes",
      description: "Adaptados a tu zona y tipo de cliente ideal",
      color: "from-blue-500 to-indigo-600",
      highlight: "40"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Campañas activas",
      subtitle: "Meta + Google",
      description: "Gestionadas por expertos en captación inmobiliaria",
      color: "from-purple-500 to-pink-600",
      highlight: "24/7"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Acompañamiento",
      subtitle: "personalizado",
      description: "Guión, grupo WhatsApp y revisión mensual",
      color: "from-green-500 to-teal-600",
      highlight: "1:1"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sin compromiso",
      subtitle: "de permanencia",
      description: "Trabajamos mes a mes, solo si estás satisfecho",
      color: "from-orange-500 to-red-600",
      highlight: "0€"
    }
  ];

  const roiMetrics = [
    { value: "1", label: "Encargo = ROI" },
    { value: "2+", label: "Ganancia pura" },
    { value: "40", label: "Leads al mes" }
  ];

  return (
    <section className="py-24 bg-white relative" id="servicio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-sm font-semibold uppercase text-[#6D7FBE] tracking-wider">Todo incluido</span>
          <h2 className="text-5xl md:text-7xl font-bold text-[#222952] mt-4">
            Un canal extra de
            <span className="block text-4xl md:text-6xl bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent mt-2">
              captacion automatica
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto mt-6">
            Todo lo que necesitas para generar leads de calidad sin esfuerzo
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
              <div className="relative bg-white border-2 border-[#F8FAED] hover:border-[#6D7FBE] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={`absolute -top-6 -right-6 text-7xl font-bold ${hoveredFeature === i ? 'text-[#6D7FBE]/10' : 'text-[#F8FAED]'}`}>
                  {f.highlight}
                </div>
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${f.color} text-white`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-[#222952]">{f.title}</h3>
                <p className="text-lg text-[#6D7FBE] font-medium">{f.subtitle}</p>
                <p className="text-sm text-gray-600 mt-2">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Block */}
        <div ref={roiRef} className={`mb-24 transition-all duration-1000 ${roiVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white border-2 border-[#F8FAED] rounded-3xl p-12 text-center shadow-sm relative overflow-hidden">
            <Sparkles className="w-10 h-10 text-[#6D7FBE] mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-[#222952] mb-4">Y lo mejor de todo</h3>
            <p className="text-2xl text-gray-700 max-w-2xl mx-auto mb-10">
              Con cerrar <span className="text-[#6D7FBE] font-bold">un solo encargo</span> al mes, ya rentabilizas el servicio.
              <br />
              <span className="text-[#222952] font-semibold mt-2 block">Todo lo demás, es ganancia pura.</span>
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {roiMetrics.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border shadow group hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-[#6D7FBE] mb-2">{m.value}</div>
                  <div className="text-sm text-gray-600">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
            <button className="group bg-gradient-to-r from-[#6D7FBE] to-[#222952] text-white px-10 py-5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Ver demo gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group bg-white text-[#222952] px-10 py-5 rounded-full font-semibold border-2 border-[#6D7FBE] hover:bg-[#F8FAED] transition-all duration-300 flex items-center gap-3">
              <Phone className="w-5 h-5" />
              Hablar con asesor
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Sin compromiso
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Respuesta en 24h
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Demo personalizada
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludes;
