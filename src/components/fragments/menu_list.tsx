interface listProps{
    label:string,
    value:string
}

function MenuList(
 {list,
 func,
 activeTab}:{list:listProps[],
 func:(val:string)=>void,
 activeTab:string}   
){
    return(
        <li className="flex space-x-3 px-10">
            {list.map((item,i)=>(
                <button key={i} onClick={()=>func} className={`font-heading text-3xl ${activeTab == item.value?"text-black":"text-slate-500 hover:text-slate-600"}`}>
                    [{item.label}]
                </button>
            ))}
        </li>
    )
}

export default MenuList