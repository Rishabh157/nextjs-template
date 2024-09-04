"use client";

import React, { useCallback, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
 import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

import ATMButton from "../../atom/ATMButton/ATMButton";
import { ProductSliderProps } from "@/types/productSliderType";

export function MOLProductSlider({
  autoplayProps,
  scrollProps,
  loop,
  arrowProps,
  children,
  slidesPerView,
}: ProductSliderProps & { children: ReactNode }) {
  const autoplayOptions = autoplayProps
    ? {
        delay: autoplayProps.delay,
        jump: autoplayProps.jump,
        stopOnFocusIn: autoplayProps.stopOnFocusIn,
        stopOnInteraction: autoplayProps.stopOnInteraction,
        stopOnMouseEnter: autoplayProps.stopOnMouseEnter,
        stopOnLastSnap: autoplayProps.stopOnLastSnap,
      }
    : null;

  const scrollOptions = scrollProps
    ? {
        speed: scrollProps.speed,
        startDelay: scrollProps.startDelay,
        direction: scrollProps.direction,
        stopOnInteraction: scrollProps.stopOnInteraction,
        stopOnMouseEnter: scrollProps.stopOnMouseEnter,
        stopOnFocusIn: scrollProps.stopOnFocusIn,
      }
    : null;

  const plugins = [
    ...(autoplayOptions ? [Autoplay(autoplayOptions)] : []),
    ...(scrollOptions ? [AutoScroll(scrollOptions)] : []),
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop }, plugins);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slideWidth = 100 / (slidesPerView || 1);

  return (
    <div className="embla h-full flex flex-col relative" ref={emblaRef}>
      <div className="embla__container flex h-full">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="embla__slide h-full p-2"
            style={{ flex: `0 0 ${slideWidth}%` }}
          >
            <div className="h-full w-full overflow-hidden relative">
              {child}
            </div>
          </div>
        ))}
      </div>
      {arrowProps?.arrows && (
        <div className="flex gap-4 items-center w-full absolute justify-between top-1/2 px-4">
          <ATMButton
            variant="outline"
            size="icon"
            extraClasses="embla__prev rounded-full"
            onClick={scrollPrev}
            icon={<IconArrowLeft size={18} />}
          />
          <ATMButton
            variant="outline"
            size="icon"
            extraClasses="embla__next rounded-full"
            onClick={scrollNext}
            icon={<IconArrowRight size={18} />}
          />
        </div>
      )}
    </div>
  );
}
