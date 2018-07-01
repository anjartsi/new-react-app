import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Login.scss'

class Login extends Component {
    render() {
        return (
            <div styleName='Login'>
                <h1> Login Page</h1>
            </div>
        );
    }
}

Login = CSSModules(Login, styles);

export default Login
