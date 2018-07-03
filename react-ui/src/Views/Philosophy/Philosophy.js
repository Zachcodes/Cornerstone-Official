import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//CSS
import '../../CSS/Home.css';
import '../../CSS/Philosophy.css';

//Components
import PhilosophyText from '../../Components/PhilosophyText';
import NavigationItem from '../../Components/NavigationItem'

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
          positionClass="philosophy-right-container"
          innerText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo."
          >
        </PhilosophyText>
        <PhilosophyText
          positionClass="philosophy-right-bottom-container"
          innerText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
          et quasi architecto beatae vitae dicta sunt explicabo."
          >
        </PhilosophyText>
        <div className="home-bottom-line"></div>
        <div className="home-middle-line"></div>
        <div className="home-left-line">
          <NavigationItem
            buttonClass="navigation-button"
            linkTo="/philosophy"
            linkClass="navigation-link"
            navigationName="Philosophy"
            active='true'>
          </NavigationItem>
          <NavigationItem
            buttonClass="navigation-button"
            linkTo="/portfolio"
            linkClass="navigation-link"
            navigationName="Portfolio"
            active='false'>
          </NavigationItem>
          <NavigationItem
            buttonClass="navigation-button"
            linkTo="/contact"
            linkClass="navigation-link"
            navigationName="Contact"
            active='false'>
          </NavigationItem>
          <NavigationItem
            buttonClass="navigation-button"
            linkTo="/"
            linkClass="navigation-link"
            navigationName="Home"
            active='false'>
          </NavigationItem>
        </div>
      </div>
    );
  }
}

export default Philosophy;
