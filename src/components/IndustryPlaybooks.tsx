import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Layout, Code, Briefcase, Camera, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
  { 
    id: 'ecommerce', 
    name: 'E-Commerce / D2C', 
    icon: ShoppingCart,
    painPoint: "High GST complexity on logistics and multi-state inventory.",
    solution: "We setup multi-state GSTINs, LUTs for export, and secure your brand with Trademark registration." 
  },
  { 
    id: 'saas', 
    name: 'Tech & SaaS', 
    icon: Code,
    painPoint: "Intellectual property theft and cross-border software taxation.",
    solution: "We copyright your code, trademark your logo, and handle complex SEZ or export tax rules." 
  },
  { 
    id: 'agencies', 
    name: 'Freelancers & Agencies', 
    icon: Layout,
    painPoint: "Scaling from sole prop to a registered company to pitch big clients.",
    solution: "We convert your firm to an LLP or Pvt Ltd and ensure GST compliance for service billing." 
  },
  { 
    id: 'realestate', 
    name: 'Real Estate & Infra', 
    icon: Building,
    painPoint: "Heavy regulations, high tax slabs, and massive compliance audits.",
    solution: "Strategic structural consulting, heavy tax planning, and ISO certifications to win government tenders." 
  }
];

export default function IndustryPlaybooks() {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Compliance solutions engineered specifically for your industry.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your sector to see how our expertise aligns with your exact business model.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 flex flex-col gap-2">
            {industries.map((ind) => {
              const Icon = ind.icon;
              const isActive = activeTab === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                    isActive 
                      ? 'bg-olive-700 text-white shadow-lg scale-[1.02]' 
                      : 'bg-white text-gray-700 hover:bg-olive-50 border border-gray-100'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-olive-600 text-white' : 'bg-olive-100 text-olive-600'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg">{ind.name}</span>
                </button>
              )
            })}
          </div>

          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {industries.map((ind) => ind.id === activeTab && (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl h-full flex flex-col justify-center"
                >
                  <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6 border border-red-100">
                    <span className="font-bold block mb-1">Common Pitfall:</span>
                    {ind.painPoint}
                  </div>
                  <div className="bg-olive-50 text-olive-900 p-6 rounded-lg mb-8 border border-olive-100">
                    <span className="font-bold block mb-2 text-lg">GrozEra Playbook:</span>
                    <p className="text-gray-700 leading-relaxed text-lg">{ind.solution}</p>
                  </div>
                  <Link 
                    to="/contact"
                    className="self-start px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Discuss {ind.name} Strategies &rarr;
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
