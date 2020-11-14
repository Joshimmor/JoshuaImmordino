import React,  { useLayoutEffect, useRef }  from 'react'
import './Home.css';
import EmailForm from "./Form/EmailForm.js"
import { useSpring, animated} from "react-spring";
import ball from "../../assets/ball.svg"
import rings from "../../assets/rings.svg";
import Naviagtion from "../Navigation/Navigation";


export default function Home({darkMode, darkModeFunc}) {

    const positionEntry = useSpring({
            from:
                {transform:"translate3d(0,100%,0)"},

            to:
                { transform:"translate3d(0,0,0)"},
                delay:700
                     
    })
    const ringEntry = useSpring({
        from:
            {
                transform:"translate3d(100%,-100%,0px) scale(1) rotate(0deg)",
            },

        to:
        {
            transform:"translate3d(0,0,0) scale(1) rotate(-45deg)",
        },
            delay:1700
                 
})
   
    return (
        <React.Fragment>
             <div  className="home-container">
                <animated.img style={positionEntry} src={ball} className="ball"/>
                <animated.img style={ringEntry} src={rings} className="rings"/>
             </div>
             <section className="software-container">

             </section>
             <section className="graphic-design-container">

            </section>
             <Naviagtion darkMode={darkMode} darkModeFunc={darkModeFunc}/>
        </React.Fragment>
       
    )
}
