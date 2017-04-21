import React, { Component } from 'react';
import PatientList from './components/PatientList';
import Grid from './components/Calendar/components/Grid';
import HTML5Backend from 'react-dnd-html5-backend';
import {DragDropContext} from 'react-dnd';
import Calendar from './components/Calendar';
import {connect} from 'react-redux'
import {Col} from 'react-bootstrap';


//To replace with api call
const patients = [{
   name: "Sim",
   age: 12
},
{
   name: "Ben",
   age: 33
},
{
	name:"Julien",
	age: 22
},
{
	name:"Navin",
	age: 22
}];

var Scheduler = React.createClass({
  getInitialState: function(){
    return {
      patients:  patients
    };
  },

  componentWillMount: function() {
    const openEHRSessionId = this.props.openEHRSessionId
  }

  removeFromList: function(index){
    var array = this.state.patients;
    array.splice(index,1);
    this.setState({
      patients: array
    });
  },

  addPatient: function(patient){
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
            <Calendar openEHRSessionId={this.props.openEHRSessionId} addPatient={this.addPatient}/>
        </Col>
      </div>
    );
  }
});

const mapStateToProps = (state) => ({openEHRSessionId: state.data.user.openEHRSessionId})

export default connect(mapStateToProps)(DragDropContext(HTML5Backend)(Scheduler));
