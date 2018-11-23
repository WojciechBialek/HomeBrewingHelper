import React, {Fragment} from 'react';
// import {Button, Icon} from 'react-materialize';

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
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
            return <div>Ładuję...</div>;
        }else{
            return (
                <div>
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