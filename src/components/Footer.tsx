
import React from 'react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-brand-dark-blue text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-mont font-black mb-8 leading-tight">
              Hablemos de tu
              <br />
              <span className="text-brand-light-yellow">próximo proyecto</span>
            </h2>
            <p className="text-xl text-gray-300 font-mont font-light mb-12 leading-relaxed">
              Agenda una consulta gratuita y descubre cómo podemos 
              impulsar tu marca inmobiliaria al siguiente nivel.
            </p>
            
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-400 font-mont font-medium tracking-wider uppercase mb-1">
                  Email
                </div>
                <div className="text-lg font-mont font-medium">
                  hola@horizzonmedia.com
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400 font-mont font-medium tracking-wider uppercase mb-1">
                  Teléfono
                </div>
                <div className="text-lg font-mont font-medium">
                  +52 (55) 1234-5678
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-400 font-mont font-medium tracking-wider uppercase mb-1">
                  Ubicación
                </div>
                <div className="text-lg font-mont font-medium">
                  Ciudad de México, México
                </div>
              </div>
            </div>
          </div>

          {/* CTA Form */}
          <div className="bg-brand-light-blue/10 p-8">
            <h3 className="text-2xl font-mont font-black mb-6">
              Consulta Gratuita
            </h3>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 font-mont font-light"
              />
              <input
                type="email"
                placeholder="Email corporativo"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 font-mont font-light"
              />
              <input
                type="text"
                placeholder="Empresa / Proyecto"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 font-mont font-light"
              />
              <textarea
                placeholder="Cuéntanos sobre tu proyecto"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 font-mont font-light resize-none"
              ></textarea>
              
              <button className="w-full bg-brand-light-yellow text-brand-dark-blue px-8 py-4 font-mont font-bold tracking-wide hover:bg-opacity-90 transition-all duration-300">
                ENVIAR SOLICITUD
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
        <a href="/">
          <img
            src="/images/PNG/Horizzon_logo-blanco.png"
            alt="Horizzon Media Logo"
            className="h-16 w-auto md:h-20 lg:h-24 xl:h-28 object-contain hover:cursor-pointer"
          />
        </a>
          </div>
          <div className="text-sm text-gray-400 font-mont font-light">
            © 2025   Horizzon Media. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
