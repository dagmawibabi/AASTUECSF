import { BookIcon, HeadphoneIcon, MultimediaIcon, MusicIcon } from '@components/Icons';
import EventsCarousel from './EventsCarousel';
import TabBar from '@components/TabBar';

const tabs = [
  {
    label: <h3 className="font-medium text-2xl text-[#918F8F]">All</h3>,
    children: <EventsCarousel />
  },
  {
    label: <MultimediaIcon />,
    children: <EventsCarousel />
  },
  {
    label: <BookIcon />,
    children: <EventsCarousel />
  },
  {
    label: <HeadphoneIcon />,
    children: <EventsCarousel />
  },
  {
    label: <MusicIcon />,
    children: <EventsCarousel />
  }
]

const RecentlyAdded: React.FC = () => {
  return (
    <TabBar tabs={tabs} name="Recently Added" bgColor="black" />
  );
};

export default RecentlyAdded;
