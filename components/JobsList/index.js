import {connect} from 'react-redux'
import Masthead from './components/Masthead'
import List from './components/List'
import {getJobs, deleteJob} from '../../data/jobs/actions'

class JobsList extends React.Component {
    componentDidMount() {
        this.props.getJobs()
    }

    render() {
        const {jobs, loading, getJobs, deleteJob} = this.props
        return (
            <div>
                <Masthead
                    loading={loading}
                    refresh={getJobs}/>
                <List
                    loading={loading}
                    jobs={jobs}
                    onDelete={deleteJob}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    jobs: state.data.jobs.jobs,
    loading: state.data.jobs.loading,
})

const mapDispatchToProps = (dispatch) => ({
    getJobs: () => dispatch(getJobs()),
    deleteJob: (id) => dispatch(deleteJob(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsList)