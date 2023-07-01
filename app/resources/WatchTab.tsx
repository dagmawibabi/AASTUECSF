import Tekeblonal from "@/assets/images/tekeblonal.png";
import Worship from "@/assets/images/worship.png";
import HeroImage from "@/assets/images/heroImage.png";
import WorshipPhoto from "@/public/worshipPhoto.png";
import ImageCard from "@components/ImageCard";

const cards = [
  {
    src: Tekeblonal.src,
    name: "Tekeblonal",
  },
  {
    src: Worship.src,
    name: "Worship with daneel",
  },
  {
    src: WorshipPhoto.src,
    name: "Q & A",
  },
  {
    src: HeroImage.src,
    name: "What is the",
  },
];

const WatchTab: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 lg:gap-40 px-10">
      {cards.map((card, index) => {
        return <ImageCard key={index} {...card} />;
      })}
    </div>
  );
};

export default WatchTab;
