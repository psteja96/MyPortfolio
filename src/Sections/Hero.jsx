import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../Components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../Components/CanvasLoader.jsx";
//import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import Target from "../Components/target.jsx";
import {calculateSizes} from "../Constants/index.js";
import ReactLogo from "../Components/ReactLogo.jsx";
import Cube from "../Components/Cube.jsx";
import Rings from "../Components/Rings.jsx";



const Hero = () => {
    const isMobile=useMediaQuery({maxWidth:768})

    return (
        <section className="min-h-screen w-full flex flex-col relative">

            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
              <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                  Hi, am Teja <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Building Web Applications</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                    {/*<Leva/>*/}
              <Canvas className="w-full h-full">
                  <Suspense fallback={<CanvasLoader/>}>
              <PerspectiveCamera makeDefault position={[0,0,30]}/>
                  <HackerRoom
                      position={[1.7,-6.7,1.3]}
                       rotation={[0.2,3.1,0.0]}
                  scale={isMobile?0.07:0.1}/>
                      <group>
                          <Target position={[-13, -13, -10]} rotation={[0,Math.PI/5,0]}/>
                          <ReactLogo position={[12, 3, 0]}/>
                          <Cube position={[12.5, -7.5, 0]}/>
                          <Rings position={[-24, 10, 0]}/>

                      </group>
                      <ambientLight intensity={1} />
                      <directionalLight position={[10,10,10]} intensity={0.5} />
                  </Suspense>
              </Canvas>
            </div>
        </section>
    )
}
export default Hero;
