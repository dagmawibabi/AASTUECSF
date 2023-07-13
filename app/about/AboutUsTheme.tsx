import theme from "@/public/theme.png";
import grain from "@/public/grain.png"

const AboutUsTheme: React.FC = () => {
  return (
    <>
      <div
        className="h-full space-x-8 bg-cover bg-no-repeat px-6 flex items-center justify-center"
        style={{ backgroundImage: `url(${grain.src})` }}
      >
        <div
          className="hidden lg:flex h-[60%] w-[50%] items-end justify-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${theme.src})` }}
        >
          <p className="text-center text-[80px] font-extrabold text-purple-400 text-opacity-[45%]">
            LIVING IN THE KINGDOM OF GOD
          </p>
        </div>
        <div className="w-3/4 lg:w-[50%]">
          <p className="text-[80px] font-extrabold text-purple-400">
            THIS YEAR&apos;S THEME
          </p>
          <p className="text-2xl">
            We are a community of believers committed to the simple & incredible
            truth that every single person matters to God. No matter who you
            are, what you have been through, or what questions and doubts you
            have, God wants a relationship with you- and we do too!
          </p>
          <button className="my-2 w-[120px] rounded-3xl border border-white bg-transparent p-4 text-xl hover:border-purple-400 hover:text-purple-400 hover:underline">
            More
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUsTheme;
