import React from "react";
import Header from "@components/Header";
import HomeImage from "@/public/homePhoto.png";
import QuoteImage from "@/public/resources_image_1.png";

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Header
        backgroundImage={HomeImage}
        mainText="Resources"
        subText=" Here, you will find a wide range of resources to help you strengthen your faith and spiritual well-being. From books on theology and spiritual growth to worship videos and spiritual songs, there is something for everyone."
      />
      <div
        className="bg-cover bg-no-repeat h-full flex lg:items-center"
        style={{ backgroundImage: `url(${QuoteImage.src})` }}
      >
        <h2 className="text-black font-medium uppercase text-3xl ml-8 lg:ml-24 sm:px-4 md:px-0 py-12 sm:py-48 lg:py-0 lg:basis-1/3">
          Do not conform to the pattern of this world, but be transformed by
          <span className="text-cyan-300 font-black text-4xl sm:text-6xl inline-block mt-4">
            The renewing of your mind
          </span>
        </h2>
      </div>
    </>
  );
};

export default ResourcesPage;
