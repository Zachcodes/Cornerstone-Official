import React, { Component } from 'react';
import logo from './logo.svg';

//Routing
import routes from './routes';
import { Link } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar';

//CSS
import './CSS/Main.css';

//modal
import Modal from 'react-modal';

Modal.setAppElement('#root');

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
