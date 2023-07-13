import HomeImage from "@/public/homePhoto.png";
import holdingHands from "@/public/resources_2.png";
import AboutUsHeader from "./AboutUsHeader";
import AboutUsDescription from "./AboutUsDescription";
import AboutUsTheme from "./AboutUsTheme";
import AboutUsRecentMoments from "./AboutUsRecentMoments";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <AboutUsHeader
        backgroundImage={HomeImage}
        mainText="I am there among them"
        subText="For Where two or three gather together as my followers, I am there among them"
        source="Mathew 18:20"
      />

      <AboutUsDescription
        backgroundImage={holdingHands}
        title="Welcome to AASTU ECSF Fellowship"
        mainText="We are a community of university Christian students who are
        committed to growing together spiritually. We believe that spiritual
        growth comes from connecting our faith to every aspect of our lives:
        our relationships, our studies, our jobs, and even our leisure
        activities. Through small group discussions, mentoring programs,
        Bible studies and regular prayer, we strive to create a space where
        we can deepen our faith together and help each other grow in Christ.
        Additionally, we are committed to being active contributors in the
        lives of our peers and our community, demonstrating an example of
        how faith impacts every aspect of life."
        subText="ABOUT US"
      />

        <AboutUsTheme />
        <AboutUsRecentMoments />

     
    </>
  );
};

export default AboutUsPage;
