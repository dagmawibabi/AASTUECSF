import theme from "@/public/theme.png";
import grain from "@/public/grain.png";

const AboutUsTheme: React.FC = () => {
  return (
    <div
      className="flex items-center justify-center gap-8 bg-cover bg-no-repeat px-6 py-24"
      style={{ backgroundImage: `url(${grain.src})` }}
    >
      <div
        className="hidden h-[41rem] w-[50rem] items-end bg-cover bg-no-repeat lg:flex"
        style={{ backgroundImage: `url(${theme.src})` }}
      >
        <p className="py-4 text-center text-7xl font-extrabold text-purple-400 text-opacity-[45%]">
          LIVING IN THE KINGDOM OF GOD
        </p>
      </div>
      <div className="space-y-4 lg:w-1/2">
        <p className="text-4xl font-extrabold text-purple-400 md:text-7xl">
          THIS YEAR&apos;S THEME
        </p>
        <p className="text-2xl">
          We are a community of believers committed to the simple & incredible
          truth that every single person matters to God. No matter who you are,
          what you have been through, or what questions and doubts you have, God
          wants a relationship with you- and we do too!
        </p>
        <button className="my-2 w-[120px] rounded-3xl border border-white bg-transparent p-4 text-xl hover:border-purple-400 hover:text-purple-400 hover:underline">
          More
        </button>
      </div>
    </div>
  );
};

export default AboutUsTheme;
