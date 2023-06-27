import React from "react";
import Header from "@components/Header";
import HomeImage from "@/public/homePhoto.png";
import QuoteImage from "@/public/resources_image_1.png";
import RecentlyAdded from "./RecentlyAdded";
import ResourcesTabBar from "./ResourcesTabBar";
import type { Tab } from "./ResourcesTabBar";
import { BookIcon, HeadphoneIcon, MultimediaIcon, MusicIcon } from "@components/Icons";

const tabs: Tab[] = [
  {
    label: "Watch",
    icon: <MultimediaIcon />,
    children: <p>Watch tab</p>
  },
  {
    label: "Listen",
    icon: <HeadphoneIcon />,
    children: <p>Listen tab</p>
  },
  {
    label: "Read",
    icon: <BookIcon />,
    children: <p>Book tab</p>
  },
  {
    label: "Worship",
    icon: <MusicIcon />,
    children: <p>Worship tab</p>
  },
]

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Header
        backgroundImage={HomeImage}
        mainText="Resources"
        subText=" Here, you will find a wide range of resources to help you strengthen your faith and spiritual well-being. From books on theology and spiritual growth to worship videos and spiritual songs, there is something for everyone."
      />
      <div
        className="flex h-full bg-cover bg-no-repeat lg:items-center"
        style={{ backgroundImage: `url(${QuoteImage.src})` }}
      >
        <h2 className="ml-8 py-12 text-3xl font-medium uppercase text-black sm:px-4 sm:py-48 md:px-0 lg:ml-24 lg:basis-1/3 lg:py-0">
          Do not conform to the pattern of this world, but be transformed by
          <span className="mt-4 inline-block text-4xl font-black text-cyan-300 sm:text-6xl">
            The renewing of your mind
          </span>
        </h2>
      </div>
      <RecentlyAdded />
      <ResourcesTabBar tabs={tabs} name="Resources" />
    </>
  );
};

export default ResourcesPage;
