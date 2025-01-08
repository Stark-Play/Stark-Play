"use client";

import { cn } from "~~/lib/utils";
import { Button } from "~~/components/ui/button";

interface HeroProps {
  mainText: string;
  gradientText: string;
  className?: string;
}

export const Hero = ({ mainText, gradientText, className }: HeroProps) => {
  return (
    <section className={cn(
      "relative  w-full flex flex-col items-center justify-center py-16",
      className
    )}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
          <span className="block mb-2">{mainText}</span>
          <span className="block py-3 bg-gradient-to-br from-blue-600 via-cyan-200 to-purple-600 text-transparent bg-clip-text">
            {gradientText}
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button 
            className={cn(
              "px-8 py-6 text-lg rounded-xl",
              "bg-gradient-to-r from-blue-500 to-cyan-700",
              "hover:from-blue-600 hover:to-cyan-700",
              "text-white font-semibold",
              "transform transition-all hover:scale-105",
              "shadow-lg hover:shadow-xl",
              "w-full sm:w-auto"
            )}
          >
            Explore Games Now
          </Button>
          <Button 
            variant="outline"
            className={cn(
              "px-8 py-6 text-lg rounded-xl",
              "border-2 border-white/20",
              "bg-white/5 hover:bg-white/10",
              "text-white font-semibold hover:text-white",
              "transform transition-all hover:scale-105",
              "backdrop-blur-sm",
              "w-full sm:w-auto"
            )}
          >
            Register Your Game
          </Button>
        </div>
      </div>

      {/* animated particles or decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-1000" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse animation-delay-2000" />
      </div>
    </section>
  );
};
