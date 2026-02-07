"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import texts from "@/lib/texts/texts.json";

const lifestyleCategories = [
  {
    key: 'beauty',
    data: texts.lifestyle.beauty,
    icon: '✨'
  },
  {
    key: 'homeDecor',
    data: texts.lifestyle.homeDecor,
    icon: '🏠'
  },
  {
    key: 'jewelry',
    data: texts.lifestyle.jewelry,
    icon: '💎'
  },
  {
    key: 'stationery',
    data: texts.lifestyle.stationery,
    icon: '📝'
  },
  {
    key: 'seasonal',
    data: texts.lifestyle.seasonal,
    icon: '🎁'
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
          {lifestyleCategories.map((category, index) => (
            <Card 
              key={category.key}
              className="group border-border/20 hover:border-primary/40 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                  {category.data.title}
                </CardTitle>
                <Separator className="bg-border/30" />
              </CardHeader>
              <CardContent className="text-center">
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
          ))}
        </div>

        {/* Featured Lifestyle Experience */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-light text-foreground mb-4">
                Curated Lifestyle Marketplace
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Each piece in our lifestyle collection is thoughtfully selected to enhance your everyday moments with beauty, functionality, and meaning.
              </p>
              <div className="space-y-3">
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
            <div className="text-center lg:text-right">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent px-8 py-6 text-lg rounded-full"
              >
                Explore Lifestyle Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}