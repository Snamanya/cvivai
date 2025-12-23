
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AIConcierge from './components/AIConcierge';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Menu from './pages/Menu';
import About from './pages/About';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer: React.FC = () => (
  <footer className="bg-stone-900 text-white py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif mb-6">AZURE HORIZON</h2>
          <p className="text-stone-400 max-w-sm mb-8">
            Experience the ultimate in coastal luxury and refined hospitality. Your sanctuary awaits at the edge of the world.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-stone-400 hover:text-white transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors"><i className="fa-brands fa-facebook-f text-xl"></i></a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors"><i className="fa-brands fa-pinterest-p text-xl"></i></a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 text-stone-500">Quick Links</h4>
          <ul className="space-y-4 text-sm text-stone-400">
            <li><a href="#" className="hover:text-white transition-colors">The Rooms</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Fine Dining</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Spa & Wellness</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gift Vouchers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest mb-6 text-stone-500">Contact</h4>
          <ul className="space-y-4 text-sm text-stone-400">
            <li>128 Ocean Boulevard,<br/>Serene Bay, CA 90210</li>
            <li>+1 (555) 012-3456</li>
            <li>concierge@azurehorizon.com</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-stone-500">
        <p>&copy; 2024 Azure Horizon Hotel Group. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <AIConcierge />
      </div>
    </Router>
  );
};

export default App;
