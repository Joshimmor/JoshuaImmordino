import React from 'react';
import logo from "../../../assets/logo.svg"
import {animated, useSpring} from "react-spring";
import '../Navigation.css';
//import {useSpring, animated} from "react-spring";

export default function Logo() {
    const logoEntry = useSpring({
        from:
                    {
                      transform:"translate3d(0,100%,0)"
                    },
    
                to:
                    { 
                      opacity:1,
                      transform:"translate3d(0,0,0)"},
                    delay:1500
    })
    
    return (
        <animated.img  style={logoEntry} className="logo" src={logo} alt="logo"/>
    )
}
