
import { WorkWrapperDesktop } from "@/components/fragments/work_wrapper"
import { useState } from "react"
import MenuList from "@/components/fragments/menu_list"
import cnth from "@/assets/image/aboutme/card-cartoon.webp"

const categories = [
    {label:"All",value:"all"},
    {label:"CLI Tool",value:"clitool"},
    {label:"SIM",value:"sim"},
]

const works = [
    {image_head:cnth,image_body:["",""], title:"Tes",description:"",tech:["",""],type_label:"SIM",type_value:""},
    {image_head:"",image_body:["",""], title:"broo",description:"",tech:["",""],type_label:"CLI Tool",type_value:""},
    {image_head:"",image_body:["",""], title:"",description:"",tech:["",""],type_label:"",type_value:""},
]

function WorkPage(){
    const [category,setCategory]=useState<string>("all")  
      
    return (
        <section className="w-full pt-[150px] min-h-dvh space-y-5">
            <MenuList list={categories} func={setCategory} activeTab={category}/>
            <WorkWrapperDesktop works={works}/>
        </section>
    )
}

export default WorkPage