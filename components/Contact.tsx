import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                We are currently accepting new patients. Call us or fill out the form to schedule your appointment.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Visit Us</h3>
                  <p className="text-slate-600">800 Cordova Station Ave<br/>Cordova, TN 38018</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Call Us</h3>
                  <a href="tel:9017579596" className="text-slate-600 hover:text-teal-600 block">(901) 757-9596</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full text-teal-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Office Hours</h3>
                  <p className="text-slate-600 text-sm">
                    Mon - Thu: 8:00 AM - 5:00 PM<br/>
                    Fri: 8:00 AM - 1:00 PM<br/>
                    Sat - Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-xl overflow-hidden shadow-inner relative group">
                {/* Simulated Interactive Map */}
                <iframe 
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.6067713437295!2d-89.7785!3d35.1165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA2JzU5LjQiTiA4OcKwNDYnNDIuNiJX!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                    className="grayscale group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Request Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    placeholder="(901) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Reason for Visit</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none"
                  placeholder="I need a checkup..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || success}
                className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                  success 
                    ? 'bg-green-500 text-white' 
                    : 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-teal-500/30'
                }`}
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : success ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Request</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
