import React from 'react';
import "./CardComponent.css";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Views from "../../../Home/graphicDesign/Views/Views"
import {animated, useSpring} from "react-spring";

export default function SoftwarePortfolio(props) {
    const cardComponentEntry = useSpring({
        from:
        {
          opacity:0
        },

    to:
        { 
          opacity:1,
         },
        delay: Math.floor(Math.random() * 1000)
    })
    return (
        <animated.div style={cardComponentEntry} >
            <Card className={props.darkMode ? "darkCard" : "lightCard"}>
                {props.software?<CardHeader
                title={props.title}/>:null}
                <CardMedia   component="img"  image={props.media}
                title={props.title}/>
                <CardContent><p className="script">
                 {props.description}   
                </p>
                {props.software ?<Button href={props.views} variant="contained">Views</Button>: <Views views = {props.views}/>}
                {props.software?<Button  href="https://github.com/Joshimmor" variant="contained">GitHub</Button>:null}
                </CardContent>
            </Card>
        </animated.div>
    )
}
