import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" render= {
            () => {
              return(<h1>hello</h1>);
            }
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
