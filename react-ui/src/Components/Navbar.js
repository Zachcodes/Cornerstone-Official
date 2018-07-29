import React, {Component} from 'react';
import '../CSS/Navbar.css';

import {Link} from 'react-router-dom'

//images
import logo from '../Images/placeholder.png'

class Navbar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const navbarLogo = {
      background: `url(${logo})`,
      backgroundSize: 'cover',
      height: '100%',
      width: '200px'
    }
    return (
      <div className="navbar-main">
        <Link to="/"><div style={navbarLogo}>

        </div></Link>
      </div>
    )
  }
}

export default Navbar;
