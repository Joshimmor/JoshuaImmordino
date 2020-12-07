import React from 'react';
import './Navigation.css';
import Switch from '@material-ui/core/Switch';
import {Link} from "react-router-dom";
import Logo from "./Logo/Logo"

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
                                        <Link
                                       to="/software"
                                        style={this.state.drawer ?{ display: "inline-flex"}: {display :"none"}}
                                        className="nav-route"
                                        >Software</Link>
                                    </li>
                                    <li 
                                    className="nav-links">
                                        <Link
                                        style={this.state.drawer ?{ display: "inline-flex"}: {display :"none"}}
                                       to="/design"
                                        className="nav-route"
                                        >Graphic Design</Link>
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
                            <Logo/>
                        </a> 
                 </div>
      );
    }
  }

  export default Navigation