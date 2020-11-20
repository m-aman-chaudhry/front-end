import React from 'react';
import Navigation from './Components/navigation.js';
import Bottom from './Components/bottomPart.js';
import Register from './Register.js';
import SignIn from './SignIn.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false
    }
  }
  signin = () => {
    this.setState({ isSignedIn: true })
    console.log('hi');
  }

  render() { 
    return (
      <Router>
        <div className="App bg-dark-gray">
          <Navigation isSignedIn={this.state.isSignedIn}/> 
          <Switch>
            <Route path="/" exact component={Bottom} />
            
            <Route exact path="/registerlink" component={() => <Register signin={this.signin} isSignedIn={this.isSignedIn}/>}/>}
            
            <Route exact path="/signin" component={() => <SignIn signin={this.signin} isSignedIn={this.isSignedIn}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;

