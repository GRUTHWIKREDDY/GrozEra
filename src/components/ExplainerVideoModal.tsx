import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ExplainerVideoModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-black rounded-2xl w-full max-w-4xl relative shadow-2xl overflow-hidden aspect-video border border-gray-700"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full flex flex-col items-center justify-center text-white/50 bg-gray-900">
               <Play className="w-16 h-16 mb-4 text-olive-500" />
               <p className="font-medium text-lg">Explainer Video Placeholder</p>
               <p className="text-sm mt-2 max-w-md text-center px-4">"See how GrozEra saves founders 200+ hours in just 60 seconds."</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
