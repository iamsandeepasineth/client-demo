"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import texts from "@/lib/texts/texts.json";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            {texts.experience.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {texts.experience.subtitle}
          </p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {texts.experience.description}
          </p>
        </div>

        {/* Experience Hub Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Peppermint Café */}
          <Card className="group border-border/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-primary/15 to-accent/15 p-6">
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                  {texts.experience.peppermint.title}
                </CardTitle>
                <div className="text-3xl">🍽️</div>
              </div>
              <Separator className="bg-border/30 mb-4" />
            </div>
            <CardContent className="p-6">
              <p className="text-foreground/80 leading-relaxed mb-6">
                {texts.experience.peppermint.description}
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-6">
                {texts.experience.peppermint.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Visit Peppermint Café →
              </Button>
            </CardContent>
          </Card>

          {/* 24seven Store */}
          <Card className="group border-border/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-accent/15 to-primary/15 p-6">
              <div className="flex items-center justify-between mb-4">
                <CardTitle className="text-2xl font-light text-foreground group-hover:text-primary transition-colors">
                  {texts.experience.twentyFourSeven.title}
                </CardTitle>
                <div className="text-3xl">🏪</div>
              </div>
              <Separator className="bg-border/30 mb-4" />
            </div>
            <CardContent className="p-6">
              <p className="text-foreground/80 leading-relaxed mb-6">
                {texts.experience.twentyFourSeven.description}
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-6">
                {texts.experience.twentyFourSeven.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                className="w-full border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Explore 24seven Store →
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Cross-Visit Encouragement */}
        <div className="bg-gradient-to-r from-primary/20 via-background to-accent/20 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-light text-foreground mb-4">
            Complete Lifestyle Destination
          </h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            {texts.experience.crossVisitCta}
          </p>
          
          {/* Experience Timeline */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-medium">
                1
              </div>
              <h4 className="font-medium text-foreground mb-2">Shop Fashion</h4>
              <p className="text-sm text-foreground/70">Browse our curated collections</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 text-accent-foreground font-medium">
                2
              </div>
              <h4 className="font-medium text-foreground mb-2">Dine & Relax</h4>
              <p className="text-sm text-foreground/70">Enjoy comfort dining at Peppermint</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground font-medium">
                3
              </div>
              <h4 className="font-medium text-foreground mb-2">Discover More</h4>
              <p className="text-sm text-foreground/70">Explore international goods</p>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-accent px-10 py-6 text-lg rounded-full"
          >
            Plan Your 62 Precinct Visit
          </Button>
        </div>
      </div>
    </section>
  );
}