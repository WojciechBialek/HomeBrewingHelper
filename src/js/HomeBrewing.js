import React from 'react';
// import {Link} from "react-router-dom";
import {Col, Card, Button} from 'react-materialize';

class HomeBrewing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: false,
            firstCard: "block",
            display: "block"
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
        e.target.parentNode.parentNode.style.display="none";
        e.target.parentNode.parentNode.parentNode.nextSibling.style.display="block"


    }
    render() {
        if (!this.state.beer) {
            return <div>Ładuję...</div>;
        } else {
            return (<div className="Card">
                <Col m={6} s={12}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Przygotuj sprzęt!' id="card1"  actions={[<Button onClick={this.handleChangeTask}>Zrobione</Button>]}>
                        Przed  przystąpieniem  do  warzenia  piwa,  należy  bardzo  dokładnie
                        wyczyścić i  wysterylizować cały  sprzęt.  Brak  staranności  przy  utrzymaniu
                        higieny, jest głównym powodem nie osiągnięcia zamierzonego celu.
                    </Card>
                </Col>
                <Col m={6} s={12} style={{display:'none'}}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Zacieranie!'   actions={[<Button onClick={this.handleChangeTask}>Zrobione</Button>]}>
                        Podgrzej 16 litrów wody do temp 70C i wsyp do niej słód, wszystko starannie rozmieszaj tak aby nie pozostały w zacierze żadne większe grudy
                    </Card>
                </Col>
                <Col m={6} s={12} style={{display:'none'}}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Zacieranie!'  actions={[<Button onClick={this.handleChangeTask}>Zrobione</Button>]}>
                        Temperatura powinna ustalić się na około 63-64 C, utrzymuj ją przez 30min
                    </Card>
                </Col>
                <Col m={6} s={12} style={{display:'none'}}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Zacieranie!'  actions={[<Button onClick={this.handleChangeTask}>Zrobione</Button>]}>
                        Następnie podgrzej zacier do 72C i przetrzymuj przez kolejne 30min
                    </Card>
                </Col>
                <Col m={6} s={12} style={{display:'none'}}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Zacieranie!'  actions={[<Button onClick={this.handleChangeTask}>Zrobione</Button>]}>
                        Następnie podgrzej zacier do 76-78C i przetrzymuj przez 5-10min
                    </Card>
                </Col>
                <Col m={6} s={12} style={{display:'none'}}>
                    <Card className='blue-grey darken-1' textClassName='white-text' title='Zacieranie!'  actions={[<Button onClick={this.handleChangeTask}>Zrobione</Button>]}>
                        Przenieś zacier do filtracji. Wysładzaj do uzyskania 23-24 litrów brzeczki. Do wysładzania użyj około 14litrów wody w temp 75-80 C, wodę dolewaj partiami do kilka litrów a nie całość na raz
                    </Card>
                </Col>

            </div>)


        }
    }
}


export default HomeBrewing