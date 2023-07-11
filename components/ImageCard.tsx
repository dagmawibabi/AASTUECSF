type Props = {
  src: string;
  name?: string;
  desc?: string;
  className?: string;
};

const ImageCard: React.FC<Props> = ({ src, name, desc, className }) => {
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={`flex h-[500px] flex-col justify-end bg-cover bg-no-repeat pb-8 pl-4 ${
        className ?? ""
      }`}
    >
      {name ? <h3 className="text-2xl font-semibold text-white">{name}</h3> : null}
      {desc ? <p className="text-xl text-white">{desc}</p> : null}
    </div>
  );
};

export default ImageCard;
