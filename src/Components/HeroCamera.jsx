import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {easing} from "maath";


const HeroCamera = ({children}) => {
    const groupRef = useRef(null);
    useFrame((state,delta
    )=>{
    easing.dampE(groupRef.current.rotation,[-state.pointer.y/3,-state.pointer.x/5,0],0.25,delta)
    })
    return (
        <group ref={groupRef}>{children}</group>
    )
}
export default HeroCamera
