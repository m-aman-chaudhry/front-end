import React, { Component } from 'react';
import Information from './anime_json';
var XMLParser = require('react-xml-parser');


class App extends Component {

  constructor(){
    super();

    this.state={
      search:null,
      a: [1,2,3]
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
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
        {var valuing = []}
      return(
      <div>
        <ul>{{/*this is a comment here you will make a on click function which will send all the data to next component and show it's despcreption and allow to make comments and status*/}}
          {{/* Now you can get any tag like h1,h2 from the descreption html just save it in a variavle and use variable_name.value and it will give you the content inside that tag*/}}
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.anime}</span>
            <img src={data.image} />
            {valuing.map(data=>{return(<span style={styleInfo}>{data.value}</span>)})}
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div>
      <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default App;