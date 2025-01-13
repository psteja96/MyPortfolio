import React from 'react';
import {Navbar} from "./Sections/Navbar.jsx";
import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Projects from "./Sections/Projects.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <div className="text-white">
                <Navbar/>
                <Hero/>
                <About/>
                <Projects/>
            </div>
        </main>
    )
}
export default App
