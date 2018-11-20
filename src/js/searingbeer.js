import React from 'react';


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
                <ul>
                    {this.state.data.map(beer => {
                        return (
                            <li key={beer.id}>{beer.name}</li>
                        );
                    })}
                </ul>
            );
        }

    }
}

export default Beers;