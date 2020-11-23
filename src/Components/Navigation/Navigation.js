import React from 'react';
import './Navigation.css';
import logo from "../../assets/logo.svg"
import Switch from '@material-ui/core/Switch';
//import {useSpring, animated} from "react-spring";



class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          drawer: false,   
          dark: true
             }
             this.darkFunc = this.darkFunc.bind(this)
             this.drawerFunc = this.drawerFunc.bind(this)
        };
        drawerFunc = () => {
            this.setState( {drawer:!this.state.drawer} );
            console.log(this.state.drawer)
        } ;
        darkFunc = () => {
            this.setState( {dark:!this.state.dark} );
            this.props.darkModeFunc(this.state.dark)
            console.log(this.props)
        } ;
        
    render() {
            return(
                    <div className="navigation-row">  
                        <div className="nav-links-container">
                                <ul className="list-item-container">
                                    <li
                                    className="nav-links">
                                        <a
                                        href="#software"
                                        style={this.state.drawer ?{ display: "inline-flex"}: {display :"none"}}
                                        className="nav-route"
                                        >Software</a>
                                    </li>
                                    <li 
                                    className="nav-links">
                                        <a
                                        style={this.state.drawer ?{ display: "inline-flex"}: {display :"none"}}
                                        href="/"
                                        className="nav-route"
                                        >Graphic Design</a>
                                    </li>
                                    <li 
                                    className="nav-links">
                                        <Switch onChange={this.darkFunc} />
                                    </li>
                                </ul>
                        </div>       
                        
                        <a  
                        onClick={() => this.drawerFunc()}
                        className="logo-container"
    >
                            <img className="logo" src={logo} alt="logo"/>
                        </a> 
                 </div>
      );
    }
  }

  export default Navigation