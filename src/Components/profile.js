import React, {Component} from 'react';
import {user} from './users';
import InformationList from './informationList';
import './profile.css';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}

	componentDidMount(){
		this.onSubmitSignIn();
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3001/profile', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.props.user.email
			})
		})
		  .then(response => response.json())
		  .then(user => {
		  	this.setState({users: user})
		  })	
	}

	render() {
		const userInfo = this.state.users.map((user, i) => {
			return <InformationList key={i} id={user.id} status={user.status} Rating={user.Rating} Comments={user.Comments} />
		})
		return(
			<div className="userProfile">
				<h1 className="text-gradient">PROFILE</h1>
				<h2 className="text-gradient">Email ID: {this.props.user.email}</h2>
				<table className="userTable">
					<thead>
					  <tr>
					    <th>Id</th>
					    <th>Status</th>
					    <th>Rating</th>
					    <th>Comments</th>
					  </tr>
					</thead>
					<tbody>
						{userInfo}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Profile;

