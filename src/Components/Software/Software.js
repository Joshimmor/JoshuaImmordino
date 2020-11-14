import React from 'react';
import {useSpring, animated} from "react-spring";
import "./Software.css";

export default function Software() {
    const softwareEntry = useSpring({
        from:{
            opacity:0,
            transform:"translateY(200px)"
        },
        to:{
            opacity:1,
            transform:"translateY(0)"
        } 
    })
    return (
        <animated.div style={softwareEntry} className="software-container">
            
        </animated.div>
    )
}
