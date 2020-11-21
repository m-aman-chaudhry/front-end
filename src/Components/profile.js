import React, {Component} from 'react';
// import {users} from './users';
import InformationList from './informationList';
import './profile.css';

const users = [
    {
        "id": 1,
        "mediaId": "2",
        "status": "3",
        "Rating": "4",
        "Comments": "5"
    },
    {
        "id": 6,
        "mediaId": "7",
        "status": "8",
        "Rating": "9",
        "Comments": "10"
    }
];

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			users: users
		}
	}

	render() {
		const userInfo = this.state.users.map((user, i) => {
			return <InformationList key={i} id={user.id} mediaId={user.mediaId} status={user.status} Rating={user.Rating} Comments={user.Comments} />
		})
		return(
			<div className="userProfile">
				<table className="userTable">
					<thead>
					  <tr>
					    <th>Id</th>
					    <th>MediaId</th>
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