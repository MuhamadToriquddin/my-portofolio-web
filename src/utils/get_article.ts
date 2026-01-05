import { articles } from "@/data/articles"

export function getArticle(id:string){
    const choosed = articles.filter((item)=>item.id == id)
    return choosed[0]
}