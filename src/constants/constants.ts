import Facebook from "@/assets/footer/facebook.svg";
import Instagram from "@/assets/footer/instagram.svg";
import Twitter from "@/assets/footer/twitter.svg";
import Linkedin from "@/assets/footer/linkedin.svg";
import Youtube from "@/assets/footer/youtube.svg";
import { MenuItem, SocialLink } from "@/interface/interface";

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
