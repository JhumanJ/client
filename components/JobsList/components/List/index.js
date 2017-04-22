import Job from './components/Job'

export default ({jobs, onDelete, loading, jobLoading, ...props}) => (
  <ul>
    {
        jobs.map(job =>
          <Job
            key={job.job_id}
            title={job.title}
            dueDate={job.due_date}
            loading={loading || jobLoading === job.job_id}
            onDelete={() => onDelete(job.job_id)}
            comment={job.comment} />
        )
    }
  </ul>
)
