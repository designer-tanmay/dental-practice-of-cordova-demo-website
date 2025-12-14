import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { RevealOnScroll } from './ui/RevealOnScroll';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Comprehensive Dental Care</h2>
          <div className="w-24 h-1.5 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We use the latest technology to provide a full range of dental services, ensuring your smile stays healthy and beautiful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => {
            // Dynamic icon rendering
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

            return (
              <RevealOnScroll key={service.id} threshold={0.1}>
                <div className="h-full group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-60"></div>
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-4 left-6 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-7 h-7" />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-500 font-medium">
                          <Icons.CheckCircle2 className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <button className="w-full py-3 rounded-lg border-2 border-slate-100 text-slate-600 font-bold hover:border-teal-600 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md">
                        Learn More <Icons.ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
