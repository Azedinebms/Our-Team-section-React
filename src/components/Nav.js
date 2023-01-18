import React, {Component} from "react";
import {BrowserRouter,  Routes,  Route, NavLink} from "react-router-dom";


class Nav extends Component{
    render(){
        return(
            <div>
                <NavLink exact to="/" >Logo</NavLink>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Nav