import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input,
    Button,
    Container,
    Row,
    Col,
    Label,
    Card,
    CardBody,
    CardText
} from 'reactstrap';
import { connect } from 'react-redux';
import TransitionSwitch from 'react-router-transition-switch'
import Fader from 'react-fader'
/*
import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';
import {setSearchText} from 'states/post-actions.js';
import {toggleNavbar} from 'states/main-actions.js';
*/
import './LoginMain.css';
import Register from 'components/Register.jsx';
import Main from 'components/Main.jsx';
import Login from 'components/Login.jsx';

class LoginMain extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <div className='LoginMain'>
                    <TransitionSwitch component={Fader}>
                        <Route exact path="/" render={() => (
                            <Login />
                        )} />
                        <Route exact path="/register" render={() => (
                            <Register />
                        )} />
                        <Route exact path="/main" render={() => (
                            <Main />
                        )} />
                    </TransitionSwitch>
                </div>
            </Router>
        );
    }
}

export default connect(state => ({
    ...state.Login
}))(LoginMain);
