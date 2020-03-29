import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navbarData = props.landingData;
    }

    render(){
        return (
            <header>
                <nav id="navbar" ref="navbar" className="navbar navbar-light shadow-sm">
                    <div className="container navbar-container">
                        <a className="navbar-brand bg-white">
                            <NavLink to="/portfolio/">Pranav</NavLink>
                        </a>
                        <div className="nav-links">
                            <ul className="list-inline">
                                <li className="list-inline-item mt-3">
                                    <NavLink to="/portfolio/" exact={true}>Home</NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink to="/projects">Projects</NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink to="/skills">Skills</NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink to="/education">Education</NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <a target="blank" href="https://drive.google.com/file/d/1popF-DfpWBRpQJO-NPDA-Am7Q4HU0pYS/view?usp=sharing" >
                                        Resume
                                    </a>
                                </li>
                            </ul>
                        </div>                    
                    </div>
                </nav>
            </header>
            
        );       
    }  
}

export default Navbar;