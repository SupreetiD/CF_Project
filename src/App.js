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
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <h1 className="App-title">Welcome to React</h1>
        //   </header>
        //   <p className="App-intro">
        //     To get started, edit <code>src/App.js</code> and save to reload.
        //   </p>

          <Route path="/" render= {
            () => {
              return(<h1>hello</h1>);
            }
          }
        </div>
      </Router>
    );
  }
}

export default App;