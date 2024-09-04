export type AutoplayProps = {
  delay: number;
  jump: boolean; // if true slide animation is disabled
  stopOnFocusIn: boolean;
  stopOnInteraction: boolean;
  stopOnMouseEnter: boolean;
  stopOnLastSnap: boolean;
};

export type ScrollProps = {
  speed: number; // Number of pixels auto scroll should advance per frame.
  startDelay: number;
  direction: "forward" | "backward";
  stopOnInteraction: boolean;
  stopOnMouseEnter: boolean;
  stopOnFocusIn: boolean;
};


export type ArrowProps = {
  arrows: boolean;
};

export type ProductSliderProps = {
  autoplayProps?: AutoplayProps;
  scrollProps?: ScrollProps;
  loop?: boolean;
  arrowProps?: ArrowProps;
  slidesPerView?: number;
};
