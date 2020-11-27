import React from 'react';
import 'tachyons';
import './navigation2.css';
import { Link } from 'react-router-dom';

class Navigation2 extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			data:null
		}
	}

	datachange = (event) => {
		this.setState({data:event.target.value})
	}

	ondone = (event) => {
		this.props.search(this.state.data)
	}

	render(){
		return (
        <div style={{display:"flex", height:"100px" , justifyContent:"center"}} className='bg-gray' >
            <input onChange={this.datachange} className='ba background pa2 mb2 db w-40 mv4 br-pill border-nav b' type='text' placeholder='SEARCH' />
            <Link to='/search'><button onClick={this.ondone} type="buton" className="f6 grow no-underline br-pill ph3 pv2 dib white bg-near-black ma2 mt4 mb4 border-nav">Search</button></Link>
        </div>
    );
	}

}
export default Navigation2;