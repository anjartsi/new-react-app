import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import * as Pages from './pages';

class Routes extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path='/login' component={Pages.Login}/>
                    <Route path='/' component={Pages.Home}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;