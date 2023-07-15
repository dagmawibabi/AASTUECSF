import graindark from "@/public/grain_darker.png";
import EventsCarousel from "./EventsCarousel";
import type { Tab } from "@components/TabBar";
import TabBar from "@components/TabBar";

const tabs: Tab[] = [
  {
    label: <h3 className="md:text-2xl">All team</h3>,
    children: <EventsCarousel />,
  },
  {
    label: <h3 className="md:text-2xl">Worship</h3>,
    children: <EventsCarousel />,
  },
  {
    label: <h3 className="md:text-2xl">Praying</h3>,
    children: <EventsCarousel />,
  },
  {
    label: <h3 className="md:text-2xl">I4U</h3>,
    children: <EventsCarousel />,
  },
  {
    label: <h3 className="md:text-2xl">Media</h3>,
    children: <EventsCarousel />,
  },
  {
    label: <h3 className="md:text-2xl">Counseling</h3>,
    children: <EventsCarousel />,
  },
];

const AboutUsRecentMoments: React.FC = () => {
  return (
    <TabBar
      tabs={tabs}
      name="Recent Moments"
      containerStyles={{ backgroundImage: `url(${graindark.src})` }}
    />
  );
};

export default AboutUsRecentMoments;
