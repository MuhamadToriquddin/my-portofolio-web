import { useState } from "react"

export function ImageContainer(
    {img}:{img:string[]}
){
    const [selected,setSelected]=useState<number>(0)
    const onClick = (index:number)=>{
        setSelected(index)
    }
    return(
        <div className=" h-fit  space-y-2 pl-[20px]">
            <div className="aspect-auto border-2 border-black w-full h-[300px]">
                <img src={img[selected]} alt="main image" className="object-cover"/>
            </div>
            <div className=" gap-2 grid grid-cols-4  w-fit">
                {img.map((item,i)=>(
                    <div className="h-[80px] border-2 border-black aspect-auto" onClick={()=>onClick(img.indexOf(item))}>
                        <img src={item[i-1]} alt="option image" className="object-cover"/>
                    </div>
                ))}
                <div></div>
            </div>
        </div>
    )
}