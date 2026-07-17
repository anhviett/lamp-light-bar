"use client";
import Image from "next/image"

export function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <div className="chandelier chandelier-main">
        <span className="cord" />
        <span className="canopy" />
        <Image className="-mt-6" src="/images/lamp_light_1.png" width={200} height={200} alt="" />
      </div>
      <div className="chandelier chandelier-side">
        <span className="cord" />
        <span className="canopy" />
        <span className="stem" />
        <span className="shade" />
      </div>
      <div className="plant">
        <span className="leaf leaf-one" />
        <span className="leaf leaf-two" />
        <span className="leaf leaf-three" />
        <span className="leaf leaf-four" />
        <span className="leaf leaf-five" />
        <span className="leaf leaf-six" />
        <span className="pot" />
      </div>
    </div>
  );
}
