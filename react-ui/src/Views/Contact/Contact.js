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
//Components
import NavigationItem from '../../Components/NavigationItem'

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
        <div className="home-bottom-line"></div>
        <div className="home-middle-line"></div>
        <div className="home-left-line">
            <NavigationItem
              buttonClass="navigation-button"
              linkTo="/philosophy"
              linkClass="navigation-link"
              navigationName="Philosophy"
              active='false'>
            </NavigationItem>
            <NavigationItem
              buttonClass="navigation-button"
              linkTo="/portfolio"
              linkClass="navigation-link"
              navigationName="Portfolio"
              active='false'>
            </NavigationItem>
            <NavigationItem
              buttonClass="navigation-button"
              linkTo="/contact"
              linkClass="navigation-link"
              navigationName="Contact"
              active='true'>
            </NavigationItem>
            <NavigationItem
              buttonClass="navigation-button"
              linkTo="/"
              linkClass="navigation-link"
              navigationName="Home"
              active='false'>
            </NavigationItem>
        </div>
        <div className="contact-form-main">
          <div className="contact-information-container">
            <div className="contact-information-red-box"></div>
            <div className="contact-information-black-line"></div>
            <div className="contact-information-info">
              <div className="contact-left-row"><p>Address: some address</p></div>
              <div className="contact-left-row"><p>Phone: some phone</p></div>
              <div className="contact-left-row"><p>Email: some email</p></div>
            </div>
          </div>
          <div className="contact-form-row contact-form-header"><h2>Contact</h2></div>
          <div className="contact-form-row">
            <span className="contact-form-label">Name:</span><input type="text" value={name} onChange={(e) => this.handleNameChange(e.target.value)}></input>
          </div>
          <div className="contact-form-row">
            <span className="contact-form-label">Email:</span> <input type="text" value={email} onChange={(e) => this.handleEmailChange(e.target.value)}></input>
          </div>
          <div className="contact-form-row">
            <span className="contact-form-label">Subject:</span> <input type="text" value={subject} onChange={(e) => this.handleSubjectChange(e.target.value)}></input>
          </div>
          <div className="contact-form-row">
            <span className="contact-form-label">Message:</span> <input type='text' value={message} onChange={(e) => this.handleMessageChange(e.target.value)}></input>
          </div>
          <div className="contact-form-row">
            <span className="contact-form-label">Request callback:</span> <input type="checkbox" value={requestCallback} onChange={this.handleRequestChange}></input>
          </div>
          <div className="contact-form-row">
            <p className="contact-form-hidden-element" ref={this.p1}>Phone:</p> <input type="text" value={phone} onChange={(e) => this.handlePhoneChange(e.target.value)} className="contact-form-hidden-element" ref={this.input1}></input>
          <div ref={this.p2} className="contact-form-hidden-element"><p>Best Time To Call:</p>   <TimePicker
                                  showSecond={false}
                                  defaultValue={now}
                                  onChange={this.handleTimeChange}
                                  format={format}
                                  use12Hours
                                /></div>
          </div>
          <div className="contact-form-row contact-form-submit">
            <button onClick={this.submitContactFormMessage} className="contact-form-submit-button">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
