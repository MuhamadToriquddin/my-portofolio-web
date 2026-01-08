import { Outlet } from "react-router-dom";
import { NavbarDetail } from "@/components/fragments/navbar_detail";
function DetailLayoutWork(){
    return(
        <>
            <NavbarDetail destination="/works"/>
            <main>
                <Outlet/>
            </main>

        </>
    )
}

export default DetailLayoutWork