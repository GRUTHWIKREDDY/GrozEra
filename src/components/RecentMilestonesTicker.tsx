import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Building2, ShieldCheck, FileText } from 'lucide-react';

const milestones = [
  { icon: Building2, text: "Incorporated a HealthTech Pvt Ltd in Bangalore in exactly 7 days." },
  { icon: ShieldCheck, text: "Successfully defended a Trademark objection for an E-commerce D2C brand." },
  { icon: FileText, text: "Filed advanced tax returns for 50+ SaaS startups ahead of the deadline." },
  { text: "⭐ 5/5 Rating: 'GrozEra saved us ₹2L in potential compliance penalties.'" },
  { icon: Building2, text: "Converted a rapidly growing Sole Proprietorship into a Private Limited Company." }
];

export default function RecentMilestonesTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % milestones.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-olive-900 border-b border-olive-800 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-center">
          <div className="text-olive-300 text-sm font-semibold tracking-wide uppercase mr-4 shrink-0 flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Recent Wins
          </div>
          <div className="relative h-6 w-full max-w-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center text-white text-sm font-medium"
              >
                {(() => {
                   const Icon = milestones[currentIndex].icon;
                   return Icon ? <Icon className="w-4 h-4 mr-2 text-olive-400" /> : null;
                })()}
                {milestones[currentIndex].text}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
