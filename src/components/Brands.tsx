import React from 'react';
import { Building2, Users, TrendingUp, Star } from 'lucide-react';

const ClientLogos = () => {
  // Aquí puedes reemplazar estos datos con tus logos reales
  const clients = [
    { name: 'Inmobiliaria Premium', logo: '/logos/client1.png' },
    { name: 'Casas del Mar', logo: '/logos/client2.png' },
    { name: 'Propiedades Elite', logo: '/logos/client3.png' },
    { name: 'Viviendas Barcelona', logo: '/logos/client4.png' },
    { name: 'Hogar Inversiones', logo: '/logos/client5.png' },
    { name: 'Inmuebles Costa', logo: '/logos/client6.png' },
    { name: 'Apartamentos Luxury', logo: '/logos/client7.png' },
    { name: 'Pisos Centro', logo: '/logos/client8.png' },
    { name: 'Residencial Torres', logo: '/logos/client9.png' },
    { name: 'Habitat Moderno', logo: '/logos/client10.png' },
    { name: 'Inmobiliaria Futuro', logo: '/logos/client11.png' },
    { name: 'Espacios Únicos', logo: '/logos/client12.png' },
    { name: 'Propiedades VIP', logo: '/logos/client13.png' },
    { name: 'Hogar Perfecto', logo: '/logos/client14.png' },
    { name: 'Inmuebles Premium', logo: '/logos/client15.png' },
    { name: 'Casas Mediterráneo', logo: '/logos/client16.png' },
    { name: 'Viviendas Exclusivas', logo: '/logos/client17.png' },
    { name: 'Propiedades Global', logo: '/logos/client18.png' }
  ];

  const stats = [
    { icon: <Building2 className="w-5 h-5" />, number: '+70', label: 'Inmobiliarias' },
    { icon: <Users className="w-5 h-5" />, number: '2500+', label: 'Leads generados' },
    { icon: <TrendingUp className="w-5 h-5" />, number: '85%', label: 'Satisfacción' }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#EBF0CB] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#6D7FBE] bg-opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EBF0CB] bg-opacity-60 px-4 py-2 rounded-full text-sm font-medium text-[#222952] mb-6">
            <Star className="w-4 h-4 text-[#6D7FBE]" />
            Confianza demostrada
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#222952] leading-tight mb-4">
            Ya han confiado en nosotros{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#6D7FBE] to-[#222952] bg-clip-text text-transparent">
                +70 empresas
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Inmobiliarias de toda España que han transformado su captación de leads
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#EBF0CB] bg-opacity-60 rounded-lg mb-4">
                <div className="text-[#6D7FBE]">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-[#222952] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Grid de logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="w-32 h-20 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center p-4 transition-all duration-300 hover:shadow-md hover:border-[#6D7FBE] hover:border-opacity-50 group-hover:scale-105">
                {/* Placeholder para logo - reemplaza con <img> cuando tengas los logos */}
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-md flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all duration-300">
                  <Building2 className="w-6 h-6 text-gray-400" />
                </div>
                {/* Cuando tengas los logos, usa esto en su lugar:
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                />
                */}
              </div>
              
              {/* Tooltip con el nombre */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#222952] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                {client.name}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-[#EBF0CB] bg-opacity-40 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="text-base font-semibold text-[#222952] mb-2">
              🚀 Únete a ellos
            </div>
            <p className="text-gray-600 text-sm">
              Cada mes se suman nuevas inmobiliarias que{' '}
              <span className="font-bold text-[#6D7FBE]">automatizan su captación</span> y{' '}
              <span className="font-bold text-[#222952]">multiplican sus resultados</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;