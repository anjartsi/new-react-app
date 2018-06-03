import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Login.scss'

class Login extends Component {
    render() {
        return (
            <div className={styles.Login}>
                <h1> Login Page</h1>
            </div>
        );
    }
}

export default CSSModules(Login, styles);