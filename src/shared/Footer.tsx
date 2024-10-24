import footerLogo from "@/assets/footer/footer-logo.png";
import Link from "next/link";
import arrowIcon from "@/assets/footer/arrow.svg";
import { Button } from "../components/ui/button";
import Image from "next/image";
import {
  contactUsLinks,
  getContactLinks,
  socialLinks,
  usefulLinks,
} from "@/constants/constants";

const Footer = () => {
  return (
    <footer className="bg-[#0F202B] py-[42px]">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between gap-20">
          <div className="flex flex-col items-start gap-[26px] md:max-w-[423px]">
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
            <Button variant={"icon"} className="!font-normal">
              Contact With us{" "}
              <Image
                src={arrowIcon}
                width={14}
                height={14}
                className="object-contain w-[10px] h-[10px]"
                alt="Arrow icon"
              />
            </Button>
          </div>
          <div className="grid sm:grid-cols-3 xl:gap-[120px] gap-[40px] text-white">
            <div>
              <h2 className="text-2xl mb-6 font-semibold">Useful Links</h2>
              <ul className="flex flex-col gap-3">
                {usefulLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="relative after:content-[''] after:w-[0%] hover:after:w-[100%] after:ease-in-out after:transition-all after:duration-300 after:h-[1px] after:bg-white after:absolute after:bottom-[-3px] after:left-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mb-6 font-semibold">Contact Us</h2>
              <ul className="flex flex-col gap-2">
                {contactUsLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="relative after:content-[''] after:w-[0%] hover:after:w-[100%] after:ease-in-out after:transition-all after:duration-300 after:h-[1px] after:bg-white after:absolute after:bottom-[-3px] after:left-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl mb-6 font-semibold">Get Contact</h2>
              <ul className="flex flex-col gap-2">
                {getContactLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="relative after:content-[''] after:w-[0%] hover:after:w-[100%] after:ease-in-out after:transition-all after:duration-300 after:h-[1px] after:bg-white after:absolute after:bottom-[-3px] after:left-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
