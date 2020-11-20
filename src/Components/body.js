import React from 'react';
import 'tachyons';
import Movies from './Movies.js';
import TVShows from './TVShows.js'
import Anime from './Anime.js';
import Books from './Books.js';
import Songs from './Songs.js';
import WebSeries from './WebSeries.js'

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
    	  return(
    	  	<Anime />
    	  );	
    	}
    	else if ( routes === 'books') {
    	  return(
    	  	<Books />
    	  );	
    	}
    	else if ( routes === 'songs') {
    	  return(
    	  	<Songs />
    	  );	
    	}
    	else if ( routes === 'web-series') {
    	  return(
    	  	<WebSeries />
    	  );
    	}
	}
    return(
    	<div>
    	  {conditionalrender() }
    	</div>
    );
}
export default Body;
