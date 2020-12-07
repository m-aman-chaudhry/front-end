import React from 'react';
import 'tachyons';
import './Media.css';
import { Link } from 'react-router-dom';
var XMLParser = require('react-xml-parser');


class Media extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			comments:[1,2,3],
			comment:null,
			rating:'Ratings',
			Status:'Status',
			email:this.props.user.email
		}
	}

	componentDidMount(){
		this.commentsback()
		this.initial()
	}
	onclickrating=(data)=>{
		if (this.props.isSignedIn) {
			this.setState({rating:data})
		if (this.state.Status === "status") {
			this.setState({Status:'Watching'})
			this.onSubmitstatus("Watching",data);
		}
		else{
			this.onSubmitstatus(this.state.status,data);
		}
		}
	}

	onclickstatus=(data)=>{
		if (this.props.isSignedIn) {
			this.setState({Status:data})
		this.onSubmitstatus(data,this.state.rating);
	}
	}

	commentchange=(event)=>{
		if (this.state.Status == "Status") {
			alert("Can't Comment on Media you haven't seen")
		}
		else{
			this.setState({comment:event.target.value})
		}
	}

	onSubmitrating = (data) => {
		var data
		if (this.state.rating=="Ratings") {
			data=0
		}
		fetch('http://localhost:3001/rating', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				rating:data,
				id:this.props.data.anime
			})
		})
		  .then(response => response.json())
		  .then(user => {
		  })	
		  		console.log("this.state.email")
	}

	onSubmitstatus = (data,data1) => {
		fetch('http://localhost:3001/status', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				status:data,
				id:this.props.data.anime
			})
		})
		  .then(user => {
		  })	
		  this.onSubmitrating(data1);
	}

	onSubmitcomment = () => {
		fetch('http://localhost:3001/comment', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				comment:this.state.comment,
				id:this.props.data.anime
			})
		})
		  .then(response => response.json())
		  .then(user => {
		  	alert("Comment is added")
		  })	
	}

	commentsback = () => {
		fetch('http://localhost:3001/commentback', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				id:this.props.data.anime
			})
		})
		  .then(response => response.json())
		  .then(user => {
		  		this.setState({comments:user[0]})
		  })	
	}

	initial = () => {
		fetch('http://localhost:3001/initial', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				id:this.props.data.anime
			})
			})
		  .then(response => response.json())
		  .then(user => {
		  	if (user) {
		  	if (parseInt(user.Rating) !==0) {
		  		this.setState({rating:user.Rating})
		  	}
		  	this.setState({Status:user.status})

		  	}
		  })	
	}


	render(){
		try
	       {var xml = new XMLParser().parseFromString(this.props.data.descreption);
	       var valuing = xml.getElementsByTagName('div')[xml.getElementsByTagName('div').length-1].getElementsByTagName('ul')[0].getElementsByTagName('li');
	   		}
	     catch
	       {var valuing = [{'value':" "},{'value':" "},{'value':" "},{'value':" "},{'value':" "},{'value':" "}]
	        }
	     try{
	       var episodes = xml.getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
	     }
	     catch{episodes="unavialable"}
	     try{
	       var Studio = xml.getElementsByTagName('ul')[0].getElementsByTagName('li')[1];
	     }
	     catch{Studio="unavialable"}
	     try{
	       var Aired = xml.getElementsByTagName('ul')[0].getElementsByTagName('li')[2];
	     }
	     catch{Aired="unavialable"}
	     try{
	       var descreption = xml.getElementsByTagName('p')[0];
	     }
	     catch{descreption="unavialable"}
	     try{
	       var nameal = xml.getElementsByTagName('h6')[0];
	       if (nameal==null) {nameal={'value':'            '+this.props.data.anime}}
	     }
	     catch{nameal={'value':"unavialable"}}
	     try{
	       var rating = xml.getElementsByTagName('ul')[0].getElementsByTagName('li')[3].getElementsByTagName('div')[0];
	     }
	     catch{rating="unavialable"}
	     try
			{var cnnments = this.state.comments.comments.split("~")}
		catch{cnnments=[0,1];}
		return (
        <div>
        	<div className="Mediamain">
        		<div className="Mediaside">
        			<img style={{'justifySelf':'center'}} className="carding1" src={this.props.data.image} />
        			<div style={{'textAlign':'left','padding':'1em'}}>
        				<li>No. of episodes:{episodes.value}</li><br/>
              			<li>Studio:{Studio.value}</li><br/>
              			<li>Aired:{Aired.value}</li><br/>
              			<li>Tags:
              			<span>{valuing[0].value},{valuing[1].value},{valuing[2].value},</span><br/>{valuing.slice(3,6).map(data=>{return(<span style={{'margin':'0em','padding':'0em'}}>{data.value},</span>)})}
              			</li>
        			</div>
        		</div>
        		<div>
        		<h1>{this.props.data.anime}</h1>
        		<h3 style={{'textAlign':'left'}}>Alternative Title:{nameal.value.slice(11,)}</h3>
        		<div className="contactra">
        			<div style={{'alignSelf':'center','justifySelf':'center','fontSize':'1.5em'}}>
        				Current Ratings: &#9733;{rating.value}
        			</div>
        			<div style={{'alignSelf':'center','justifySelf':'center'}}>
        				<div class="hide-child absolute ba rat">{this.state.rating}
					    <div class="child absolute ba rat1">
					        <div onClick={() => this.onclickrating(1)} className="hava"> 1<hr/> </div>
					        <div onClick={() => this.onclickrating(2)} className="hava" > 2<hr/> </div>
					        <div onClick={() => this.onclickrating(3)} className="hava" > 3<hr/> </div>
					        <div onClick={() => this.onclickrating(4)} className="hava" > 4<hr/> </div>
					        <div onClick={() => this.onclickrating(5)} className="hava" > 5 </div>
					    </div>
						</div>
					</div>
					<div style={{'alignSelf':'center','justifySelf':'center'}}>
						<div class="hide-child absolute ba rat">{this.state.Status}
					    <div class="child absolute ba rat1">
					        <div onClick={() =>this.onclickstatus("Watching")} className="hava"> Watching<hr/> </div>
					        <div onClick={() =>this.onclickstatus("Completed")} className="hava" > Completed<hr/>  </div>
					        <div onClick={() =>this.onclickstatus("On-hold")} className="hava" > On-hold<hr/> </div>
					        <div onClick={() =>this.onclickstatus("Dropped")} className="hava" > Dropped<hr/> </div>
					        <div onClick={() =>this.onclickstatus("Plan to watch")} className="hava" > Plan to watch </div>
					    </div>
						</div>
					</div>
        		</div>
        		<p style={{'fontSize':'1.25em','textAlign':'left'}}>{descreption.value}</p>
        		</div>
        		<div>
        		</div>
        	</div>
        	<div>
	        	<h2>Comments:</h2>
				<div style={{display:"flex", height:"100px" , justifyContent:"center"}} className='bg-gray' >
		            <input onChange={this.commentchange} className='ba background pa2 mb2 db w-80 mv4 br-pill border-nav b' type='text' placeholder='Add your Comment here.' />
		            <button onClick={this.onSubmitcomment} type="buton" className="f6 grow no-underline br-pill ph3 pv2 dib white bg-near-black ma2 mt4 mb4 border-nav">Submit</button>
	        	</div>
	        	<div>
	        		{cnnments.map(data=>{return(<li style={{'margin':'0em','padding':'0em'}}>{data},</li>)})}
	        	</div>        	
        	</div>
        </div>
    );
	}

}
export default Media;