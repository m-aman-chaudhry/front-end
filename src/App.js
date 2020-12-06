import React from 'react';
import Navigation from './Components/navigation.js';
import Bottom from './Components/bottomPart.js';
import Register from './Register.js';
import SignIn from './SignIn.js';
import Search from './Components/search';
import Profile from './Components/profile';
import Verify from './verify';
import Media from './Components/Media';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      search:null,
      dataanime: {},
      user: {}
    }
  }

  onsearchchange = (data) =>{
    this.setState({search:data})
  }

  animedata=(data) =>{
    this.setState({dataanime:data})
    console.log(data)
  }

  signin = () => {
    this.setState({ isSignedIn: !this.state.isSignedIn })
  }

  loaduser = (data) => {
    this.setState({ user: data })
  }

  render() { 
    return (
      <Router>
        <div className="App bg-dark-gray">
          <Navigation isSignedIn={this.state.isSignedIn} signin={this.signin}/>
            <Route exact path="/" component={() => <Bottom search={this.onsearchchange} animedata={this.animedata}/>} />
            <Route exact path="/registerlink" component={() => <Register loaduser={this.loaduser} signin={this.signin} isSignedIn={this.isSignedIn}/>}/>
            <Route exact path="/signin" component={() => <SignIn loaduser={this.loaduser} signin={this.signin} isSignedIn={this.isSignedIn}/>}/>
            <Route exact path="/profile" component={() => <Profile user={this.state.user}/>}/>
            <Route exact path="/search" component={() => <Search data={this.state.search} animedata={this.animedata}/>}/>
            <Route exact path="/media" component={() => <Media isSignedIn={this.state.isSignedIn} user={this.state.user} data={this.state.dataanime}/>}/>
            <Route path="/verify/" component={() => <Verify loaduser={this.loaduser}/>} />
        </div>
      </Router>
    );
  }
}


export default App;

