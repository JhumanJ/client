import {connect} from 'react-redux'
import {notify} from 'react-notify-toast'
import {style} from 'glamor'
import {createJob} from '../../../../data/jobs/actions'
import {Input, LongInput, Date} from '../../../Form'
import Button from '../../../Button'

class CreateJob extends React.Component {
    constructor(props) {
        super(props)
        this.init = {
            title: '',
            comment: '',
            dueDate: null,
            focused: false,
        }
        this.state = this.init
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})
    handleSubmit = (e) => {
        e.preventDefault()
        let {title, comment, dueDate} = this.state
        this.props.createJob({
            title,
            comment,
            due_date: dueDate.format('Y-MM-DD HH:mm:ss'),
            assigned_by_id: 2,
            assigned_to_id: 4,
            patient_id: 234,
        })
        this.setState(this.init)
        notify.show('Job Created', 'success')
        this.props.close()
    }

    render() {
        let {title, comment, dueDate, focused} = this.state
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <div className={styles.formItem}>
                    <Input
                        value={title}
                        onChange={this.handleChange}
                        name="title"
                        placeholder="Job title"/>
                </div>
                <div className={styles.formItem}>
                    <LongInput
                        value={comment}
                        onChange={this.handleChange}
                        name="comment"
                        placeholder="Job description"/>
                </div>
                <div className={styles.formItem}>
                    <Date
                        date={dueDate}
                        onDateChange={dueDate => this.setState({dueDate})}
                        focused={focused}
                        onFocusChange={({focused}) => this.setState({focused})}
                        numberOfMonths={1}
                        name="dueDate"/>
                </div>
                <Button primary type="submit" children="Create"/>
            </form>
        )
    }
}

const styles = {
    form: style({
        display: 'flex',
        flexDirection: 'column',
    }),
    formItem: style({
        marginBottom: '15px',
        width: '100%',
    }),
}

const mapStateToProps = state => state.data.jobs
const mapDispatchToProps = dispatch => ({
    createJob: (job) => dispatch(createJob(job))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateJob)
