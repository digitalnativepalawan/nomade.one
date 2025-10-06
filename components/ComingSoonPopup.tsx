
import React from 'react';

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonPopup: React.FC<ComingSoonPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div 
        className="bg-gray-900/80 border border-cyan-500/50 rounded-2xl p-8 m-4 max-w-sm w-full text-center shadow-2xl shadow-cyan-500/20 relative transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-cyan-400 mb-4">
          <svg className="w-16 h-16 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 id="popup-title" className="text-3xl font-bold mb-2">Coming Soon!</h2>
        <p className="text-gray-300 mb-6">This feature is under construction. We're working hard to bring it to you.</p>
        <button 
          onClick={onClose} 
          className="px-6 py-2 font-semibold rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 hover:brightness-110 active:scale-95"
        >
          Got it
        </button>
      </div>
      <style>{`
        @keyframes fade-in-scale {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s forwards cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default ComingSoonPopup;
