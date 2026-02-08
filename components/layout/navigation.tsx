"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IconMenu2, IconX } from "@tabler/icons-react";
import texts from "@/lib/texts/texts.json";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: texts.navigation.home, href: "#home" },
    { name: texts.navigation.about, href: "#about" },
    { name: texts.navigation.collections, href: "#collections" },
    { name: texts.navigation.lifestyle, href: "#lifestyle" },
    { name: texts.navigation.experience, href: "#experience" },
    { name: texts.navigation.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <a href="#home" className="text-2xl font-light tracking-tight text-foreground hover:text-primary transition-colors">
              {texts.brand.name}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className="relative px-3 py-2 text-sm font-medium bg-transparent text-foreground/70 hover:bg-transparent focus-visible:bg-transparent hover:text-foreground focus-visible:text-foreground group"
                  asChild={false}
                  onClick={() => {
                    const el = document.getElementById(item.href.replace('#', ''));
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-4/5 group-hover:h-0.5"></span>
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className="relative w-full justify-start px-3 py-2 text-b font-medium bg-transparent text-foreground/70 hover:bg-transparent focus-visible:bg-transparent hover:text-foreground focus-visible:text-foreground group"
                  asChild={false}
                  onClick={() => {
                    setIsOpen(false);
                    const el = document.getElementById(item.href.replace('#', ''));
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-1 h-0.5 w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-4/5 group-hover:h-0.5"></span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}