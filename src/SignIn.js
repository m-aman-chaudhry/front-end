import React from 'react';
import './border.css';
import { Link } from 'react-router-dom';

class SignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}

	onEmailChange = (event) => {
		this.setState({ signInEmail: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ signInPassword: event.target.value })
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.signInEmail,
				password: this.state.signInPassword
			})
		})
		  .then(response => response.json())
		  .then(user => {
		  	if (user.id) {
		  		this.props.loadUser(user);
		  		this.props.signin();
		  	}
		  })	
	}

	render() {
		const { onRouteChange } = this.props;
		return (
		<article className="mv6 w-100 w-50-m w-25-l mw6 center bg-dark-gray">
			<main className="pa4 black-80 bg-white shadow-5 center br3 ba">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">SIGN IN</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
			          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			          type="email" 
			          name="email-address"  
			          id="email-address"
			          onChange={this.onEmailChange} />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			          type="password" 
			          name="password" 
			          id="password"
			          onChange={this.onPasswordChange} />
			      </div>
			    </fieldset>
			    <div className="">
			     <Link to="/">
			      <input
			      	onClick={this.onSubmitSignIn}
			      	onClick={this.props.signin}
			        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			        type="submit" 
			        value="Sign In" 
			      />
			     </Link>
			    </div>
			    <div className="lh-copy mt3">
			     <Link to='/registerlink'>
			      <p /*onClick={() => onRouteChange('register')}*/ className="f6 link dim black db pointer">Sign Up</p>
			     </Link>
			    </div>
			  </div>
			</main>
		</article>
		);
	}
}

export default SignIn;


















