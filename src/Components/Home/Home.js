import {React, useEffect, useState } from 'react'
import './Home.css';
//import EmailForm from "./Form/EmailForm.js"
import { useSpring, animated, interpolate} from "react-spring";
import ball from "../../assets/bglogo.svg";
import swipe from "../../assets/swipe.svg";
import Naviagtion from "../Navigation/Navigation";
import SoftwarePortfolio from "./softwarePortfolio/softwarePortfolio";


function debounce(func, wait = 5, immediate = false) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

export default function Home({darkMode, darkModeFunc}) {
    const positionEntry = useSpring({
            from:
                {
                  opacity:0,
                  transform:"translate3d(0,100%,0)"
                },

            to:
                { 
                  opacity:.75,
                  transform:"translate3d(0,0,0) "},
                delay:200
                     
    })
    const [scrollY, setScrollY] = useState(0);
    useEffect(
        () => {
          const handleScroll = () => setScrollY(window.scrollY);
          window.addEventListener("scroll", debounce(handleScroll));
          console.log(window.scrollY)
          return () => window.removeEventListener("scroll", debounce(handleScroll));
        },
        [debounce]
      );

      const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
        springscrollY: 0
      }));
      const parallaxLevel = 8;
      springsetScrollY({ springscrollY: scrollY });
      const interpHeader = springscrollY.interpolate(o => window.innerWidth > 600 ? `rotate(-${o / parallaxLevel}deg) scale(${o/300})` : `rotate(-${o / parallaxLevel}deg) scale(${o/700})`);
      
    return (
        <div>
             <div  className="home-container">
                <animated.img style={{transform : interpHeader}} src={ball} className="ball"/>
                <animated.img style={positionEntry} src={swipe} className="swipe"/>
             </div>
             <section id="software" className="software-container">
              <SoftwarePortfolio darkMode={darkMode}/>
             </section>
             <section className="graphic-design-container">

            </section>
                 <Naviagtion darkMode={darkMode} darkModeFunc={darkModeFunc}/>
        </div>
       
    )
}
