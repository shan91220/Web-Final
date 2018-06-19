import React from 'react';
import PropTypes from 'prop-types';
import {AccountChange, PasswordChange, login} from 'states/login-actions.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
	Redirect,
	withRouter
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
import {connect} from 'react-redux';
/*
import Today from 'components/Today.jsx';
import Forecast from 'components/Forecast.jsx';
import {setSearchText} from 'states/post-actions.js';
import {toggleNavbar} from 'states/main-actions.js';

import './Main.css';
*/
import Register from 'components/Register.jsx'
import Main from 'components/Main.jsx';
import './Login.css';
class Login extends React.Component {
    static propTypes = {
		    LoginLoading : PropTypes.bool,
        LoginAccount : PropTypes.string,
        LoginPassword : PropTypes.string,
        dispatch : PropTypes.func,
        Accept: PropTypes.bool
    };

    constructor(props) {
        super(props);
		this.state = {

        };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleAccount = this.handleAccount.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
		this.handleRegister = this.handleRegister.bind(this);


    }

    render() {
        return (
            <Router>
                <div className='main'>

                        <div className='content'>
                         <Container>
						 <Row>
						 <Col>
							<div className="icon">
							<img src={require('../image/LPICON.jpg')}/>
							</div>
						 </Col>

						 <Col>

						 <div className="message">
							<Container>
							<Row>
							<Col>
								<Label>請輸入帳號</Label>
								<Input type="text" value = {this.props.LoginAccount} placeholder="Please Enter Your Account" onChange={this.handleAccount}/>
							</Col>
							</Row>
							<Row>
								<Col>
									<Label>請輸入密碼</Label>
									<Input type="password" placeholder="Please Enter Your Password" value = {this.props.LoginPassword} onChange={this.handlePassword}/>
								</Col>
							</Row>
							<Row>
								<Col>
									<Button onClick={this.handleLogin}>登入</Button>
								</Col>
								<Col>
									<Button onClick ={this.handleRegister}>註冊帳號</Button>
								</Col>
							</Row>
							</Container>
						 </div>
						 </Col>
						 </Row>
						 </Container>


                    </div>

                </div>
            </Router>
        );
    }
  handleAccount(e)
  {
    const text = e.target.value;

    this.props.dispatch(AccountChange(text));
  }
  handlePassword(e)
  {
    const text = e.target.value;
    this.props.dispatch(PasswordChange(text));
  }
	handleLogin()
	{
    console.log(this.props.LoginAccount);
    console.log(this.props.LoginPassword);
    console.log(this.props);
    this.props.dispatch(login(this.props.LoginAccount,this.props.LoginPassword));
    this.props.dispatch(AccountChange(''));
    this.props.dispatch(PasswordChange(''));
    console.log(this.props.Accept);
    this.props.history.push('/main');
	}
	handleRegister()
	{
    this.props.dispatch(AccountChange(''));
    this.props.dispatch(PasswordChange(''));
		this.props.history.push('/register');
	}
}

export default withRouter(connect(state => ({
      ...state.login
}))(Login))