"use client";

import Carousel from "@components/Carousel";
import WorshipPhoto from "@/public/worshipPhoto.png";
import ImageCard from "@components/ImageCard";
import useNav from "@/hooks/useNav";

const EventsCarousel: React.FC = () => {
  const isMobile = useNav(600);

  return (
    <Carousel slidesToShow={isMobile ? 1 : 3}>
      <ImageCard
        name="Supremacy of Christ"
        src={WorshipPhoto.src}
        desc="Music Worship"
      />

      <ImageCard
        name="Counseling Retreat"
        desc="worship night"
        src={WorshipPhoto.src}
      />
      <ImageCard
        name="Easter night"
        desc="Easter worship"
        src={WorshipPhoto.src}
      />
      <ImageCard name="Evasu" desc="Music & worship" src={WorshipPhoto.src} />
      <ImageCard
        name="Graduation"
        desc="Life ceremony"
        src={WorshipPhoto.src}
      />
    </Carousel>
  );
};

export default EventsCarousel;
