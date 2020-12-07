import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Link} from "react-router-dom";
import {animated, useSpring} from "react-spring";
import design from "../../../assets/design.svg";
import software from "../../../assets/software.svg";
import "../softwarePortfolio/Card/CardComponent.css";
import "./Selector.css";
import { CardHeader } from '@material-ui/core';

export default function Selector(props) {
   // const darkMode = this.props.darkMode
   const gridEntryMobile = useSpring({
    from:
                {
                  transform:"translate3d(100%,0,0)"
                },

            to:
                { 
                  opacity:1,
                  transform:"translate3d(0,0,0)"},
                delay:1200
   })
   const gridEntry = useSpring({
    from:
                {
                  transform:"translate3d(0,100%,0)"
                },

            to:
                { 
                  opacity:1,
                  transform:"translate3d(0,0,0)"},
                delay:1200
   })
    return (
        <animated.div  className="Selector" style={window.innerWidth > 600 ? gridEntry: gridEntryMobile}>
                        <Grid className="Selector-button" spacing={2} container justify="center">
                        <Grid item  >
                            <Link to="/software" style={{ textDecoration: 'none' }}>
                                <Card style={window.innerWidth > 600 ? {width:"10vw"} : {width: "30vw"}} className={props.darkMode ? "darkCard" : "lightCard"}>
                                <CardHeader
                                    title="Software"
                                    className="Selector-text"
                                    />
                                <CardContent>
                                <img  style={{height:"50%"}} src={software} alt="software"/>
                                </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/design" style={{ textDecoration: 'none' }}>
                                <Card style={window.innerWidth > 600 ? {width:"10vw"} : {width: "30vw"}} className={props.darkMode ? "darkCard" : "lightCard"}>
                                    <CardHeader
                                    title="Design"
                                    className="Selector-text"
                                    />
                                <CardContent>
                                    <img style={{transform:"scale(1.2)"}} src={design} alt="design"/>
                                </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                      </Grid> 
        </animated.div>
         
    )
}
