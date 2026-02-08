"use client";

import { Button } from "@/components/ui/button";
import texts from "@/lib/texts/texts.json";
import images from "@/lib/texts/images.json";
import Image from "next/image";

export function LandingPage() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.banner}
          alt="Fashion boutique lifestyle photography featuring elegant clothing and modern design"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>
      
      {/* Background Texture Overlay */}
      {/* <div className="absolute inset-0 z-10">
        <Image
          src={images.hero.backgroundTexture}
          alt="Subtle fabric texture overlay"
          fill
          className="object-cover opacity-20 mix-blend-soft-light"
        />
      </div> */}
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="relative z-30 max-w-4xl mx-auto text-center">
        {/* Brand Tagline */}
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-primary-foreground mb-4 drop-shadow-lg">
            {texts.hero.title}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-primary-foreground font-light drop-shadow-md">
            {texts.brand.tagline}
          </p>
        </div>

        {/* Brand Description */}
        <div className="mb-12 max-w-2xl mx-auto">
          <p className="text-lg text-primary-foreground leading-relaxed drop-shadow-md">
            {texts.hero.description}
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-lg font-medium rounded-full min-w-48 shadow-lg"
          >
            {texts.hero.primaryCta}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-lg font-medium rounded-full min-w-48 shadow-lg"
          >
            {texts.hero.secondaryCta}
          </Button>
        </div>

        {/* Secondary CTAs */}
        {/* <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button 
            variant="ghost" 
            className="text-primary-foreground hover:text-primary/95 hover:bg-primary/20 backdrop-blur-sm px-6 py-2 rounded-full shadow-md"
          >
            {texts.hero.tertiaryCta}
          </Button>
          <Button 
            variant="ghost" 
            className="text-primary-foreground hover:text-primary hover:bg-primary/20 backdrop-blur-sm px-6 py-2 rounded-full shadow-md"
          >
            {texts.hero.quaternaryCta}
          </Button>
        </div> */}
      </div>
    </section>
  );
}