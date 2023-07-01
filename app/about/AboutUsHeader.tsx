import type { StaticImageData } from "next/image";
import localFont from "next/font/local";

type Props = {
  backgroundImage: StaticImageData;
  mainText: string;
  subText: string;
  source: string;
};

const casualBrush = localFont({
  src: "../../assets/fonts/CasualBrush-Regular.ttf",
  display: "swap",
});

const AboutUsHeader: React.FC<Props> = ({
  backgroundImage,
  mainText,
  subText,
  source
}) => {
  return (
    <div
      className="flex h-full flex-col justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="sm:ml-24 mt-24">
        <h1 className="px-8 font-medium sm:w-3/4 sm:px-0 lg:3/4 sm:text-2xl flex">
          {subText}
          
        </h1>
        <p className={`px-8 font-bold sm:w-3/4 sm:px-0 lg:w-3/4 sm:text-2xl text-blue-300`}>{source}</p>
        <h1
          className={`${casualBrush.className} mb-8 text-8xl uppercase sm:text-start sm:text-9xl md:tracking-wider 2xl:mb-24 2xl:text-[200px] w-full flex`}
        >
          {mainText}
        
        </h1>
      </div>
    </div>
  );
};

export default AboutUsHeader;
