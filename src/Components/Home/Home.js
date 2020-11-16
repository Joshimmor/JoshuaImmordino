import React  from 'react'
import './Home.css';
//import EmailForm from "./Form/EmailForm.js"
import { useSpring, animated} from "react-spring";
import ball from "../../assets/bglogo.svg";
import Naviagtion from "../Navigation/Navigation";


export default function Home({darkMode, darkModeFunc}) {

    const positionEntry = useSpring({
            from:
                {transform:"translate3d(100%,-100%,0) scale(0) rotate(0deg)"},

            to:
                { transform:"translate3d(0,0,0) scale(1) rotate(-45deg)"},
                delay:700
                     
    })
          

   
    return (
        <React.Fragment>
             <div  className="home-container">
                <animated.img style={positionEntry} src={ball} className="ball"/>
                
             </div>
             <section className="software-container">

             </section>
             <section className="graphic-design-container">

            </section>
             <Naviagtion darkMode={darkMode} darkModeFunc={darkModeFunc}/>
        </React.Fragment>
       
    )
}
