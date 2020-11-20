import React from 'react';
import 'tachyons';
import Movies from './Movies.js';
import TVShows from './TVShows.js'

const Body = ({ routes }) => {
	const conditionalrender = () => {
		if (routes === 'movies') {
    	  return(
    		<Movies />
    	  );
    	}
    	else if ( routes === 'tv-shows') {
    	  return(
    	  	<TVShows />
    	  );
    	}
    	else if ( routes === 'anime') {
    	  //return();	
    	}
    	else if ( routes === 'books') {
    	  //return();	
    	}
    	else if ( routes === 'songs') {
    	  //return();	
    	}
    	else if ( routes === 'web-series') {
    	  //return();
    	}
	}
    return(
    	<div>
    	  {conditionalrender() }
    	</div>
    );
}
export default Body;
