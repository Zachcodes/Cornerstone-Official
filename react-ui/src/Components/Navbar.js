import React, {Component} from 'react';
import '../CSS/Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="navbar-main">
        <div className="navbar-name-container">
          <div><b>Cornerstone Design</b> <i>Group</i></div>
          <div className="navbar-bottom-container">
            <span className="navbar-cdg">CDG</span>
            <span className="navbar-description-container">
              <span>architecture</span>
              <span>development</span>
              <span>planning</span>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
