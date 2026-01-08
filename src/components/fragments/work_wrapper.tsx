import WorkCard from "./work_card"
import { getWorksByFilter } from "@/lib/get_work"

export function WorkWrapper(
    {type}:{type:string}
){
    const filtered_works = getWorksByFilter(type)
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
            {filtered_works.map((item,i)=>(
                <WorkCard key={i} title={item.title} image={item.image_head} id={item.id} type={item.type}/>
            ))}
        </div>
    )
}