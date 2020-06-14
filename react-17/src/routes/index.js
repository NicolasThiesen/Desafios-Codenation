import React from "react"

import {PrivateRoute} from "../containers"

import history from "../tools/history"

import {App,Authorize,} from "../containers"

import DashboardRoute from './DashboardRoute';

import { Switch, Route, Router } from "react-router-dom";

import { Provider } from "react-redux";

import store from "../store";


const Routes = () =>{
    return(
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/authorize" component={Authorize}></Route>
                    <PrivateRoute path="/dashboard" component={DashboardRoute}></PrivateRoute>                    
                </Switch>
            </Router>
        </Provider>
        
    )
}

export default Routes;