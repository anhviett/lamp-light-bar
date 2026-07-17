import { HeroIllustration } from "@/components/landing/hero-illustration";
import { ProductDetails } from "@/components/landing/product-details";
import { SocialRail } from "@/components/landing/social-rail";

export function HeroSlideContent() {
  return (
    <>
      <section className="intro-panel" aria-labelledby="brand-heading">
        <div className="intro-copy">
          <p className="intro-kicker">Light, considered</p>
          <h2 id="brand-heading">
            luminance<span>.</span>
          </h2>
          <p>
            Beautifully designed with multiple color combinations of white black
            and metallic with harsh lines and smooth curves.
          </p>
          <a href="#products">more+</a>
        </div>
      </section>
      <section className="showcase-panel" aria-label="Featured chandelier">
        <HeroIllustration />
        <ProductDetails />
        <p className="vertical-brand" aria-hidden="true">
          luminance<span>.</span>
        </p>
        <SocialRail />
      </section>
    </>
  );
}
