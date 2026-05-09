import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-olive-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 sm:text-5xl mb-4">
            About GrozEra
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in business development and compliance management.
          </p>
        </div>
      </div>

      {/* Parallax Founder's Journey */}
      <div 
        ref={containerRef}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-olive-900"
      >
        <motion.div 
           className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
           style={{ y: backgroundY }}
        />
        <div className="absolute inset-0 bg-olive-900/60 z-10"></div>
        <motion.div 
           style={{ opacity }}
           className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">From a Laptop to an Empire</h2>
           <p className="text-xl text-olive-100 leading-relaxed font-light">
              We know what it takes because we've built it ourselves. We started as a small consultancy out of a shared workspace. Today, we manage the compliance structure of over 1,200 entities. We don't just file your paperwork; we architect your growth.
           </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At GrozEra Business Solutions, we are dedicated to simplifying the complex landscape of business setup, compliance, and growth for startups, entrepreneurs, and MSMEs. We believe that founders should focus on building their vision, while we handle the regulatory framework.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our vision is to be the most reliable consulting partner for growing businesses, enabling them to scale fearlessly through expert guidance in incorporation, intellectual property, tax services, and ISO certifications.
            </p>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-olive-700 hover:bg-olive-800 transition-colors"
            >
              Consult with our Experts
            </Link>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                'Tailored strategic guidance for startups',
                'Transparent, end-to-end processes',
                'Deep expertise in MSME compliance',
                'Dedicated account managers',
                'Comprehensive 360° business services',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-olive-600 mr-3 shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
