import { forwardRef } from "react";
import { cn } from "../../lib/utils";

export interface VitaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "xl";
}

/**
 * Vita Food Complex Button Component
 * 
 * This component follows the design system established in Figma:
 * - Primary: Dark green background (#0F4B1F) with white text
 * - Secondary: White background with dark green text
 * - Outline: Transparent with dark green border
 * 
 * Sizes:
 * - Default: 60px height, 20px font
 * - Large: 80px height, 24px font  
 * - Extra Large: 100px height, 32px font
 */
const VitaButton = forwardRef<HTMLButtonElement, VitaButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-lg",
          
          // Size variants
          size === "default" && "h-[60px] px-8 text-[20px]",
          size === "lg" && "h-[80px] px-12 text-[24px]",
          size === "xl" && "h-[100px] px-16 text-[32px]",
          
          // Color variants
          variant === "primary" && [
            "bg-[#0F4B1F]", // --color-primary-dark
            "text-white",
            "hover:bg-[#0a3a18]",
            "active:bg-[#083014]"
          ],
          
          variant === "secondary" && [
            "bg-white", // --color-background-page
            "text-[#0F4B1F]", // --color-primary-dark
            "border-2 border-[#0F4B1F]",
            "hover:bg-[#d4eeda]",
            "active:bg-[#c4e0cc]"
          ],
          
          variant === "outline" && [
            "bg-transparent",
            "text-[#0F4B1F]", // --color-primary-dark
            "border-2 border-[#0F4B1F]",
            "hover:bg-[#0F4B1F]",
            "hover:text-white"
          ],
          
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

VitaButton.displayName = "VitaButton";

export { VitaButton };
