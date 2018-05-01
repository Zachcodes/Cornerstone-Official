import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Axios
import axios from 'axios';
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
      timeToCall: '12:00 pm'
    }
  }

  handleNameChange  = (value) => {
    this.setState({
      name: value
    })
  }
  handleEmailChange  = (value) => {
    this.setState({
      email: value
    })
  }
  handleSubjectChange  = (value) => {
    this.setState({
      subject: value
    })
  }
  handleMessageChange  = (value) => {
    this.setState({
      message: value
    })
  }
  handleRequestChange  = (e) => {
    this.setState({
      requestCallback: e.target.checked
    })
  }
  handlePhoneChange  = (value) => {
    this.setState({
      phone: value
    })
  }
  handleTimeChange  = (value) => {
    let time = value.format(format)
    this.setState({
      timeToCall: time
    })
  }

  submitContactFormMessage = () => {
    console.log('getting here')
    axios.post('/api/contact', {...this.state}).then(response => {
      console.log('response', response)
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
        <div className="contact-form-main">
          <div className="contact-form-row"><h2>Contact</h2></div>
          <div className="contact-form-row">Name:<input type="text" onChange={(e) => this.handleNameChange(e.target.value)}></input></div>
          <div className="contact-form-row">Email: <input type="text" onChange={(e) => this.handleEmailChange(e.target.value)}></input></div>
          <div className="contact-form-row">Subject: <input type="text" onChange={(e) => this.handleSubjectChange(e.target.value)}></input></div>
          <div className="contact-form-row">Message: <input type='text' onChange={(e) => this.handleMessageChange(e.target.value)}></input></div>
          <div className="contact-form-row">
            Request callback: <input type="checkbox" onChange={this.handleRequestChange}></input>
          Phone: <input type="text" onChange={(e) => this.handlePhoneChange(e.target.value)}></input>
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
          <div className="contact-form-row"><button onClick={this.submitContactFormMessage}>Submit</button></div>
        </div>
      </div>
    );
  }
}

export default Contact;
