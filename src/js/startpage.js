import React from 'react';
import {Button, Icon} from 'react-materialize'
import {
    Link,
} from 'react-router-dom';

class StartPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            start: "block"
        }
    }
    handleStart=()=>{
        this.setState({
            start: "none"
        })
    }
    render(){
        return(
            <div className="startPage" style={{display: this.state.start}}>
                    <h1>Wybierz:</h1>
                    <p>Początkujący piwowar - aplikacja będzie przypominała o wszystkich czynnościach</p>
                    <Link to="/searchbeer" onClick={this.handleStart}>Weź mnie za rączkę<Icon left>alarm</Icon><Icon left>alarm</Icon></Link>
                    <p>Doświadczony piwowar - aplikacja będzie przypominała tylko najważniejsze czynności</p>
                    <Link to="/searchbeer" waves='light'>Ogarniam!<Icon left>alarm</Icon></Link>

            </div>
        )
    }
}

export default StartPage