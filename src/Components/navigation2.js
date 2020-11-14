import React from 'react';
import 'tachyons';
import './navigation2.css';

const Navigation2 = () =>{
    return (
        <div style={{display:"flex", height:"100px" , justifyContent:"center"}} className='bg-gray' >
            <input className='ba background pa2 mb2 db w-40 mv4 br-pill border-nav b' type='text' placeholder='SEARCH' />
            <button type="buton" className="f6 grow no-underline br-pill ph3 pv2 dib white bg-near-black ma2 mt4 mb4 border-nav">Search</button>
        </div>
    );
}

export default Navigation2;