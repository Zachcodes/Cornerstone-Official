import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      loggedIn: false
    }
  }
  componentWillMount(){
    //TODO change this to use the session for logging in
    axios.get('http://localhost:3200/api/adminCheck').then(function(response) {

      if(response.data === 1){
        //proceed to login
        //TODO when you put this in production have your backend serve the files
      }
    })
    .catch(function(error) {
      console.log('This is the error', error)
    })
  }
  submitAuthCheck = () => {
    axios.get(`http://localhost:3200/api/login/local/${this.state.username}/${this.state.password}`).then(response => {
      //The backend will handle logging in
      //TODO
      if(response.data === 'temp logging in'){
        this.setState({
          loggedIn: true
        })
      }
    })
    .catch(error => {
      alert('There was an issue logging in');
    })
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
    if (this.state.loggedIn) {
    return (
      <Redirect to={'/admin'}/>
        )
    }
    return (
      <div>
      Username:  <input type="text" name="adminUsername" onChange={this.handleUsernameChange}/>
      Password:  <input type="password" name="adminPassword" onChange={this.handlePasswordChange}/>
      <button onClick={this.submitAuthCheck}>Submit</button>
      </div>
    );
  }
}

export default Login;
