import React, { Component } from 'react';
import SearchBeer from "./js/SearchBeer";
import StartPage from "./js/startpage";
import NotFound from "./js/NotFound";
import ModifyRecipe from "./js/ModifyRecipe";
import Header from "./js/Header";
import Footer from "./js/Footer";
import HomeBrewing from "./js/HomeBrewing";

import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

const MainTemplate=({children})=>(
    <div>
        <Header/>

        {children}

        <Footer/>
    </div>
)

class App extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <MainTemplate>
                  <Switch>
                      <Route exact path="/" component={StartPage} />
                      <Route path={"/searchbeer"} component={SearchBeer}/>
                      <Route path='/beers/:beerId' component={ModifyRecipe} />
                      <Route path="/homebrewing" component={HomeBrewing}/>
                      <Route component={NotFound} />
                  </Switch>
                </MainTemplate>
            </div>
         </HashRouter>
    );
  }
}

export default App;
