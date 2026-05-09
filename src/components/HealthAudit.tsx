import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, AlertTriangle, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const auditQuestions = [
  { q: "Have you secured your brand name with a registered Trademark?", icon: ShieldAlert },
  { q: "Are your co-founder agreements and MoA/AoA legally watertight?", icon: AlertTriangle },
  { q: "Have you filed your annual AOC-4 and MGT-7 forms to avoid daily penalties?", icon: AlertOctagon },
];

export default function HealthAudit() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (yes: boolean) => {
    setAnswers([...answers, yes]);
    if (currentQ < auditQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const riskLevel = answers.filter(a => !a).length;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-red-100 max-w-2xl mx-auto">
      <div className="bg-red-50 p-6 border-b border-red-100 text-center">
        <h3 className="text-2xl font-bold text-red-900 mb-2">Is your startup legally exposed?</h3>
        <p className="text-red-700">Take the 1-minute Risk Audit to find out.</p>
      </div>

      <div className="p-8">
        {!showResult ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  {(() => {
                    const Icon = auditQuestions[currentQ].icon;
                    return <Icon className="w-8 h-8" />;
                  })()}
                </div>
              </div>
              <h4 className="text-xl font-medium text-gray-900 mb-8 h-16 flex items-center justify-center">
                {auditQuestions[currentQ].q}
              </h4>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => handleAnswer(true)}
                  className="flex-1 max-w-[150px] py-3 rounded-lg border-2 border-olive-500 text-olive-700 font-bold hover:bg-olive-50 transition-colors"
                >
                  Yes, I have
                </button>
                <button 
                  onClick={() => handleAnswer(false)}
                  className="flex-1 max-w-[150px] py-3 rounded-lg border-2 border-red-500 text-red-700 font-bold hover:bg-red-50 transition-colors"
                >
                  No / Not Sure
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
            {riskLevel === 0 ? (
              <div>
                <CheckCircle2 className="w-16 h-16 text-olive-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-4">You are well-protected!</h4>
              </div>
            ) : (
              <div>
                <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 mb-4">High Risk of Penalties</h4>
              </div>
            )}
            <Link 
              to="/contact" 
              className="inline-flex justify-center items-center px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
            >
              Book a Free Risk Assessment
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
