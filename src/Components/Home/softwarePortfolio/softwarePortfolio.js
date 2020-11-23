import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CardComponent from "./Card/CardComponent";
import "./softwarePortfolio.css";

export default class softwarePortfolio extends Component {
    constructor(props){
        super(props)
            this.state = {
            work:[
                {
                    title:"Manga Manager",
                    description:"Manages your manga"
                },
                {
                    title:"Manga Manager",
                    description:"Manages your manga"
                },
                {
                    title:"Manga Manager",
                    description:"Manages your manga"
                },
                {
                    title:"Manga Manager",
                    description:"Manages your manga"
                }
            ]
        }
    }
    render() {
        return (
         <div className="software-background">
         <Grid spacing={2} container justify="center">
            {this.state.work.map((n,index) => {
                return (
                <Grid key={index + 1} item md={6}>
                  <CardComponent darkMode={this.props.darkMode} title={n.title} description={n.description}/>
                </Grid>
                )
            })}
        </Grid>       
        </div>
        )
    }
}
