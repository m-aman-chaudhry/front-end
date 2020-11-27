import React, { Component } from 'react';
import Information from './anime_json';
import './search.css'
import { Link } from 'react-router-dom';
var XMLParser = require('react-xml-parser');


class Search extends Component {

  constructor(props){
    super(props);

    this.state={
      search:null
    };
  }

  componentDidMount(){
    this.onsearchchange()
  }

  onsearchchange = () =>{
    this.setState({search:this.props.data})
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px',
      textAlign:'center'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.anime.toLowerCase().includes(this.state.search.toLowerCase()) || data.image.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      try
        {var xml = new XMLParser().parseFromString(data.descreption);
        var valuing = xml.getElementsByTagName('div')[xml.getElementsByTagName('div').length-1].getElementsByTagName('ul')[0].getElementsByTagName('li');}
      catch
        {var valuing = []
         }

      try{
        var episodes = xml.getElementsByTagName('ul')[0].getElementsByTagName('li')[0];
      }
      catch{episodes="unavialable"}
      try{
        var Studio = xml.getElementsByTagName('ul')[0].getElementsByTagName('li')[1];
      }
      catch{Studio="unavialable"}
      try{
        var Aired = xml.getElementsByTagName('ul')[0].getElementsByTagName('li')[2];
      }
      catch{Aired="unavialable"}
      return(
      <Link to='./media' style={{'color':'black'}}>
      <div onClick={() => this.props.animedata(data)}>
        <li>
        <div className="seatag">
            <img src={data.image} />
            <div className="infosema">
              <h1 style={styleInfo}>{data.anime}</h1>
              <span className="infose">No. of episodes:{episodes.value}</span><br/>
              <span className="infose">Studio:{Studio.value}</span><br/>
              <span className="infose">Aired:{Aired.value}</span><br/>
              <p className="infose">Tags:
              {valuing.map(data=>{return(<span style={styleInfo}>{data.value},</span>)})}
              </p>
            </div>
        </div>
        </li>
      </div>
      </Link>
      )
    })

    return (
      <div>
      <div style={{display:"flex", height:"100px" , justifyContent:"center"}} className='bg-gray' >
            <input className='ba background pa2 mb2 db w-40 mv4 br-pill border-nav b' type='text' placeholder='Enter item to be searched' onChange={(e)=>this.searchSpace(e)} />
      </div>
      <ul className="altag">
      {items}
      </ul>
      </div>
    )
  }
}

export default Search;