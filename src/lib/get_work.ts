import { works } from "@/data/works"

export function getWorks(id:string){
    const choosed = works.filter((item)=>item.id == id)
    return choosed[0]
}