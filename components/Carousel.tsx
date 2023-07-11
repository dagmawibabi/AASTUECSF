"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { LeftArrow, RightArrow } from "./Icons";
import React from "react";

type CarouselProps = {
  children: ReactNode[];
  slidesToShow?: number;
  slidesToScroll?: number;
  className?: string;
  iconClassName?: string;
  autoScroll?: boolean;
};

function getWidth(slidesToShow: number) {
  if (slidesToShow == 1) {
    return "w-full";
  }

  return `w-1/${slidesToShow}`;
}

const Carousel: FC<CarouselProps> = ({
  children,
  slidesToShow = 1,
  slidesToScroll = 1,
  iconClassName,
  className,
  autoScroll = false,
}) => {
  const slider = useRef<HTMLDivElement>(null);
  const slide = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState<number>(0);

  if (!children || children.length < 1) {
    return null;
  }

  if (slidesToShow > children.length) {
    slidesToShow = children.length;
  }

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [autoScroll, current]);

  function prevSlide() {
    if (slider.current == null || slide.current == null) return;

    const gap =
      (slider.current.scrollWidth -
        slide.current.offsetWidth * children.length) /
      children.length;
    const scrollValue = slide.current.offsetWidth * slidesToScroll + gap;

    slider.current.scroll(scrollValue * (current - 1), 0);
    setCurrent(current - 1);
  }

  function nextSlide() {
    console.log({ current });
    if (slider.current == null || slide.current == null) return;
    const gap =
      (slider.current.scrollWidth -
        slide.current.offsetWidth * children.length) /
      children.length;
    const scrollValue = slide.current.offsetWidth * slidesToScroll + gap;
    slider.current.scroll(scrollValue * (current + 1), 0);
    setCurrent((cur) => cur + 1);

    if (
      autoScroll &&
      current + slidesToScroll > children.length - slidesToShow
    ) {
      slider.current.scroll(0, 0);
      setCurrent(0);
    }
  }

  return (
    <div className={`flex ${className ?? null}`}>
      {children.length > slidesToShow && (
        <button
          onClick={prevSlide}
          className="absolute left-0 flex h-14 w-14 translate-x-10 items-center justify-center self-center rounded-full bg-gray-400 p-4"
        >
          <LeftArrow className={iconClassName} />
        </button>
      )}
      <div
        className="flex w-full gap-8 overflow-x-scroll scroll-smooth"
        style={{ scrollbarWidth: "none" }}
        ref={slider}
      >
        {children.map((el, i) => {
          return (
            <div
              key={i}
              ref={slide}
              className={`flex-none ${getWidth(slidesToShow)}`}
            >
              {el}
            </div>
          );
        })}
      </div>
      {children.length > slidesToShow && (
        <button
          onClick={nextSlide}
          className="absolute right-0 flex h-14 w-14 -translate-x-10 items-center justify-center self-center rounded-full bg-gray-400 p-4"
        >
          <RightArrow className={iconClassName} />
        </button>
      )}
    </div>
  );
};
export default Carousel;
