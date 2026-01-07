import WorkCard from "./work_card"

interface worksProps{
    id:string,
    image_head:string,
    image_body:string[], 
    title:string,
    description:string,
    tech:string[],
    type:string,
}

export function WorkWrapperDesktop(
    {works}:{works:worksProps[]}
){
    return(
        <div className="w-full grid grid-cols-1 md:grid-cols-2 px-5 gap-5">
            {works.map((item,i)=>(
                <WorkCard key={i} title={item.title} image={item.image_head} id={item.id} type={item.type}/>
            ))}
        </div>
    )
}