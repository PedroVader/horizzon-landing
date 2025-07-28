// components/CalendlyModal.jsx
import React, { useEffect, useState } from 'react';
import { X, Loader2 } from 'lucide-react';

const CalendlyModal = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && !isClosing) handleClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      
      // Cargar script de Calendly si no existe
      const existingScript = document.querySelector('script[src*="calendly"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
          console.log('Script Calendly cargado');
          setScriptLoaded(true);
        };
        script.onerror = () => {
          console.error('Error cargando script Calendly');
        };
        document.head.appendChild(script);
      } else {
        setScriptLoaded(true);
      }
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isClosing]);

  if (!isOpen) return null;

  return (
<div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
    {isClosing ? (
      <div className="bg-white rounded-2xl p-12 flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#222952] mb-4" />
      </div>
    ) : (
      <div className="bg-white rounded-2xl max-w-7xl w-full max-h-[100vh] overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-[#222952]">
            Reserva tu consulta gratuita con Horizzon Media
          </h3>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
          
          <div className="p-6">
            {/* Uso directo del widget de Calendly tal como lo proporcionaste */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/horizzonmedia/30min?hide_gdpr_banner=1" 
              style={{minWidth:'320px', height:'750px'}}
            >
              {/* Loading solo si el script no ha cargado */}
              {!scriptLoaded && (
                <div className="flex items-center justify-center h-full">
                  <div className="flex flex-col items-center">
                    <Loader2 className="w-8 h-8 animate-spin text-[#222952] mb-2" />
                    <p className="text-sm text-gray-600">Cargando calendario...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendlyModal;