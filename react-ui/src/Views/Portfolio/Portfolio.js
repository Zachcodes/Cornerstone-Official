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
    var commercialSpan = this.commercialSpan.current;
    var residentialSpan = this.residentialSpan.current;
    var institutionalSpan = this.institutionalSpan.current;
    if(this.state.type === 'Commercial') {
      commercialSpan.classList.add('portfolio-modal-navigation-active')

      //in case others are active
      residentialSpan.classList.remove('portfolio-modal-navigation-active')
      institutionalSpan.classList.remove('portfolio-modal-navigation-active')
    }
    else if(this.state.type === 'Residential') {
      residentialSpan.classList.add('portfolio-modal-navigation-active')

      //in case others are active
      commercialSpan.classList.remove('portfolio-modal-navigation-active')
      institutionalSpan.classList.remove('portfolio-modal-navigation-active')
    }
    else if(this.state.type === 'Institutional') {
      institutionalSpan.classList.add('portfolio-modal-navigation-active')

      //in case others are active
      residentialSpan.classList.remove('portfolio-modal-navigation-active')
      commercialSpan.classList.remove('portfolio-modal-navigation-active')
    }
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  reloadProjects = (type) => {
    axios.get(`/api/portfolio/${type}`).then( results => {
      var portfolioProjects = results.data;
      if(portfolioProjects !== 'No Images') {
        this.setState({
          portfolioProjects: portfolioProjects,
          type: type
        }, () => {
          this.afterOpenModal()
        });
      }
      else {
        this.setState({
          portfolioProjects: []
        }, () => {
          this.afterOpenModal()
        });
      }
    })
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
              <button ref={this.commercialSpan}
                      id="commercial-span"
                      className='portfolio-modal-navigation-button'
                      onClick={() => this.reloadProjects('Commercial')}>Commercial</button>
              <button ref={this.residentialSpan}
                      id="residential-span"
                      className='portfolio-modal-navigation-button'
                      onClick={() => this.reloadProjects('Residential')}>Residential</button>
              <button ref={this.institutionalSpan}
                      id="institutional-span"
                      className='portfolio-modal-navigation-button'
                      onClick={() => this.reloadProjects('Institutional')}>Institutional</button>
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
