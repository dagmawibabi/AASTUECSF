import GrainBG from "@/assets/images/grain.png";
import TabBar from "./TabBar";
import type { Tab } from "./TabBar";

type Props = {
  title?: string;
  tabs: Tab[];
};

const UpcomingEvents: React.FC<Props> = ({
  title = "Upcoming Events",
  tabs,
}) => {
  return (
    <TabBar
      tabs={tabs}
      name={title}
      containerStyles={{
        backgroundImage: `url(${GrainBG.src})`,
        overflowX: "scroll",
      }}
    />
  );
};

export default UpcomingEvents;
