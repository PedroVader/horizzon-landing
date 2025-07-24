import React, { useState, useEffect } from 'react';
import {
  CheckCircle,
  Users,
  Target,
  Calendar,
  TrendingUp,
  Clock,
  MapPin,
  Shield,
  ArrowRight,
  ChevronDown,
  Globe
} from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const ClientesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Hook de traducciones
  const { t, currentLanguage, changeLanguage } = useTranslation();

  const languages = [
    { code: 'es', name: t('header.language.spanish'), flag: '🇪🇸' },
    { code: 'en', name: t('header.language.english'), flag: '🇬🇧' },
    { code: 'pt', name: t('header.language.portuguese'), flag: '🇵🇹' }
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.language-dropdown');
      if (dropdown && !dropdown.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  const stats = [
    { 
      icon: Target, 
      number: t('clientesPage.steps.step1.question2.stats.leads'), 
      label: t('clientesPage.steps.step1.question2.stats.leadsLabel') 
    },
    { 
      icon: TrendingUp, 
      number: t('clientesPage.steps.step1.question2.stats.conversion'), 
      label: t('clientesPage.steps.step1.question2.stats.conversionLabel') 
    },
    { 
      icon: Clock, 
      number: t('clientesPage.steps.step1.question2.stats.time'), 
      label: t('clientesPage.steps.step1.question2.stats.timeLabel') 
    }
  ];

  const features = [
    { text: t('clientesPage.intro.features.feature1') },
    { text: t('clientesPage.intro.features.feature2') },
    { text: t('clientesPage.intro.features.feature3') }
  ];

  const benefits = [
    t('clientesPage.steps.step1.question2.benefits.benefit1'),
    t('clientesPage.steps.step1.question2.benefits.benefit2'),
    t('clientesPage.steps.step1.question2.benefits.benefit3')
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/">
              <img
                src="/images/PNG/Horizzon_logo-azul.png"
                alt={t('header.logo.alt')}
                className={`object-contain transition-all duration-300 ${
                  scrolled ? 'h-16' : 'h-20'
                }`}
              />
            </a>

            {/* Language Dropdown */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 transition-all duration-200"
              >
                <Globe className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${
                  isLanguageDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        changeLanguage(language.code);
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                        currentLanguage === language.code ? 'bg-blue-50 text-[#6D7FBE]' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className={`transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full mb-8">
              <CheckCircle className="w-4 h-4 text-[#222952]" />
              <span className="text-[#222952] font-medium text-sm">
                {t('clientesPage.badge')}
              </span>
            </div>

            <h1 className="text-5xl font-bold text-[#222952] mb-6 leading-tight">
              {t('clientesPage.hero.title')}
            </h1>

            <p className="text-xl text-gray-600 mb-16 font-playfair italic">
              {t('clientesPage.hero.subtitle')}
            </p>
          </div>

          {/* Intro Text */}
          <div
            className={`bg-gray-50 rounded-lg p-8 text-left transition-all duration-800 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('clientesPage.intro.text1')}
            </p>

            <div className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed">
              {t('clientesPage.intro.text2')}
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* Step 1 */}
          <div
            className={`mb-20 transition-all duration-800 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-[#222952] text-white rounded-full flex items-center justify-center font-semibold text-sm">
                1
              </div>
              <h2 className="text-2xl font-semibold text-[#222952]">
                {t('clientesPage.steps.step1.title')}
              </h2>
            </div>

            {/* Question 1 */}
            <div className="bg-white rounded-lg p-8 mb-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-[#222952] mb-4 font-playfair italic">
                1. {t('clientesPage.steps.step1.question1.title')}
              </h3>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {t('clientesPage.steps.step1.question1.text1')}
                </p>

                <p className="text-gray-700 leading-relaxed">
                  {t('clientesPage.steps.step1.question1.text2')}
                </p>
              </div>

              <div className="bg-blue-50 border-l-3 border-[#6D7FBE] p-4 rounded-r">
                <p className="text-gray-700 leading-relaxed">
                  {t('clientesPage.steps.step1.question1.tip')}
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-lg p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-[#222952] mb-4 font-playfair italic">
                2. {t('clientesPage.steps.step1.question2.title')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="text-2xl font-bold text-[#222952] mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {t('clientesPage.steps.step1.question2.text1')}
                </p>

                <ul className="space-y-2 ml-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#6D7FBE] rounded-full mt-2" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  {t('clientesPage.steps.step1.question2.text2')}
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div
            className={`mb-20 transition-all duration-800 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-[#222952] mb-4 font-playfair italic">
                {t('clientesPage.steps.timeline.title')}
              </h3>

              <p className="text-gray-700 leading-relaxed">
                {t('clientesPage.steps.timeline.text')}
              </p>
            </div>
          </div>

          {/* Summary */}
          <div
            className={`mb-20 transition-all duration-800 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="bg-white rounded-lg p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-[#222952] mb-4 font-playfair italic">
                {t('clientesPage.steps.summary.title')}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {t('clientesPage.steps.summary.text')}
              </p>

              <div className="text-center bg-gray-50 rounded-lg p-6">
                <p className="text-xl font-semibold text-[#222952] mb-2">
                  {t('clientesPage.steps.summary.welcome')}
                </p>
                <p className="text-[#6D7FBE] font-medium font-playfair italic">
                  {t('clientesPage.steps.summary.slogan')}
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div
            className={`transition-all duration-800 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-[#6D7FBE] text-white rounded-full flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <h2 className="text-2xl font-semibold text-[#222952]">
                {t('clientesPage.steps.step2.title')}
              </h2>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <div
                className="bg-cover bg-center h-80"
                style={{
                  backgroundImage: "url('/images/PNG/call.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-[#222952]/70" />

              <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                <div>
                  <Calendar className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {t('clientesPage.steps.step2.cta.title')}
                  </h3>
                  <p className="text-white/90 mb-6 max-w-md">
                    {t('clientesPage.steps.step2.cta.description')}
                  </p>

                  <a
                    href="https://calendly.com/YOURHANDLE/onboarding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-[#222952] px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors"
                  >
                    {t('clientesPage.steps.step2.cta.button')}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientesPage;