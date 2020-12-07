import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent from "../softwarePortfolio/Card/CardComponent";
import "./graphicDesign.css";
import {Link} from "react-router-dom";
import BackButton from '../backbutton/BackButton';
import NTD from "../../../assets/ntdtree1.svg";
import LC from "../../../assets/lacult.svg";
import HS from "../../../assets/hisea.svg";
import HSP from "../../../assets/hiseaspack.png";
import NTDP from "../../../assets/ntdlogopack.png";



export default class graphicDesign extends Component {
    constructor(props){
        super(props)
            this.state = {
            work:[
                {
                    title:"Nothern Timber Design",
                    description:"luxury Artisan Woodworking",
                    media: NTD,
                    views: NTDP
                    
                },
                {
                    title:"HighSeasArt",
                    description:"Art Gallery and Party Promotions",
                    media: HS,
                    views: HSP
                },
                {
                    title:"La Cultura",
                    description:"Fitness oriented Social Media Brand ",
                    media: LC,
                    views: null
                },
                
            ]
        }
    }
    render() {
        return (
         <div className="graphic-background">
        <Link to="/">
        <BackButton/>
        </Link>
         <Grid spacing={2} container justify="center">
            {this.state.work.map((n,index) => {
                return (
                <Grid key={index + 1} item md={4}>
                  <CardComponent className={this.props.show} views={n.views}  media={n.media} darkMode={this.props.darkMode} title={n.title} description={n.description}/>
                </Grid>
                )
            })}
        </Grid>       
        </div>
        )
    }
}
