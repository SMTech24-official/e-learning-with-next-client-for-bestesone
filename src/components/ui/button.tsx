import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 text-white",
  {
    variants: {
      variant: {
        default:
          "bg-primary py-4 px-5 rounded-[8px] font-normal text-base hover:bg-primary/90 dark:bg-primary dark:text-neutral-900",
        destructive:
          "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline:
          "border border-primary text-primary py-4 px-5 rounded-[8px] font-normal text-base hover:bg-primary/10 dark:border-primary dark:text-primary dark:hover:bg-primary/10",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost:
          "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 text-black dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
        icon: "inline-flex justify-center items-center w-10 p-2", // Specific styles for icon buttons
        underline: "text-primary rounded-none border-b-2 border-primary text-primary hover:border-primary/90 dark:border-primary dark:text-primary dark:hover:border-primary/90",
      },
      size: {
        default: "px-5 py-3",
        sm: "rounded-md px-3",
        lg: "rounded-md px-8",
        icon: "w-10", // Icon-specific size
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Apply inline-block for all variants except the icon variant
    const buttonClassNames = cn(
      buttonVariants({ variant, size, className }),
      variant !== "icon" && "inline-block" // Default to inline-block for non-icon buttons
    );

    return (
      <Comp className={buttonClassNames} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
