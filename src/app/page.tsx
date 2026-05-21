import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { AppsSection } from "@/components/sections/AppsSection";
import { DeliverySection } from "@/components/sections/DeliverySection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { QualitySection } from "@/components/sections/QualitySection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <QualitySection />
        <AppsSection />
        <DeliverySection />
        <ExperienceSection />
        <GallerySection />
      </main>
      <FooterSection />
    </>
  );
}
