import {style} from 'glamor'
import Button from '../../../Button'
import {Heading} from '../../../Text'

export default ({refresh, loading, ...props}) => (
  <div className={styles.container}>
    <Heading>Active Jobs</Heading>
    <Button primary disabled={loading} onClick={refresh}>Refresh</Button>
  </div>
)

const styles = {
  container: style({
    marginBottom: '15px',
    paddingBottom: '15px',
    borderBottom: '1px solid #bbb'
  })
}
