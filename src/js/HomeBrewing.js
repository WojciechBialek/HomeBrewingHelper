import React from 'react';
// import {Link} from "react-router-dom";
import {Col, Card, Button} from 'react-materialize';

class HomeBrewing extends React.Component {
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
    handleChangeTask=(e)=>{
        e.preventDefault();

    }
    render() {
        if (!this.state.beer) {
            return <div>Ładuję...</div>;
        } else {
            return (<div>
                <Col m={6} s={12}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Przygotuj sprzęt!' actions={[<Button onClick={this.handleChangeTask}>Zrobione</Button>]}>
                        Przed  przystąpieniem  do  warzenia  piwa,  należy  bardzo  dokładnie
                        wyczyścić i  wysterylizować cały  sprzęt.  Brak  staranności  przy  utrzymaniu
                        higieny, jest głównym powodem nie osiągnięcia zamierzonego celu.
                    </Card>
                </Col>
                <Col m={6} s={12}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Zacieranie!' actions={[<Button onClick={this.handleChangeTask}>Zrobione</Button>]}>
                        Podgrzej 16litrow wody do temp 70C i wsyp do niej słód
                    </Card>
                </Col>

            </div>)


        }
    }
}


export default HomeBrewing