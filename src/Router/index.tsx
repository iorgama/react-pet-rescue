import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { About } from '../pages/About';
import { PetsCreate } from '../pages/PetsCreate';
import { Home } from '../pages/Home';
import {PetsDetails} from '../pages/PetsDetails'
import { PetDetails } from '../pages/PetDetails';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sobre">
            <About/>
          </Route>
          <Route exact path="/pets">
            <PetsDetails/>
          </Route>          
          <Route path="/cadastra-pets">
            <PetsCreate/>
          </Route>             
          <Route path="/pets/:id">
            <PetDetails />
          </Route>
        </Switch>   
    </BrowserRouter>
  )
}
