import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import '../../CSS/Contact.css';
import '../../CSS/Home.css';
import 'rc-time-picker/assets/index.css';

//Time picker
import moment from 'moment';
import TimePicker from 'rc-time-picker';
const format = 'h:mm a';
const now = moment().hour(0).minute(0);

class Contact extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      requestCallback: false,
      phone: '',
      timeToCall: ''
    }
  }

  handleNameChange  = (value) => {

  }
  handleEmailChange  = (value) => {

  }
  handleSubjectChange  = (value) => {

  }
  handleMessageChange  = (value) => {

  }
  handleRequestChange  = (value) => {

  }
  handlePhoneChange  = (value) => {

  }
  handleTimeChange  = (value) => {

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
        <div className="contact-form-main">
          <div className="contact-form-row"><h2>Contact</h2></div>
          <div className="contact-form-row">Name:<input type="text" onchange></input></div>
          <div className="contact-form-row">Email: <input type="text"></input></div>
          <div className="contact-form-row">Subject: <input type="text"></input></div>
          <div className="contact-form-row">Message: <input type='text'></input></div>
          <div className="contact-form-row">
            Request callback: <input type="checkbox"></input>
          Phone: <input type="text"></input>
        Best Time To Call:   <TimePicker
                                showSecond={false}
                                defaultValue={now}
                                className="xxx"
                                onChange={this.handleTimeChange}
                                format={format}
                                use12Hours
                                inputReadOnly
                              />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
