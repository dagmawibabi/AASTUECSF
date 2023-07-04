"use client";

import { FC, ReactNode, useState } from "react";
import { LeftArrow, RightArrow } from "./Icons";

type CarouselProps = {
  children: ReactNode[];
  slidesToShow?: number;
  slidesToScroll?: number;
  className?: string;
  iconClassName?: string;
};

const Carousel: FC<CarouselProps> = ({
  children,
  slidesToShow = 1,
  slidesToScroll = 1,
  className,
  iconClassName,
}) => {
  const [current, setCurrent] = useState<number>(0);

  if (!children || children.length < 1) {
    return null;
  }

  if (slidesToShow > children.length) {
    slidesToShow = children.length;
  }

  function nextSlide(e: React.FormEvent<HTMLButtonElement>) {
    if (current + slidesToScroll >= children.length) {
      setCurrent(0);
    } else {
      setCurrent((cur) => cur + slidesToScroll);
    }
  }

  function prevSlide(e: React.FormEvent<HTMLButtonElement>) {
    if (current - slidesToScroll < 0) {
      setCurrent(children.length - slidesToScroll);
    } else {
      setCurrent((cur) => cur - slidesToScroll);
    }
  }

  function getSlides(): ReactNode[] {
    if (current + slidesToShow >= children.length) {
      return children
        .slice(current, children.length)
        .concat(children.slice(0, current + slidesToShow - children.length));
    }

    return children.slice(current, current + slidesToShow);
  }
  return (
    <div className={`grid grid-cols-12 gap-4 ${className ?? null}`}>
      {children.length > slidesToShow && (
        <button
          onClick={prevSlide}
          className="absolute left-0 flex h-24 w-24 translate-x-10 items-center justify-center self-center rounded-full bg-gray-400 p-4"
        >
          <LeftArrow className={iconClassName} />
        </button>
      )}
      <div
        style={{
          gridTemplateColumns: `repeat(${slidesToShow}, minmax(0, 1fr))`,
        }}
        className="col-span-12 grid gap-4 px-10"
      >
        {getSlides()}
      </div>
      {children.length > slidesToShow && (
        <button
          onClick={nextSlide}
          className="absolute right-0 flex h-24 w-24 -translate-x-10 items-center justify-center self-center rounded-full bg-gray-400 p-4"
        >
          <RightArrow className={iconClassName} />
        </button>
      )}
    </div>
  );
};

export default Carousel;
