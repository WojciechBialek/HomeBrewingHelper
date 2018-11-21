import React, {Fragment, Component} from 'react';

import {Button, Icon} from 'react-materialize'
import {Link} from "react-router-dom";


class ModifyRecipe extends Component{
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
        console.log(this.state.beer);
        return this.state.beer && (
            <div>
                <h1>{this.state.beer.name}</h1>
                <h2>{this.state.beer.description}</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Wartość</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>BLG początkowe</td>
                        <td>{this.state.beer.blg_start}</td>
                    </tr>
                    <tr>
                        <td>BLG końcowe</td>
                        <td>{this.state.beer.blg_end}</td>
                    </tr>
                    <tr>
                        <td>Kolor w skali "ebc"</td>
                        <td>{this.state.beer.ebc}</td>
                    </tr>
                    <tr>
                        <td>Szacowana wielkość warki</td>
                        <td>{this.state.beer.volume.value} {this.state.beer.volume.unit}</td>
                    </tr>
                    <tr>
                        <td>Minimalna objętość garnka</td>
                        <td>{this.state.beer.boil_volume.value} {this.state.beer.boil_volume.unit}</td>
                    </tr>
                    {this.state.beer.method.mash_temp.map(mash => {
                        return (
                            <Fragment key={mash.temp}>
                                <tr>
                                    <th>Faza:</th>
                                    <th>{mash.temp}</th>
                                </tr>
                                <tr>
                                    <td>Temperatura</td>
                                    <td>{mash.value}</td>
                                </tr>
                                <tr>
                                    <td>Czas utrzymywania</td>
                                    <td>{mash.duration}</td>
                                </tr>
                            </Fragment>
                        );
                    })}
                    <tr>
                        <td>Temperatura fermentacji</td>
                        <td>{this.state.beer.method.fermentation.value} </td>
                    </tr>
                    {this.state.beer.ingredients.water.map(water => {
                        return (
                            <Fragment key={water.name}>
                                <tr>
                                    <th>Woda:</th>
                                    <th>{water.name}</th>
                                </tr>
                                <tr>
                                    <td>Litry:</td>
                                    <td>{water.amount}</td>
                                </tr>
                                <tr>
                                    <td>Temperatura</td>
                                    <td>{water.temp}</td>
                                </tr>
                            </Fragment>
                        );
                    })}
                    {this.state.beer.ingredients.malt.map(malt => {
                        return (
                            <Fragment key={malt.name}>
                                <tr>
                                    <th>Słód:</th>
                                    <th>{malt.name}</th>
                                </tr>
                                <tr>
                                    <td>Ilość</td>
                                    <td>{malt.amount.value} {malt.amount.unit}</td>
                                </tr>
                            </Fragment>
                        );
                    })}
                    {this.state.beer.ingredients.hops.map(hops => {
                        return (
                            <Fragment key={hops.name}>
                                {/*<tr>*/}
                                    {/*<th>Słód:</th>*/}
                                    {/*<th>{malt.name}</th>*/}
                                {/*</tr>*/}
                                {/*<tr>*/}
                                    {/*<td>Ilość</td>*/}
                                    {/*<td>{malt.amount.value} {malt.amount.unit}</td>*/}
                                {/*</tr>*/}
                            </Fragment>
                        );
                    })}

                    </tbody>
                </table>
            </div>


        )
    }
}


export default ModifyRecipe;