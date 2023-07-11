"use client";

import Carousel from "@components/Carousel";
import HouseImage from "@/assets/images/gallery/house-image.png";
import ThreeCrosses from "@/assets/images/gallery/the-3-crosses.png";
import WorshipConcert from "@/assets/images/gallery/worship-concert.png";
import Event1 from "@/assets/images/events/event-1.png";
import Event2 from "@/assets/images/events/event-2.png";
import Event3 from "@/assets/images/events/event-3.png";
import Event4 from "@/assets/images/events/event-4.png";
import Event5 from "@/assets/images/events/event-5.png";
import Event6 from "@/assets/images/events/event-6.png";
import Event7 from "@/assets/images/events/event-7.png";
import Event8 from "@/assets/images/events/event-8.png";
import Event9 from "@/assets/images/events/event-9.png";
import ImageCard from "@components/ImageCard";
import WorshipPhoto from "@/public/worshipPhoto.png";
import useNav from "@/hooks/useNav";

const GalleryCarousel: React.FC = () => {
  const isMobile = useNav(700);

  return (
    <div className="p-4 lg:p-14 lg:py-24 bg-zinc-600">
      <Carousel slidesToShow={isMobile ? 1 : 3} autoScroll={true}>
        <ImageCard src={HouseImage.src} />
        <ImageCard src={ThreeCrosses.src} />
        <ImageCard src={WorshipConcert.src} />
        <ImageCard src={Event1.src} />
        <ImageCard src={Event2.src} />
        <ImageCard src={Event3.src} />
        <ImageCard src={Event4.src} />
        <ImageCard src={Event5.src} />
        <ImageCard src={Event6.src} />
        <ImageCard src={Event7.src} />
        <ImageCard src={Event8.src} />
        <ImageCard src={Event9.src} />
        <ImageCard src={WorshipPhoto.src} />
      </Carousel>
    </div>
  );
};

export default GalleryCarousel;
