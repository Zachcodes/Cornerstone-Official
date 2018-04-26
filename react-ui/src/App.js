import React, { Component } from 'react';
import logo from './logo.svg';

//Routing
import routes from './routes';
import { Link } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        {routes}
      </div>
    );
  }
}

export default App;
