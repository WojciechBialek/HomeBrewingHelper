import React, {Fragment} from 'react';

class HandleModifyRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: false,
            value: this.props.value
        }
    }
    handleInput=()=>{
        if(!this.state.data){
            this.setState({
                data:true
            })
        }


    }
    handlerNameChange = event => {
        this.setState({
            value: event.target.value,
        });
        if (event.key === 'Enter') {
            this.setState({
                data:false
            });
            this.props.clickMethod(this.props.name ,event.target.value);
        }

    }
    handleButton = event =>{
        this.setState({
            data:false
        })
        this.props.clickMethod(this.props.name ,this.state.value);
    }
    render(){
        return(
            <Fragment>
                {this.state.data ? <div><input value={this.state.value} onChange={this.handlerNameChange} onKeyPress={this.handlerNameChange}/><button onClick={this.handleButton}>Zatwierdź</button></div> : <div onClick={this.handleInput}>{this.state.value}</div>}
            </Fragment>
        )
    }
}






export default HandleModifyRecipe;