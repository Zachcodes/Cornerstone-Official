import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//CSS
import '../../CSS/Home.css';
import '../../CSS/Portfolio.css';

//Modal
import Modal from 'react-modal';

//components
import CollapsedBuildingInfo from '../../Components/CollapsedBuildingInfo';

const modalStyles = {
    content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      modalType: ''
    }
  }

  openModal = (type) => {
    axios.get(`/api/portfolio/${type}`).then( results => {
      console.log(results)
      this.setState({
        modalIsOpen: true
      });
    })
  }
  afterOpenModal = () => {
    this.subtitle.style.color = '#f00';
  }
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
        <div className="home-red-square">
          <div className="home-bottom-line"></div>
          <div className="home-left-line">
            <button className="home-navigation-button"><Link to="/philosophy" className="home-link">Philosophy</Link></button>
            <button className="home-navigation-button"><Link to="/portfolio" className="home-link">Portfolio</Link></button>
            <button className="home-navigation-button"><Link to="/contact" className="home-link">Contact</Link></button>
          </div>
          <div>
            <button onClick={() => { this.openModal('Commercial') }}>Commercial</button>
            <button onClick={() => { this.openModal('Residential') }}>Residential</button>
            <button onClick={() => { this.openModal('Institutional') }}>Institutional</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={modalStyles}
              contentLabel="Example Modal"
              >

            <h2 ref={subtitle => this.subtitle = subtitle}>Residential</h2>
            <button onClick={this.closeModal}>close</button>
            <CollapsedBuildingInfo></CollapsedBuildingInfo>
          </Modal>
          </div>
        </div>
    );
  }
}

export default Portfolio;
