import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { TeamPage } from './pages/TeamPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/teams/:teamName">
            <TeamPage></TeamPage>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
