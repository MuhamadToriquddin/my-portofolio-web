import { useNavigate } from "react-router-dom";

function ArticleCard({
  id,
  image,
  type,
  title,
  date_created,
}: {
  id:string,
  image: string;
  type: string;
  title: string;
  date_created: string;
}) {
  const navigate = useNavigate()
  const handleClick = (id:string)=>{
    navigate(`/articles/${id}`);
  }
  return (
    <div
      onClick={() => handleClick(id)}
      className="select-none h-[300px] group  pixel-border relative overflow-hidden "
    >
      {/* 1. Gambar Background */}
      <div
        className="absolute ease-in-out inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105 "
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* 2. Layer Blur Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[10px] group-hover:backdrop-blur-[0px] opacity-100 group-hover:opacity-100 transition-all duration-300"></div>
      <p className="absolute right-5 top-5 font-paragraph text-3xl text-background">{date_created}</p>
      {/* 3. Konten Teks */}
      <div className="absolute left-5 bottom-5 space-y-3 w-[600px] z-10">
        <h5 className="font-heading text-xl md:text-7xl text-background transition-all duration-500 drop-shadow-md">
          {title}
        </h5>
        <p className="px-4 font-paragraph text-xl gap-2 md:text-xl py-1 transition-all w-fit duration-300 bg-foreground text-background ">
          {type}
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
