import Carousel from "@components/Carousel";
import WorshipPhoto from "@/public/worshipPhoto.png";

const EventsCarousel: React.FC = () => {
  return (
    <Carousel slidesToShow={3} className="mb-20 h-1/2 w-full">
      <div
        style={{ backgroundImage: `url(${WorshipPhoto.src})` }}
        className="flex h-full basis-1/3 flex-col justify-end bg-cover bg-no-repeat pb-8 pl-4"
      >
        <h3 className="text-2xl font-semibold">Supremacy of Christ</h3>
        <p className="text-xl">Music Worship</p>
      </div>
      <div
        style={{ backgroundImage: `url(${WorshipPhoto.src})` }}
        className="flex h-full basis-1/3 flex-col justify-end bg-cover bg-no-repeat pb-8 pl-4"
      >
        <h3 className="text-2xl font-semibold">Counseling Retreat</h3>
        <p className="text-xl">worship night</p>
      </div>
      <div
        style={{ backgroundImage: `url(${WorshipPhoto.src})` }}
        className="flex h-full basis-1/3 flex-col justify-end bg-cover bg-no-repeat pb-8 pl-4"
      >
        <h3 className="text-2xl font-semibold">Easter night</h3>
        <p className="text-xl">Easter worship</p>
      </div>
      <div
        style={{ backgroundImage: `url(${WorshipPhoto.src})` }}
        className="flex h-full basis-1/3 flex-col justify-end bg-cover bg-no-repeat pb-8 pl-4"
      >
        <h3 className="text-2xl font-semibold">Evasu</h3>
        <p className="text-xl">Music & worship</p>
      </div>
      <div
        style={{ backgroundImage: `url(${WorshipPhoto.src})` }}
        className="flex h-full basis-1/3 flex-col justify-end bg-cover bg-no-repeat pb-8 pl-4"
      >
        <h3 className="text-2xl font-semibold">Graduation</h3>
        <p className="text-xl">Life ceremony</p>
      </div>
    </Carousel>
  );
};

export default EventsCarousel;
