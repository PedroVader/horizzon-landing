import React, { useState, useEffect } from 'react';
import {
  CheckCircle,
  Users,
  Target,
  Calendar,
  Phone,
  TrendingUp,
  Clock,
  MapPin,
  Shield,
  Star
} from 'lucide-react';

const ClientesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 4000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { icon: Target, number: '40', label: 'Leads exclusivos/mes', color: 'text-[#6D7FBE]' },
    { icon: TrendingUp, number: '1/9', label: 'Ratio de conversión', color: 'text-[#222952]' },
    { icon: Clock, number: '24-48h', label: 'Primeros resultados', color: 'text-[#6D7FBE]' }
  ];

  const features = [
    { icon: MapPin, text: 'Estén en tu zona' },
    { icon: TrendingUp, text: 'Estén pensando en vender' },
    { icon: Shield, text: 'Que solo tú puedas contactar' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#EBF0CB]/5 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-[#222952]/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <a href="/"><div className="flex items-center justify-between">
            <img
              src="/images/PNG/Horizzon_logo-azul.png"
              alt="Horizzon Media"
              className={`object-contain transition-all duration-500 ${
                scrolled ? 'h-24 md:h-24' : 'h-20 md:h-24'
              } hover:scale-105`}
            />
          </div></a>
          
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-12 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 right-10 w-48 h-48 bg-[#6D7FBE]/5 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#EBF0CB]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#EBF0CB]/70 px-4 py-2 rounded-full mb-6 border border-[#222952]/10">
              <CheckCircle className="w-5 h-5 text-[#222952]" />
              <span className="text-[#222952] font-semibold text-sm">
                Bienvenido al sistema
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#222952] mb-8 leading-tight">
              Ya formas parte del{' '}
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                sistema
              </span>
            </h1>
          </div>

          {/* Intro Text */}
          <div
            className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#222952]/10 mb-12 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Si has llegado hasta aquí es porque ya formas parte del sistema. Probablemente
              llevabas tiempo buscando una forma eficaz de conseguir contactos de propietarios
              que:
            </p>

            <div className="grid gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#EBF0CB]/60 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-[#222952]" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Si eso es lo que buscabas, has tomado una gran decisión. Y no estarás solo:
              somos un equipo profesional, transparente y vamos a estar contigo todo el mes
              para ayudarte a cumplir tus objetivos de captación.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white/40">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Step 1 */}
          <div
            className={`mb-16 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#222952] text-white rounded-full flex items-center justify-center font-black">
                1
              </div>
              <h2 className="text-3xl font-black text-[#222952]">
                Antes de empezar, hay dos preguntas clave:
              </h2>
            </div>

            {/* Question 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#222952]/10 mb-8">
              <h3 className="text-2xl font-bold text-[#222952] mb-6">
                1. ¿Cómo conseguimos los leads?
              </h3>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Usamos campañas segmentadas en{' '}
                  <strong className="text-[#222952]">Meta (Facebook + Instagram)</strong> y{' '}
                  <strong className="text-[#222952]">Google Ads</strong> para llegar a personas
                  que están valorando vender su vivienda. Creamos anuncios que generan interés
                  real y los llevamos a formularios donde les pedimos datos clave: zona, tipo
                  de inmueble, motivo de venta…
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Este paso nos permite{' '}
                  <strong className="text-[#222952]">descartar a los curiosos</strong> y
                  centrarnos en propietarios que sí están dispuestos a hablar. No es un sistema
                  perfecto —como en cualquier captación online puede colarse algún lead no
                  deseado— pero no es lo habitual.
                </p>
              </div>

              <div className="bg-[#EBF0CB]/30 border-l-4 border-[#6D7FBE] p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Además,</strong> antes de lanzar tu campaña, te compartimos una
                    descripción del tipo de anuncio que usaremos, para que sepas qué ha visto
                    el propietario cuando te llame o le llames tú. Esto te ayudará a orientar la
                    conversación y no entrar a ciegas.
                  </p>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#222952]/10">
              <h3 className="text-2xl font-bold text-[#222952] mb-6">
                2. ¿Qué resultados puedes esperar?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-[#EBF0CB]/20 rounded-xl p-6">
                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-3xl font-black text-[#222952] mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Garantizamos hasta{' '}
                  <strong className="text-[#222952]">40 leads exclusivos al mes</strong>. De
                  media, <strong className="text-[#222952]">1 de cada 9 leads</strong> se
                  convierte en captación. 📞 El éxito depende en gran parte de cómo se gestiona
                  el primer contacto, por eso te damos:
                </p>

                <div className="grid gap-3 ml-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#6D7FBE] rounded-full" />
                    <span className="text-gray-700">
                      Un{' '}
                      <strong className="text-[#222952]">guión orientativo</strong> para
                      llamadas (adaptable a tu estilo)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#6D7FBE] rounded-full" />
                    <span className="text-gray-700">
                      Acceso a nuestro equipo para dudas sobre cómo contactar a cada lead
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#6D7FBE] rounded-full" />
                    <span className="text-gray-700">
                      Seguimiento quincenal para afinar la campaña según resultados
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Ten en cuenta que algunas captaciones no se cierran en el momento. Hay
                  propietarios que necesitan resolver herencias, documentación o simplemente
                  tiempo para decidir. Por eso muchas veces lo que trabajas el mes 1, te trae
                  resultados en el 2 o 3.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div
            className={`mb-16 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-[#6D7FBE]/10 to-[#222952]/10 rounded-2xl p-8 border border-[#222952]/10">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold text-[#222952]">
                  ¿Cuándo empiezas a ver leads?
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Normalmente en <strong className="text-[#222952]">24-48h</strong> desde el
                lanzamiento de campaña ya empiezan a entrar. En algunos casos puede tardar un
                poco más (hasta 4-5 días), pero es poco frecuente. Lo importante:{' '}
                <strong className="text-[#222952]">el volumen mensual siempre se cumple</strong>.
              </p>
            </div>
          </div>

          {/* Summary */}
          <div
            className={`mb-16 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#222952]/10">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-bold text-[#222952]">En resumen:</h3>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Este es un sistema que funciona si tú también lo haces funcionar. Nosotros te
                conseguimos los contactos, te damos el contexto y te acompañamos. Tú los
                llamas, los trabajas, y con constancia, las captaciones llegan.
              </p>

              <div className="text-center">
                <p className="text-xl font-bold text-[#222952] mb-2 ">Bienvenido a Horizzon</p>
                <p className="text-lg text-[#6D7FBE] font-semibold font-playfair italic">
                  Vamos a por esos encargos
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#6D7FBE] text-white rounded-full flex items-center justify-center font-black">
                2
              </div>
              <h2 className="text-3xl font-black text-[#222952]">
                Cierra reunion via Calendly para el onboarding
              </h2>
            </div>

            <div
  className="relative rounded-2xl overflow-hidden text-center"
  style={{
    backgroundImage: "url('/images/PNG/call.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Overlay degradado */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#222952]/50 to-[#6D7FBE]/70 z-0" />

  {/* Contenido */}
  <div className="relative z-10 p-8">
    <Calendar className="w-16 h-16 text-white mx-auto mb-6" />
    <h3 className="text-2xl font-bold text-white mb-4">
      ¡Último paso para empezar!
    </h3>
    <p className="text-white/90 text-lg mb-8 leading-relaxed">
      Programa tu reunión de onboarding para configurar tu campaña y empezar a
      recibir leads en 24-48h.
    </p>

    <a
      href="https://calendly.com/YOURHANDLE/onboarding"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-white text-[#222952] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
    >
      Reservar mi reunión de onboarding
    </a>
  </div>
</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientesPage;