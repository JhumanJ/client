import Select from 'react-select'
import axios from 'axios'
import {connect} from 'react-redux'
import {selectPatient, getOpenEHRId} from '../../../../../../data/referral/actions'

const mapStateToProps = state => ({
  openEHRSessionId: state.data.user.openEHRSessionId,
  selectedPatient: state.data.referral.selectedPatient
})

const mapDispatchToProps = dispatch => ({
  selectPatient: (patient) => dispatch(selectPatient(patient)),
  getOpenEHRId: (patientId, openEHRSessionId) => dispatch(getOpenEHRId(patientId, openEHRSessionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(({openEHRSessionId, selectedPatient, selectPatient, getOpenEHRId, ...props}) => {
  const getPatients = (input) => {
    return fetch(`https://ehrscape.code4health.org/rest/v1/demographics/party/query/?lastNames=*${input}*`, {
      method: 'GET',
      headers: {
        Authorization: 'Basic dWNscGVhY2hfYzRoOlFXeFBwYnl3',
        'EHr-Session-disabled': openEHRSessionId,
        'Content-Type': 'application/json'
      }
    })
            .then(res => res.json())
            .then(json => ({ options: json.parties.map(patient => ({ value: patient.id, label: `${patient.firstNames} ${patient.lastNames}` })) }))
            .catch(err => console.log(err))
  }

  const handleChange = (patient) => {
    selectPatient({id: patient.value, name: patient.label})
    getOpenEHRId(patient.value, openEHRSessionId)
  }

  return (
    <div {...props}>
      <Select.Async
        name='select-patient'
        loadOptions={getPatients}
        onChange={handleChange}
        autoload={false}
        value={selectedPatient.id} />
    </div>
  )
})
