
import {myProjects} from "../Constants/index.js";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import DemoComputer from "../Components/DemoComputer.jsx";

const totalProjects = myProjects.length;
const Projects = () => {

    const [selectedProject, setSelectedProject] = useState(0);
    const currentProject = myProjects[selectedProject];
    const handleNav=(direction)=>{
    setSelectedProject((prevIndex)=>{
        if(direction==='previous'){
        return  prevIndex===0?totalProjects-1:prevIndex-1;
        }
        else{
            return prevIndex===totalProjects-1?0:prevIndex+1;
        }
    });
    }
    return (
        <section className="c-space my-20">
            <p className="head-text">My Work 🛠️</p>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96  object-cover rounded-xl"/>
                    </div>
                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={myProjects[1].logoStyle}>
                    <img src={currentProject.logo} alt="logo" className="w-10 h-10  shadow-sm"/>
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subdesc}</p>
                    </div>
                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map( (tag,index)=>(
                                <div key={index} className="tech-logo">
                                <img src={tag.path} alt={tag.name}/>
                                </div>
                                ))}
                        </div>
                        <a className="flex items-center gap-2 cursor pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer">
                            <p>Get Code Repo</p>
                            <img src={import.meta.env.BASE_URL+"/dist/src/assets/arrow-up.png"} className="w-3 h-3" alt="arrow"/>
                        </a>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => {
                            handleNav('previous')
                        }}>
                            <img src={import.meta.env.BASE_URL+"/dist/src/assets/left-arrow.png"} className="w-4 h-4" alt="right left"/>
                        </button>
                        <button className="arrow-btn" onClick={() => {
                            handleNav('next')
                        }}>
                            <img src={import.meta.env.BASE_URL+"/dist/src/assets/right-arrow.png"} className="w-4 h-4" alt="right arrow"/>
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:w-full">
                    <Canvas>
                        <ambientLight intensity={3.3}/>
                            <directionalLight position={[10, 10, 5]} intensity={0.5}/>
                        <Center>
                        <Suspense fallback={CanvasLoader}>
                            <group scale={2 } position={[0,-3,0]} rotation={[0, -0.1, 0]}>
                                <DemoComputer texture={currentProject.texture}/>
                            </group>
                        </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI /2} enableZoom={false}/>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
export default Projects
