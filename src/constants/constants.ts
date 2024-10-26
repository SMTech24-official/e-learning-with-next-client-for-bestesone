import Facebook from "@/assets/footer/facebook.svg";
import Instagram from "@/assets/footer/instagram.svg";
import Twitter from "@/assets/footer/twitter.svg";
import Linkedin from "@/assets/footer/linkedin.svg";
import Youtube from "@/assets/footer/youtube.svg";
import { MenuItem, SocialLink, Testimonial } from "@/interface/interface";

// testimonial constants

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    role: "UX Designer",
    company: "Google",
    rating: 5,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    imageUrl: "https://example.com/images/john.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    company: "Facebook",
    rating: 4,
    review:
      "Great experience! The team was extremely professional and the results were outstanding. I highly recommend their services.",
    imageUrl: "https://example.com/images/jane.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Software Engineer",
    company: "Amazon",
    rating: 5,
    review:
      "Amazing work! The quality and attention to detail were exceptional. Will definitely work with them again.",
    imageUrl: "https://example.com/images/michael.jpg",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Marketing Specialist",
    company: "Netflix",
    rating: 4,
    review:
      "The project went smoothly, and the team was very responsive. I am very happy with the final product.",
    imageUrl: "https://example.com/images/sarah.jpg",
  },
  {
    id: 5,
    name: "David Wilson",
    role: "Data Scientist",
    company: "Microsoft",
    rating: 5,
    review:
      "Top-notch work! They exceeded my expectations and delivered on time. Highly recommend!",
    imageUrl: "https://example.com/images/david.jpg",
  },
];

// footer constants
export const usefulLinks: MenuItem[] = [
  { id: 1, label: "About Us", link: "#" },
  { id: 2, label: "Our Services", link: "#" },
  { id: 3, label: "Careers", link: "#" },
];

export const contactUsLinks: MenuItem[] = [
  { id: 1, label: "Contact Support", link: "#" },
  { id: 2, label: "FAQs", link: "#" },
  { id: 3, label: "Live Chat", link: "#" },
];

export const getContactLinks: MenuItem[] = [
  { id: 1, label: "Email Us", link: "#" },
  { id: 2, label: "Call Us", link: "#" },
  { id: 3, label: "Follow Us", link: "#" },
];

export const socialLinks: SocialLink[] = [
  {
    href: "#",
    image: Facebook,
    alt: "Image of Facebook",
  },
  {
    href: "#",
    image: Instagram,
    alt: "Image of Instagram",
  },
  {
    href: "#",
    image: Twitter,
    alt: "Image of Twitter",
  },
  {
    href: "#",
    image: Linkedin,
    alt: "Image of Linkedin",
  },
  {
    href: "#",
    image: Youtube,
    alt: "Image of Youtube",
  },
];
