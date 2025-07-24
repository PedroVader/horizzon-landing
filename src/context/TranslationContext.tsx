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
  const [currentLanguage, setCurrentLanguage] = useState<string>('es');
  
  // Detectar idioma del navegador al iniciar
  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    const supportedLangs = ['es', 'en', 'pt'];
    
    // Verificar si hay idioma guardado en localStorage
    const savedLang = localStorage.getItem('horizzon-language');
    
    if (savedLang && supportedLangs.includes(savedLang)) {
      setCurrentLanguage(savedLang);
    } else if (supportedLangs.includes(browserLang)) {
      setCurrentLanguage(browserLang);
    }
  }, []);

  // Función para obtener traducción anidada (ej: hero.title.line1)
  const getNestedTranslation = (obj: any, path: string): string | null => {
    return path.split('.').reduce((current, key) => {
      return current && current[key] ? current[key] : null;
    }, obj);
  };

  // Función principal de traducción
  const t = (key: string, fallback: string = key): string => {
    const translation = getNestedTranslation(translations[currentLanguage], key);
    
    if (translation) {
      return translation;
    }
    
    // Si no encuentra en el idioma actual, intenta en español como fallback
    if (currentLanguage !== 'es') {
      const fallbackTranslation = getNestedTranslation(translations.es, key);
      if (fallbackTranslation) {
        return fallbackTranslation;
      }
    }
    
    // Si no encuentra nada, devuelve el fallback o la clave
    console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
    return fallback;
  };

  // Función para cambiar idioma
  const changeLanguage = (lang: string): void => {
    if (translations[lang]) {
      setCurrentLanguage(lang);
      localStorage.setItem('horizzon-language', lang);
    } else {
      console.warn(`Language ${lang} not supported`);
    }
  };

  // Obtener idiomas disponibles
  const getAvailableLanguages = (): string[] => {
    return Object.keys(translations);
  };

  // Valor del contexto
  const value: TranslationContextType = {
    currentLanguage,
    changeLanguage,
    t,
    getAvailableLanguages,
    translations: translations[currentLanguage]
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
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