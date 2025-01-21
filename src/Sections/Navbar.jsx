import {useState} from "react";
import {navLinks} from "../Constants/index.js";


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu=()=>{
        setIsOpen((prevState) => !prevState);
    }

    const NavItems=()=>{
        return (
          <ul className="nav-ul">
              {navLinks
                  .map(({id,href,name})=>(
                   <li key={id} className="nav-li">
                       <a className="nav_li_a" onClick={()=>{}} href={href}>{name}</a>
                   </li>
                       ))}
          </ul>
        )
    }
    return (
        <header className="fixed top-1 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                    Teja
                </a>
                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex " aria-label="Toggle menu" >
                    <img src={isOpen?"src/assets/close.svg":"src/assets/menu.svg"} alt="toggle" className="w-6 h-6" />

                </button>
                <nav className="sm:flex hidden">
                    <NavItems/>
                </nav>
            </div>
        </div>
            <div className={`nav-sidebar ${isOpen?'max-h-screen':'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
            </header>
    )
}
