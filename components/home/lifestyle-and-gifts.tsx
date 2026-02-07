"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IconSparkles, IconHome, IconDiamond, IconPencil, IconGift } from "@tabler/icons-react";
import texts from "@/lib/texts/texts.json";
import images from "@/lib/texts/images.json";
import Image from "next/image";

const lifestyleCategories = [
  {
    key: 'beauty',
    data: texts.lifestyle.beauty,
    icon: IconSparkles,
    image: images.lifestyle.beauty.hero
  },
  {
    key: 'homeDecor',
    data: texts.lifestyle.homeDecor,
    icon: IconHome,
    image: images.lifestyle.homeDecor.hero
  },
  {
    key: 'jewelry',
    data: texts.lifestyle.jewelry,
    icon: IconDiamond,
    image: images.lifestyle.jewelry.hero
  },
  {
    key: 'stationery',
    data: texts.lifestyle.stationery,
    icon: IconPencil,
    image: images.lifestyle.stationery.hero
  },
  {
    key: 'seasonal',
    data: texts.lifestyle.seasonal,
    icon: IconGift,
    image: images.lifestyle.seasonal.hero
  }
];

export function LifestyleAndGifts() {
  return (
    <section id="lifestyle" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            {texts.lifestyle.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {texts.lifestyle.subtitle}
          </p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {texts.lifestyle.description}
          </p>
        </div>

        {/* Lifestyle Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {lifestyleCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.key}
                className="group border-border/20 hover:border-primary/40 transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden"
              >
                {/* Category Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.data.title} lifestyle category featuring curated products and inspirational settings`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 group-hover:from-black/70 group-hover:to-black/30 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-medium text-white group-hover:text-white transition-colors mb-1">
                      {category.data.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6 text-center">
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {category.data.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-foreground hover:text-primary hover:bg-primary/10 group-hover:bg-primary/15 transition-all"
                  >
                    Discover →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-muted/30 rounded-lg p-12 mb-12">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground/80">Handpicked Global Brands</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground/80">Seasonal Collections</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground/80">Gift Curation Service</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-lg rounded-full"
          >
            Explore Lifestyle Collection
          </Button>
        </div>
      </div>
    </section>
  );
}