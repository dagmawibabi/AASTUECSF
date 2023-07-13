import type { StaticImageData } from "next/image";

type Props = {
  backgroundImage: StaticImageData;
  title: string;
  mainText: string;
  subText: string;
};

const AboutUsDescription: React.FC<Props> = ({
  backgroundImage,
  title,
  mainText,
  subText,
}) => {
  return (
    <>
      <div className="h-[80%] bg-white bg-cover bg-no-repeat lg:flex lg:items-center">
        <div className="hidden  h-full items-center justify-center lg:flex lg:w-1/2">
          <img src={backgroundImage.src} />
        </div>
        <div className="flex h-full items-center justify-center text-black sm:w-full md:w-full lg:w-1/2">
          <div className="lg:3/4 flex flex-col items-center space-y-8 px-8 font-medium sm:w-3/4 sm:px-0 sm:text-2xl">
            <h1 className="font-bold">{title}</h1>
            <p>{mainText}</p>
            <h1 className="text-[45px] font-extrabold text-blue-300">
              {subText}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsDescription;
