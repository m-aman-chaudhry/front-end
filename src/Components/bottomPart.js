import React from 'react';
import Navigation2 from './navigation2.js';
import LeftNav from './leftNav.js';
import RightNav from './rightNav.js';
import Body from './body.js';
import './bottomPart.css';
import {Link} from 'react-router-dom';

function Bottom() {
  return (
	<div className="App bg-dark-gray">
	  <Navigation2 />
	  <div className='container' >
	    <LeftNav />
	    <Body/>
	    <RightNav />
	  </div>
	</div>
  );
}

export default Bottom;