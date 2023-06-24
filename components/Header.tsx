import type { StaticImageData } from "next/image";
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

const Header: React.FC<Props> = ({ backgroundImage, mainText, subText }) => {
  return (
    <div
      className="flex h-full flex-col items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="sm:ml-24">
        <h1
          className={`${casualBrush.className} mb-8 text-center text-8xl uppercase sm:text-start sm:text-9xl md:tracking-wider 2xl:mb-24 2xl:text-[400px]`}
        >
          {mainText}
        </h1>
        <p className="px-8 font-medium sm:w-3/4 sm:px-0 lg:w-1/2">{subText}</p>
      </div>
    </div>
  );
};

export default Header;
