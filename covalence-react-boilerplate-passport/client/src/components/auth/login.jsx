import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true
        };
    }

    componentDidMount() {
        userService.checkLogin()
        .then((loggedIn) => {
            if (loggedIn) {
                this.setState({ redirectToReferrer: true, checkingLogin: false });
            } else {
                this.setState({ checkingLogin: false });
            }
        });
    }

    login(e) {
        e.preventDefault();
        userService.login(this.state.email, this.state.password)
        .then(() => {
            this.setState({ redirectToReferrer: true });
        }).catch((err) => {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
        });
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
       const { from } = this.props.location.state || { from: { pathname: '/' } };
       const { redirectToReferrer, checkingLogin } = this.state;

       if (checkingLogin) {
           return <IndeterminateProgress message="Checking Login Status..." />;
       }
       if (redirectToReferrer) {
           return (
               <Redirect to={from} />
           );
       }

       return (
           <Fragment>
                <div className ="text-center d-flex ustify-content-center align-items-center " style={{height: "100vh"}} ><form className="form-signin" style={{maxWidth: '330px', margin: "auto", width: "100%"}} onSubmit={(e) => this.login(e)}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autoFocus="" onChange={(e) => this.handleEmailChange(e.target.value)} required /> 
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"  onChange={(e) => this.handlePasswordChange(e.target.value)} required /> 
                    <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>{this.state.feedbackMessage ? (
                        <p>{ this.state.feedbackMessage }</p>
                    ): null}
                    <input type="submit" value="Login" className="btn btn-lg btn-primary btn-block" />
                </form>
</div>
                
            </Fragment>
       );
    }
}

export default Login;