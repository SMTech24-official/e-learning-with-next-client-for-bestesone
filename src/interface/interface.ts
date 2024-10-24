import { StaticImageData } from "next/image";

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
