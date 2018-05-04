import React, { Component } from 'react';

//temp images
import commercial from '../Images/Commercial/commercial.jpg';

class CollapsedBuildingInfo extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    var {filePath, description} = this.props.portfolioProject;
    //TODO Once out of production, change the image source to be relative to server folder
    return (
      <div className='portfolio-collapsed-main-container'>
        <div className='portfolio-collapsed-image'><img src={commercial} className='portfolio-collapsed-src'></img></div>
        <div className='portfolio-collapsed-description'>{description}</div>
      </div>
    )
  }
}

export default CollapsedBuildingInfo;
