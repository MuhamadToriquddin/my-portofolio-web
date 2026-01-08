import { useNavigate } from "react-router-dom";

function WorkCard({
  id,
  image,
  type,
  title,
}: {
  id: string;
  image: string;
  type: string;
  title: string;
}) {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/works/${id}`);
  };
  return (
    <div
      onClick={() => handleClick(id)}
      className="select-none h-[300px] group hover:border-blue-500 pixel-border relative overflow-hidden "
    >
      {/* 1. Gambar Background */}
      <div
        className="absolute ease-in-out inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-0"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* 2. Layer Blur Overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

      {/* 3. Konten Teks */}
      <div className="absolute left-5 bottom-5 space-y-3 w-[600px] z-10">
        <h5 className="font-heading text-xl md:text-7xl group-hover:text-blue-500 text-black transition-all duration-500 drop-shadow-md">
          {title}
        </h5>
        <p className="px-4 font-paragraph text-xl gap-2 md:text-xl py-1 transition-all w-fit duration-300 bg-black text-white group-hover:bg-blue-500 group-hover:text-white">
          {type}
        </p>
      </div>
    </div>
  );
}

export default WorkCard;
