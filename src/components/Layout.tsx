import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';
import { ScrollRestoration } from 'react-router-dom';
import ExitIntentPopup from './ExitIntentPopup';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-grow pb-16 md:pb-0"> {/* Padding bottom to prevent mobile CTA from overlapping content */}
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ExitIntentPopup />
      
      {/* Sticky Mobile CTA Bar */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 bg-white/70 backdrop-blur-lg border border-white/40 p-2 z-40 flex justify-between gap-2 shadow-2xl rounded-2xl">
        <a href="tel:+15551234567" className="flex-1 flex justify-center items-center gap-2 text-olive-800 bg-white/50 backdrop-blur-md py-3 rounded-xl font-bold text-sm shadow-sm">
          <PhoneCall className="w-4 h-4" /> Call Now
        </a>
        <Link to="/contact" className="flex-1 flex justify-center items-center bg-olive-700/90 backdrop-blur-md text-white py-3 rounded-xl font-bold text-sm shadow-sm hover:bg-olive-800">
          Get Quote
        </Link>
      </div>
    </div>
  );
}
