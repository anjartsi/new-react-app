import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';

class Routes extends Component {
    render() {
        return (
            <Switch>
            <Route path='/login' component={Pages.Login}/>
            <Route path='/' component={Pages.Home}/>
            </Switch>
        )
    }
}

export default Routes;