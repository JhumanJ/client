import {connect} from 'react-redux'
import Masthead from './components/Masthead'

const JobsList = ({jobs, ...props}) => {
    return (
        <Masthead/>
    )
}

const mapStateToProps = (state) => ({
    jobs: state.data.jobs
})

// const mapDispatchToProps = (dispatch) => ({
//     getJobs: () => dispatch(getJobs())
// })

export default connect(mapStateToProps)(JobsList)