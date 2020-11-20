import React from 'react';
import Button from './button.js';
import Logo from './logo.js';
import {Link} from 'react-router-dom';
import './navigation.css';

const Navigation = ({ isSignedIn }) =>{
    return (
        <nav style= {{display : 'flex', height:"55px" , width:'100%'}} className='bg-dark-gray'>
            <Link to="/">
	            <Logo  />
	        </Link>    
	        <Link to="/">
	            <p className='b white f3 aligns'>KRINIX</p>
            </Link> 
            <span className="center"></span>
            <Button isSignedIn={isSignedIn} />
        </nav>
    );
}

export default Navigation;