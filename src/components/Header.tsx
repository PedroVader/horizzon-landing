import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

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
    { name: 'Qué hacemos', href: '#que-hacemos' },
    { name: 'Servicio', href: '#servicio' },
    { name: 'Casos de éxito', href: '#casos' },
    { name: 'Historia', href: '#historia' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl shadow-xl shadow-[#6D7FBE]/10' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="flex-shrink-0 relative">
            <a href="#top" className="flex items-center">
              <img
                src="/images/PNG/Horizzon_logo-azul.png"
                alt="Horizzon Media Logo"
                className="h-16 w-auto md:h-20 lg:h-24 xl:h-28 object-contain"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-[#222952] transition-all duration-300 font-mont font-medium text-sm tracking-wide group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#222952] to-[#6D7FBE] group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}

            {/* Language Selector Desktop */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-[#222952] transition-all duration-300 rounded-lg hover:bg-[#EBF0CB]/30"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {languages.find(lang => lang.code === currentLanguage)?.flag} {currentLanguage.toUpperCase()}
                </span>
              </button>

              <div className={`absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 ${
                isLanguageOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#EBF0CB]/30 ${
                      currentLanguage === lang.code ? 'bg-[#6D7FBE]/10 text-[#6D7FBE]' : 'text-gray-700 hover:text-[#222952]'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="relative overflow-hidden bg-gradient-to-r from-[#222952] to-[#6D7FBE] text-white px-8 py-3 font-mont font-bold text-sm tracking-wide rounded-full hover:shadow-2xl hover:shadow-[#6D7FBE]/25 transition-all duration-500 hover:scale-105 group">
              <span className="absolute inset-0 bg-gradient-to-r from-[#6D7FBE] to-[#222952] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2">
                CONSULTA GRATUITA
                <div className="w-2 h-2 bg-[#EBF0CB] rounded-full animate-pulse"></div>
              </span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1 px-2 py-1 text-gray-700 hover:text-[#222952] transition-all duration-300 rounded-lg hover:bg-[#EBF0CB]/30"
              >
                <span className="text-sm">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
              </button>

              <div className={`absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 z-50 ${
                isLanguageOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-[#EBF0CB]/30 ${
                      currentLanguage === lang.code ? 'bg-[#6D7FBE]/10 text-[#6D7FBE]' : 'text-gray-700 hover:text-[#222952]'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-xs whitespace-nowrap">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-700 hover:text-[#222952] hover:bg-[#EBF0CB]/30 rounded-full"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0 scale-75' : 'opacity-100 scale-100'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 scale-100' : 'rotate-180 opacity-0 scale-75'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-[#6D7FBE]/20">
            <div className="px-2 pt-6 pb-8 space-y-2 bg-gradient-to-br from-white to-[#EBF0CB]/20">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#222952] hover:to-[#6D7FBE] font-mont font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg transform`}
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : '0ms'
                  }}
                >
                  {item.name}
                </a>
              ))}

              <button
                className="w-full mt-6 bg-gradient-to-r from-[#222952] to-[#6D7FBE] text-white px-8 py-4 font-mont font-bold text-sm tracking-wide rounded-xl hover:shadow-2xl hover:shadow-[#6D7FBE]/25 transition-all duration-500 hover:scale-105"
                style={{
                  transitionDelay: isMenuOpen ? `${navItems.length * 100 + 300}ms` : '0ms'
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  CONSULTA GRATUITA
                  <div className="w-2 h-2 bg-[#EBF0CB] rounded-full animate-pulse"></div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
