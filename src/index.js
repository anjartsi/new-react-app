import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './libs/registerServiceWorker';
import Routes from './Routes';
import store from './store';
import './index.scss';

ReactDOM.render(
    (
        <Provider store={store} >
            <Router> 
                <Routes></Routes>
            </Router>
        </Provider>
    ), document.getElementById('root'));

registerServiceWorker();
