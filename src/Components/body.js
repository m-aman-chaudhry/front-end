import React from 'react';
import 'tachyons';
import Movies from './Movies.js';
import TVShows from './TVShows.js'
import Anime from './Anime.js';
import Books from './Books.js';
import Songs from './Songs.js';
import WebSeries from './WebSeries.js'

const Body = ({ routes,animedata }) => {
	const conditionalrender = () => {
		if (routes === 'movies') {
    	  return(
    		<Movies animedata={animedata} />
    	  );
    	}
    	else if ( routes === 'tv-shows') {
    	  return(
    	  	<TVShows animedata={animedata} />
    	  );
    	}
    	else if ( routes === 'anime') {
    	  return(
    	  	<Anime animedata={animedata} />
    	  );	
    	}
    	else if ( routes === 'books') {
    	  return(
    	  	<Books animedata={animedata} />
    	  );	
    	}
    	else if ( routes === 'songs') {
    	  return(
    	  	<Songs animedata={animedata} />
    	  );	
    	}
    	else if ( routes === 'web-series') {
    	  return(
    	  	<WebSeries animedata={animedata} />
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
