import { useIsScrolled } from "@/hooks/useIsScrolling"
import { ButtonBack } from "./button_back"
export function NavbarDetail(){
    const isScrolled = useIsScrolled()
    return(
        <header className={`w-full h-30 fixed flex bg-white  items-center top-0 z-30 py-1 px-15 ${isScrolled?"shadow-md":" shadow-none"}`}>
            <ButtonBack to="/work"/>
        </header>
    )
}