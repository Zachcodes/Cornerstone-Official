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
      modalType: '',
      portfolioProjects: [],
      type: ''
    }
    this.commercialSpan = React.createRef();
    this.residentialSpan = React.createRef();
    this.institutionalSpan = React.createRef();
  }

  openModal = (type) => {
    axios.get(`/api/portfolio/${type}`).then( results => {
      var portfolioProjects = results.data;
      if(portfolioProjects !== 'No Images') {
        this.setState({
          modalIsOpen: true,
          portfolioProjects: portfolioProjects,
          type: type
        });
      }
      else {
        this.setState({
          modalIsOpen: true,
          portfolioProjects: []
        });
      }
    })
  }
  afterOpenModal = () => {

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
              className='portfolio-modal-content'
              overlayClassName="portfolio-modal-overlay"
              contentLabel="Example Modal"
              >

            <div className="portfolio-modal-navigation">
              <span ref={this.commercialSpan}>Commercial</span>
              <span ref={this.residentialSpan}>Residential</span>
              <span ref={this.institutionalSpan}>Institutional</span>
            </div>
            <div className="portfolio-modal-project-container">
              {this.state.portfolioProjects.map(portfolioProject => {
              return <CollapsedBuildingInfo portfolioProject={portfolioProject} key={portfolioProject.portfolio_id}></CollapsedBuildingInfo>
            })}
          </div>
          <div className="portfolio-modal-close-div"><button onClick={this.closeModal}>close</button></div>
          </Modal>
          </div>
        </div>
    );
  }
}

export default Portfolio;
