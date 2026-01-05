

function WorkCard({
  image,
  type,
  title,
}: {
  image: string;
  type: string;
  title: string;
}) {
  return (
    <div className="border-4 h-[300px] group border-black relative">
      <div className={`w-full h-full group-hover:opacity-100 opacity-0 transition-all duration-300 bg-cover `} style={{backgroundImage:`url(${image})`}} ></div>
      <div className="absolute left-5 bottom-5 space-y-3 ">
        <p
          className={`px-4 font-paragraph text-xl   md:text-xl py-1 group-hover:md:text-3xl transition-all duration-300 ${
            type == "CLI Tool"
              ? "bg-yellow-400 text-white"
              : type == "SIM"
              ? "bg-blue-400 text-white"
              : "bg-red-400 text-white"
          }`}
        >
          {type}
        </p>
        <h5 className="font-heading text-xl md:text-4xl group-hover:md:text-6xl transition-all duration-300 z-10">{title}</h5>
      </div>
    </div>
  );
}

export default WorkCard;
