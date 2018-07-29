import React from 'react';


export default function PhilosophyText(props) {

    var fullClassName = `philosophy-main-text-container ${props.positionClass}`;
    return (
      <div className={fullClassName}>
        <div className="philosophy-text-square"></div>
        <div className="philosophy-text-line"></div>
        <div className="philosophy-text-text">
          {props.children}
        </div>
      </div>
    )

}
