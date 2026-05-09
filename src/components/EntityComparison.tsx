import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Building, Check, ArrowRight } from 'lucide-react';

export default function EntityComparison() {
  const [isLLP, setIsLLP] = useState(false);

  return (
    <section className="py-24 bg-olive-900 border-t border-olive-800 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Private Limited vs LLP: What's Right For You?
          </h2>
          <p className="text-lg text-olive-200 max-w-2xl mx-auto">
            Choose the right foundation before you build. Toggle to compare the benefits of the two most popular entity structures.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-olive-800 p-1 rounded-xl inline-flex relative shadow-inner">
            <div 
              className={`absolute inset-y-1 w-1/2 bg-white rounded-lg shadow transition-all duration-300 ease-out z-0 ${isLLP ? 'left-1/2 -ml-1' : 'left-1'}`}
            ></div>
            <button
              onClick={() => setIsLLP(false)}
              className={`relative z-10 px-8 py-3 text-sm font-bold rounded-lg transition-colors duration-300 ${!isLLP ? 'text-olive-900' : 'text-olive-200 hover:text-white'}`}
            >
              Private Limited (Pvt Ltd)
            </button>
            <button
              onClick={() => setIsLLP(true)}
              className={`relative z-10 px-8 py-3 text-sm font-bold rounded-lg transition-colors duration-300 ${isLLP ? 'text-olive-900' : 'text-olive-200 hover:text-white'}`}
            >
              Limited Liability P'ship (LLP)
            </button>
          </div>
        </div>

        <div className="relative h-[450px] sm:h-[400px]">
          <AnimatePresence mode="wait">
            {!isLLP ? (
              <motion.div
                key="pvtltd"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 grid sm:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl"
              >
                <div>
                  <div className="w-16 h-16 bg-blue-500/20 text-blue-300 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/30">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Private Limited Company</h3>
                  <p className="text-olive-200 mb-6 leading-relaxed">
                    The gold standard for startups seeking venture capital. Offers limited liability and easy transferability of shares, but comes with higher compliance requirements.
                  </p>
                  <a href="/services/incorporation" className="inline-flex items-center text-white font-bold hover:text-olive-200 transition">
                    Incorporate Pvt Ltd Today <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
                <div className="space-y-4">
                  {[
                    "Best for: Raising Angel / VC Funding",
                    "Ownership: Issuance of Employee Stock Options (ESOPs)",
                    "Audit: Mandatory statutory audit irrespective of turnover",
                    "Taxes: Base tax rate of 15% - 25% (Subject to conditions)",
                    "Setup Time: 10-15 Days"
                  ].map((advantage, i) => (
                    <div key={i} className="flex items-start">
                      <div className="p-1 shrink-0 bg-olive-700 rounded-full mr-3 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-olive-100 font-medium">{advantage}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="llp"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 grid sm:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl"
              >
                <div>
                  <div className="w-16 h-16 bg-purple-500/20 text-purple-300 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/30">
                    <Building className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Limited Liability Partnership</h3>
                  <p className="text-olive-200 mb-6 leading-relaxed">
                    Perfect for professional services and small family businesses. Combines the limited liability of a company with the flexibility of a partnership.
                  </p>
                  <a href="/services/incorporation" className="inline-flex items-center text-white font-bold hover:text-olive-200 transition">
                    Register LLP Today <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
                <div className="space-y-4">
                  {[
                    "Best for: Agencies, Consultants, Bootstrapped Businesses",
                    "Compliance: Lower annual compliance burden (No mandatory board meetings)",
                    "Audit: Audit required ONLY if turnover > ₹40L or capital > ₹25L",
                    "Dividend: Partners can withdraw profits without Dividend Distribution Tax",
                    "Setup Time: 15-20 Days"
                  ].map((advantage, i) => (
                    <div key={i} className="flex items-start">
                      <div className="p-1 shrink-0 bg-olive-700 rounded-full mr-3 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-olive-100 font-medium">{advantage}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
