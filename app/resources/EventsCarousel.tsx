import Carousel from "@components/Carousel";
import WorshipPhoto from "@/public/worshipPhoto.png";
import ImageCard from "@components/ImageCard";

const EventsCarousel: React.FC = () => {
  return (
    <Carousel slidesToShow={3}>
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
