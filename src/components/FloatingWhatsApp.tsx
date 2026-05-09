import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  const whatsappNumber = "1234567890"; // Placeholder number
  
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-full p-2 pr-5 shadow-2xl flex items-center gap-3 border border-gray-200 cursor-pointer overflow-hidden backdrop-blur-lg bg-white/90"
      >
        <div className="flex -space-x-2 relative">
           {/* Expert avatar 1 */}
           <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://ui-avatars.com/api/?name=Anita+S&background=cce2cb&color=2e4c30" alt="Expert" />
           {/* Expert avatar 2 */}
           <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://ui-avatars.com/api/?name=Rohan+V&background=f0fdf4&color=166534" alt="Expert" />
           <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-900 leading-tight">2 Experts Online</span>
          <span className="text-xs text-olive-600 font-medium">Ask us anything</span>
        </div>
      </motion.div>
    </a>
  );
}
