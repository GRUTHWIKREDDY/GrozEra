import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: "What stage is your business currently in?",
    options: [
      { text: "Just an Idea / Pre-revenue", score: { incorporation: 2, ip: 1 } },
      { text: "Operating as an unregistered founder", score: { incorporation: 3, tax: 1 } },
      { text: "Already registered, need to manage compliance", score: { compliance: 3, iso: 1 } },
      { text: "Scaling and building brand value", score: { ip: 3, video: 2 } }
    ]
  },
  {
    id: 2,
    question: "What is your most pressing concern right now?",
    options: [
      { text: "Protecting my company name/logo", score: { ip: 3 } },
      { text: "Limiting my personal liability", score: { incorporation: 3 } },
      { text: "Filing taxes and staying legally compliant", score: { tax: 3, compliance: 2 } },
      { text: "Getting certifications to pitch to enterprises", score: { iso: 3 } }
    ]
  },
  {
    id: 3,
    question: "How many founders/partners are involved?",
    options: [
      { text: "Just me (Solo founder)", score: { incorporation: 1 } }, // leans towards OPC or Sole Prop
      { text: "2-3 co-founders", score: { incorporation: 2 } }, // Private Limited / LLP
      { text: "4+ founders or seeking investors soon", score: { incorporation: 3, compliance: 1 } }
    ]
  }
];

export default function ServiceQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [email, setEmail] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (score: Record<string, number>) => {
    const newScores = { ...scores };
    Object.keys(score).forEach(key => {
      newScores[key] = (newScores[key] || 0) + score[key];
    });
    setScores(newScores);

    if (currentStep < questions.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getTopRecommendation = () => {
    let topService = '';
    let max = 0;
    Object.keys(scores).forEach(key => {
      if (scores[key] > max) {
        max = scores[key];
        topService = key;
      }
    });

    const recommendations: Record<string, { title: string, link: string }> = {
      incorporation: { title: "Incorporation Services (Pvt Ltd / LLP)", link: "/services/incorporation" },
      ip: { title: "Trademark & Intellectual Property", link: "/services/trademark-ip" },
      tax: { title: "Tax & GST Registration", link: "/services/tax" },
      compliance: { title: "Annual ROC Compliance", link: "/services/compliance" },
      iso: { title: "ISO Certification", link: "/services/iso-certification" },
      video: { title: "Video Production & Marketing", link: "/services/video-production" }
    };

    return recommendations[topService] || recommendations['incorporation'];
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({});
    setIsFinished(false);
    setShowResult(false);
    setEmail('');
  };

  return (
    <div className="bg-olive-50 rounded-2xl p-8 border border-olive-100 max-w-3xl mx-auto shadow-sm">
      <div className="mb-6 flex justify-between items-center border-b border-olive-200 pb-4">
        <h3 className="text-2xl font-serif font-bold text-gray-900">Find Your Service</h3>
        {!isFinished && (
          <div className="text-sm font-medium text-olive-600 bg-olive-100 px-3 py-1 rounded-full">
            Step {currentStep + 1} of {questions.length}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-xl font-medium text-gray-900 mb-6">
              {questions[currentStep].question}
            </h4>
            <div className="space-y-3">
              {questions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(option.score)}
                  className="w-full text-left p-4 rounded-xl border border-gray-200 bg-white hover:border-olive-500 hover:bg-olive-50 transition-all flex items-center justify-between group shadow-sm"
                >
                  <span className="text-gray-700 font-medium">{option.text}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-olive-600 transition-colors" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : !showResult ? (
          <motion.div
            key="email-capture"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-center">
              <CheckCircle2 className="w-12 h-12 text-olive-600 mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-gray-900 mb-2">We've found the perfect fit!</h4>
              <p className="text-gray-600 mb-6">Enter your email to reveal your recommended service plan and secure a free consultation.</p>
              
              <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-olive-500 text-gray-900 outline-none" 
                />
                <button type="submit" className="w-full bg-olive-700 text-white font-medium p-3 rounded-lg hover:bg-olive-800 transition-colors shadow-sm">
                  Show My Results
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h4 className="text-lg text-gray-500 font-medium mb-2">Top Recommendation</h4>
            <h3 className="text-3xl font-bold text-olive-900 mb-6 shadow-sm inline-block bg-white px-6 py-4 rounded-xl border border-olive-200">
              {getTopRecommendation().title}
            </h3>
            <p className="text-gray-700 mb-8 max-w-lg mx-auto">
              Based on your answers, this is the most critical step for your business right now. Our experts will follow up at <strong>{email}</strong> shortly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to={getTopRecommendation().link} 
                className="bg-olive-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-olive-800 transition-colors inline-block"
              >
                Learn More About This Service
              </Link>
              <button 
                onClick={resetQuiz}
                className="flex items-center justify-center gap-2 text-olive-700 font-medium px-6 py-3 rounded-lg border border-olive-300 hover:bg-olive-100 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Retake Quiz
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
