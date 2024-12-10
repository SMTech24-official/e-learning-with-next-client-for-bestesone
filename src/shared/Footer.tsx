import footerLogo from "@/assets/footer/footer-logo.png";
import Link from "next/link";
import arrowIcon from "@/assets/footer/arrow.svg";
import { Button } from "../components/ui/my-ui/button";
import Image from "next/image";
import {
  contactUsLinks,
  getContactLinks,
  socialLinks,
  usefulLinks,
} from "@/constants/constants";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <footer className="bg-[#0F202B] py-[42px]">
      <div className="container">
        <div className="flex lg:flex-row flex-col justify-between gap-20">
          <div className="flex flex-col items-start gap-[26px] md:max-w-[423px]">
            <Link href="/">
              <Image
                src={footerLogo}
                width={150}
                height={150}
                className="object-contain w-16 h-16"
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
              <FooterMenu label="Useful Links" items={usefulLinks} />
            </div>
            <div>
              <FooterMenu label="Contact Us" items={contactUsLinks} />
            </div>
            <div>
              <FooterMenu label="Get Contact" items={getContactLinks} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
