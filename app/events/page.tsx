import HomeImage from "@/public/homePhoto.png";
import Header from "@components/Header";
import UpcomingEvents from "@components/UpcompingEvents";
import localFont from "next/font/local";
import type { Tab } from "@components/TabBar";
import EventsCarousel from "./EventsCarousel";
import EventsGallery from "./EventsGallery";

const casualBrush = localFont({
  src: "../../assets/fonts/CasualBrush-Regular.ttf",
  display: "swap",
});

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

const EventsPage: React.FC = () => {
  return (
    <>
      <Header backgroundImage={HomeImage}>
        <h1
          className={`${casualBrush.className} tracking-widest mb-8 text-center text-8xl uppercase text-white sm:text-start sm:text-9xl 2xl:text-[15rem]`}
        >
          Events
        </h1>
        <p className="px-8 font-medium text-white sm:w-3/4 sm:px-0 lg:w-1/2 lg:text-xl">
          Welcome to the ECSF Events Calendar! Here, you can find a wide range
          of events hosted by teams from across the ECSF. You can explore all
          the events happening in and make your plans for the future.
        </p>
      </Header>
      <UpcomingEvents tabs={tabs} />
      <EventsGallery />
    </>
  );
};

export default EventsPage;
