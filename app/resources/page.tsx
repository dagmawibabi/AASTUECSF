import React from "react";
import Header from "@components/Header";
import HomeImage from "@/public/homePhoto.png";
import QuoteImage from "@/public/resources_image_1.png";
import Carousel from "@components/Carousel";
import WorshipPhoto from "@/public/worshipPhoto.png";

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
      <Carousel slidesToShow={3} className="mb-20 h-1/2 w-full">
        <div
          style={{ backgroundImage: `url(${WorshipPhoto.src})` }}
          className="flex h-full basis-1/3 flex-col justify-end bg-cover bg-no-repeat pl-4 pb-8"
        >
          <h3 className="font-semibold text-2xl">Supremacy of Christ</h3>
          <p className="text-xl">Music Worship</p>
        </div>
        <div
          style={{ backgroundImage: `url(${WorshipPhoto.src})` }}
          className="flex h-full basis-1/3 flex-col justify-end bg-cover bg-no-repeat pl-4 pb-8"
        >
          <h3 className="font-semibold text-2xl">Counseling Retreat</h3>
          <p className="text-xl">worship night</p>
        </div>
        <div
          style={{ backgroundImage: `url(${WorshipPhoto.src})` }}
          className="flex h-full basis-1/3 flex-col justify-end bg-cover bg-no-repeat pl-4 pb-8"
        >
          <h3 className="font-semibold text-2xl">Easter night</h3>
          <p className="text-xl">Easter worship</p>
        </div>
        <div
          style={{ backgroundImage: `url(${WorshipPhoto.src})` }}
          className="flex h-full basis-1/3 flex-col justify-end bg-cover bg-no-repeat pl-4 pb-8"
        >
          <h3 className="font-semibold text-2xl">Evasu</h3>
          <p className="text-xl">Music & worship</p>
        </div>
        <div
          style={{ backgroundImage: `url(${WorshipPhoto.src})` }}
          className="flex h-full basis-1/3 flex-col justify-end bg-cover bg-no-repeat pl-4 pb-8"
        >
          <h3 className="font-semibold text-2xl">Graduation</h3>
          <p className="text-xl">Life ceremony</p>
        </div>
      </Carousel>
    </>
  );
};

export default ResourcesPage;
