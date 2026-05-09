import { Link } from 'react-router-dom';
import { ArrowRight, Building, ShieldCheck, FileSpreadsheet, Award, Video, FileCheck } from 'lucide-react';

const servicesList = [
  {
    id: 'incorporation',
    title: 'Incorporation Services',
    description: 'Register your Private Limited Company, LLP, OPC, Partnership, or NGO securely and rapidly.',
    icon: <Building className="w-8 h-8 text-olive-600" />,
  },
  {
    id: 'trademark-ip',
    title: 'Trademark & Intellectual Property',
    description: 'Safeguard your brand identity and innovations with Trademark, Copyright, and Patent registrations.',
    icon: <ShieldCheck className="w-8 h-8 text-olive-600" />,
  },
  {
    id: 'tax',
    title: 'Tax Services',
    description: 'Stay compliant with seamless GST registration, returns, Income Tax filing, and TDS handling.',
    icon: <FileSpreadsheet className="w-8 h-8 text-olive-600" />,
  },
  {
    id: 'iso-certification',
    title: 'ISO Certification Services',
    description: 'Gain global trust with ISO 9001, 14001, 45001, 27001, and other leading standards.',
    icon: <Award className="w-8 h-8 text-olive-600" />,
  },
  {
    id: 'video-production',
    title: 'Video Production Services',
    description: 'Engage your audience with professional ad shoots, product videos, and social media reels.',
    icon: <Video className="w-8 h-8 text-olive-600" />,
  },
  {
    id: 'compliance',
    title: 'Compliance Services',
    description: 'Navigate annual ROC filings, record updations, and business conversions effortlessly.',
    icon: <FileCheck className="w-8 h-8 text-olive-600" />,
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-olive-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 sm:text-5xl mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive business development solutions tailored for startups and expanding enterprises.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesList.map((service) => (
            <div key={service.id} className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-olive-300 hover:shadow-xl transition-all duration-300">
              <div className="bg-olive-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <Link 
                to={`/services/${service.id}`} 
                className="inline-flex items-center text-olive-700 font-semibold hover:text-olive-800 transition-colors"
              >
                View Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
