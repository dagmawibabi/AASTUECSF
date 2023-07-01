import Carousel from "@components/Carousel";
import WorshipPhoto from "@/public/worshipPhoto.png";
import ImageCard from "@components/ImageCard";
import ImageCardSmall from "@/components/ImageCardSmall";

const EventsCarousel: React.FC = () => {
  return (
    <Carousel slidesToShow={3} className="mb-24">
      <ImageCardSmall
        name="Supremacy of Christ"
        src={WorshipPhoto.src}
        desc="Music Worship"
        // className="basis-1/3"
      />

      <ImageCardSmall
        name="Counseling Retreat"
        desc="worship night"
        src={WorshipPhoto.src}
        // className="basis-1/3"
      />
      <ImageCardSmall
        name="Easter night"
        desc="Easter worship"
        src={WorshipPhoto.src}
      />
      <ImageCard name="Evasu" desc="Music & worship" src={WorshipPhoto.src} />
      <ImageCardSmall
        name="Graduation"
        desc="Life ceremony"
        src={WorshipPhoto.src}
      />
    </Carousel>
  );
};

export default EventsCarousel;
