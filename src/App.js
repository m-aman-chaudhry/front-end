import React from 'react';
import Navigation from './Components/navigation.js';
import Bottom from './Components/bottomPart.js';
import Register from './Register.js';
import SignIn from './SignIn.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-dark-gray">
        <Navigation /> 
        <Switch>
          <Route path="/" exact component={Bottom} />
          <Route path="/register" component={Register}/>
          <Route path="/signin" component={SignIn}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
