"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "./Thumb";
import "./index.css";
import ATMImage from "../ATMImage/ATMImage";
import { IconCircleFilled } from "@tabler/icons-react";

type Props = {
  slides: { id: string; url: string }[];
  options?: EmblaOptionsType;
  variant?: "inline" | "block";
};

const ATMThumbCarousel = ({ slides, variant, options }: Props) => {
  // const { slides, options } = Props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    axis: variant === "inline" ? "y" : "x",
  });

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

      emblaApi
        .on("reInit", onInit)
        .on("reInit", onSelect)
        .on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return {
      selectedIndex,
      scrollSnaps,
      onDotButtonClick,
    };
  };

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

  const {
    selectedIndex: dotSelectedIndex,
    scrollSnaps,
    onDotButtonClick,
  } = useDotButton(emblaMainApi);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    const newIndex = emblaMainApi.selectedScrollSnap();
    setSelectedIndex(newIndex);
    emblaThumbsApi.scrollTo(newIndex);
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="thumb">
      <div
        className={`embla flex gap-4 ${
          variant === "inline" ? "flex-row-reverse" : "flex-col"
        }`}
      >
        <div
          className="embla__viewport z-10 relative md:w-[400px]"
          ref={emblaMainRef}
        >
          <div className="embla__container aspect-square">
            {slides.map((slide) => (
              <div className="embla__slide" key={slide.id}>
                <ATMImage imgUrl={slide.url} extraClasses="w-full h-full" />
              </div>
            ))}
          </div>
          <div className="embla-dots flex gap-1 absolute z-20 bottom-0 p-2 w-full justify-center">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                selected={index === dotSelectedIndex}
                onClick={() => onDotButtonClick(index)}
              >
                {index + 1}
              </DotButton>
            ))}
          </div>
        </div>

        <div
          className={`embla-thumbs  ${
            variant === "inline" ? "md:h-[400px]" : " md:w-[400px]"
          }`}
        >
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div
              className={`embla-thumbs__container flex ${
                variant === "inline" ? "flex-col" : ""
              }`}
            >
              {slides.map((slide, index) => (
                <Thumb
                  key={slide.id}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgUrl={slide.url}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATMThumbCarousel;
