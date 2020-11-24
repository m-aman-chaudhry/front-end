import React from 'react';
import './Card.css';
var XMLParser = require('react-xml-parser');

const Card = (props) => {
	var xml = new XMLParser().parseFromString(props.genre);
    var valuing = xml.getElementsByTagName('div')[xml.getElementsByTagName('div').length-1].getElementsByTagName('ul')[0].getElementsByTagName('li');
	return(
		<article className="bg-white center card-dimensions ba b--black-10 mv4 hotrodchanges">
			<div className="">
				<h1 className="f6 ttu tracked">{props.id}</h1>
			</div>
				<img src={props.imageurl} className="db" style={{"height":"50%", "width":"50%"}} alt="Cat yawning" />
			<div className="">
				<p className="" >genre</p>
				{valuing.map((data, i)=>{return(<span genrekey={i} className="link dim lh-title">{data.value}</span>)})}
			</div>
		</article>
	)
}

export default Card;

