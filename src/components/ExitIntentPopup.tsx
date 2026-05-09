import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves out of the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full relative shadow-2xl border border-olive-100"
          >
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 p-2 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center mb-4">
                <PhoneCall className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
                Not sure where to start?
              </h2>
              <p className="text-gray-600">
                Let's figure it out together. Book a FREE 15-minute discovery call to get clarity on your business compliance needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/contact" 
                onClick={() => setIsVisible(false)}
                className="bg-olive-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-olive-800 transition-colors text-center shadow-sm"
              >
                Book Discovery Call
              </Link>
              <button 
                onClick={() => setIsVisible(false)}
                className="bg-gray-100 text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
