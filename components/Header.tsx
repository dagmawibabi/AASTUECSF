import type { StaticImageData } from "next/image";

type Props = {
  backgroundImage: StaticImageData;
  children: React.ReactNode;
  className?: string;
};

const Header: React.FC<Props> = ({ backgroundImage, children, className }) => {
  return (
    <div
      className={`flex h-full flex-col justify-center bg-cover bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="sm:ml-24">{children}</div>
    </div>
  );
};

export default Header;
