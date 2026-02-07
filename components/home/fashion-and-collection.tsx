"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import texts from "@/lib/texts/texts.json";
import images from "@/lib/texts/images.json";
import Image from "next/image";

const collections = [
  {
    key: 'ethnicWear',
    data: texts.collections.ethnicWear,
    gradient: 'from-primary/20 to-accent/20',
    image: images.collections.ethnicWear.hero
  },
  {
    key: 'linen',
    data: texts.collections.linen,
    gradient: 'from-accent/20 to-primary/20',
    image: images.collections.linen.hero
  },
  {
    key: 'everyday',
    data: texts.collections.everyday,
    gradient: 'from-primary/15 to-accent/15',
    image: images.collections.everyday.hero
  },
  {
    key: 'bottomWear',
    data: texts.collections.bottomWear,
    gradient: 'from-accent/15 to-primary/15',
    image: images.collections.bottomWear.hero
  },
  {
    key: 'plusSize',
    data: texts.collections.plusSize,
    gradient: 'from-primary/25 to-accent/25',
    image: images.collections.plusSize.hero
  }
];

export function FashionAndCollection() {
  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            {texts.collections.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {texts.collections.subtitle}
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={collection.key} 
              className="group border-border/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              {/* Collection Hero Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={collection.image}
                  alt={`${collection.data.title} collection featuring ${collection.data.features.join(', ').toLowerCase()}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.gradient} group-hover:opacity-80 transition-opacity`}></div>
                <div className="absolute top-4 left-4 right-4">
                  <Badge className="bg-white/90 text-foreground border-0 backdrop-blur-sm">
                    New Collection
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-light text-white group-hover:text-white transition-colors mb-2 drop-shadow-lg">
                    {collection.data.title}
                  </h3>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  {collection.data.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {collection.data.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex} 
                      variant="secondary" 
                      className="bg-primary/10 text-foreground border-primary/30"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    variant="ghost" 
                    className="w-full text-foreground hover:text-primary hover:bg-primary/10 group-hover:bg-primary/15 transition-all"
                  >
                    Explore Collection →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent px-10 py-6 text-lg rounded-full"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </section>
  );
}