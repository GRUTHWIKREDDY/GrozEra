import { useState } from 'react';
import { motion } from 'motion/react';
import { Info } from 'lucide-react';

const jargons = [
  { abbr: "MoA & AoA", name: "Memorandum & Articles of Association", meaning: "The rulebook of your company. It tells the government what your business does and how it's internally managed." },
  { abbr: "DSC", name: "Digital Signature Certificate", meaning: "A secure USB token containing your legally binding digital signature, required to sign online government forms." },
  { abbr: "DIN", name: "Director Identification Number", meaning: "A unique lifetime number assigned by the government to anyone who wants to be a director of a company in India." },
  { abbr: "GSTIN", name: "Goods and Services Tax ID", meaning: "Your official 15-digit tax registration number. Required if you sell goods across states or hit certain revenue limits." },
  { abbr: "AOC-4", name: "Annual Financial Filing", meaning: "A mandatory annual form where you submit your company's balance sheet and profit & loss statement to the MCA." },
  { abbr: "LUT", name: "Letter of Undertaking", meaning: "A document that allows exporters to sell goods or services outside India without paying GST upfront." }
];

export default function JargonFlipCards() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="py-24 bg-olive-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold mb-4">
            We translate government compliance into plain English.
          </h2>
          <p className="text-lg text-olive-200 max-w-2xl mx-auto">
            Say goodbye to confusing legal terms. Hover over these cards to decipher the jargon your business needs to know.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jargons.map((jargon, idx) => (
            <div 
              key={idx} 
              className="relative h-48 cursor-pointer [perspective:1000px] group"
              onMouseEnter={() => setFlipped(idx)}
              onMouseLeave={() => setFlipped(null)}
            >
              <motion.div 
                className="w-full h-full transition-all duration-500 [transform-style:preserve-3d] relative"
                animate={{ rotateY: flipped === idx ? 180 : 0 }}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden [backface-visibility:hidden] bg-olive-800 rounded-2xl p-6 border border-olive-700 flex flex-col items-center justify-center text-center shadow-lg">
                  <span className="text-4xl font-bold text-white mb-2">{jargon.abbr}</span>
                  <span className="text-olive-300 font-medium">{jargon.name}</span>
                  <Info className="w-5 h-5 text-olive-500 absolute bottom-4 right-4" />
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center shadow-lg">
                  <h4 className="text-lg font-bold text-olive-900 mb-2">What it actually means:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {jargon.meaning}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
