import React from 'react';
import image from "../images/NotFound.jpg"

class NotFound extends React.Component{
    render(){
        return(
            <div >
                <h1>Przecholowałeś</h1>
                <img src={image}/>
            </div>
        )
    }
}

export default NotFound;