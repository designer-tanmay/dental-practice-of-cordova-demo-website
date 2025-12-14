import React, { useState, useEffect, useRef } from 'react';
import { STAFF } from '../constants';
import { RevealOnScroll } from './ui/RevealOnScroll';

const StatCounter: React.FC<{ end: number; label: string; suffix?: string }> = ({ end, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
          start += 1;
          setCount(start);
          if (start === end) clearInterval(timer);
        }, stepTime);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl font-bold text-teal-600 mb-2 font-serif">
        {count}{suffix}
      </div>
      <div className="text-slate-600 font-medium uppercase tracking-wide text-sm">{label}</div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-slate-600 leading-relaxed">
              At Dental Practice of Cordova, our mission is to provide trusted, gentle, and comprehensive dental care to families in our community. Since 2003, we have built our reputation on treating every patient like a member of our own family, ensuring a comfortable environment and exceptional results.
            </p>
          </div>
        </RevealOnScroll>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <StatCounter end={20} label="Years of Service" suffix="+" />
          <StatCounter end={150} label="5-Star Reviews" suffix="+" />
          <StatCounter end={32} label="Team Members" />
          <StatCounter end={5000} label="Smiles Brightened" suffix="+" />
        </div>

        {/* Team */}
        <RevealOnScroll>
          <div className="mb-12">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">Meet Our Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {STAFF.map((staff, idx) => (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-64 overflow-hidden relative">
                     <img 
                      src={staff.image} 
                      alt={staff.name} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-800 mb-1">{staff.name}</h4>
                    <p className="text-teal-600 font-medium text-sm mb-4">{staff.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{staff.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;
