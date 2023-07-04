import type { StaticImageData } from "next/image";

type Props = {
  backgroundImage: StaticImageData;
  children: React.ReactNode;
};

const Header: React.FC<Props> = ({ backgroundImage, children }) => {
  return (
    <div
      className="flex h-full flex-col justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="sm:ml-24">{children}</div>
    </div>
  );
};

export default Header;
