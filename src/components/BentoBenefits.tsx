import { motion } from 'motion/react';
import { Briefcase, Users, TrendingUp, Award, Shield, FileCheck, MapPin } from 'lucide-react';

export default function BentoBenefits() {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 auto-rows-[240px]">
          {/* Card 1 (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
               <Briefcase className="w-48 h-48" />
            </div>
            <div>
              <div className="w-14 h-14 bg-olive-50 text-olive-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 max-w-sm">10+ Years of Compliance Excellence</h3>
              <p className="text-lg text-gray-600 max-w-md">We've helped over 500+ startups incorporate and 1,200+ clients stay compliant year after year.</p>
            </div>
            <div className="flex items-center gap-6 mt-8">
               <div>
                 <div className="text-3xl font-bold text-olive-700">500+</div>
                 <div className="text-sm font-medium text-gray-500">Startups</div>
               </div>
               <div>
                 <div className="text-3xl font-bold text-olive-700">1,200+</div>
                 <div className="text-sm font-medium text-gray-500">Clients</div>
               </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-olive-900 text-white rounded-3xl p-8 border border-olive-800 shadow-sm relative overflow-hidden"
          >
             <div className="absolute -bottom-4 -right-4 opacity-10">
                <Shield className="w-32 h-32" />
             </div>
             <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">100% Data Privacy</h3>
                <p className="text-olive-200">Your documents are encrypted and never shared. We maintain strict confidentiality.</p>
             </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden"
          >
            <div className="flex h-full items-center gap-6">
               <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <TrendingUp className="w-8 h-8" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">99.9% Success Rate</h3>
                  <p className="text-sm text-gray-500">In trademark approvals and ROC filings.</p>
               </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-olive-50 rounded-3xl p-8 border border-olive-100 shadow-sm relative overflow-hidden flex flex-col justify-center items-center text-center"
          >
            <div className="w-16 h-16 bg-white text-olive-600 rounded-full flex items-center justify-center shadow-sm mb-4">
               <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">24/7 Expert Support</h3>
            <p className="text-sm text-gray-600">Always available.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-3 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm relative overflow-hidden flex items-center"
          >
             <div className="w-14 h-14 bg-gray-50 text-gray-600 rounded-2xl flex items-center justify-center mr-6 shrink-0">
                <MapPin className="w-6 h-6" />
             </div>
             <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pan-India Presence</h3>
                <p className="text-gray-600 text-sm">We handle multi-state local compliance, no matter where your headquarters is located.</p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
