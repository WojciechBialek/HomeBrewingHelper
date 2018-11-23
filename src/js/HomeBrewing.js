import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

class HomeBrewing extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            beer: false,
        };
        this.beerURL = `http://localhost:4000/beers/${this.props.match.params.beerId}`;
    }

    componentDidMount() {
        fetch(this.beerURL)
            .then(resp => {
                if (resp.ok) return resp.json();
                else throw new Error("Błąd");
            })
            .then(beer => {
                this.setState({
                    beer
                });
            })
            .catch(err => {
                console.log(err);
            });

    }
    render(){
        if (!this.state.beer){
            return <div>Ładuję...</div>;
        }else{
            return (
                <div>
                    <ul>
                        <li>Podgrzej 16l wody do temperatury 70C i wsyp do niej słód, wszystko starannie rozmieszaj tak aby nie pozostały w zacierze żadne większe grudy</li>

                    </ul>
                </div>
            );
        }

}
}

export default HomeBrewing