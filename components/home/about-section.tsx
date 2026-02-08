"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import texts from "@/lib/texts/texts.json";
import images from "@/lib/texts/images.json";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            {texts.about.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {texts.about.subtitle}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Brand Story */}
          <div className="space-y-6">
            <Card className="border-border/20 shadow-sm">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  {texts.about.description}
                </p>
                <Separator className="my-6 bg-border/30" />
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-2">Our Philosophy</h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {texts.about.philosophy}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-foreground mb-2">Our Mission</h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {texts.about.mission}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Brand Highlights */}
          <div className="space-y-6">
            {/* Founder Portrait */}
            <Card className="overflow-hidden border-border/20 py-0">
              <div className="aspect-[4/3] relative">
                <Image
                  src={images.about.founderPortrait}
                  alt="Portrait of the founder in boutique setting showcasing brand philosophy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium text-lg">Founded with Vision</h4>
                  <p className="text-white/90 text-sm">Curating lifestyle excellence since {texts.brand.establishedYear}</p>
                </div>
              </div>
            </Card>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 border-border/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-0">
                  <div className="text-3xl font-light text-primary mb-2">
                    {texts.brand.establishedYear}
                  </div>
                  <div className="text-sm text-muted-foreground">Established</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-border/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-0">
                  <div className="text-3xl font-light text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Collections</div>
                </CardContent>
              </Card>
            </div>
            
            {/* Boutique Interior */}
            <Card className="overflow-hidden border-border/20 py-0">
              <div className="aspect-video relative">
                <Image
                  src={images.about.boutiqueInterior}
                  alt="Elegant boutique interior showcasing curated fashion collections and modern design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4">
                  <h4 className="text-white font-medium text-lg">Our Boutique Experience</h4>
                  <p className="text-white/90 text-sm">Where fashion meets lifestyle</p>
                </div>
              </div>
            </Card>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground/80">Curated Global Lifestyle</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground/80">Personalized Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground/80">Boutique Elegance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground/80">Simple Luxury</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}