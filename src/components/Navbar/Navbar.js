import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import cssModules from 'react-css-modules';
import styles from './Navbar.scss';

class Navbar extends Component {
	render() {
		return (
			<nav styleName='Navbar'>
				<div> <Link to='/'> Home </Link> </div>
				<div> <Link to='/login'> Login </Link> </div>
			</nav>
		);
	}
}

Navbar = cssModules(Navbar, styles, {handleNotFoundStyleName: 'log'});

export default Navbar;
