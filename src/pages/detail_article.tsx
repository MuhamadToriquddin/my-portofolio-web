import { useParams } from "react-router-dom";
import { getArticle } from "@/lib/get_article";

function DetailArticlePage() {
  const {id} = useParams()
  if (!id){
    return(
      <div></div>
    )
  }
  const data = getArticle(id)
  return (
    <article className="w-full pt-[150px] min-h-dvh space-y-5 bg-blue-400">
      
      <section className="space-y-2">
        
        <h2>{data.title}</h2>
        <p>{data.content}</p>
      </section>

    </article>
  );
};

export default DetailArticlePage;