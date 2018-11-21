import React from 'react';
import {Button, Icon} from 'react-materialize'


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
                            <Button waves="yellow" key={beer.id}>{beer.name}</Button>
                        );
                    })}
                </div>
            );
        }

    }
}

export default Beers;