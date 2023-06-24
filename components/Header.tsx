import type { StaticImageData } from "next/image";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

type Props = {
  backgroundImage: StaticImageData;
  mainText: string;
  subText: string;
};

const casualBrush = localFont({
  src: "../public/CasualBrush-Regular.ttf",
  display: "swap",
});

const montserrat = Montserrat({ subsets: ["latin"], weight: "500" });

const Header: React.FC<Props> = ({ backgroundImage, mainText, subText }) => {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="sm:ml-24">
        <h1
          className={`${casualBrush.className} text-8xl sm:text-9xl 2xl:text-[400px] uppercase md:tracking-wider mb-8 2xl:mb-24 text-center sm:text-start`}
        >
          {mainText}
        </h1>
        <p className={`${montserrat.className} px-8 sm:px-0 sm:w-3/4 lg:w-1/2`}>{subText}</p>
      </div>
    </div>
  );
};

export default Header;
