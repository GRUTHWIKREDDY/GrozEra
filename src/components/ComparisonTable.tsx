import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function ComparisonTable() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Stop Googling legal jargon. Start building your business.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The hidden costs of doing it yourself often include delayed growth, rejected applications, and heavy penalties.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 text-center">
            <div className="p-6 font-semibold text-gray-500 flex items-center justify-center">Features</div>
            <div className="p-6 font-bold text-gray-900 border-l border-gray-200">DIY / Freelancers</div>
            <div className="p-6 font-bold text-white bg-olive-700 border-l border-olive-800 shadow-inner">
              GrozEra Partner
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {[
              { feature: "Time Investment", diy: "50+ hours researching", grozera: "15-min discovery call" },
              { feature: "Accuracy Guarantee", diy: "High risk of rejection", grozera: "100% Error-Free Filing" },
              { feature: "Missed Deadlines", diy: "Up to ₹1Lakh in penalties", grozera: "Automated reminders & filing" },
              { feature: "Strategic Advisory", diy: "None", grozera: "Dedicated expert consulting" },
              { feature: "Hidden Costs", diy: "Unexpected fees & refilings", grozera: "Transparent, upfront pricing" },
            ].map((row, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="grid grid-cols-3 hover:bg-gray-50 transition-colors"
              >
                <div className="p-5 flex items-center font-medium text-gray-900">{row.feature}</div>
                <div className="p-5 flex items-center justify-center text-center text-gray-500 border-l border-gray-100">
                  <XCircle className="w-4 h-4 text-red-400 mr-2 shrink-0" />
                  <span className="text-sm">{row.diy}</span>
                </div>
                <div className="p-5 flex items-center justify-center text-center font-medium text-olive-900 bg-olive-50 border-l border-olive-100">
                  <CheckCircle2 className="w-5 h-5 text-olive-600 mr-2 shrink-0" />
                  <span className="text-sm">{row.grozera}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
