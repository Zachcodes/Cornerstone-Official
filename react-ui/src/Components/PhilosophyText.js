import React, {Component} from 'react';


class PhilosophyText extends Component {
  constructor(props){
    super(props);
  }

  render() {
    var fullClassName = `philosophy-main-text-container ${this.props.positionClass}`;
    return (
      <div className={fullClassName}>
        <div>{this.props.innerText}</div>
      </div>
    )
  }
}

export default PhilosophyText;
