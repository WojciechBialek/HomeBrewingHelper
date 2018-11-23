import React, {Fragment} from 'react';
// import {Button, Icon} from 'react-materialize';

import {
    Link,
} from 'react-router-dom';

class Beers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: false
        };

        this.apiURL = "http://localhost:4000/beers";
    }

    componentDidMount() {
        fetch(this.apiURL)
            .then(resp => {
                if (resp.ok) return resp.json();
                else throw new Error("Błąd");
            })
            .then(data => {
                this.setState({
                    data
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (!this.state.data){
            return <div><div id="glass">
                <div id="beer"></div>
            </div>
                <div id="poignet"></div>
                <div id="mousse_1"></div>
                <div id="mousse_2"></div>
                <div id="mousse_3"></div>
                <div id="mousse_4"></div>
                <div id="mousse_5"></div>
                <div id="mousse_volante"></div>
                <div id="mousse_interieur"></div>
                <div id="mousse_interieur_2"></div>
                <div id="mousse_interieur_3"></div>
                <div id="mousse_interieur_4"></div>
                <p id="beer_text">BEER</p></div>;
        }else{
            return (
                <div className="chooseBeerDiv">

                    {this.state.data.map(beer => {
                        return (
                            <Fragment key={beer.id}>
                                <Link className="main-wrapper" to={`/beers/${beer.id}`}><button className={`badge ${beer.color}`}><div className="circle">

                                </div><span className="ribbon">{beer.name}</span></button></Link>
                            </Fragment>
                        );
                    })}
                </div>
            );
        }

    }
}

export default Beers;