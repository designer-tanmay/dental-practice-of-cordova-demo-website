export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Mapping to Lucide icon names
  image: string;
  details: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StaffMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}
