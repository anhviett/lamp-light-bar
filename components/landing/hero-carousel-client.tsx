"use client";

import type { ReactNode } from "react";

import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/a11y";

type HeroCarouselClientProps = {
  children: ReactNode;
};

export default function HeroCarouselClient({ children }: HeroCarouselClientProps) {
  return (
    <Swiper
      id="products"
      className="hero-carousel"
      modules={[A11y]}
      slidesPerView={1}
      a11y={{
        containerMessage: "Featured chandelier",
        slideLabelMessage: "Slide {{index}} of {{slidesLength}}",
      }}
    >
      <SwiperSlide className="hero-slide">{children}</SwiperSlide>
    </Swiper>
  );
}
