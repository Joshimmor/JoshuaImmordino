import React from 'react';
import Planetbg from "../../../assets/bglogo.svg";
import { useSpring, animated} from "react-spring";
import "./Planet.css"

export default function Planet() {
    const softwareEntry = useSpring({
        from:
        {
          transform:"translate3d(0,100%,0) rotate(180deg) scale(2.2)"
        },

    to:
        { 
          opacity:1,
          transform:"translate3d(0,55%,0) rotate(60deg) scale(2.5)"
        },
        delay:300
             
    })
    return (
       <animated.img  style={softwareEntry}  className="Planet" src={Planetbg}/>
    )
}
