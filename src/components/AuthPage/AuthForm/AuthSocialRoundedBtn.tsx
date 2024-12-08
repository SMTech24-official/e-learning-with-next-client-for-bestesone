import Image, { StaticImageData } from "next/image";
import cn from "@/utils/cn";

interface RoundedButtonProps {
  imageSrc: StaticImageData | string; // Image source for the button
  altText: string; // Alt text for the image
  onClick?: () => void; // Optional click handler
  className?: string; // Additional classes for customization
}

export function RoundedButton({
  imageSrc,
  altText,
  onClick,
  className,
}: RoundedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-primary-light",
        className
      )}
    >
      <div className="relative w-8 h-8">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </button>
  );
}
