import React from 'react';
import Back from "../../../assets/back.svg";
import "./backButton.css"
import { animated,useSpring } from 'react-spring';

export default function BackButton() {
    const backEntry = useSpring({
        from:
                    {
                      transform:"translate3d(0,-100%,0)"
                    },
    
                to:
                    { 
                      opacity:1,
                      transform:"translate3d(0,0,0)"},
                    delay:200
    })
    return (
            <animated.img style={backEntry} src={Back} className="back" />
    )
}
