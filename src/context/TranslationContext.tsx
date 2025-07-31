// src/context/TranslationContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Importar los archivos JSON de traducciones
import es from '../i18n/locales/es.json';
import en from '../i18n/locales/en.json';
import pt from '../i18n/locales/pt.json';

// Tipos para las traducciones
type Translations = {
  [key: string]: any;
};

// Tipo para el contexto
interface TranslationContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  t: (key: string, fallback?: string) => string;
  getAvailableLanguages: () => string[];
  translations: Translations;
}

// Tipo para el provider
interface TranslationProviderProps {
  children: ReactNode;
}

// Objeto con todas las traducciones
const translations: Record<string, Translations> = { es, en, pt };

// Crear el contexto con valor por defecto
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Provider del contexto
export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('pt'); // ✅ idioma por defecto = portugués
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const supportedLangs = ['es', 'en', 'pt'];
    const savedLang = localStorage.getItem('horizzon-language');
  
    console.log('[🌐 Translation] savedLang:', savedLang);
  
    if (savedLang && supportedLangs.includes(savedLang)) {
      setCurrentLanguage(savedLang);
      console.log('[🌐 Translation] Usando idioma guardado:', savedLang);
    } else {
      // Si no hay idioma guardado, se queda en portugués por defecto
      console.log('[🌐 Translation] Usando idioma por defecto: pt');
    }
  
    setIsReady(true);
  }, []);
  

  const getNestedTranslation = (obj: any, path: string): string | null => {
    return path.split('.').reduce((current, key) => {
      return current && current[key] ? current[key] : null;
    }, obj);
  };

  const t = (key: string, fallback: string = key): string => {
    const translation = getNestedTranslation(translations[currentLanguage], key);

    if (translation) return translation;

    if (currentLanguage !== 'es') {
      const fallbackTranslation = getNestedTranslation(translations.es, key);
      if (fallbackTranslation) return fallbackTranslation;
    }

    console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
    return fallback;
  };

  const changeLanguage = (lang: string): void => {
    if (translations[lang]) {
      setCurrentLanguage(lang);
      localStorage.setItem('horizzon-language', lang);
    } else {
      console.warn(`Language ${lang} not supported`);
    }
  };

  const getAvailableLanguages = (): string[] => {
    return Object.keys(translations);
  };

  const value: TranslationContextType = {
    currentLanguage,
    changeLanguage,
    t,
    getAvailableLanguages,
    translations: translations[currentLanguage]
  };

  return (
    <TranslationContext.Provider value={value}>
      {isReady ? children : null}
    </TranslationContext.Provider>  
  );
};

// Hook personalizado para usar el contexto
export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  
  if (!context) {
    throw new Error('useTranslation debe usarse dentro de TranslationProvider');
  }
  
  return context;
};