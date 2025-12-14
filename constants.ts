import { ServiceItem, Testimonial, FaqItem, StaffMember } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'preventive',
    title: 'Preventive Care',
    description: 'Routine checkups, cleanings, and sealants to keep your smile healthy.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    details: ['Comprehensive Exams', 'Professional Cleaning', 'Digital X-Rays', 'Oral Cancer Screening']
  },
  {
    id: 'restorative',
    title: 'Restorative Dentistry',
    description: 'Repairing damaged teeth with crowns, bridges, and fillings.',
    iconName: 'Hammer', // Metaphorical
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    details: ['Tooth-Colored Fillings', 'Porcelain Crowns', 'Dental Bridges', 'Root Canal Therapy']
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with whitening, veneers, and bonding.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    details: ['Teeth Whitening', 'Porcelain Veneers', 'Invisalign®', 'Smile Makeovers']
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth.',
    iconName: 'Anchor',
    image: 'https://images.unsplash.com/photo-1445527697968-01d00d810b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    details: ['Single Tooth Implants', 'Implant-Supported Bridges', 'All-on-4®', 'Bone Grafting']
  },
  {
    id: 'emergency',
    title: 'Emergency Dentistry',
    description: 'Same-day appointments for toothaches, accidents, and urgent care.',
    iconName: 'Ambulance',
    image: 'https://images.unsplash.com/photo-1576091160550-21733e99db29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    details: ['Toothache Relief', 'Broken Tooth Repair', 'Lost Crown/Filling', 'Abscess Treatment']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    text: 'The most gentle dental experience I have ever had. The staff makes you feel like family right from the start.',
    rating: 5,
    date: 'Oct 2023'
  },
  {
    id: 2,
    name: 'Michael Ross',
    text: 'I had a dental emergency and they saw me immediately. Professional, clean, and top-tier technology.',
    rating: 5,
    date: 'Dec 2023'
  },
  {
    id: 3,
    name: 'Emily Chen',
    text: 'Dr. Smith transformed my smile with veneers. I finally have the confidence I lost years ago!',
    rating: 5,
    date: 'Jan 2024'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major PPO dental insurance plans including Delta Dental, Cigna, MetLife, and Aetna. We also offer financing through CareCredit.'
  },
  {
    question: 'How often should I have a dental checkup?',
    answer: 'We recommend visiting us every six months for a routine cleaning and examination to prevent issues before they start.'
  },
  {
    question: 'What should I do in a dental emergency?',
    answer: 'Call our office immediately at (901) 757-9596. We prioritize emergency cases and often offer same-day appointments.'
  },
  {
    question: 'Are dental implants painful?',
    answer: 'Most patients report less discomfort than expected. We use local anesthesia and offer sedation options to ensure your comfort throughout the procedure.'
  }
];

export const STAFF: StaffMember[] = [
  {
    name: "Dr. James Wilson",
    role: "Lead Dentist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Serving Cordova since 2003 with a focus on restorative and cosmetic procedures."
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Associate Dentist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Specializes in pediatric dentistry and making children feel at home."
  },
  {
    name: "Sarah Miller",
    role: "Lead Hygienist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    bio: "Passionate about preventative care and patient education."
  }
];
