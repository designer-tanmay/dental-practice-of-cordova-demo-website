import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Cordova<span className="text-teal-400">Dental</span></h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Providing compassionate, family-centered dental care to the Cordova community since 2003. Your smile is our top priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-slate-200">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Appointments</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-slate-200">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Cosmetic Dentistry</li>
              <li>Dental Implants</li>
              <li>Preventive Care</li>
              <li>Emergency Dentistry</li>
              <li>Sedation Options</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
             <h4 className="font-bold text-lg mb-4 text-slate-200">Office Hours</h4>
             <ul className="space-y-2 text-sm text-slate-400">
               <li className="flex justify-between"><span>Mon - Thu</span> <span>8am - 5pm</span></li>
               <li className="flex justify-between"><span>Friday</span> <span>8am - 1pm</span></li>
               <li className="flex justify-between"><span>Weekend</span> <span>Closed</span></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dental Practice of Cordova. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span>Design & Developed by Tanmay & Koushik</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;