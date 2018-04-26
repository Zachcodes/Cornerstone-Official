import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//CSS
import '../../CSS/Home.css';

class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="home-red-square">
        <div className="home-bottom-line"></div>
        <div className="home-left-line">
          <button className="home-navigation-button"><Link to="/philosophy">Philosophy</Link></button>
          <button className="home-navigation-button"><Link to="/portfolio">Portfolio</Link></button>
          <button className="home-navigation-button"><Link to="/contact">Contact</Link></button>
        </div>
      </div>
    );
  }
}

export default Home;
