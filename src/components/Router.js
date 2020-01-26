import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import App from '../App'
import Recipe from './Recipe'

const Router = props => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}  />
            <Route path="/recipe/:id" component={Recipe} />
        </Switch>
    </BrowserRouter>
)


export default Router
