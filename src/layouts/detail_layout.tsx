import { Outlet } from "react-router-dom";
import { NavbarDetail } from "@/components/fragments/navbar_detail";
function DetailLayout(){
    return(
        <>
            <NavbarDetail/>
            <main>
                <Outlet/>
            </main>

        </>
    )
}

export default DetailLayout