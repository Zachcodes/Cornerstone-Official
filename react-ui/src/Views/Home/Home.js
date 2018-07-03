import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import NavigationItem from "../../Components/NavigationItem"
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
        <div className="home-middle-line"></div>
        <div className="home-left-line">
          <NavigationItem
            buttonClass="navigation-button"
            linkTo="/philosophy"
            linkClass="navigation-link"
            navigationName="Philosophy">
          </NavigationItem>
          <NavigationItem
            buttonClass="navigation-button"
            linkTo="/portfolio"
            linkClass="navigation-link"
            navigationName="Portfolio">
          </NavigationItem>
          <NavigationItem
            buttonClass="navigation-button"
            linkTo="/contact"
            linkClass="navigation-link"
            navigationName="Contact">
          </NavigationItem>
        </div>
      </div>
    );
  }
}

export default Home;
