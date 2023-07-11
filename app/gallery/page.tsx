import Header from "@components/Header";
import HomeImage from "@/public/homePhoto.png";
import localFont from "next/font/local";
import GalleryTeams from "./GalleryTeams";
import GalleryCarousel from "./GalleryCarousel";

const casualBrush = localFont({
  src: "../../assets/fonts/CasualBrush-Regular.ttf",
  display: "swap",
});

const GalleryPage: React.FC = () => {
  return (
    <>
      <Header backgroundImage={HomeImage}>
        <h1
          className={`${casualBrush.className} mb-24 text-center text-8xl uppercase tracking-widest text-white sm:text-start sm:text-9xl 2xl:text-[15rem]`}
        >
          Gallery
        </h1>
        <p className="px-8 font-medium text-white sm:w-3/4 sm:px-0 lg:w-1/2 lg:text-xl">
          Welcome to the ECSF Events Calendar! Here, you can find a wide range
          of events hosted by teams from across the ECSF. You can explore all
          the events happening in and make your plans for the future.
        </p>
      </Header>
      <GalleryCarousel />
      <GalleryTeams />
    </>
  );
};

export default GalleryPage;
