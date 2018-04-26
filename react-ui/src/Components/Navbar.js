import React, {Component} from 'react';
import '../CSS/Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  render() {
    var rightSide = this.state.loggedIn
                    ? 'logged in' 
                    : 'not logged in';
    return (
      <div className="navbar-main">
        <div className="navbar-left">
          Cornerstone Design Group
        </div>
        <div className="navbar-right">
          {rightSide}
        </div>
      </div>
    )
  }
}

export default Navbar;
