import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//CSS
import '../../CSS/Home.css';
import '../../CSS/Philosophy.css';

//Components
import PhilosophyText from '../../Components/PhilosophyText';

class Philosophy extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="home-red-square">
        <PhilosophyText
          positionClass="philosophy-left-container"
          innerText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo."
          >
        </PhilosophyText>
        <PhilosophyText
          positionClass="testing2"
          innerText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo."
          >
        </PhilosophyText>
        <PhilosophyText
          positionClass="testing3"
          innerText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo."
          >
        </PhilosophyText>
        <div className="home-bottom-line"></div>
        <div className="home-left-line">
          <button className="home-navigation-button"><Link to="/philosophy" className="home-link">Philosophy</Link></button>
          <button className="home-navigation-button"><Link to="/portfolio" className="home-link">Portfolio</Link></button>
          <button className="home-navigation-button"><Link to="/contact" className="home-link">Contact</Link></button>
        </div>
      </div>
    );
  }
}

export default Philosophy;
