import React from 'react';
import {NavLink} from "react-router-dom";
import {Navbar} from 'react-materialize';




class Header extends React.Component{
    render(){

        return(
            <Navbar brand="Home Brewing" right>
                <NavLink exact to="/" activeStyle={{color: "black"}}><span className="header">Start</span></NavLink>
                <NavLink to="/searchbeer" activeStyle={{color: "black"}}><span className="header">Style</span></NavLink>
            </Navbar>
        )
    }
}

export default Header;