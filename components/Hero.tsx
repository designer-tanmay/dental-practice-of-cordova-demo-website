import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{
          // Smiling female with teeth visible
          backgroundImage: 'url("https://images.unsplash.com/photo-1758876017874-1332333026b2?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0', 
        }}
      >
        {/* Overlay - Lighter on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl text-left">
          <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-teal-500/20 border border-teal-400/30 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
            <span className="text-teal-50 font-medium text-sm tracking-wider uppercase">Serving Cordova Since 2003</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 drop-shadow-2xl">
            Your Trusted Family <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-100">Dentistry</span> in Cordova.
          </h1>
          
          <p className="text-lg sm:text-2xl text-slate-100 mb-10 font-light leading-relaxed max-w-lg drop-shadow-md">
            Gentle, comprehensive care for all ages. From routine cleanings to advanced restorative procedures, we prioritize your comfort and smile.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to="/contact"
              className="px-10 py-5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-teal-500/40 hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              Schedule Appointment
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white border border-white/30 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center shadow-lg"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-[30px] h-[50px] rounded-3xl border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
