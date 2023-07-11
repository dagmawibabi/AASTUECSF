import Event1 from "@/assets/images/events/event-1.png";
import Image from "next/image";
import Event2 from "@/assets/images/events/event-2.png";
import Event3 from "@/assets/images/events/event-3.png";
import Event4 from "@/assets/images/events/event-4.png";
import Event5 from "@/assets/images/events/event-5.png";
import Event6 from "@/assets/images/events/event-6.png";
import Event7 from "@/assets/images/events/event-7.png";
import Event8 from "@/assets/images/events/event-8.png";
import Event9 from "@/assets/images/events/event-9.png";
import GalleryBG from "@/assets/images/gallery-bg.png";

const GalleryTeams: React.FC = () => {
  return (
    <div style={{ backgroundImage: `url(${GalleryBG.src})` }} className="p-24">
      <h2 className="text-2xl font-semibold uppercase">Gallery of Teams</h2>
      <p>
        Browse among the gallery events that were held by teams<br /> found in ECSF
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Image src={Event1} alt="event-1" />
        <Image src={Event2} alt="event-2" />
        <Image src={Event3} alt="event-3" />
        <Image src={Event4} alt="event-4" />
        <Image src={Event5} alt="event-5" />
        <Image src={Event6} alt="event-6" />
        <Image src={Event7} alt="event-7" />
        <Image src={Event8} alt="event-8" />
        <Image src={Event9} alt="event-9" />
      </div>
    </div>
  );
};

export default GalleryTeams;
