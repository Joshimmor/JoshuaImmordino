import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent from "./Card/CardComponent";
import "./softwarePortfolio.css";
import BackButton from "../backbutton/BackButton"
import {Link} from "react-router-dom";
import Manga from "../../../assets/mangamanager.png";
import lacutlura from "../../../assets/lacultura.png";
import nucamp from "../../../assets/nucamp.png";

export default class SoftwarePortfolio extends Component {
    constructor(props){
        super(props)
            this.state = {
            work:[
                {
                    title:"Manga Manager",
                    description:"React PWA that renders view on the fly from an Axios API fetch",
                    media: Manga,
                    views:"https://mangamanager.netlify.app/"

                },
                {
                    title:"La Cultura",
                    description:"Fitness Based Shopify site with a Wordpress blog attached",
                    media: lacutlura,
                    views:"https://dribbble.com/shots/14077907-Lacultura-E-Commerce"
                },
                {
                    title:"NuCamp",
                    description:"React PWA that runs with an Restful Server backend",
                    media: nucamp,
                    views: null
                }
            ]
        }
    }
    render() {
        return (
         <div className="software-background">
             <Link to="/" >
            <BackButton/>
        </Link>  
        
         <Grid spacing={2}   container justify="center">
            {this.state.work.map((n,index) => {
                return (
                <Grid key={index + 1} item md={4}>
                  <CardComponent className={this.props.show} software={true} views={n.views} darkMode={this.props.darkMode} title={n.title}  media={n.media} description={n.description}/>
                </Grid>
                )
            })}
        </Grid>  
       
        </div>
        )
    }
}
