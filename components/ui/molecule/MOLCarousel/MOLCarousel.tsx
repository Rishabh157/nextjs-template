"use client";

import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCircleFilled,
} from "@tabler/icons-react";

import { CarouselProps } from "../../../../types/carouselType";
import ATMImage from "../../atom/ATMImage/ATMImage";
import ATMButton from "../../atom/ATMButton/ATMButton";

const DotButton = ({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button type="button" className={`dot-button`} onClick={onClick}>
    {selected ? (
      <IconCircleFilled size={12} color="#7e818c" />
    ) : (
      <IconCircleFilled size={12} color="#dfdfe2" />
    )}
  </button>
);

const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export function MOLCarousel({
  autoplayProps,
  scrollProps,
  loop,
  slideProps,
  arrowProps,
}: CarouselProps) {
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

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const slideWidth = 100 / slideProps?.slidesPerView;

  return (
    <div className="embla h-full flex flex-col relative" ref={emblaRef}>
      <div className="embla__container flex h-full ">
        {slideProps?.slides?.map((slide, index) => (
          <div
            key={index}
            className="embla__slide h-full"
            style={{ flex: `0 0 ${slideWidth}%` }}
          >
            <div className="h-full w-full overflow-hidden relative">
              <ATMImage imgUrl={slide?.url} extraClasses="h-full w-full" />
            </div>
          </div>
        ))}
      </div>
      <div className="embla-dots flex gap-1 absolute z-20 bottom-0 p-2 w-full justify-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => onDotButtonClick(index)}
          >
            {index + 1}
          </DotButton>
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
