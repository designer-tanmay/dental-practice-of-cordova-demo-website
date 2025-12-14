import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-teal-600 rounded-lg p-2 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className={`font-serif font-bold text-2xl tracking-wide ${scrolled ? 'text-slate-800' : 'text-slate-900'}`}>
              Cordova<span className="text-teal-600">Dental</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-base font-medium hover:text-teal-600 transition-colors relative group ${
                  scrolled ? 'text-slate-700' : 'text-slate-900'
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            ))}
            
            <div className="h-8 w-px bg-slate-300/50 mx-2"></div>

            <a
              href="tel:9017579596"
              className={`flex items-center space-x-2 transition-colors group ${scrolled ? 'text-slate-700' : 'text-slate-900'}`}
            >
              <div className="bg-teal-100 p-2 rounded-full group-hover:bg-teal-600 transition-colors">
                <Phone className="w-5 h-5 text-teal-600 group-hover:text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider font-semibold opacity-70">Call Us</span>
                <span className="font-bold text-lg leading-none">(901) 757-9596</span>
              </div>
            </a>

            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-teal-500/30 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a href="tel:9017579596" className={`flex items-center justify-center p-2 rounded-full ${scrolled ? 'bg-teal-50 text-teal-600' : 'bg-white/20 text-slate-900 backdrop-blur-md'}`}>
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 hover:text-teal-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[30rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-8 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-4 py-3 text-lg font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-slate-100 pt-6 mt-4 flex flex-col space-y-4">
             <a
              href="tel:9017579596"
              className="flex items-center justify-center space-x-3 text-slate-800 font-bold text-xl py-2 bg-slate-50 rounded-xl"
            >
              <Phone className="w-6 h-6 text-teal-600" />
              <span>(901) 757-9596</span>
            </a>
             <Link
              to="/contact"
              className="w-full text-center bg-teal-600 text-white px-5 py-4 rounded-xl font-bold text-lg shadow-md"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
