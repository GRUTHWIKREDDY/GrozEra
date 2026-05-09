import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building, ShieldCheck, FileSpreadsheet, Award, Video, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const megaMenuServices = [
  { name: 'Incorporation Services', path: '/services/incorporation', icon: Building, desc: 'Pvt Ltd, LLP, OPC setup' },
  { name: 'Trademark & IP', path: '/services/trademark-ip', icon: ShieldCheck, desc: 'Brand & asset protection' },
  { name: 'Tax Services', path: '/services/tax', icon: FileSpreadsheet, desc: 'GST & Income Tax filing' },
  { name: 'ISO Certification', path: '/services/iso-certification', icon: Award, desc: 'Global quality standards' },
  { name: 'Video Production', path: '/services/video-production', icon: Video, desc: 'Marketing & brand reels' },
  { name: 'Compliance Services', path: '/services/compliance', icon: FileCheck, desc: 'Annual ROC filings' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
  ];
  
  const rightLinks = [
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-olive-800">
                GrozEra
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-olive-500 relative ${
                  location.pathname === link.path ? 'text-olive-600' : 'text-gray-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-olive-500 rounded-full"
                  />
                )}
              </Link>
            ))}

            {/* Mega Menu Trigger */}
            <div 
              className="relative py-8"
              onMouseEnter={() => setShowMegaMenu(true)}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-olive-500 ${
                  location.pathname.startsWith('/services') ? 'text-olive-600' : 'text-gray-600'
                }`}
                onClick={() => window.location.href = '/services'}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showMegaMenu ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {showMegaMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[600px] bg-white border border-gray-100 shadow-xl rounded-xl p-6 grid grid-cols-2 gap-4"
                  >
                    {megaMenuServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link 
                          key={service.name} 
                          to={service.path}
                          onClick={() => setShowMegaMenu(false)}
                          className="flex items-start gap-4 p-3 rounded-lg hover:bg-olive-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-md bg-olive-100 flex items-center justify-center text-olive-600 group-hover:bg-olive-200 shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-olive-700">{service.name}</div>
                            <div className="text-xs text-gray-500 mt-1">{service.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                    <div className="col-span-2 border-t border-gray-100 mt-2 pt-4">
                       <Link to="/services" className="text-sm font-medium text-olive-600 hover:text-olive-700 flex items-center justify-center w-full" onClick={() => setShowMegaMenu(false)}>
                         View All Services &rarr;
                       </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {rightLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-olive-500 relative ${
                  location.pathname === link.path ? 'text-olive-600' : 'text-gray-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-olive-500 rounded-full"
                  />
                )}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-olive-700 text-white text-sm font-medium rounded-md hover:bg-olive-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2"
            >
              Get a Custom Quote
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[...links, {name: 'Services', path: '/services'}, ...rightLinks].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-olive-50 text-olive-700'
                      : 'text-gray-700 hover:text-olive-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-3 py-3 mt-4 bg-olive-700 text-white rounded-md text-base font-medium hover:bg-olive-800"
              >
                Get a Custom Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
