import React from 'react';
import 'tachyons';
import './rightNav.css';

const RightNav = () =>{
    return(
        <div className='bg-dark-gray' style= {{ display :'grid', height: '100%'}} >
            <a class="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>MOVIES</span>
            </a>
            <a class="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>TV SHOWS</span>
            </a>
            <a class="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>ANIME</span>
            </a>
            <a class="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>BOOKS</span>
            </a>
            <a class="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>SONGS</span>
            </a>
            <a class="f6 link dim mb4 mt3 dib border-rnav button-slanted bg shadow-5" href="#0">
            	<span className='button-text'>XYZ</span>
            </a>
        </div>
    );

}

export default RightNav;