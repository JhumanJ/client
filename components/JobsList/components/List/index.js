import Job from './components/Job'

export default ({jobs, ...props}) => (
    <ul>
    {
        jobs.map(job => <Job key={job.id} title={job.title} detail={job.detail} />)
    }
    </ul>
)