import { StaticImageData } from "next/image";

// Testimonial interface

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  imageUrl: StaticImageData;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

// footer interface

export interface SocialLink {
  href: string;
  image: StaticImageData;
  alt: string;
}

export interface MenuItem {
  id: number;
  label: string;
  link: string;
}
