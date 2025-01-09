import React from 'react';
import {Navbar} from "./Sections/Navbar.jsx";
import Hero from "./Sections/Hero.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <div className="text-white">
                <Navbar/>
                <Hero/>
            </div>
        </main>
    )
}
export default App
