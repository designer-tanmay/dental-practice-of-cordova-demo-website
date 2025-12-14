import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4">Patient Stories</h2>
          <p className="text-teal-100">Why our neighbors in Cordova choose us.</p>
        </div>

        <div 
          className="relative min-h-[300px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {TESTIMONIALS.map((t, index) => (
            <div
              key={t.id}
              className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform ${
                index === activeIndex 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
              }`}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
                <Quote className="w-12 h-12 text-teal-400 mb-6 opacity-50" />
                <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <span className="text-sm text-teal-200">{t.date}</span>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
