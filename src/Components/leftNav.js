import React from 'react';
import 'tachyons';
import './leftNav.css';

const LeftNav = () =>{
    return(
        <div className='bg-dark-gray display border text-color'>
            <p>LATEST NEWS AND TOP RELEASES</p>
            <article className="bg-dark-gray center mw5 ba mv1 card-border">
			  <div className="pv2 ph3 align">
			     <a href="#" className="link dim a align">MOVIES</a>
			  </div>
			  	<a href="#" className="dim">
			  		<img src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" className="w-100 db dimensions" alt=""/>
				</a>
			</article>
			<article className="bg-dark-gray center mw5 ba mv1 card-border">
			  <div class="pv2 ph3 align">
			     <a href="#" className="link dim a align">TV SHOWS</a>
			  </div>
			  	<a href="#" className="dim">
			  		<img src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" className="w-100 db dimensions" alt=""/>
				</a>
			</article>
			<article className="bg-dark-gray center mw5 ba mv1 card-border">
			  <div className="pv2 ph3 align">
			     <a href="#" className="link dim a">TV SHOWS</a>
			  </div>
			  	<a href="#" className="dim">
			  		<img src="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg" className="w-100 db dimensions" alt=""/>
				</a>
			</article>
        </div>
    );

}

export default LeftNav;
