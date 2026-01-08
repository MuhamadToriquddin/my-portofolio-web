import { works } from "@/data/works"

export function getWorks(id:string){
    const choosed = works.filter((item)=>item.id == id)
    return choosed[0]
}

export function getWorksByFilter(type:string){
    if (type == "All"){
        return works
    }
    const choosed = works.filter((item)=>item.type == type)
    return choosed
}