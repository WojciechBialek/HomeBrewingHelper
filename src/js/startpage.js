import React from 'react';
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
                <div className="wrapper">
                    <div className="bg">
                        <div className="content">
                            <p>Czy aplikacja ma przypominać Ci o wszystkich szczegółach? A może to nie Twoja pierwsza warka i chcesz mieć gdzie zapisywać swoje dane?</p>
                        </div>
                    </div>
                    <div className="btn-wrapper">
                        <div className="cube spin">
                            <div className="face front text"><Link to="/searchbeer">Pomóż mi!</Link></div>
                            <div className="face back text">
                                <div className="msg success">Wewt!</div>
                                <div className="msg fail">Fail =/</div>
                            </div>
                            <div className="face right"></div>
                            <div className="face left"></div>
                            <div className="face top"></div>
                            <div className="face bottom"></div>
                        </div>
                    </div>
                    <div className="btn-wrappers">
                        <div className="cube spin">
                            <div className="face front text"><Link to="/searchbeer">Poradzę sobie</Link></div>
                            <div className="face back text">
                                <div className="msg success">Wewt!</div>
                                <div className="msg fail">Fail =/</div>
                            </div>
                            <div className="face right"></div>
                            <div className="face left"></div>
                            <div className="face top"></div>
                            <div className="face bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartPage