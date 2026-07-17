import { HeroCarousel } from "@/components/landing/hero-carousel";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LuminanceShowcase } from "@/components/landing/luminance-showcase";
import { VerticalSections } from "@/components/landing/vertical-sections";

export default function Home() {
  return (
    <div className="landing-page" id="top">
      <LandingHeader />
      <main className="landing-main">
        {/* <VerticalSections /> */}
        <HeroCarousel />
      </main>
      <LuminanceShowcase />
      <span className="corner-search" aria-hidden="true" />
      <LandingFooter />
    </div>
  );
}
