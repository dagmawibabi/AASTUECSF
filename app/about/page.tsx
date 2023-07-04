import Header from "@components/Header";
import HomeImage from "@/public/homePhoto.png";
import localFont from "next/font/local";

const casualBrush = localFont({
  src: "../../assets/fonts/CasualBrush-Regular.ttf",
  display: "swap",
});

const AboutPage: React.FC = () => {
  return (
    <Header backgroundImage={HomeImage}>
      <p className="text-3xl">
        For where two or three gather together as <br /> my followers, I am
        there among them
      </p>
      <h1
        className={`xl:text-9xl uppercase ${casualBrush.className} tracking-widest`}
      >
        I am there among <br /> <span className="border-cyan-400 border-b-4 p-4">them</span> <span className="text-cyan-400">Mattew 18:20</span>
      </h1>
    </Header>
  );
};

export default AboutPage;
