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
    this.p1 = React.createRef();
    this.p2 = React.createRef();
    this.input1 = React.createRef();
    this.input2 = React.createRef();
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
    }, () => {

      var p1 = this.p1.current;
      var p2 = this.p2.current;
      var input1 = this.input1.current;

      if(this.state.requestCallback) {

        p1.classList.remove('contact-form-hidden-element')
        p2.classList.remove('contact-form-hidden-element')
        input1.classList.remove('contact-form-hidden-element')


        p1.classList.add('contact-form-visible-element')
        p2.classList.add('contact-form-visible-element')
        input1.classList.add('contact-form-visible-element')

      }
      else {

        p1.classList.add('contact-form-hidden-element')
        p2.classList.add('contact-form-hidden-element')
        input1.classList.add('contact-form-hidden-element')


        p1.classList.remove('contact-form-visible-element')
        p2.classList.remove('contact-form-visible-element')
        input1.classList.remove('contact-form-visible-element')

      }
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
    var { name, email, subject, message, requestCallback, phone, timeToCall} = this.state;
    return (
      <div className="home-red-square">
        <div className="contact-left-container">
          <div className="contact-left-row"><p>Address: some address</p></div>
          <div className="contact-left-row"><p>Phone: some phone</p></div>
          <div className="contact-left-row"><p>Email: some email</p></div>
        </div>
        <div className="home-bottom-line"></div>
        <div className="home-left-line">
          <button className="home-navigation-button"><Link to="/philosophy" className="home-link">Philosophy</Link></button>
          <button className="home-navigation-button"><Link to="/portfolio" className="home-link">Portfolio</Link></button>
          <button className="home-navigation-button"><Link to="/contact" className="home-link">Contact</Link></button>
        </div>
        <div className="contact-form-main">
          <div className="contact-form-row"><h2>Contact</h2></div>
          <div className="contact-form-row">Name:<input type="text" value={name} onChange={(e) => this.handleNameChange(e.target.value)}></input></div>
          <div className="contact-form-row">Email: <input type="text" value={email} onChange={(e) => this.handleEmailChange(e.target.value)}></input></div>
          <div className="contact-form-row">Subject: <input type="text" value={subject} onChange={(e) => this.handleSubjectChange(e.target.value)}></input></div>
          <div className="contact-form-row">Message: <input type='text' value={message} onChange={(e) => this.handleMessageChange(e.target.value)}></input></div>
          <div className="contact-form-row">
            Request callback: <input type="checkbox" value={requestCallback} onChange={this.handleRequestChange}></input>
          <p className="contact-form-hidden-element" ref={this.p1}>Phone:</p> <input type="text" value={phone} onChange={(e) => this.handlePhoneChange(e.target.value)} className="contact-form-hidden-element" ref={this.input1}></input>
        <div ref={this.p2} className="contact-form-hidden-element"><p>Best Time To Call:</p>   <TimePicker
                                showSecond={false}
                                defaultValue={now}
                                onChange={this.handleTimeChange}
                                format={format}
                                use12Hours
                              /></div>
          </div>
          <div className="contact-form-row"><button onClick={this.submitContactFormMessage}>Submit</button></div>
        </div>
      </div>
    );
  }
}

export default Contact;
