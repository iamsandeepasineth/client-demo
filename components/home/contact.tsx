"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import texts from "@/lib/texts/texts.json";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6">
            {texts.visit.title}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {texts.visit.subtitle}
          </p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {texts.visit.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="border-border/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <span className="text-2xl">📍</span>
                  <span className="text-foreground">Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-foreground mb-2">
                  {texts.visit.address}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Button 
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-accent rounded-full"
                  >
                    {texts.visit.ctas.directions}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border text-foreground hover:bg-primary hover:text-primary-foreground rounded-full"
                  >
                    {texts.visit.ctas.visit}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="border-border/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <span className="text-2xl">⏰</span>
                  <span className="text-foreground">Opening Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Weekdays</span>
                  <Badge variant="secondary" className="bg-primary/10 text-foreground">
                    {texts.visit.hours.weekdays.split(': ')[1]}
                  </Badge>
                </div>
                <Separator className="bg-border/30" />
                <div className="flex justify-between items-center">
                  <span className="text-foreground/80">Weekends</span>
                  <Badge variant="secondary" className="bg-primary/10 text-foreground">
                    {texts.visit.hours.weekends.split(': ')[1]}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="border-border/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-xl">
                  <span className="text-2xl">📞</span>
                  <span className="text-foreground">Get in Touch</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Phone:</span>
                  <span className="text-foreground font-medium">{texts.visit.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Email:</span>
                  <span className="text-foreground font-medium">{texts.visit.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground/80">Instagram:</span>
                  <span className="text-foreground font-medium">{texts.footer.social.instagram}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map & Visit Highlights */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <Card className="border-border/20">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-lg text-foreground/80 mb-4">Interactive Map</p>
                    <Button 
                      className="bg-primary text-primary-foreground hover:bg-accent rounded-full"
                    >
                      View on Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visit Highlights */}
            <Card className="border-border/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Why Visit Our Boutique?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/80">Personal styling consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/80">Exclusive collections preview</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/80">Complete lifestyle experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/80">Complimentary alterations</span>
                  </div>
                </div>
                
                <Separator className="bg-border/30 my-4" />
                
                <div className="text-center">
                  <Button 
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4 rounded-full w-full"
                  >
                    Book Your Visit Experience
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}