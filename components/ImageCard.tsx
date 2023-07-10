type Props = {
  src: string;
  name: string;
  desc?: string;
  className?: string;
};

const ImageCard: React.FC<Props> = ({ src, name, desc, className }) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={`bg-cover bg-no-repeat  flex flex-col justify-end pb-8 pl-4 h-[500px] ${className ?? ""}`}
    >
      <h3 className="text-2xl font-semibold text-white">{name}</h3>
      {desc ? <p className="text-xl text-white">{desc}</p> : null}
    </div>
  );
};

export default ImageCard;
