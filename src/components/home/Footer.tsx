import Image, { StaticImageData } from "next/image";
import footerLogo from "@/assets/footer/footer-logo.png";
import Link from "next/link";
import Facebook from "@/assets/footer/facebook.svg";
import Instagram from "@/assets/footer/instagram.svg";
import Twitter from "@/assets/footer/twitter.svg";
import Linkedin from "@/assets/footer/linkedin.svg";
import Youtube from "@/assets/footer/youtube.svg";
// import type { StaticImageData } from 'next/image';

// Define the type for social link objects
interface SocialLink {
  href: string;
  image: StaticImageData;
  alt: string;
}

// Create an array of social links
const socialLinks: SocialLink[] = [
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

const Footer = () => {
  return (
    <footer className="bg-[#0F202B] py-[42px]">
      <div className="container">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[26px] xl:max-w-[423px]">
            <Link href="/">
              <Image
                src={footerLogo}
                width={134}
                height={28}
                className="object-contain"
                alt="Logo of the website"
              />
            </Link>
            <p className="text-white">
              We&apos;re always in search for talented and motivated people,
              Don&apos;t be shy introduce yourself.
            </p>
            <div className="flex gap-2">
              {/* Map through the socialLinks array and display each social icon */}
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="p-2 rounded-[8px] bg-gray-800 hover:bg-primary duration-300"
                >
                  <Image
                    src={link.image}
                    height={24}
                    width={24}
                    className="object-contain w-5 h-5"
                    alt={link.alt}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 xl:gap-[80px] gap-[40px] text-white">
            <div>
              <h2 className="text-2xl mb-6 font-semibold">Useful Links</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mb-6 font-semibold">Useful Links</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mb-6 font-semibold">Useful Links</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">About us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
