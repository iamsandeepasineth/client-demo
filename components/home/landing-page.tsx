"use client";

import { Button } from "@/components/ui/button";
import texts from "@/lib/texts/texts.json";

export function LandingPage() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted px-4 sm:px-6 lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMmYyZjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Brand Tagline */}
        <div className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-4">
            {texts.hero.title}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light">
            {texts.brand.tagline}
          </p>
        </div>

        {/* Brand Description */}
        <div className="mb-12 max-w-2xl mx-auto">
          <p className="text-lg text-foreground/80 leading-relaxed">
            {texts.hero.description}
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-lg font-medium rounded-full min-w-48"
          >
            {texts.hero.primaryCta}
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg rounded-full min-w-48"
          >
            {texts.hero.secondaryCta}
          </Button>
        </div>

        {/* Secondary CTAs */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button 
            variant="ghost" 
            className="text-foreground/70 hover:text-primary hover:bg-primary/10 px-6 py-2 rounded-full"
          >
            {texts.hero.tertiaryCta}
          </Button>
          <Button 
            variant="ghost" 
            className="text-foreground/70 hover:text-primary hover:bg-primary/10 px-6 py-2 rounded-full"
          >
            {texts.hero.quaternaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}