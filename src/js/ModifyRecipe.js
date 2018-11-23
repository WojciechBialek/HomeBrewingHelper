import React, {Fragment, Component} from 'react';
import HandleModifyRecipe from "./HandleModifyRecipe";
import {Button, Table} from 'react-materialize'
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

    updateBeer = (name, value)=> {
        const copyState = this.state.beer;
        copyState[name] = value;
        this.setState({
            beer: copyState
        }, ()=> {
            fetch(this.beerURL, {
                method: 'PUT',
                body: JSON.stringify( this.state.beer ),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then( resp => resp.json())
                .then( data => {
                    console.log( data );
                });
        });
        console.log("nowe");
        console.log(copyState);
        console.log(this.state.beer);


    }
    render(){
        const idBeer = this.state.beer.id;
        return this.state.beer && (
            <div>
                <h1 className={"name"}>{this.state.beer.name}</h1>
                <h2 className={"description"}>{this.state.beer.description}</h2>
                <Table className="darkTable">
                    <thead>
                    <tr>
                        <th>Nazwa</th>
                        <th>Wartość</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>BLG początkowe</td>
                        <td><HandleModifyRecipe clickMethod={this.updateBeer} name={"blg_start"} value={this.state.beer.blg_start} /></td>
                    </tr>
                    <tr>
                        <td>BLG końcowe</td>
                        <td><HandleModifyRecipe clickMethod={this.updateBeer} name={"blg_end"} value={this.state.beer.blg_end}/></td>
                    </tr>
                    <tr>
                        <td>Kolor w skali "ebc"</td>
                        <td><HandleModifyRecipe clickMethod={this.updateBeer} name={"ebc"} value={this.state.beer.ebc}/></td>
                    </tr>
                    <tr>
                        <td>Szacowana wielkość warki</td>
                        <td><HandleModifyRecipe clickMethod={this.updateBeer} name={"volume.value"} value={this.state.beer.volume.value}/> <HandleModifyRecipe value={this.state.beer.volume.unit}/></td>
                    </tr>
                    <tr>
                        <td>Minimalna objętość garnka</td>
                        <td><HandleModifyRecipe clickMethod={this.updateBeer} name={"boil_volume.value"} value={this.state.beer.boil_volume.value}/> <HandleModifyRecipe value={this.state.beer.boil_volume.unit}/></td>
                    </tr>
                    {this.state.beer.method.mash_temp.map(mash => {
                        return (
                            <Fragment key={mash.id}>
                                <tr>
                                    <th>Faza:</th>
                                    <th><HandleModifyRecipe value={mash.temp}/></th>
                                </tr>
                                <tr>
                                    <td>Temperatura</td>
                                    <td><HandleModifyRecipe clickMethod={this.updateBeer} name={"mash.value"} value={mash.value}/></td>
                                </tr>
                                <tr>
                                    <td>Czas utrzymywania</td>
                                    <td><HandleModifyRecipe value={mash.duration}/></td>
                                </tr>
                            </Fragment>
                        );
                    })}
                    <tr>
                        <td>Temperatura fermentacji</td>
                        <td><HandleModifyRecipe value={this.state.beer.method.fermentation.value}/> </td>
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
                                    <th><HandleModifyRecipe value={malt.name}/></th>
                                </tr>
                                <tr>
                                    <td>Ilość</td>
                                    <td><HandleModifyRecipe value={malt.amount.value}/> {malt.amount.unit}</td>
                                </tr>
                            </Fragment>
                        );
                    })}
                    {this.state.beer.ingredients.hops.map(hop => {
                        return (
                            <Fragment key={hop.id}>
                                <tr>
                                    <th>Chmiel:</th>
                                    <th><HandleModifyRecipe value={hop.name}/></th>
                                </tr>
                                <tr>
                                    <td>Ilość</td>
                                    <td><HandleModifyRecipe value={hop.amount.value}/> gram</td>
                                </tr>
                                <tr>
                                    <td>Dodawanie:</td>
                                    <td><HandleModifyRecipe value={hop.add}/></td>
                                </tr>
                            </Fragment>
                        );
                    })}
                    <tr>
                        <th>Drożdże:</th>
                        <th><HandleModifyRecipe value={this.state.beer.ingredients.yeast.form}/> </th>
                    </tr>
                    <tr>
                        <td>Typ:</td>
                        <td><HandleModifyRecipe value={this.state.beer.ingredients.yeast.type}/></td>
                    </tr>
                    <tr><td>Stworzone przez</td><td>{this.state.beer.contributed_by}</td></tr>

                    </tbody>
                </Table>
                <div className="acceptBeer">
                <Link  to={`/homebrewing/${idBeer}`}><Button waves='light'>Zatwierdź</Button></Link>
                <Link  to={"/searchbeer"}><Button waves='light'>Cofnij</Button></Link>
                </div>
            </div>


        )
    }
}


export default ModifyRecipe;