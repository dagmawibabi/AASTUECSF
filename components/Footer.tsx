import localFont from "next/font/local";
import FooterBG from "@/assets/images/footer_bg.png";
import Logo from "@/public/ecsfLogo.png";
import Image from "next/image";
import {
  FacebookIcon,
  GiftIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TelegramIcon,
  YoutubeIcon,
} from "./Icons";
import Link from "next/link";

const casualBrush = localFont({
  src: "../assets/fonts/CasualBrush-Regular.ttf",
  display: "swap",
});

type Props = {
  navLinks: linkDesc[];
};

type linkDesc = {
  href: string;
  text: string;
};

const Footer: React.FC<Props> = ({ navLinks }) => {
  return (
    <footer className="grid grid-rows-3 xl:h-[80%] xl:grid-cols-3 xl:grid-rows-none">
      <div
        style={{
          backgroundImage: `url(${FooterBG.src})`,
          backgroundSize: "100% 100%",
        }}
        className="flex w-screen flex-col items-center justify-center bg-no-repeat px-4 sm:px-12 xl:col-span-1 xl:w-auto"
      >
        <p className="text-2xl font-semibold">
          Be a Part of <br />
          <span className={`${casualBrush.className} text-7xl tracking-wide`}>
            Our Community
          </span>
        </p>
        <p className="font-semibold">
          Subscribe Now for Up-to-the-Minute Connections
        </p>
        <form
          className="mt-8 flex justify-between rounded-full border border-white sm:mt-14"
          method="POST"
        >
          <input
            type="text"
            placeholder="Enter Email here"
            className="bg-transparent p-4 uppercase outline-none placeholder:text-white"
          />
          <button
            type="submit"
            className="rounded-full bg-white p-2 text-sm font-bold uppercase text-cyan-400 sm:text-base md:p-4"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="col-span-3 row-span-2 flex flex-col items-center justify-between bg-[#333333] xl:col-span-2 xl:row-auto">
        <Image src={Logo} alt="AASTU ESCF Logo" className="self-start p-8" />
        <div className="grid place-items-center gap-14 xl:gap-4 xl:grid-cols-4">
          <div className="flex flex-col items-center gap-2">
            <MailIcon />
            <h1 className="text-2xl font-semibold">Email</h1>
            <p>info@aastuecsf.com</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <PhoneIcon />
            <h1 className="text-2xl font-semibold">Call</h1>
            <p>+251931838583</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LocationIcon />
            <h1 className="text-2xl font-semibold">location</h1>
            <p className="text-center">
              Addis Ababa Kilinto, AASTU MKC Church condominum{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <GiftIcon />
            <h1 className="text-2xl font-semibold">Give</h1>
            <p>Different options to contribute</p>
          </div>
        </div>

        <div className="mt-10 space-x-4 px-10 xl:px-0">
          {navLinks.map((link, i) => {
            if (i >= navLinks.length - 1) {
              return (
                <Link
                  key={i}
                  href={link.href}
                  className="text-xl font-bold decoration-cyan-400 underline-offset-8 decoration-4 hover:underline"
                >
                  {link.text}
                </Link>
              );
            }

            return (
              <>
                <Link
                  key={i}
                  href={link.href}
                  className="inline-block text-xl font-bold decoration-cyan-400 underline-offset-8 decoration-4 hover:underline"
                >
                  {link.text}
                </Link>
                <p key={100 + i} className="inline-block text-2xl">
                  /
                </p>
              </>
            );
          })}
        </div>
        <div className="mt-10 space-y-2 text-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-light">Join Us Every Wednesday</p>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Wednesday at 6 pm to 8 pm at kilinto condominum church
          </h3>
        </div>
        <div className="my-10 flex gap-8">
          <Link href="#">
            <TelegramIcon className="hover:fill-cyan-400" />
          </Link>
          <Link href="#">
            <YoutubeIcon className="hover:fill-cyan-400" />
          </Link>
          <Link href="#">
            <InstagramIcon className="hover:fill-cyan-400" />
          </Link>
          <Link href="#">
            <FacebookIcon className="hover:fill-cyan-400" />
          </Link>
        </div>
        <div className="flex w-full justify-between bg-[#191919] p-8">
          <p className="uppercase">
            {"\u24B8"}2023 AASTU ECSF. All rights reserved
          </p>
          <Link
            href="#"
            className="decoration-cyan-400 underline-offset-8 decoration-4 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
