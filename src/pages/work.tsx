
import { WorkWrapper } from "@/components/fragments/work_wrapper"
import { useState } from "react"
import MenuList from "@/components/fragments/menu_list"
import { workCategories } from "@/data/categories"


function WorkPage(){
    const [category,setCategory]=useState<string>("All")  
      
    return (
        <section className="w-full pt-[150px] min-h-dvh space-y-5">
            <MenuList list={workCategories} func={setCategory} activeTab={category}/>
            <WorkWrapper type={category}/>
        </section>
    )
}

export default WorkPage