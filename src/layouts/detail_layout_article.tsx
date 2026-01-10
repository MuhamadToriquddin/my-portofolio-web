import { Outlet } from "react-router-dom";
import { NavbarDetail } from "@/components/fragments/navbar_detail";
function DetailLayoutArticle(){
    return(
        <>
            <NavbarDetail destination="/articles"/>
            <main>
                <Outlet/>
            </main>

        </>
    )
}

export default DetailLayoutArticle