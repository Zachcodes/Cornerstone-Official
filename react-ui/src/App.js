import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Routing
import routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cornerstone Design Group</h1>
        </header>
        <p className="App-intro">
          This will be the absolutely amazing front end for your website.
        </p>
        <Link to='/admin'>
          <p>admin</p>
        </Link>
        {routes}
      </div>
    );
  }
}

export default App;
