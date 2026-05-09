import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                GrozEra
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Business Development & Startup Consultancy Services empowering modern entrepreneurs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-100 mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/incorporation" className="text-gray-400 hover:text-olive-400 transition-colors">
                  Incorporation Services
                </Link>
              </li>
              <li>
                <Link to="/services/trademark-ip" className="text-gray-400 hover:text-olive-400 transition-colors">
                  Trademark & IP
                </Link>
              </li>
              <li>
                <Link to="/services/tax" className="text-gray-400 hover:text-olive-400 transition-colors">
                  Tax Services
                </Link>
              </li>
              <li>
                <Link to="/services/iso-certification" className="text-gray-400 hover:text-olive-400 transition-colors">
                  ISO Certification
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-100 mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-olive-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-olive-400 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-olive-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-olive-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-100 mb-4">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-olive-500 shrink-0" />
                <span>123 Startup Avenue,<br />Business District, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-olive-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-olive-500 shrink-0" />
                <span>contact@grozera.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GrozEra Business Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/legal/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/legal/terms-and-conditions" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
            <Link to="/legal/cookie-policy" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
