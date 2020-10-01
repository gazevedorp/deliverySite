import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Login from '../src/login'
import Produtos from '../src/produtos'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/produtos">
                    <Produtos  />
                </Route>
            </Switch>
        </Router>
    );
}