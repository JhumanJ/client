import Job from './components/Job'

export default ({jobs, onDelete, loading, jobLoading, ...props}) => (
    <ul>
    {
        jobs.map(job =>
            <Job
                key={job.job_id}
                title={job.title}
                loading={loading || jobLoading === job.job_id}
                onDelete={() => onDelete(job.job_id)}
                detail={job.comment} />
        )
    }
    </ul>
)