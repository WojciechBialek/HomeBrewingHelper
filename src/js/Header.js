import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <div>
                <NavLink exact to="/" activeStyle={{color: "red"}}>Start</NavLink>
                <NavLink to="/searchbeer" activeStyle={{color: "red"}}>Menu</NavLink>
            </div>
        )
    }
}

export default Header;