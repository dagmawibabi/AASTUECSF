import graindark from "@/public/grain_darker.png";
import EventsCarousel from "./EventsCarousel";

const AboutUsRecentMoments: React.FC = () => {
  return (
    <>
      <div
        className="h-full bg-cover bg-no-repeat p-8"
        style={{ backgroundImage: `url(${graindark.src})` }}>
            <div className="w-full">
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold">RECENT MOMENTS</h1>
                    <div className="w-full lg:w-[40%] flex justify-between">
                        <p className="hover:text-purple-400 hover:underline">All team</p>
                        <p className="hover:text-purple-400 hover:underline">Worship</p>
                        <p className="hover:text-purple-400 hover:underline">Praying</p>
                        <p className="hover:text-purple-400 hover:underline">I4U</p>
                        <p className="hover:text-purple-400 hover:underline">Media</p>
                    </div>
                </div>

                <div className="mt-[5%]">
                    <EventsCarousel />
                </div>
            </div>
        </div>
    </>
  );
};

export default AboutUsRecentMoments;
