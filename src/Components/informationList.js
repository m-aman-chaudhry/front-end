import React from 'react';

const InformationList = ({id, mediaId, status, Rating, Comments}) => {
	return(
		<tr>
		  <td>{id}</td>
		  <td>{status}</td>
		  <td>{Rating}</td>
		  <td>{Comments}</td>
		</tr>
	);
}

export default InformationList;