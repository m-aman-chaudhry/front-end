import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			first: '',
			last: ''
		}
	}

	onfirstNameChange = (event) => {
		this.setState({ first: event.target.value })
	}

	onlastNameChange = (event) => {
		this.setState({ last: event.target.value })
	}

	onEmailChange = (event) => {
		this.setState({ email: event.target.value })
	}

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value })
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3001/signup', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				first: this.state.first,
				last: this.state.last
			})
		})
		  .then(response => response.json())
		  .then(user => {
		  	if (user) {
		  		alert("Verifiation mail is sent on "+ user.email)
		  		this.props.loaduser(user)
		  	}
		  })	
	}

	render() {
		return (
		<article className="mv6 w-100 w-50-m w-25-l mw6 center bg-dark-gray">
			<main className="pa4 black-80 bg-white shadow-5 center br3 ba">
			  <div className="measure">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0">SIGN UP</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">First Name:</label>
			        <input 
			          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			          type="text" 
			          name="name"
			          id="name"
			          onChange= {this.onfirstNameChange} 
			        />
			        <label className="db fw6 lh-copy f6" htmlFor="name">Last Name:</label>
			        <input 
			          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			          type="text" 
			          name="name"
			          id="name"
			          onChange= {this.onlastNameChange} 
			        />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
			          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			          type="email" 
			          name="email-address"  
			          id="email-address"
			          onChange= {this.onEmailChange} 
			        />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			          type="password" 
			          name="password"  
			          id="password"
			          onChange= {this.onPasswordChange} 
			        />
			      </div>
			    </fieldset>
			    <div className="">
			      <input
			      	onClick={this.onSubmitSignIn} 
			        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			        type="submit" 
			        value="Sign Up" 
			      />
			    </div>
			  </div>
			</main>
		</article>
		);
}
}

export default Register;














