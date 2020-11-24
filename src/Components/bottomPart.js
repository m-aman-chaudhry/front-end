import React,{ Component } from 'react';
import Navigation2 from './navigation2.js';
import LeftNav from './leftNav.js';
import RightNav from './rightNav.js';
import Body from './body.js';
import './bottomPart.css';
//import {Link} from 'react-router-dom';

class Bottom extends Component {
  constructor() {
    super();
    this.state = {route: 'anime'}
  }
  onRouteChange = (route) => {
  this.setState({route: route});
 }

render() {
  return (
	<div className="App bg-dark-gray">
	  <Navigation2 />
	  <div className='container'>
	    <LeftNav />
	    <Body routes={this.state.route}/>
	    <RightNav onRouteChange={this.onRouteChange}/>
	  </div>
	</div>
  );
}
}

export default Bottom;