import React from 'react';
import "./CardComponent.css";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

export default function softwarePortfolio(props) {
    return (
        <React.Fragment>
            <Card className={props.darkMode ? "darkCard" : "lightCard"}>
                <CardHeader
                title={props.title}/>
                <CardContent><p>
                 {props.description}   
                    </p></CardContent>
            </Card>
        </React.Fragment>
    )
}
