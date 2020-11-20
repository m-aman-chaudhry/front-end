import React from 'react';
import 'tachyons';
import './rightNav.css';

const RightNav = ({ onRouteChange }) =>{
    return(
        <div className='bg-dark-gray' style= {{ display :'grid', height: '100%'}} >
            <a onClick={() => onRouteChange('movies')} className="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>MOVIES</span>
            </a>
            <a onClick={() => onRouteChange('tv-shows')} className="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>TV SHOWS</span>
            </a>
            <a onClick={() => onRouteChange('anime')} className="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>ANIME</span>
            </a>
            <a onClick={() => onRouteChange('books')} className="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>BOOKS</span>
            </a>
            <a onClick={() => onRouteChange('songs')} className="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>SONGS</span>
            </a>
            <a onClick={() => onRouteChange('web-series')} className="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>WEB SERIES</span>
            </a>
        </div>
    );

}

export default RightNav;