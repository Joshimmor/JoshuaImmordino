import React  from 'react'
import './Home.css';
//import EmailForm from "./Form/EmailForm.js"
import { useSpring, animated} from "react-spring";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ball from "../../assets/bglogo.svg";
import Naviagtion from "../Navigation/Navigation";
import SoftwarePortfolio from "../Home/softwarePortfolio/SoftwarePortfolio.js";
import GraphicDesign from "./graphicDesign/graphicDesign";
import Selector from "./Selector/Selector";



export default function Home({darkMode, darkModeFunc}) {
    const positionEntry = useSpring({
            from:
                {
                  transform:"translate3d(0,100%,0) rotate(180deg)"
                },

            to:
                { 
                  opacity:1,
                  transform:"translate3d(0,0,0) rotate(-45deg)"},
                delay:1000
                     
    })

    return (
        <div>
             <div  className="home-container">
               <Router>
                 <animated.img style={positionEntry} src={ball} className="ball"/>
                <Switch>
                      <Route exact path="/">
                          <section className="selector-container">
                            <Selector darkMode={darkMode}/>
                          </section>
                      </Route>
                      <Route  path="/software">
                        <section id="software" className="software-container">
                         <SoftwarePortfolio darkMode={darkMode} show={window.scrollY > 344 ? "show" : "noshow"}/>
                         </section>
                      </Route>
                      <Route  path="/design">
                        <section className="graphic-design-container">
                          <GraphicDesign darkMode={darkMode} show={window.scrollY > 1104 ? "show":"noshow"}/>
                         </section>
                      </Route>
                </Switch>
                <Naviagtion darkMode={darkMode} darkModeFunc={darkModeFunc} />
               </Router>   
             </div> 
                 
        </div>
       
    )
}
