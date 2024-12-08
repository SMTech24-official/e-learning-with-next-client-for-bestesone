import cn from "@/utils/cn";
import React, { ReactNode } from "react";

interface PersonalizedStepsWrapperProps {
  heading: string; // The main heading of the page
  title: string; // The subtitle or description
  children: ReactNode; // Content inside the survey box
  contentBoxClassName?: string;
}

export default function PersonalizedStepsWrapper({
  heading,
  title,
  children,
  contentBoxClassName,
}: PersonalizedStepsWrapperProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        {heading}
      </h1>

      {/* Title */}
      <p className="text-lg text-gray-600 mb-8 text-center">{title}</p>

      {/* Content Box */}
      <div
        className={cn(
          "bg-primary-light px-8 py-6 md:px-36 md:py-14 rounded-lg shadow-md w-full max-w-2xl",
          contentBoxClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
