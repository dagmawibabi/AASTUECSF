import Header from "@components/Header";
import GivingsHeaderImage from "@/assets/images/givings.png";
import localFont from "next/font/local";
import KingImage from "@/assets/images/king.png";
import Image from "next/image";
import GrainBG from "@/assets/images/grain.png";
import GiveIcon from "@/assets/images/give.png";
import BankIcon from "@/assets/images/bank-transfer.png";
import ChurchIcon from "@/assets/images/church.png";
import BlackGrain from "@/assets/images/black-grain.png";
import GivingsCarousel from "./givingsCarousel";

const casualBrush = localFont({
  src: "../../assets/fonts/CasualBrush-Regular.ttf",
  display: "swap",
});

const GivingsPage: React.FC = () => {
  return (
    <>
      <Header backgroundImage={GivingsHeaderImage} className="px-8">
        <h1
          className={`${casualBrush.className} mb-8 text-8xl md:text-9xl uppercase tracking-widest lg:text-[15rem] xl:text-[15rem]`}
        >
          Givings
        </h1>
        <p className="font-medium text-white sm:w-3/4 lg:w-1/2 lg:text-xl">
          If you&apos;re looking to give a gift or make a donation to AASTU ECSF,
          there are several ways to do so.By giving to AASTU ECSF, you are
          helping us to achieve our mission of helping to achieve what Jesus
          wants, and making a positive impact on the community.
        </p>
      </Header>
      <div className="flex flex-col items-center justify-between gap-8 bg-gray-200 p-12 md:flex-row">
        <div className="space-y-4 text-black">
          <h2 className={`text-8xl md:text-9xl ${casualBrush.className}`}>
            Give, and it will be given to you.
          </h2>
          <p className="font-medium md:w-1/2">
            A good measure, pressed down, shaken together and running over, will
            be poured into your lap. For with the measure you use, it will be
            measured to you.
          </p>
          <p className="font-semibold">Luke 6:38</p>
        </div>
        <Image src={KingImage} alt="Jesus" />
      </div>
      <div
        style={{ backgroundImage: `url(${GrainBG.src})` }}
        className="grid gap-4 gap-y-14 md:gap-y-36 p-14 md:grid-cols-2 lg:grid-cols-3"
      >
        <div>
          <div className="mb-8 flex flex-col items-center text-center">
            <h3 className="inline-block w-1/2 border-2 border-white bg-transparent px-4 text-3xl font-extrabold uppercase">
              Ways to
            </h3>
            <h3 className="inline-block w-1/2 bg-white px-4 text-3xl font-extrabold text-black">
              Give
            </h3>
          </div>
          <p>
            Thank you for your willingness to give and be blessed in our
            fellowship. We understand that everyone has different abilities and
            resources to contribute.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src={GiveIcon} alt="Give icon" width={50} />
          <h1 className="text-center text-2xl font-bold text-white">
            Give In Person
          </h1>
          <p className="px-8 text-xl text-white">
            You can securely drop off your gift in the form of a check or cash
            in person at our location. Contact us on <br /> AASTU
            ECSF:+251907743926
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src={BankIcon} alt="Bank icon" width={50} />
          <h1 className="text-center text-2xl font-bold text-white">
            Transfer To Bank Account
          </h1>
          <p className="px-8 text-xl text-white">
            Easily transfer your gift funds to our CBE bank account with just a
            few simple steps. Our bank account number is:
            <br /> AMANUEL KETEMA AND/OR SELIHOM DEMEKE: 1000510257492
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src={BankIcon} alt="Bank icon" width={50} />
          <h1 className="text-center text-2xl font-bold text-white">
            Donate Items
          </h1>
          <p className="px-8 text-xl text-white">
            Whether it&apos;s clothing, bedding, or household items, these donations
            can make a big difference in the lives of those who receive them.
            Contact us on <br /> AASTU ECSF:+251907743926
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src={ChurchIcon} alt="Bank icon" width={50} />
          <h1 className="text-center text-2xl font-bold text-white">
            Give In Service
          </h1>
          <p className="px-8 text-xl text-white">
            During our weekly services, you can give by placing your gift in the
            offering bucket at our location.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src={ChurchIcon} alt="Bank icon" width={50} />
          <h1 className="text-center text-2xl font-bold text-white">
            Gift Random
          </h1>
          <p className="px-8 text-xl text-white">
            If you&apos;re looking for a unique and unexpected gift, consider giving
            something completely random. Contact us on AASTU ECSF:
            <br />
            +251907743926
          </p>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${BlackGrain.src})` }}
        className="space-y-4 md:space-y-14 px-4 py-8 lg:px-8 lg:py-24"
      >
        <div className="space-y-4">
          <h1
            className={`text-center text-7xl ${casualBrush.className} uppercase tracking-wider text-cyan-400`}
          >
            Photograhpic Journey
          </h1>
          <h4 className="text-center text-xl font-semibold uppercase">
            Visualizing The Impact Of Your Giving
          </h4>
        </div>
        <GivingsCarousel />
      </div>
    </>
  );
};

export default GivingsPage;
