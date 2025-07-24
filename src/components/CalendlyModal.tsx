// components/CalendlyModal.jsx
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const CalendlyModal = ({ isOpen, onClose }) => {
  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Bloquear scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header del modal */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-[#222952]">
            Reserva tu consulta gratuita
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        {/* Widget de Calendly */}
        <div className="p-6">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/endikaibarzabal/30min?hide_gdpr_banner=1" 
            style={{minWidth:'320px', height:'600px'}}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;