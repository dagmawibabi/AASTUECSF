"use client";

import useNav from "@/hooks/useNav";
import Carousel from "@components/Carousel";
import ImageCard from "@components/ImageCard";
import WorshipPhoto from "@/public/worshipPhoto.png";

const GivingsCarousel: React.FC = () => {
  const isMobile = useNav(700);

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

export default GivingsCarousel;
