import React from 'react';

const InformationList = ({id, mediaId, status, Rating, Comments}) => {
	return(
		<div>
			<table className="userTable">
				<tbody>
					<tr>
					  <td>{id}</td>
					  <td>{mediaId}</td>
					  <td>{status}</td>
					  <td>{Rating}</td>
					  <td>{Comments}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default InformationList;