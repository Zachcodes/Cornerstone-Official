import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class NavigationItem extends Component {

  render() {
    var navSquareClassName = 'navigation-square'
    if(this.props.active === 'true') {
      navSquareClassName = 'navigation-square navigation-square-active'
    }
    return (
      <div>
        <div className={navSquareClassName}>
          <div className="navigation-square-line">
            <div className="navigation-square-line-tilted">
              <button className={this.props.buttonClass}><Link to={this.props.linkTo} className={this.props.linkClass}>{this.props.navigationName}</Link></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
