import {useState} from "react";


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu=()=>{
        setIsOpen((prevState) => !prevState);
    }

    const NavItems=()=>{
        return (
          <ul className="nav-ul">
              {['Home','About','Projects','Contacts'].map((item,index)=>(
                  <li  className="nav-li" key={index}><a href="/">{item}</a></li>
                  )

              )}
          </ul>
        )
    }
    return (
        <header className="fixed top-1 left-0 right-0 z-50 bg-black/90">Navbar
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                    Teja
                </a>
                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:flex hidden" aria-label="Toggle menu" >
                    <img src={isOpen?"assets/close.svg":"assets/menu.svg"} alt="toggle" className="w-6 h-6" />

                </button>
                <nav className="sm:flex hidden">
                    <NavItems/>
                </nav>
            </div>
        </div>
            </header>
    )
}
