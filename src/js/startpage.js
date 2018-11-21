import React from 'react';
import {Button, Icon} from 'react-materialize'

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
                    <Button waves='light' onClick={this.handleStart}>Weź mnie za rączkę<Icon left>alarm</Icon><Icon left>alarm</Icon></Button>
                    <p>Doświadczony piwowar - aplikacja będzie przypominała tylko najważniejsze czynności</p>
                    <Button waves='light'>Ogarniam!<Icon left>alarm</Icon></Button>

            </div>
        )
    }
}

export default StartPage