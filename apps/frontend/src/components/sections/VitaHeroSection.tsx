import { VitaButton } from "../ui/VitaButton";

/**
 * Vita Food Complex Hero Section
 * 
 * This section demonstrates the integration of Figma design tokens
 * with React components, following the established design system:
 * 
 * Design Elements:
 * - Hero heading with Funnel Display font (180px)
 * - Primary brand color (#23B349)
 * - Custom button styling
 * - Responsive breakpoints
 */
export function VitaHeroSection() {
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#23B349]/5 to-transparent" />
      
      {/* Main content container */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Hero heading */}
        <h1 className="heading-hero mb-8">
          Vita Food Complex
        </h1>
        
        {/* Subtitle */}
        <p className="text-body-large max-w-3xl mx-auto mb-12 text-[#333733]">
          Fresh, healthy, delicious food for everyone. Experience the perfect blend of nutrition and taste.
        </p>
        
        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <VitaButton size="xl" className="min-w-[300px]">
            Get Started
          </VitaButton>
          
          <VitaButton 
            variant="outline" 
            size="xl" 
            className="min-w-[300px]"
          >
            Learn More
          </VitaButton>
        </div>
        
        {/* Decorative number element */}
        <div className="decorative-number absolute -bottom-20 left-10 opacity-20">
          01
        </div>
      </div>
      
      {/* Floating visual elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#23B349]/10 rounded-full animate-float" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#23B349]/10 rounded-full animate-float-delayed" />
    </section>
  );
}
