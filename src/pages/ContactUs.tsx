import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Plus, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [fileName, setFileName] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: 'General Inquiry',
    message: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, val]) => submitData.append(key, val));
    const fileInput = document.getElementById('document') as HTMLInputElement;
    if (fileInput?.files?.[0]) {
      submitData.append('document', fileInput.files[0]);
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: submitData,
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ service: 'General Inquiry', message: '', firstName: '', lastName: '', email: '', phone: '' });
        setFileName('');
        setStep(1);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
        {/* Progress Bar */}
        <div className="mb-8">
           <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-gray-500">Step {step} of 3</span>
              <span className="text-sm font-bold text-olive-600">
                {step === 1 ? 'Service Needed' : step === 2 ? 'Your Requirements' : 'Your Details'}
              </span>
           </div>
           <div className="h-2 bg-gray-200 rounded-full overflow-hidden flex">
              <motion.div 
                 initial={{ width: '33%' }}
                 animate={{ width: `${(step / 3) * 100}%` }}
                 className="h-full bg-olive-600 rounded-full"
              />
           </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 min-h-[500px] flex flex-col relative">
          {submitStatus === 'success' && (
            <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Send className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h3>
              <p className="text-gray-600 mb-8 max-w-md">We've received your details. One of our experts will be in touch with you shortly to discuss your requirements.</p>
              <button 
                onClick={() => setSubmitStatus(null)} 
                className="px-8 py-3 bg-olive-700 text-white rounded-xl font-bold hover:bg-olive-800 transition"
              >
                Start New Request
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col pt-12 pb-6 px-8 sm:px-16" id="multi-step-form">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col justify-center"
                >
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">What service are you looking for?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                    {[
                      'General Inquiry', 
                      'Incorporation Services', 
                      'Trademark & IP', 
                      'Tax Services', 
                      'ISO Certification', 
                      'Compliance Services'
                    ].map(opt => (
                      <label 
                        key={opt}
                        className={`cursor-pointer p-4 rounded-xl border-2 transition-all text-center font-medium ${
                           formData.service === opt 
                             ? 'border-olive-600 bg-olive-50 text-olive-800 shadow-md transform scale-[1.02]' 
                             : 'border-gray-100 bg-white text-gray-600 hover:border-olive-200 hover:bg-gray-50'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="service" 
                          value={opt} 
                          className="hidden" 
                          checked={formData.service === opt}
                          onChange={handleInputChange} 
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full"
                >
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 text-center">Tell us more about your needs.</h3>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Your Message / Questions</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      rows={5} 
                      placeholder="E.g., I'm looking to incorporate a Private Limited company for my tech startup..."
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-gray-300 shadow-sm focus:border-olive-500 focus:ring-olive-500 p-4 border bg-gray-50"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Have documents to share? (Optional)</label>
                    <label htmlFor="document" className="flex justify-center w-full p-6 transition bg-gray-50 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer hover:border-olive-400 group relative">
                        <div className="absolute inset-0 bg-olive-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
                        <span className="flex items-center space-x-3 relative z-10">
                            <div className="p-3 bg-white shadow-sm rounded-full"><Plus className="w-5 h-5 text-olive-600" /></div>
                            <span className="font-medium text-gray-700">
                                {fileName ? <span className="text-olive-700">{fileName}</span> : 'Click to attach files'}
                            </span>
                        </span>
                        <input type="file" name="document" id="document" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} />
                    </label>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full"
                >
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Almost done! Where should we reach you?</h3>
                  
                  {submitStatus === 'error' && (
                    <div className="mb-6 bg-red-50 text-red-800 p-4 rounded-xl text-sm border border-red-100 flex items-center gap-3">
                      <div className="p-1 bg-red-100 rounded-full"><Plus className="w-4 h-4 rotate-45 text-red-600" /></div>
                      There was an error sending your message. Please try again later.
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name <span className="text-red-500">*</span></label>
                        <input type="text" name="firstName" id="firstName" required value={formData.firstName} onChange={handleInputChange} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-olive-500 focus:ring-olive-500 p-4 border bg-gray-50 bg-white" placeholder="John" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                        <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-olive-500 focus:ring-olive-500 p-4 border bg-gray-50 bg-white" placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-olive-500 focus:ring-olive-500 p-4 border bg-gray-50 bg-white" placeholder="john@company.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-olive-500 focus:ring-olive-500 p-4 border bg-gray-50 bg-white" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-6">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="flex items-center gap-2 px-6 py-3 text-gray-500 font-bold hover:bg-gray-100 rounded-xl transition"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div></div>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-8 py-3.5 bg-olive-700 text-white rounded-xl font-bold hover:bg-olive-800 disabled:opacity-70 transition shadow-lg shadow-olive-700/20"
              >
                {step < 3 ? (
                   <>Next Step <ArrowRight className="w-4 h-4" /></>
                ) : (
                   isSubmitting ? 'Sending Request...' : <>Complete Request <Send className="w-4 h-4 ml-1" /></>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
