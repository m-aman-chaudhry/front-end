import React from 'react';
import Navigation from './Components/navigation.js';
import Bottom from './Components/bottomPart.js';
import Register from './Register.js';
import SignIn from './SignIn.js';
import Search from './Components/search';
import Profile from './Components/profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false,
      user: {}
    }
  }
  signin = () => {
    this.setState({ isSignedIn: !this.state.isSignedIn })
  }

  loaduser = (data) => {
    this.setState({ user: data })
  }

  render() { 
    return (
      <Search />
    );
  }
}


export default App;

