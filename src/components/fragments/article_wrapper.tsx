
import ArticleCard from "./article_card"

interface articleProps{
    id:string,
    image:string,
    type:string,
    title:string,
    date_created:string
}

export function ArticleWrapper(
    {article}:{article:articleProps[]}
){
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
            {article.map((item,i)=>(
                <ArticleCard key={i} id={item.id} title={item.title} image={item.image} type={item.type} date_created={item.date_created}/>
            ))}
        </div>
    )
}