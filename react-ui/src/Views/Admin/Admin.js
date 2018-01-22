import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  componentWillMount(){
    //TODO change this to use the session for logging in
    axios.get('http://localhost:3200/api/adminCheck').then(function(response) {
      if(!response.data == 'You need to login homeslice'){
        //I'll want to send to admin login page
      }
    })
    .catch(function(error) {
      console.log('This is the error', error)
    })
  }
  submitAuthCheck = () => {
    console.log(this.state)
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div>
      Username:  <input type="text" name="adminUsername" onChange={this.handleUsernameChange}/>
      Password:  <input type="password" name="adminPassword" onChange={this.handlePasswordChange}/>
      <button onClick={this.submitAuthCheck}>Submit</button>
      </div>
    );
  }
}

export default Admin;
