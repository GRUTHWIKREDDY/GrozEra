import { useState } from 'react';
import { Check, Calculator } from 'lucide-react';

const services = [
  { id: 'incorp', name: 'Pvt Ltd Incorporation', price: 14999 },
  { id: 'tm', name: 'Trademark Registration', price: 6999 },
  { id: 'gst', name: 'GST Registration', price: 1999 },
  { id: 'iso', name: 'ISO 9001 Certification', price: 9999 },
];

export default function PricingCalculator() {
  const [selected, setSelected] = useState<string[]>(['incorp']);

  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const total = services.filter(s => selected.includes(s.id)).reduce((acc, s) => acc + s.price, 0);
  const bundleDiscount = selected.length >= 3 ? total * 0.15 : selected.length >= 2 ? total * 0.1 : 0;
  const finalPrice = total - bundleDiscount;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Build Your Own Bundle
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the services you need. The more you bundle, the more you save.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-4">
             {services.map(s => {
               const isSelected = selected.includes(s.id);
               return (
                  <button 
                     key={s.id}
                     onClick={() => toggle(s.id)}
                     className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                        isSelected 
                           ? 'border-olive-600 bg-olive-50' 
                           : 'border-gray-100 hover:border-gray-200 bg-white'
                     }`}
                  >
                     <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center border ${isSelected ? 'bg-olive-600 border-olive-600' : 'border-gray-300'}`}>
                           {isSelected && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`font-bold text-lg ${isSelected ? 'text-olive-900' : 'text-gray-700'}`}>{s.name}</span>
                     </div>
                     <span className={`font-medium ${isSelected ? 'text-olive-700' : 'text-gray-500'}`}>₹{s.price.toLocaleString('en-IN')}</span>
                  </button>
               )
             })}
          </div>

          <div className="md:col-span-2">
             <div className="bg-gray-900 rounded-3xl p-8 text-white shadow-2xl sticky top-24">
                <div className="flex items-center gap-3 mb-6 border-b border-gray-800 pb-6">
                   <Calculator className="w-6 h-6 text-olive-400" />
                   <h3 className="text-xl font-bold">Estimated Cost</h3>
                </div>
                
                <div className="space-y-4 mb-6">
                   <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span>₹{total.toLocaleString('en-IN')}</span>
                   </div>
                   {bundleDiscount > 0 && (
                      <div className="flex justify-between text-green-400 font-medium">
                         <span>Bundle Discount</span>
                         <span>- ₹{bundleDiscount.toLocaleString('en-IN')}</span>
                      </div>
                   )}
                </div>

                <div className="border-t border-gray-800 pt-6 mb-8">
                   <div className="flex justify-between items-end">
                      <span className="text-gray-300">Total</span>
                      <span className="text-3xl font-bold flex items-center">
                         <span className="text-sm font-normal text-gray-400 mr-2">INR</span>
                         ₹{finalPrice.toLocaleString('en-IN')}
                      </span>
                   </div>
                </div>

                <a href="/contact" className="w-full block text-center py-4 bg-olive-600 hover:bg-olive-500 font-bold rounded-xl transition text-white">
                   Claim This Bundle
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
