"use client";

import { IconBrandInstagram, IconBrandFacebook, IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import texts from "@/lib/texts/texts.json";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light tracking-tight mb-4 text-primary">{texts.brand.name}</h3>
            <p className="text-background/85 mb-4 max-w-md">
              {texts.brand.description}
            </p>
            <p className="text-background/70 text-sm">
              {texts.footer.copyright}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-background/75">
              <li><a href="about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="collections" className="hover:text-primary transition-colors">Collections</a></li>
              <li><a href="lifestyle" className="hover:text-primary transition-colors">Lifestyle</a></li>
              <li><a href="experience" className="hover:text-primary transition-colors">62 Precinct</a></li>
              <li><a href="contact" className="hover:text-primary transition-colors">Visit Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4 text-background">Contact</h4>
            <div className="space-y-3 text-background/75">
              <div className="flex items-center gap-2">
                <IconMapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{texts.visit.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconPhone className="w-4 h-4 text-primary" />
                <span className="text-sm">{texts.visit.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconMail className="w-4 h-4 text-primary" />
                <span className="text-sm">{texts.visit.contact.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <IconBrandInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <IconBrandFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60 text-sm">
          <p>Built with passion for simple luxury • {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}