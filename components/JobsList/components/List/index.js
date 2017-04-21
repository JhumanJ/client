import Job from './components/Job'

export default ({jobs, onDelete, ...props}) => (
    <ul>
    {
        jobs.map(job =>
            <Job
                key={job.job_id}
                title={job.title}
                onDelete={() => onDelete(job.job_id)}
                detail={job.comment} />
        )
    }
    </ul>
)