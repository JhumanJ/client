import {connect} from 'react-redux'
import {createJob} from '../../data/jobs/actions'
import {Input, LongInput} from '../Form'

class CreateJob extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createJob({
            title: 'Some Title',
            comment: 'Some comment...',
            assigned_by_id: 2,
            assigned_to_id: 4,
            patient_id: 234,
            due_date: '2017-03-08 11:25:50'
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Input placeholder="Job title"/>
                <LongInput placeholder="Job description"/>
                <button type="submit">Create</button>
            </form>
        )
    }
}

const mapStateToProps = state => state.data.jobs
const mapDispatchToProps = dispatch => ({
    createJob: (job) => dispatch(createJob(job))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob)