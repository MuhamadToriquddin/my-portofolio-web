import { useNavigate } from "react-router-dom";

function WorkCard({
  id,
  image,
  type,
  title,
}: {
  id:string,
  image: string;
  type: string;
  title: string;
}) {
  const navigate = useNavigate()
  const handleClick = (id:string)=>{
    navigate(`/works/${id}`);
  }
  return (
    <div onClick={()=>handleClick(id)}  className="border-4 h-[300px] group border-black relative">
      <div
        className={`w-full h-full group-hover:opacity-100 opacity-0 transition-all duration-300 bg-cover `}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute left-5 bottom-5 space-y-3 w-[600px] ">
        <h5 className="font-heading text-xl md:text-7xl z-10">{title}</h5>
        <p
          className={`px-4 font-paragraph text-xl gap-2 md:text-xl py-1  transition-all w-fit duration-300 bg-black text-white`}
        >
          {type}
        </p>
      </div>
    </div>
  );
}

export default WorkCard;
