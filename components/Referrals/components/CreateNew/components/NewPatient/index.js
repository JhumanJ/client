import React from 'react'
import {Panel, FormGroup, InputGroup, FormControl, Button, Col, ControlLabel} from 'react-bootstrap'
import {css} from 'glamor'
import axios from 'axios'

class NewPatient extends React.Component {

    constructor (props) {
      super(props)
      this.initialState = {
          "dateOfBirth": "1996-09-01",
          "firstNames": "Julien",
          "gender": "MALE",
          "lastNames": "Nahum",
          "partyAdditionalInfo": [
              {
              "key": "uk.nhs.nhsnumber",
              "value": "7430666"
              }]
      }
      this.state = this.initialState
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        switch(e.target.name){
            case ("dateOfBirth"):
                this.setState({"dateOfBirth": e.target.value})
                break;
            case ("firstNames"):
                this.setState({"firstNames": e.target.value})
                break;
            case ("lastNames"):
                this.setState({"lastNames": e.target.value})
                break;
            case ("gender"):
                this.setState({"gender": e.target.value})
                break;
            case ("nhsnumber"):
                this.setState(
                    {"partyAdditionalInfo":[
                        {
                        "key": "uk.nhs.nhsnumber",
                        "value": e.target.value
                        }
                    ]})
                break;
        }
        //this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit (e) {
      e.preventDefault()
      const openEHRSessionId = this.props.openEHRSessionId;

      axios.post(`https://ehrscape.code4health.org/rest/v1/demographics/party`, { ...this.state}, {
        headers: {
          Authorization: 'Basic dWNscGVhY2hfYzRoOlFXeFBwYnl3',
          'EHr-Session-disabled': openEHRSessionId,
          'Content-Type': 'application/json'
        }
      })
          .then(function(res){
             var subjectID = res.data.meta.href.substring(res.data.meta.href.lastIndexOf('/')+1);
             var url = 'https://ehrscape.code4health.org/rest/v1/ehr?subjectId='+subjectID+'&subjectNamespace=uk.nhs.nhs_number&commiterName=uclpeach';

             console.log('url',url);
             axios.post(url, {
               headers: {
                 Authorization: 'Basic dWNscGVhY2hfYzRoOlFXeFBwYnl3',
                 'EHr-Session-disabled': openEHRSessionId,
                 'Content-Type': 'application/json'
                }
             })
             .then(function(response){
                 console.log('EHR created');
                 console.log(response);
             })
             .catch(err => console.log("Err in 2nd request"+err))
          })
          .catch(err => console.log("Err in 1st request"+err))

          console.log('subjectId',subjectId);

    }

  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>

                <FormGroup controlId='firstNames'>
                  <ControlLabel>First Names</ControlLabel>
                  <FormControl onChange={this.handleChange} name='firstNames' type='text' placeholder='First names of patient' />
                </FormGroup>

                <FormGroup controlId='lastNames'>
                  <ControlLabel>Last Names</ControlLabel>
                  <FormControl onChange={this.handleChange} name='lastNames' type='text' placeholder='Last names of patient' />
                </FormGroup>

                <FormGroup controlId='gender'>
                  <ControlLabel>Gender</ControlLabel>
                  <FormControl onChange={this.handleChange} name='gender' placeholder='Gender of patient' componentClass='select' >
                    <option value='MALE'>Male</option>
                    <option value='FEMALE'>Female</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId='dateOfBirth'>
                  <ControlLabel>Date of birth</ControlLabel>
                  <FormControl onChange={this.handleChange} name='dateOfBirth' type='date' placeholder='Date of birth of patient' />
                </FormGroup>

                <FormGroup controlId='nhsnumber'>
                  <ControlLabel>NHS Number</ControlLabel>
                  <FormControl onChange={this.handleChange} name='nhsnumber' type='text' placeholder='NHS Number of patient' />
                </FormGroup>

                 <Button bsStyle="primary" bsSize="large" block type='submit'><i className='fa fa-plus' aria-hidden='true' /> Create Patient</Button>

            </form>
        </div>
    )
  }
}

const styles = {
    header: css({
        width: '100%',
        border: '1px solid #ddd',
        borderRadius: '3px',
        height: '250px',
        backgound: 'url()',
        overflow: 'hidden',
        marginBottom: '30px'
    })
}

export default NewPatient
