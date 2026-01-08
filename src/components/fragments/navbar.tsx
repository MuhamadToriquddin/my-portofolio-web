import { useIsPhoneDevice } from "../../hooks/useIsPhoneDevice";
import { Link } from "react-router-dom";
import DecryptedText from "../ui/decrypted_text";
import { useIsScrolled } from "../../hooks/useIsScrolling";
import ButtonSound from "../ui/button_sound";
import { useLocation } from "react-router-dom";

const menuList = [
  { label: "AboutMe", url: "/about-me", value: "about-me" },
  { label: "Works", url: "/works", value: "works" },
  { label: "Articles", url: "/articles", value: "articles" },
  { label: "Contact", url: "/contact", value: "contact" },
];

function NavBar() {
  const isScrolled = useIsScrolled();
  const isPhone = useIsPhoneDevice();
  const location = useLocation();

  return (
    <>
      {isPhone ? (
        <header className="w-full bg-blue-200 h-20 flex justify-between items-center fixed top-0 ">
          {/* <img src="" alt="logo" className="logo-navbar-desktop" /> */}
          <nav className="flex items-center justify-evenly w-[60%]">
            {menuList.map((item, i) => (
              <a key={i} className="" href={item.url}>
                {/* <DecryptedText text={item.label}></DecryptedText> */}
              </a>
            ))}
          </nav>
        </header>
      ) : (
        <header
          className={`w-full h-30 fixed flex bg-white justify-center items-center top-0 z-30 py-1 px-15 ${
            isScrolled ? "shadow-md" : " shadow-none"
          }`}
        >
          <nav className="flex justify-between w-full ">
            <h1 className="font-heading text-5xl">
              TQ
              <span className="font-heading text-2xl text-blue-500">Code</span>
            </h1>

            <li className="flex items-center justify-between w-[60%]  ">
              {menuList.map((item, i) => (
                <Link
                  key={i}
                  to={item.url}
                  className={`
    relative text-3xl font-heading transition-all duration-300 pr-6 flex items-center
    ${
      item.value === location.pathname.split("/")[1]
        ? "text-black"
        : "text-slate-500 hover:text-slate-600"
    }

    
    after:content-[''] after:absolute after:left-[-20px] 
    after:w-3 after:h-3 after:bg-black after:rounded-full
    
    /* Logika Animasi & Muncul */
    after:transition-all after:duration-500 after:ease-in-out
    ${
      item.value === location.pathname.split("/")[1]
        ? "after:opacity-100 after:scale-100 after:animate-pulse"
        : "after:opacity-0 after:scale-0"
    }
  `}
                >
                  <DecryptedText
                    text={item.label}
                    maxIterations={20}
                    useOriginalCharsOnly
                    animateOn="hover"
                  />
                </Link>
              ))}
              <ButtonSound />
            </li>
          </nav>
        </header>
      )}
    </>
  );
}

export default NavBar;
