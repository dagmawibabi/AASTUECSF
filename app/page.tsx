import Header from "@components/Header";
import ThemeBG from "@/public/theme.png";
import localFont from "next/font/local";
import HandWorship from "@/assets/images/hand-worship-background.png";
import Link from "next/link";
import UpcomingEvents from "@components/UpcompingEvents";
import EventsCarousel from "./events/EventsCarousel";
import type { Tab } from "@components/TabBar";

const casualBrush = localFont({
  src: "../assets/fonts/CasualBrush-Regular.ttf",
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

export default function Home() {
  return (
    <>
      <Header backgroundImage={ThemeBG}>
        <div className="flex flex-col items-center justify-center gap-14">
          <h1
            className={`${casualBrush.className} text-9xl uppercase xl:text-[15rem]`}
          >
            Jesus
          </h1>
          <p className="text-4xl font-light">
            Is all <strong className="font-bold">I</strong> need, Is all{" "}
            <strong className="font-bold">we</strong> need
          </p>
        </div>
      </Header>
      <div
        style={{ backgroundImage: `url(${HandWorship.src})` }}
        className="bg-cover bg-no-repeat p-8 md:flex md:h-full md:flex-col md:justify-center md:gap-8 md:pl-14"
      >
        <h1 className="text-4xl font-semibold text-cyan-400 md:text-8xl">
          Who are we?
        </h1>
        <p className="text-2xl font-medium text-black md:w-1/2">
          We are a community of believers who believe in the simple yet powerful
          truth that every person is important to God. Regardless of your
          background, experiences, or doubts, God desires a relationship with
          you, and we share that same desire. We welcome all individuals to join
          us in this journey of faith and discovery of God&apos;s love for us.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block text-2xl font-bold text-cyan-400 hover:underline"
        >
          learn more about us
        </Link>
      </div>
      <UpcomingEvents tabs={tabs} />
    </>
  );
}
