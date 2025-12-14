import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Assistant from './components/Assistant';

// Scroll to top on route change wrapper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Page Components (compositions of smaller sections)
const HomePage: React.FC = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Testimonials />
    <FAQ />
    <Contact />
  </>
);

const AboutPage: React.FC = () => (
  <div className="pt-20">
    <About />
    <Testimonials />
  </div>
);

const ServicesPage: React.FC = () => (
  <div className="pt-20">
    <Services />
    <FAQ />
  </div>
);

const FAQPage: React.FC = () => (
  <div className="pt-20">
    <FAQ />
  </div>
);

const ContactPage: React.FC = () => (
  <div className="pt-20">
    <Contact />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Assistant />
        <Footer />
        
        {/* Mobile Sticky Call Button */}
        <div className="md:hidden fixed bottom-0 w-full bg-white border-t border-slate-200 z-50 flex">
          <a href="tel:9017579596" className="flex-1 bg-teal-600 text-white py-4 text-center font-bold text-lg flex justify-center items-center gap-2">
            Call Now
          </a>
          <Link to="/contact" className="flex-1 bg-slate-800 text-white py-4 text-center font-bold text-lg">
            Book
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default App;