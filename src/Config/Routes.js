import React, { Component } from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import Admin from '../Containers/Admin'
import Home from '../Containers/Home'
import InsurancePolicy from '../Containers/Insurance Policy'
import Signup from '../Containers/Signup'

const CreateBrowserHistory = require("history").createBrowserHistory
const history = CreateBrowserHistory()

export class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/insurance-policy" component={InsurancePolicy} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes