import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface AuthPageProps {
  backgroundImageSrc: StaticImageData;
  containerImageSrc: StaticImageData;
  floatingImageSrc: StaticImageData;
  authImage: StaticImageData;
  headingText: string;
  children: ReactNode;
}

export function AuthPage({
  backgroundImageSrc,

  containerImageSrc,
  floatingImageSrc,
  authImage,
  headingText,
  children,
}: AuthPageProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-8 lg:p-16">
        {children}
      </div>
      <div className="hidden lg:block relative overflow-hidden">
        <Image
          src={backgroundImageSrc.src}
          alt={"background image"}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-3/4 h-3/4">
            <Image
              src={containerImageSrc.src}
              alt={"background container image"}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-between text-white p-8">
              <h2 className="text-3xl font-bold mt-16">{headingText}</h2>
              <div className="relative w-3/4 h-1/2">
                <Image
                  src={authImage.src}
                  alt="Featured image"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="absolute -right-8 top-1/3 top transform -translate-y-1/2">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={floatingImageSrc.src}
                  alt={"floating image"}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="lg:hidden fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${backgroundImageSrc.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      ></div>
    </div>
  );
}
