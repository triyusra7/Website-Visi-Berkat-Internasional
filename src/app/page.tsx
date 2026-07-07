import { AboutSnippet } from "@/components/home/AboutSnippet";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { CTASection } from "@/components/home/CTASection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSnippet />
      <BrandShowcase />
      <FeaturedProducts />
      <CTASection />
    </>
  );
}
