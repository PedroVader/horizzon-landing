import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const languages = [
    { code: 'es', flag: '🇪🇸', name: 'Español' },
    { code: 'pt', flag: '🇵🇹', name: 'Português' },
    { code: 'en', flag: '🇬🇧', name: 'English' },
  ];

  const navItems = [
    { name: 'Proceso', href: '#que-hacemos' },
    { name: 'Servicio', href: '#servicio' },
    { name: 'Casos de exito', href: '#casos' },
    { name: 'Nosotros', href: '#historia' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-[#F8FAED]'
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ${
            scrolled ? 'h-16' : 'h-20'
          }`}>
            <div className="flex-shrink-0 relative z-50">
              <a href="#top" className="flex items-center group">
                <img
                  src="/images/PNG/Horizzon_logo-azul.png"
                  alt="Horizzon Media Logo"
                  className={`object-contain transition-all duration-500 ${
                    scrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
                  } group-hover:scale-105`}
                />
              </a>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-[#222952] hover:text-[#6D7FBE] transition-all duration-300 font-medium text-sm tracking-wide group py-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6D7FBE] to-[#222952] group-hover:w-full transition-all duration-500"></span>
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-2 px-3 py-2 text-[#222952] hover:text-[#6D7FBE] transition-all duration-300 rounded-full hover:bg-[#F8FAED] border border-transparent hover:border-[#6D7FBE]/20"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {languages.find(lang => lang.code === currentLanguage)?.flag}
                  </span>
                </button>
                <div className={`absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-xl border border-[#F8FAED] overflow-hidden transition-all duration-300 min-w-[140px] ${
                  isLanguageOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#F8FAED] ${
                        currentLanguage === lang.code ? 'bg-[#6D7FBE]/10 text-[#6D7FBE]' : 'text-[#222952] hover:text-[#6D7FBE]'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button className="group flex items-center gap-2 px-6 py-3 text-[#222952] hover:text-[#6D7FBE] font-medium text-sm transition-all duration-300 rounded-full border border-[#6D7FBE]/20 hover:border-[#6D7FBE] hover:bg-[#F8FAED]">
                  <Phone className="w-4 h-4" />
                  Llamar
                </button>
                <button className="group relative overflow-hidden bg-gradient-to-r from-[#222952] to-[#6D7FBE] text-white px-6 py-3 font-semibold text-sm rounded-full hover:shadow-xl hover:shadow-[#6D7FBE]/25 transition-all duration-500 hover:scale-105">
                  <span className="absolute inset-0 bg-gradient-to-r from-[#6D7FBE] to-[#222952] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center gap-2">
                    Demo gratuita
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-3 relative z-50">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center justify-center w-10 h-10 text-[#222952] hover:text-[#6D7FBE] transition-all duration-300 rounded-full hover:bg-[#F8FAED]"
                >
                  <span className="text-lg">
                    {languages.find(lang => lang.code === currentLanguage)?.flag}
                  </span>
                </button>
                <div className={`absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#F8FAED] overflow-hidden transition-all duration-300 z-50 min-w-[120px] ${
                  isLanguageOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#F8FAED] ${
                        currentLanguage === lang.code ? 'bg-[#6D7FBE]/10 text-[#6D7FBE]' : 'text-[#222952] hover:text-[#6D7FBE]'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-xs">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative flex items-center justify-center w-10 h-10 text-[#222952] hover:text-[#6D7FBE] hover:bg-[#F8FAED] rounded-full transition-all duration-300"
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0 scale-75' : 'opacity-100 scale-100'}`} />
                  <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 scale-100' : 'rotate-180 opacity-0 scale-75'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú móvil desplegable - Separado del header */}
      <div className={`lg:hidden fixed inset-x-0 bg-white shadow-2xl transition-all duration-500 z-40 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`} style={{ 
        top: scrolled ? '64px' : '80px',
        transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)'
      }}>
        <div className="px-4 pt-6 pb-8 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-6 py-4 text-[#222952] hover:text-white hover:bg-gradient-to-r hover:from-[#222952] hover:to-[#6D7FBE] font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
              }}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <button
              className={`w-full flex items-center justify-center gap-2 px-6 py-4 text-[#222952] hover:text-[#6D7FBE] font-medium rounded-xl border border-[#6D7FBE]/20 hover:border-[#6D7FBE] hover:bg-[#F8FAED] transition-all duration-300 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : '0ms'
              }}
            >
              <Phone className="w-5 h-5" />
              Llamar ahora
            </button>
            <button
              className={`w-full bg-gradient-to-r from-[#222952] to-[#6D7FBE] text-white px-6 py-4 font-semibold rounded-xl hover:shadow-xl hover:shadow-[#6D7FBE]/25 transition-all duration-500 hover:scale-105 ${
                isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${(navItems.length + 1) * 50}ms` : '0ms'
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Demo gratuita
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay de fondo */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/20 transition-all duration-300 z-30 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`} 
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;