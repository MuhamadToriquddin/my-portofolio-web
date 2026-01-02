import { useIsPhoneDevice } from "../../hooks/useIsPhoneDevice";
// import { Link } from "react-router";
import DecryptedText from "../ui/decrypted_text";
import { useIsScrolled } from "../../hooks/useIsScrolling";

const menuList = [
  { label: "AboutMe", url: "/about-me" },
  { label: "Works", url: "/works" },
  { label: "Article", url: "/article" },
  { label: "Contact", url: "/contact" },
];

function NavBar() {
  const isScrolled = useIsScrolled()
  const isPhone = useIsPhoneDevice();
    console.log(isPhone)
  return (
    <>
      {isPhone ? (
        <header className="w-full bg-blue-200 h-20 flex justify-between items-center fixed top-0 ">
          {/* <img src="" alt="logo" className="logo-navbar-desktop" /> */}
          <nav className="flex items-center justify-evenly w-[60%]">
            {menuList.map((item, i) => (
              <a key={i} className="menu-desktop" href={item.url}>
                {/* <DecryptedText text={item.label}></DecryptedText> */}
              </a>
            ))}
          </nav>
        </header>
      ) : (
        <header className={`w-full h-30 fixed flex bg-white justify-center items-center top-0 z-30 py-1 px-15 ${isScrolled?"shadow-md":" shadow-none"}`}>
          <nav className="flex justify-between w-full ">
            <h1 className="font-heading text-5xl">TQ<span className="font-heading text-2xl text-blue-500" >Code</span></h1>
            <li className="flex items-center justify-between w-[60%]  ">
              {menuList.map((item, i) => (
              <a key={i} className="text-3xl font-heading" href={item.url}>
                <DecryptedText
                  text={item.label}
                  maxIterations={20}
                  useOriginalCharsOnly
                  animateOn="hover"
                ></DecryptedText>
              </a>
            ))}
            <button>TES</button>
            <button>EN</button>
            </li>
          </nav>
          
        </header>
      )}
    </>
  );
}

export default NavBar;
