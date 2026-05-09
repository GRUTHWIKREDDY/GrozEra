import { motion } from 'motion/react';
import { Calendar as CalendarIcon, AlertCircle } from 'lucide-react';

const deadlines = [
  { date: "15th", month: "Monthly", title: "PF & ESIC Payment", urgency: "medium" },
  { date: "20th", month: "Monthly", title: "GSTR-3B Filing", urgency: "high" },
  { date: "15th", month: "Quarterly", title: "Advance Tax Payment", urgency: "high" },
  { date: "30th", month: "Sep", title: "Income Tax Return (ITR)", urgency: "critical" },
  { date: "30th", month: "Oct", title: "AOC-4 (ROC Annual Filing)", urgency: "critical" },
];

export default function ComplianceCalendar() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
              Never miss another deadline or pay a late fine again.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Keeping track of changing due dates across GST, Income Tax, and ROC is exhausting. Let our automated calendars and dedicated accountants ensure you are always 100% compliant.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                { label: "Zero Late Fees", desc: "We file days ahead of the deadline." },
                { label: "Proactive Alerts", desc: "You get notified only when we need your approval." },
                { label: "Penalty Guarantees", desc: "If we miss a deadline we promised, we pay the fine." }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1 w-2 h-2 bg-olive-500 rounded-full mr-3 border border-olive-200 shadow-sm shrink-0"></div>
                  <div>
                    <span className="font-bold text-gray-900 mr-2">{item.label}:</span>
                    <span className="text-gray-600">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-olive-50 rounded-2xl p-8 border border-olive-100 shadow-sm">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-olive-200">
                <CalendarIcon className="w-6 h-6 text-olive-700" />
                <h3 className="text-xl font-bold text-olive-900">Upcoming Due Dates</h3>
              </div>
              <div className="space-y-4">
                {deadlines.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-olive-100 text-olive-700 w-14 h-14 rounded-lg flex flex-col items-center justify-center font-bold">
                        <span className="text-lg leading-none">{item.date}</span>
                        <span className="text-[10px] uppercase tracking-wider">{item.month}</span>
                      </div>
                      <span className="font-medium text-gray-900">{item.title}</span>
                    </div>
                    {item.urgency === 'critical' && (
                       <span className="flex items-center text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">
                         <AlertCircle className="w-3 h-3 mr-1" /> Critical
                       </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
