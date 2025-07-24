// hooks/useCalendlyModal.js
import { useState, useEffect } from 'react';

export const useCalendlyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      // Cargar script sin verificar (se carga solo una vez automáticamente)
      const existingScript = document.querySelector('script[src*="calendly"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.head.appendChild(script);
      }
    }
  }, [isOpen]);

  return { isOpen, openModal, closeModal };
};