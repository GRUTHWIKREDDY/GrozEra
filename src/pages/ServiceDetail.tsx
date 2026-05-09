import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Video, ChevronDown, ChevronUp, Shield, FileCheck, Award, Box } from 'lucide-react';
import Tooltip from '../components/Tooltip';
import { AnimatePresence, motion } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full justify-between items-center text-left focus:outline-none focus-visible:ring focus-visible:ring-olive-500 focus-visible:ring-opacity-75 rounded-lg"
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-olive-600 shrink-0 ml-4" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const serviceData: Record<string, any> = {
  'incorporation': {
    title: 'Incorporation Services',
    description: 'Transform your vision into a legally recognized entity with our streamlined incorporation services.',
    subServices: ['Private Limited Company', 'Limited Liability Partnership (LLP)', 'One Person Company (OPC)', 'Partnership Firm', 'Sole Proprietorship', 'Public Limited Company', 'Section 8 Company (NGO)', 'Nidhi Company', 'Producer Company', 'Trust Registration'],
    deliverables: ['Digital Signature Certificate (DSC)', 'Director Identification Number (DIN)', 'Certificate of Incorporation', 'Company PAN & TAN', 'Drafted MoA & AoA'],
    process: [
      { step: 'Digital Signature', desc: <>Acquiring <Tooltip text="DSC" definition="Digital Signature Certificate: Secure digital key issued by certifying authorities to validate identity." /> for directors/partners.</> },
      { step: 'Name Approval', desc: <>Filing and securing Name Approval via <Tooltip text="MCA" definition="Ministry of Corporate Affairs: Govt body regulating corporate affairs in India." /> portals.</> },
      { step: 'Drafting', desc: <>Drafting <Tooltip text="MoA" definition="Memorandum of Association: Documents company's constitution and scope of work." /> and <Tooltip text="AoA" definition="Articles of Association: Internal rules and regulations of the company." />.</> },
      { step: 'Certification', desc: 'Issuance of the final Certificate of Incorporation by the regulatory authority.' }
    ],
    faqs: [
      { q: "How long does incorporation take?", a: "Typically, it takes 7 to 15 working days, provided all your documentation is complete and name approval goes smoothly." },
      { q: "What documents do I need?", a: "You need PAN, Aadhaar, bank statements, passport size photos of directors, and a utility bill for the registered office address." },
      { q: "Is a physical office required?", a: "Yes, a registered office address is mandatory. However, a residential address can be used as a registered office." }
    ]
  },
  'trademark-ip': {
    title: 'Trademark & Intellectual Property Services',
    description: 'Secure your brand assets and technological innovations legally.',
    subServices: ['Trademark Registration', 'Trademark Assignment', 'Trademark Objection', 'Trademark Hearing', 'Copyright Registration', 'Patent Registration'],
    deliverables: ['TM Application Receipt (Use TM symbol)', 'Final Registration Certificate (Use ® symbol)', 'Drafted Legal Replies for Objections', 'Name & Logo Form Availability Report'],
    process: [
      { step: 'Availability Search', desc: <>Comprehensive trademark and <Tooltip text="IP" definition="Intellectual Property: Creations of the mind (inventions, literary/artistic works, names)." /> availability checks.</> },
      { step: 'Application Filing', desc: 'Precise drafting and filing of documentation with the IP authority.' },
      { step: 'Objection Handling', desc: <>Filing Form <Tooltip text="TM-O" definition="Trademark Objection form used to file a reply against objections raised by the registrar." />, drafting expert responses, and representing clients in hearings.</> },
      { step: 'Certification', desc: 'Final issuance of Trademark or Patent certification.' }
    ],
    faqs: [
      { q: "Can I use the TM symbol right away?", a: "Yes, you can use the 'TM' symbol as soon as you file the trademark application and receive an acknowledgment number." },
      { q: "How long is a trademark valid?", a: "A registered trademark is valid for 10 years, after which it can be renewed indefinitely for subsequent 10-year periods." }
    ]
  },
  'tax': {
    title: 'Tax Services',
    description: 'End-to-end tax lifecycle management ensuring total fiscal compliance.',
    subServices: ['GST Registration', 'GST Filing', 'LUT Filing', 'E-Way Bill Setup', 'Income Tax Filing', 'TDS Return Filing', 'Advance Tax Payment', 'Income Tax Notice Handling', 'Tax Consultation', 'PAN Card Services'],
    deliverables: ['GSTIN Registration Certificate', 'Filed GST & ITR Acknowledgements', 'Export Letter of Undertaking (LUT)', 'Monthly Compliance Status Report'],
    process: [
      { step: 'Registration (TRN)', desc: <>Generating a <Tooltip text="TRN" definition="Temporary Reference Number: Generated during initial GST registration phase." /> and submitting core documents.</> },
      { step: 'Verification', desc: 'Aadhaar authentication and jurisdiction verification.' },
      { step: 'GSTIN Issuance', desc: <>Obtaining your <Tooltip text="GSTIN" definition="Goods and Services Tax Identification Number: 15-digit unique code assigned to GST registered taxpayers." /> and implementing regular return schedules.</> },
      { step: 'Ongoing Advisory', desc: 'Continuous consultation on tax planning and notice resolutions.' }
    ],
    faqs: [
      { q: "Is GST registration mandatory for startups?", a: "It is mandatory if your turnover exceeds ₹40 Lakhs (₹20 Lakhs for service providers and special category states), or if you make inter-state supplies or sell on e-commerce platforms." },
      { q: "What happens if I miss a GST return deadline?", a: "Late filing attracts a penalty of ₹50 per day of delay (₹20 for nil returns), along with 18% per annum interest on the tax amount." }
    ]
  },
  'iso-certification': {
    title: 'ISO Certification Services',
    description: 'Demonstrate operational excellence through globally recognized ISO standards.',
    subServices: ['ISO 9001 (Quality Management)', 'ISO 14001 (Environmental)', 'ISO 45001 (Health & Safety)', 'ISO 22000 (Food Safety)', 'ISO 27001 (InfoSec)', 'ISO 13485 (Medical Devices)'],
    deliverables: ['Globally Recognized ISO Certificate', 'Standard Operating Procedures (SOP) Manuals', 'Internal Audit Readiness Report', 'Compliance Gap Analysis'],
    process: [
      { step: 'Gap Analysis', desc: 'Evaluating current systems against ISO standard requirements.' },
      { step: 'Documentation', desc: 'Developing standardized manuals, procedures, and policies.' },
      { step: 'Implementation', desc: 'Training staff and rolling out compliance processes.' },
      { step: 'Audit & Certification', desc: 'Facilitating internal and final certification audits.' }
    ],
    faqs: [
      { q: "Which ISO certification do I need first?", a: "ISO 9001 (Quality Management) is generally the baseline certification recommended for most startups to build foundational operational trust." },
      { q: "How much does ISO certification cost?", a: "Costs vary depending on company size, complexity, and the specific ISO standard. Contact us for a precise quote." }
    ]
  },
  'video-production': {
    title: 'Video Production Services',
    description: 'Captivating visual storytelling to accelerate your marketing footprint.',
    subServices: ['Advertisement Video Shooting', 'Product Shoot', 'Promotional Videos', 'Social Media Reels', 'Corporate Video Production', 'Short Film / Brand Story'],
    deliverables: ['High-Def Master Video File (4K/1080p)', 'Optimized Cut-Downs for Social Media (Reels/Shorts)', 'Raw Footage (Optional as per contract)', 'Custom Thumbnails'],
    process: [
      { step: 'Pre-production', desc: 'Ideation, scriptwriting, storyboarding, and resource planning.' },
      { step: 'Production', desc: 'Professional on-location or studio filming with high-end equipment.' },
      { step: 'Post-production', desc: 'Video editing, color grading, sound design, and formatting.' },
      { step: 'Distribution Strategy', desc: 'Optimizing the final assets for target platforms.' }
    ],
    faqs: [
      { q: "Do you provide scriptwriting?", a: "Yes, our pre-production services include creative ideation, scriptwriting, and detailed storyboarding." },
      { q: "What is the typical turnaround time?", a: "Depending on the complexity, a standard promotional video takes 2 to 4 weeks from concept to final delivery." }
    ],
    showDemo: true
  },
  'compliance': {
    title: 'Compliance Services',
    description: 'Maintain corporate good-standing through meticulous record-keeping and filings.',
    subServices: ['LLP Annual Package (Form 11, 8, ITR-5)', 'Company Annual Package (AOC-4, MGT-7)', 'Change in Company Name / Directors', 'Change in Registered Office / Share Capital', 'Allotment / Transfer of Shares', 'Conversion of Proprietorship/LLP/Partnership to Pvt Ltd', 'Company Strike Off / Business Closure'],
    deliverables: ['Filed AOC-4 & MGT-7 Receipts', 'Drafted Board Resolutions & Minutes', 'Updated Statutory Registers', 'ROC Challans & Confirmations'],
    process: [
      { step: 'Audit Assessment', desc: 'Reviewing statutory requirements applicable to your entity type.' },
      { step: 'Documentation Drafting', desc: 'Preparing meeting minutes, resolutions, and structural agreements (e.g., slump sale).' },
      { step: 'Statutory Filing', desc: <>Submitting accurately drafted forms to <Tooltip text="RoC" definition="Registrar of Companies: Office under MCA dealing with administration of Companies Act." /> / MCA within deadlines.</> },
      { step: 'Confirmation', desc: 'Securing official approval for structure updates or closures.' }
    ],
    faqs: [
      { q: "What is the penalty for non-compliance?", a: "Failure to file annual forms like AOC-4 and MGT-7 can lead to hefty daily fines (typically ₹100/day) and potential director disqualification." },
      { q: "Are compliance filings required even if my company had zero revenue?", a: "Yes, 'Nil' returns and standard statutory filings are mandatory to keep your company status active, even without revenue." }
    ]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? serviceData[serviceId] : null;

  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  if (!service) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Service not found</h2>
        <Link to="/services" className="text-olive-600 hover:underline">Return to Services</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-olive-900 py-16 lg:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-olive-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <h1 className="text-4xl font-serif font-bold sm:text-5xl mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-olive-100 max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">
          <div className="lg:col-span-3 space-y-16">
            {/* Sub Services */}
            <section id="overview" className="scroll-section scroll-m-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">What We Cover</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {service.subServices.map((sub: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-olive-500 mr-3 shrink-0" />
                    <span className="text-gray-700 font-medium">{sub}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Deliverables Stack */}
            <section id="deliverables" className="scroll-section scroll-m-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">What's in the Box?</h2>
              <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Box className="w-48 h-48" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">Your Specific Deliverables:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                  {service.deliverables.map((item: string, i: number) => (
                    <li key={i} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-olive-100 text-olive-600 flex items-center justify-center mr-4 shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-medium text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Process */}
            <section id="process" className="scroll-section scroll-m-24">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Our Process</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {service.process.map((proc: any, i: number) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-olive-100 text-olive-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{proc.step}</h3>
                      <p className="text-gray-600">{proc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs Accordion */}
            {service.faqs && service.faqs.length > 0 && (
              <section id="faqs" className="scroll-section scroll-m-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Frequently Asked Questions</h2>
                <div className="space-y-2">
                  {service.faqs.map((faq: any, i: number) => (
                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              </section>
            )}

            {/* Demo Reel Placeholder */}
            {service.showDemo && (
              <section className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Demo Reel</h2>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-medium overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                     <span className="bg-white/90 px-6 py-3 rounded-full shadow-sm text-gray-800 flex items-center gap-2">
                       <Video className="w-5 h-5"/> Placeholder: Brand Story Video
                     </span>
                  </div>
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              
              {/* Scroll Spy Nav */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hidden lg:block">
                 <h4 className="font-bold text-gray-900 mb-4 px-2 tracking-wide uppercase text-sm">Contents</h4>
                 <ul className="space-y-1">
                    {[
                      { id: 'overview', label: 'Overview' },
                      { id: 'deliverables', label: 'Deliverables' },
                      { id: 'process', label: 'Process' },
                      ...(service.faqs ? [{ id: 'faqs', label: 'FAQs' }] : [])
                    ].map((item) => (
                       <li key={item.id}>
                          <button
                             onClick={() => scrollTo(item.id)}
                             className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                                activeSection === item.id 
                                ? 'bg-olive-50 text-olive-700' 
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                             }`}
                          >
                             {item.label}
                          </button>
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-olive-50 rounded-2xl p-8 border border-olive-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Journey</h3>
                <p className="text-gray-600 mb-8">
                  Ready to proceed with {service.title}? Our experts are here to provide a customized solution.
                </p>
                <Link
                  to="/contact"
                  className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-olive-700 hover:bg-olive-800 transition-colors"
                >
                  Request a Consultation
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-olive-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight">Penalty-Free Guarantee</h4>
                    <p className="text-sm text-gray-500">We pay any fines caused by our errors.</p>
                  </div>
                </div>
                <div className="border-t border-gray-100"></div>
                <div className="flex items-center gap-3">
                  <FileCheck className="w-8 h-8 text-olive-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight">100% Error-Free Filing</h4>
                    <p className="text-sm text-gray-500">Triple-checked by senior CAs and CSs.</p>
                  </div>
                </div>
                <div className="border-t border-gray-100"></div>
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-olive-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 leading-tight">MCA & ROC Compliant</h4>
                    <p className="text-sm text-gray-500">Safe, secure, and approved processes.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
