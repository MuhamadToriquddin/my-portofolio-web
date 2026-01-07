import { useState } from "react"

export function ImageContainer(
    {img}:{img:string[]}
){
    const [selected,setSelected]=useState<number>(0)
    const onClick = (index:number)=>{
        setSelected(index)
    }
    return(
        <div className=" h-fit border-2 border-black space-y-2 pl-[20px]">
            <div className="aspect-auto w-[300px] h-[150px]">
                <img src={img[selected]} alt="main image" className="object-cover"/>
            </div>
            <div className="flex gap-2">
                {img.map((item,i)=>(
                    <div className="h-[37px] w-[75px] aspect-auto" onClick={()=>onClick(img.indexOf(item))}>
                        <img src={item[i-1]} alt="option image" className="object-cover"/>
                    </div>
                ))}
                <div></div>
            </div>
        </div>
    )
}