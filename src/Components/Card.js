import React from 'react';
import './Card.css';
import 'tachyons';
import { Link } from 'react-router-dom';
var XMLParser = require('react-xml-parser');

const Card = (props) => {
	var xml = new XMLParser().parseFromString(props.genre);
    var valuing = xml.getElementsByTagName('div')[xml.getElementsByTagName('div').length-1].getElementsByTagName('ul')[0].getElementsByTagName('li');
	return(
		<Link to='./media' style={{'color':'black'}}>
		<article className="home_card" onClick={() => props.animedata(props.data)}>
			<div className="">
				<h1 className="cardTitle">{props.id}</h1>
			</div>
				<img src={props.imageurl} className="carding" alt="{props.key}" />
			<p className="genreName" >genre</p>
			<div className="genreDiv">
				{valuing.slice(0,4).map((data, i)=>{return(<span genrekey={i} className="genreTitles">{data.value}</span>)})}
			</div>
		</article>
		</Link>
	)
}

export default Card;










