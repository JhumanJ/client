import React, { Component } from 'react';
import PatientList from './components/PatientList';
import Grid from './components/Calendar/components/Grid';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import Calendar from './components/Calendar';
import {Col} from 'react-bootstrap';
import axios from 'axios';


//To replace with api call

var Scheduler = React.createClass({
  getInitialState: function(){
    return {
      patients:  []
    };
  },

  componentWillMount: function(){
    var that = this;
    var url = "http://peachteam35.uksouth.cloudapp.azure.com:8080/api/referrals/waiting";
    var patients = this.state.patients;
    axios.get(url).then(function(response){
      var ehrDetails = response.data;
      console.log(ehrDetails);
      for(var i = 0; i < ehrDetails.length; i++){
        var ehrID = ehrDetails[i]["ehrID"].substring(1, ehrDetails[i]["ehrID"].length-1)
        var referralID = ehrDetails[i]["referral_id"];
        var ehrURL = 'https://ehrscape.code4health.org/rest/v1/demographics/ehr/' + ehrID + '/party';
        axios.get(ehrURL).then(function(response){
          var patient = response.data;
          patient["referral_id"] = referralID;
          patients.push(patient);
          that.setState({
            patients: patients
          });
        })
      }
    })
  },

  removeFromList: function(index){
    var array = this.state.patients;
    var patient = array[index];
    
    array.splice(index,1);
    this.setState({
      patients: array
    });
  },

  addPatient: function(patient){
    //PUT POST REQUEST HERE status = 0
    this.state.patients.push(patient);
    this.setState({
      patients: this.state.patients
    });
  },

  render: function() {
    return (
      <div className="App">
        <Col xs={12} sm={10} md={3} smOffset={1} mdOffset={0}>
            <PatientList patients={this.state.patients} name="List of Patients" removeFromList={this.removeFromList}/>
        </Col>
        <Col xs={12} sm={10} md={9} smOffset={1} mdOffset={0}>
            <Calendar addPatient={this.addPatient}/>
        </Col>
      </div>
    );
  }
});

export default DragDropContext(HTML5Backend)(Scheduler);
