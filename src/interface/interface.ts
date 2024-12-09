import { StaticImageData } from "next/image";

// course card interface

export interface CourseCardProps {
  id: string | number;
  coverImage: string;
  title: string;
  description: string;
  authorImage: string;
  authorName: string;
  rating: number;
  date: string;
  seats: number;
  price: number;
}

// partner card interface
export interface PartnerCardProps {
  imageUrl: string;
  name: string;
  title: string;
  rating: number;
  ratingCount: number;
}

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
