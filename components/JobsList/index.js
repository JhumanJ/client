import {connect} from 'react-redux'
import Masthead from './components/Masthead'
import List from './components/List'
import {getJobs} from '../../data/jobs/actions'

const jobsList = [
    {
        id: 3,
        title: 'Some Title',
        detail: 'Blah foo bar...'
    },
    {
        id: 5,
        title: 'Another Title',
        detail: 'Blah foo bar...'
    },
    {
        id: 10,
        title: 'Yet Another Title',
        detail: 'Blah foo bar...'
    },
]

const JobsList = ({jobs, loading, getJobs, ...props}) => {
    return (
        <div>
            <Masthead loading={loading} refresh={getJobs}/>
            <List loading={loading} jobs={jobsList}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    jobs: state.data.jobs.jobs,
    loading: state.data.jobs.loading,
})

const mapDispatchToProps = (dispatch) => ({
    getJobs: () => dispatch(getJobs())
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsList)