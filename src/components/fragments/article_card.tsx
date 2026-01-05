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
    navigate(`/article/${id}`);
  }
  return (
    <div className="border-4 h-[300px] group border-black relative" onClick={()=>handleClick(id)}>
      <div
        className={`w-full h-full group-hover:opacity-100 opacity-0 transition-all duration-300 bg-cover `}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <p className="absolute right-5 text-md md:text-xl top-5">{date_created}</p>

      <div className="absolute left-5 bottom-5 space-y-3 ">
        
        <h5 className="font-heading text-xl md:text-5xl z-10">
          {title}
        </h5>
        <p
          className={`px-4 font-paragraph text-xl md:text-xl py-1 w-fit bg-black text-white`}
        >
          {type}
        </p>
      </div>
    </div>
  );
}

export default ArticleCard;
