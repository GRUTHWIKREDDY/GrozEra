import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building, ShieldCheck, FileSpreadsheet, Award, Video, FileCheck, Star, Users, Briefcase, TrendingUp, ChevronLeft, ChevronRight, Lock, Shield, FileText, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ServiceQuiz from '../components/ServiceQuiz';
import HealthAudit from '../components/HealthAudit';
import RecentMilestonesTicker from '../components/RecentMilestonesTicker';
import ComparisonTable from '../components/ComparisonTable';
import ComplianceCalendar from '../components/ComplianceCalendar';
import JargonFlipCards from '../components/JargonFlipCards';
import ExplainerVideoModal from '../components/ExplainerVideoModal';
import IndustryPlaybooks from '../components/IndustryPlaybooks';
import EntityComparison from '../components/EntityComparison';
import BentoBenefits from '../components/BentoBenefits';
import PricingCalculator from '../components/PricingCalculator';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const services = [
    {
      title: 'Incorporation Services',
      description: 'Private Limited, LLP, OPC, Section 8, and more.',
      icon: <Building className="w-8 h-8 text-olive-600" />,
      link: '/services/incorporation',
    },
    {
      title: 'Trademark & IP',
      description: 'Protect your brand with Trademark and Copyright registration.',
      icon: <ShieldCheck className="w-8 h-8 text-olive-600" />,
      link: '/services/trademark-ip',
    },
    {
      title: 'Tax Services',
      description: 'Comprehensive GST and Income Tax solutions for your business.',
      icon: <FileSpreadsheet className="w-8 h-8 text-olive-600" />,
      link: '/services/tax',
    },
    {
      title: 'ISO Certification',
      description: 'Global standards compliance including ISO 9001, 14001, and 27001.',
      icon: <Award className="w-8 h-8 text-olive-600" />,
      link: '/services/iso-certification',
    },
    {
      title: 'Video Production',
      description: 'Corporate videos, social reels, and brand storytelling.',
      icon: <Video className="w-8 h-8 text-olive-600" />,
      link: '/services/video-production',
    },
    {
      title: 'Compliance Services',
      description: 'Annual filings, RoC updates, and company conversions.',
      icon: <FileCheck className="w-8 h-8 text-olive-600" />,
      link: '/services/compliance',
    },
  ];

  const stats = [
    { label: 'Startups Registered', value: '500+', icon: <Briefcase className="w-6 h-6" /> },
    { label: 'Happy Clients', value: '1,200+', icon: <Users className="w-6 h-6" /> },
    { label: 'Compliance Rate', value: '99.9%', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Years Experience', value: '10+', icon: <Award className="w-6 h-6" /> },
  ];

  const testimonials = [
    {
      quote: "GrozEra made our company registration a breeze. We had our incorporation certificate within days, and their IP team subsequently helped us secure our trademark flawlessly.",
      author: "Rahul Sharma",
      role: "Founder, TechLaunch Solutions",
      metric: "Incorporated in 7 Days"
    },
    {
      quote: "The tax team is phenomenal. They set up our GST, handled all filings, and gave us the strategic advice we needed to grow our e-commerce brand safely.",
      author: "Priya Desai",
      role: "CEO, Nexa Retail",
      metric: "Saved 20% in Tax Penalties"
    },
    {
      quote: "Highly professional video production. The promotional reel they created for our app launch resulted in a massive surge in early sign-ups.",
      author: "Amit Patel",
      role: "Marketing Director, AppWorks",
      metric: "40% Increase in Conversions"
    }
  ];

  const roadmapSteps = [
    { number: 'Month 1', title: 'Foundation', desc: 'Company incorporation, MoA/AoA drafting, and obtaining PAN/TAN and DSC.' },
    { number: 'Month 3', title: 'Tax & Compliance Setup', desc: 'GST registration, opening bank accounts, and setting up payroll/PF if applicable.' },
    { number: 'Month 6', title: 'Brand Protection', desc: 'Filing trademark applications to secure your logo and brand identity.' },
    { number: 'Month 12', title: 'Annual Audit', desc: 'Filing AOC-4, MGT-7, income tax returns, and conducting board meetings.' },
    { number: 'Year 2+', title: 'Scale & Certify', desc: 'ISO certifications, funding compliance, and expanding to new markets.' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col">
      <ExplainerVideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <RecentMilestonesTicker />
      
      {/* Hero Section */}
      <section className="relative bg-olive-50 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-olive-900 leading-tight mb-6"
            >
              Build Your Startup’s Foundation with Confidence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              GrozEra Business Solutions provides end-to-end consulting, from incorporation to compliance. We empower entrepreneurs and MSMEs to scale fearlessly.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-olive-700 hover:bg-olive-800 transition-colors"
              >
                Get a Custom Quote
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex justify-center items-center px-8 py-3.5 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <Play className="w-5 h-5 mr-2 text-olive-600 fill-current" />
                Watch 60s Explainer
              </button>
            </motion.div>
          </div>
        </div>
        {/* Abstract shape */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 transform translate-x-1/3 -translate-y-1/4 pointer-events-none">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-olive-200 fill-current">
              <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,96.5,-2.9C96.2,12.2,89.5,26.9,80.1,39.8C70.6,52.7,58.3,63.9,44.4,71.9C30.5,79.9,15.2,84.7,0.1,84.5C-15,84.3,-30.1,79.1,-43.3,70.6C-56.5,62.1,-67.9,50.3,-75.4,36.5C-82.9,22.7,-86.6,6.9,-84.9,-8.5C-83.2,-23.9,-76.1,-38.9,-66,-49.9C-55.9,-60.9,-42.8,-67.9,-29.4,-74.2C-16,-80.5,-2.3,-86.1,11.2,-85.7C24.7,-85.3,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>
      </section>

      {/* Trust Badges Banner */}
      <section className="bg-white py-6 border-b border-gray-100 shadow-sm relative z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
               <div className="flex items-center gap-2"><Lock className="w-5 h-5 text-olive-600" /> <span className="font-bold text-gray-800">256-bit SSL Secured</span></div>
               <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-olive-600" /> <span className="font-bold text-gray-800">100% Data Privacy</span></div>
               <div className="flex items-center gap-2"><Award className="w-5 h-5 text-olive-600" /> <span className="font-bold text-gray-800">ISO 9001:2015 Certified</span></div>
               <div className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-olive-600" /> <span className="font-bold text-gray-800">Startup India Aligned</span></div>
               <div className="flex items-center gap-2"><FileText className="w-5 h-5 text-olive-600" /> <span className="font-bold text-gray-800">MCA Compliant</span></div>
            </div>
         </div>
      </section>

      <BentoBenefits />

      {/* Service Quiz & Health Audit */}
      <section id="service-quiz" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Not Sure Where to Start?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Answer 3 quick questions and we'll recommend the exact compliance or setup service your business needs right now.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
             <ServiceQuiz />
             <HealthAudit />
          </div>
        </div>
      </section>

      {/* How We Work Roadmap */}
      <section className="py-24 bg-olive-900 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Road to Growth</h2>
              <p className="text-lg text-olive-200 max-w-2xl mx-auto">
                From Day 1 to Series A. We’re the partner that grows with you.
              </p>
            </div>
            
            <div className="relative">
               {/* Line connecting steps (desktop) */}
               <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-1 -translate-y-1/2 z-0">
                  <svg width="100%" height="8px" className="absolute top-0 left-0">
                     <motion.line
                        x1="0"
                        y1="4"
                        x2="100%"
                        y2="4"
                        stroke="#658354"
                        strokeWidth="4"
                        strokeDasharray="100%"
                        initial={{ strokeDashoffset: "100%" }}
                        whileInView={{ strokeDashoffset: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                     />
                  </svg>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                  {roadmapSteps.map((step, idx) => (
                     <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="text-center relative pt-8 md:pt-0"
                     >
                        <div className="w-16 h-16 bg-olive-700 text-white rounded-full flex items-center justify-center text-xl font-bold font-serif mx-auto mb-6 shadow-xl border-4 border-olive-900 relative z-20">
                           {step.number}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-sm text-olive-300 leading-relaxed px-2">
                           {step.desc}
                        </p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      <ComparisonTable />
      <EntityComparison />
      <IndustryPlaybooks />
      <PricingCalculator />
      <ComplianceCalendar />

      {/* Services Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to launch, manage, and scale your business securely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to={service.link} key={service.title} className="group outline-none">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100 h-full flex flex-col relative overflow-hidden"
                >
                  <div className="bg-olive-50 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:bg-olive-100 transition-colors relative z-10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-olive-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow relative z-10">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center text-olive-700 font-bold relative z-10">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Document Stamp Animation */}
                  <div className="absolute -bottom-10 right-4 opacity-0 group-hover:opacity-100 group-hover:bottom-4 transition-all duration-500 ease-out z-0 pointer-events-none transform rotate-12 scale-150">
                     <div className="border-4 border-green-500/20 text-green-500/20 rounded-lg p-2 font-black text-2xl uppercase font-serif tracking-widest backdrop-blur-sm">
                        APPROVED
                     </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JargonFlipCards />

      {/* Client Success Stories Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from founders who built their businesses with us.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden px-4 py-8">
               <AnimatePresence mode="wait">
                  <motion.div
                     key={currentTestimonial}
                     initial={{ opacity: 0, x: 50 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -50 }}
                     transition={{ duration: 0.4 }}
                     className="bg-olive-50 rounded-3xl p-8 md:p-12 border border-olive-100 shadow-sm relative text-center"
                  >
                     <div className="inline-flex text-yellow-400 mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
                     </div>
                     <p className="text-xl md:text-2xl text-gray-800 font-serif italic mb-8 leading-relaxed max-w-3xl mx-auto">
                        "{testimonials[currentTestimonial].quote}"
                     </p>
                     
                     <div className="inline-block bg-olive-700 text-white font-medium px-4 py-1.5 rounded-full text-sm mb-6 shadow-sm">
                        {testimonials[currentTestimonial].metric}
                     </div>

                     <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</h4>
                        <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
                     </div>
                  </motion.div>
               </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-6">
               <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-olive-50 hover:text-olive-700 hover:border-olive-200 transition-colors"
                  aria-label="Previous testimonial"
               >
                  <ChevronLeft className="w-6 h-6" />
               </button>
               <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-olive-50 hover:text-olive-700 hover:border-olive-200 transition-colors"
                  aria-label="Next testimonial"
               >
                  <ChevronRight className="w-6 h-6" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-olive-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to make it official?</h2>
            <p className="text-xl text-olive-100 mb-10 leading-relaxed">
               Book your free consultation today and let our experts handle the paperwork while you focus on growth.
            </p>
            <Link
               to="/contact"
               className="inline-flex justify-center items-center px-10 py-4 border border-transparent text-lg font-bold rounded-full shadow-lg text-olive-900 bg-white hover:bg-gray-50 transition-transform hover:scale-105"
            >
               Book Free Consultation
            </Link>
         </div>
      </section>
    </div>
  );
}
