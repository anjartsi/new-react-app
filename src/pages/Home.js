import React, { Component } from 'react';

import { connect } from 'react-redux';
import actions from '@/store/actions';

import cssModules from 'react-css-modules';
import styles from './Home.scss'


const mapStateToProps = (state) => {
    return {
        number: state.number
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        increment: () => {dispatch(actions.increment())},
        decrement: () => {dispatch(actions.decrement())},
    }
}

class Home extends Component {
    render() {
        return (
            <div styleName='Home'>
                <h1> Home Page </h1>
                <div>
                    <button onClick={this.props.decrement}> &minus; </button>
                    <span>
                        {this.props.number}
                    </span>
                    <button onClick={this.props.increment}> + </button>
                </div>
            </div>
        );
    }
}

Home = cssModules(Home, styles, { handleNotFoundStyleName: 'log' });
Home = connect(mapStateToProps, mapDispatchtoProps)(Home);

export default cssModules(Home, styles);