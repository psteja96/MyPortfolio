import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../Components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";


const Hero = () => {
    const isMobile=useMediaQuery({maxWidth:768})
    const controls=
        useControls("HackerRoom",
    {
        positionX:{
        value:2.5,
            min:-10,
                max:10,},
        positionY:{
            value:2.5,
            min:-10,
            max:10,},
        positionZ:{
            value:2.5,
            min:-10,
            max:10,},
        rotationX:{
            value:0,
            min:-10,
            max:10,
        },
        rotationY:{
            value:0,
            min:-10,
            max:10,
        },
        rotationZ:{
            value:0,
            min:-10,
            max:10,
        },
        scale:{
            value:1,
            min:0.1,
            max:10,

        }

    }
    );
    return (
        <section className="min-h-screen w-full flex flex-col relative">

            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
              <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                  Hi, am Teja <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Building Web and Security</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                      <Leva/>
              <Canvas className="w-full h-full">
                  <Suspense fallback={<CanvasLoader/>}>
              <PerspectiveCamera makeDefault position={[0,0,30]}/>
                  <HackerRoom //scale={0.07}
                            //  position={[0,0,0]}
                            //  rotation={[0,280,0]}
                      position={[1.7,-6.7,1.3]}
                       rotation={[0.2,3.1,0.0]}
                  scale={isMobile?0.07:0.1}/>
                      <ambientLight intensity={1} />
                      <directionalLight position={[10,10,10]} intensity={0.5} />
                  </Suspense>
              </Canvas>
            </div>
        </section>
    )
}
export default Hero;
