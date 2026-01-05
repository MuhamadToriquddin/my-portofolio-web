
import { useState } from "react"
import { articles } from "@/data/articles"
import MenuList from "@/components/fragments/menu_list"
import { articleCategories } from "@/data/categories"
import { ArticleWrapper } from "@/components/fragments/article_wrapper"

function ArticlePage(){
    const [category,setCategory]=useState<string>("All")  
    const articlesShow = articles.map((item)=>({
        id:item.id,
        image: item.image,
        type: item.type,
        title: item.title,
        date_created: item.date_created,
    }))
    return (
        <section className="w-full pt-[150px] min-h-dvh space-y-5">
            <MenuList list={articleCategories} func={setCategory} activeTab={category}/>
            <ArticleWrapper article={articlesShow}/>
        </section>
    )
}

export default ArticlePage