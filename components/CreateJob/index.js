import {connect} from 'react-redux'
import {createJob} from '../../data/jobs/actions'
import {Input, LongInput} from '../Form'

class CreateJob extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            comment: '',
            dueDate: '',
        }
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})
    handleSubmit = (e) => {
        e.preventDefault()
        let {title, comment} = this.state
        this.props.createJob({
            title,
            comment,
            assigned_by_id: 2,
            assigned_to_id: 4,
            patient_id: 234,
            due_date: '2017-03-08 11:25:50'
        })
    }

    render() {
        let {title, comment, dueDate} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <Input value={title} onChange={this.handleChange} name="title" placeholder="Job title"/>
                <LongInput value={comment} onChange={this.handleChange} name="comment" placeholder="Job description"/>
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