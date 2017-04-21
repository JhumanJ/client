import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button, Col, Modal} from 'react-bootstrap'
import {connect} from 'react-redux'
import axios from 'axios'
import {css} from 'glamor'
import NewPatient from './components/NewPatient'
import SelectPatient from './components/SelectPatient'


var data = require('./data.json')

class CreateNew extends React.Component {
  constructor (props) {
    super(props)
    this.initialState = {
      'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/mdt_meeting': '',
      'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/specific_questions_for_mdt': '',
      'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/reason_for_referral': '',
      'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/clinical_details': '',
      'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/mdt_review_priority': '',
      'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/specific_date_for_mdt_review': '',
      'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/mdt_schedule|code': '',
      'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/reviews_required:0|code': '',
      'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/special_mdt_office_instructions': '',
      'mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/date_symptoms_first_noticed': '',
      'mdt_referral/general/cancer_mdt_-_urology_referral/individual_professional_demographics_uk:0/person_name/requested_by': '',
      showModal: false
    }
    this.state = this.initialState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
    console.log(this.state);
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    const {openEHRId} = this.props

    axios.post(`https://ehrscape.code4health.org/rest/v1/composition?ehrId=${openEHRId}&templateId=OpenCancer+Urology+MDT+Referral+Form.v0&committerName=uclpeach&format=FLAT`, {...data, ...this.state}, {
      headers: {
        Authorization: 'Basic dWNscGVhY2hfYzRoOlFXeFBwYnl3',
        'EHr-Session-disabled': this.props.openEHRSessionId,
        'Content-Type': 'application/json'
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render () {
    const {openEHRId} = this.props

    return (
      <form onSubmit={this.handleSubmit}>

        <div className={styles.header}>
            <img className={styles.headerImg} src="/static/img/referral/referral.jpg"/>
        </div>

        <Col xs={12} smOffset={1} sm={10}>

          <h2>Select Patient</h2>


          <div className="row">
              <Col xs={8} >
                <SelectPatient/>
              </Col>

              <Col xs={4} >
                  <Button bsStyle="primary" onClick={this.open}>
                        <i className='fa fa-plus' aria-hidden='true' /> Add new patient
                  </Button>
              </Col>
         </div>

          <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Create a new Patient</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <NewPatient close={this.close} openEHRSessionId={this.props.openEHRSessionId}/>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Cancel</Button>
              </Modal.Footer>
         </Modal>


          <h2 className={styles.marg30Top}>Request</h2>

          <FormGroup controlId='mdt_meeting'>
            <ControlLabel>MDT meeting</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/request:0/mdt_meeting' type='text' placeholder='Identification of the service requested, by name.' />
          </FormGroup>

          <FormGroup controlId='specific_questions_for_mdt'>
            <ControlLabel>Specific questions for MDT</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/request:0/specific_questions_for_mdt' type='text' placeholder='Narrative description of the service requested.' />
          </FormGroup>

          <FormGroup controlId='reason_for_referral'>
            <ControlLabel>Reason for referral</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/request:0/reason_for_referral' placeholder='A short phrase describing the reason for the request.' componentClass='select' >
              <option value='Diagnosis and staging'>Diagnosis and staging</option>
              <option value='Management during or following treatment'>Management during or following treatment</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId='clinical_details'>
            <ControlLabel>Clinical details</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/request:0/clinical_details' type='text' placeholder='Narrative description about the reason for request.' />
          </FormGroup>

          <FormGroup controlId='mdt_review_priority'>
            <ControlLabel>MDT review priority</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/request:0/mdt_review_priority' placeholder='Urgency of the request for service.' componentClass='select' >
              <option value='Standard'>Standard</option>
              <option value='Urgent'>Urgent</option>
              <option value='Target 31/62'>Target 31/62</option>;
                  </FormControl>
          </FormGroup>

          <FormGroup controlId='specific_date_for_mdt_review'>
            <ControlLabel>Specific date for MDT review</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/request:0/specific_date_for_mdt_review' type='datetime-local' placeholder='The date/time, or acceptable interval of date/time, for provision of the service.' />
          </FormGroup>

          <h2 className={styles.marg30Top}>Cancer MDT referral details</h2>

          <FormGroup controlId='mdt_schedule'>
            <ControlLabel>MDT schedule</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/mdt_schedule|code' placeholder='Statement about schedule of MDT, whether next available or specific date.' componentClass='select' >
              <option value='at0002'>Next available</option>
              <option value='at0003'>Specific date</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId='reviews_required'>
            <ControlLabel>MDT schedule</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/reviews_required:0|code' placeholder='Description of required reviews.' componentClass='select' >
              <option value='at0006'>Histology</option>
              <option value='at0007'>Radiology</option>
              <option value='at0008'>Case discussion only</option>
            </FormControl>
          </FormGroup>

          <FormGroup controlId='special_mdt_office_instructions'>
            <ControlLabel>Special MDT office instructions</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/special_mdt_office_instructions' type='text' placeholder='Narrative to provide optional instructions for the MDT office.' />
          </FormGroup>

          <FormGroup controlId='date_symptoms_first_noticed'>
            <ControlLabel>Date symptoms first noticed</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/request:0/cancer_mdt_referral_details:0/date_symptoms_first_noticed' type='datetime-local' placeholder='Date when patient first experienced symptoms.' />
          </FormGroup>

          <h2 className={styles.marg30Top}>Person Name</h2>

          <FormGroup controlId='requested_by'>
            <ControlLabel>Requested by</ControlLabel>
            <FormControl onChange={this.handleChange} name='mdt_referral/general/cancer_mdt_-_urology_referral/individual_professional_demographics_uk:0/person_name/requested_by' type='text' placeholder='Name in free text unstructured format.' />
          </FormGroup>

          <Button bsStyle='primary' type='submit'><i className='fa fa-plus' aria-hidden='true' /> Add Referral</Button>
        </Col>

      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  openEHRSessionId: state.data.user.openEHRSessionId,
  openEHRId: state.data.referral.openEHRId,
})

const styles = {
    header: css({
        width: '100%',
        border: '1px solid #ddd',
        borderRadius: '3px',
        height: '250px',
        backgound: 'url()',
        overflow: 'hidden',
        marginBottom: '30px'
    }),
    headerImg: css({
        width: '100%'
    }),
    marg30Top: css({
        marginTop: '30px'
    })
}


export default connect(mapStateToProps)(CreateNew)
