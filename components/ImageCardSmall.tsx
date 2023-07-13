type Props = {
    src: string;
    name: string;
    desc?: string;
    className?: string;
  };
  
  const ImageCardSmall: React.FC<Props> = ({ src, name, desc, className }) => {
    return (
      <div
        style={{ backgroundImage: `url(${src})` }}
        className={`bg-cover bg-no-repeat ${className} rounded-md flex flex-col justify-end pb-8 pl-4 h-[600px]`}
      >
        <h3 className="text-2xl font-semibold">{name}</h3>
        {desc ? <p className="text-xl">{desc}</p> : null}
      </div>
    );
  };
  
  export default ImageCardSmall;
  