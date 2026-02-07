import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { LandingPage } from "@/components/home/landing-page";
import { AboutSection } from "@/components/home/about-section";
import { FashionAndCollection } from "@/components/home/fashion-and-collection";
import { LifestyleAndGifts } from "@/components/home/lifestyle-and-gifts";
import { Experience } from "@/components/home/experience";
import { Contact } from "@/components/home/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <LandingPage />
        <AboutSection />
        <FashionAndCollection />
        <LifestyleAndGifts />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
