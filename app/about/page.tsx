import HomeImage from "@/public/homePhoto.png";
import holdingHands from "@/public/resources_2.png";
import AboutUsTheme from "./AboutUsTheme";
import AboutUsRecentMoments from "./AboutUsRecentMoments";
import Header from "@components/Header";
import localFont from "next/font/local";
import Image from "next/image";

const casualBrush = localFont({
  src: "../../assets/fonts/CasualBrush-Regular.ttf",
  display: "swap",
});

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Header backgroundImage={HomeImage}>
        <h1 className="flex px-8 font-medium sm:w-3/4 sm:px-0 sm:text-2xl">
          For Where two or three gather together as my followers, I am there
          among them
        </h1>
        <p
          className={`px-8 font-bold text-blue-300 sm:w-3/4 sm:px-0 sm:text-2xl lg:w-3/4`}
        >
          Matthew 18:20
        </p>
        <h1
          className={`${casualBrush.className} flex text-7xl px-4 uppercase md:text-9xl tracking-widest 2xl:text-[10rem]`}
        >
          I am there among them
        </h1>
      </Header>

      <div className="flex flex-col justify-center items-center xl:justify-around bg-white xl:flex-row">
        <Image src={holdingHands} alt="holding hands" />
        <div className="ml-10 flex flex-col justify-center gap-4 text-black flex-grow">
          <h1 className="text-2xl font-bold">
            Welcome to AASTU ECSF Fellowship!
          </h1>
          <p className="pr-8 xl:pr-0 xl:w-3/4 font-medium text-xl">
            We are a community of university Christian students who are
            committed to growing together spiritually. We believe that spiritual
            growth comes from connecting our faith to every aspect of our lives:
            our relationships, our studies, our jobs, and even our leisure
            activities. Through small group discussions, mentoring programs,
            Bible studies and regular prayer, we strive to create a space where
            we can deepen our faith together and help each other grow in Christ.
            Additionally, we are committed to being active contributors in the
            lives of our peers and our community, demonstrating an example of
            how faith impacts every aspect of life.
          </p>
          <h3 className="text-6xl font-black uppercase text-cyan-400">
            About Us
          </h3>
        </div>
      </div>

      <AboutUsTheme />
      <AboutUsRecentMoments />
    </>
  );
};

export default AboutUsPage;
