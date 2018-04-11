import React, { Component } from 'react';
import axios from 'axios';

//components
import TableContainer from '../../Components/TableContainer.js';

class Admin extends Component {
  constructor(props){
    super(props)
    this.state = {
      clientsData: [],
      clientsHeaders: [],
      projectsData: [],
      projectsHeaders: [],
      ahjData: [],
      ahjHeaders: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/admin/clients').then(response => {
      //Need to loop through at this point and seperate the key names and the value names
      var clientsData = [];
      var clientsHeaders = [];
      for(var i = 0; i < response.data.length; i++) {
        var tempArr = []
        if(i == 0){
          for(var key in response.data[i]){
            clientsHeaders.push(key);
            tempArr.push(response.data[i][key])
          }
          clientsData.push(tempArr)
        }
        else {
          for(var key in response.data[i]){
            tempArr.push(response.data[i][key])
          }
          clientsData.push(tempArr)
        }


      }
      var detailViewButton = <button onClick={this.detailView}>Details</button>
      clientsData.push(detailViewButton)
      clientsHeaders.push('Detail View')

      this.setState({
        clientsData: clientsData,
        clientsHeaders: clientsHeaders
      })
    })
    .catch(err => {
      alert('There was a problem retrieving the client data');
    })

    axios.get('http://localhost:4000/api/admin/projects').then(response => {
      //Need to loop through at this point and seperate the key names and the value names
      var projectsData = [];
      var projectsHeaders = [];
      for(var i = 0; i < response.data.length; i++) {
        for(var key in response.data[i]){
          projectsHeaders.push(key);
          projectsData.push(response.data[i][key])
        }
      }
      var detailViewButton = <button onClick={this.detailView}>Details</button>
      projectsData.push(detailViewButton)
      projectsHeaders.push('Detail View')

      this.setState({
        projectsData: projectsData,
        projectsHeaders: projectsHeaders
      })
    })
    .catch(err => {
      alert('There was a problem retrieving the projects data');
    })

    axios.get('http://localhost:4000/api/admin/ahj').then(response => {
      //Need to loop through at this point and seperate the key names and the value names
      var ahjData = [];
      var ahjHeaders = [];
      for(var i = 0; i < response.data.length; i++) {
        for(var key in response.data[i]){
          ahjData.push(key);
          ahjHeaders.push(response.data[i][key])
        }
        var detailViewButton = <button onClick={this.detailView}>Details</button>
        ahjData.push(detailViewButton)
        ahjHeaders.push('Detail View')


      }

      this.setState({
        ahjData: ahjData,
        ahjHeaders: ahjHeaders
      })
    })
    .catch(err => {
      alert('There was a problem retrieving the ahj data');
    })
  }

  detailView = (e) => {
    console.log('I am getting clicked');
  }

  render() {
    return (
      <div>
        <h1>Admin View</h1>
        <h2>
          Clients
          <TableContainer tableData={this.state.clientsData} tableHeaders={this.state.clientsHeaders}/>
          Projects
          <TableContainer tableData={this.state.projectsData} tableHeaders={this.state.projectsHeaders}/>
          AHJ
          <TableContainer tableData={this.state.ahjData} tableHeaders={this.state.ahjHeaders}/>
        </h2>
      </div>
    );
  }
}

export default Admin;
