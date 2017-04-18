import Layout from '../components/Layout'
import {Tabs, Tab, Col} from 'react-bootstrap'
import {style} from 'glamor'

// const sections = [
//   {
//     title: 'Form',
//     body: '<CreateNew/>'
//   },
//   {
//     title: 'Review Previous',
//     body: '<ReviewPrevious/>'
//   }
// ]

export default () => (
  <Layout requireAuth>
    <Tabs id='controlled-tab-example'>
      <Tab eventKey={1} title={<span><i className='fa fa-plus' aria-hidden='true' /> New Referral </span>}>
        <div className={styles.tabcontainer}>
          <div className={'row'}>
            <Col xs={12}>...a</Col>
          </div>
        </div>
      </Tab>
      <Tab eventKey={2} title={<span><i className='fa fa-clock-o' aria-hidden='true' /> Previous Referrals</span>}>
        <div className={styles.tabcontainer}>
          <div className={'row'}>
            <Col className={styles.tabcontainer} xs={12}>...b</Col>
          </div>
        </div>
      </Tab>
      <Tab eventKey={3} title={<span><i className='fa fa-question-circle' aria-hidden='true' /> Tutorial</span>}>
        <div className={styles.tabcontainer}>
          <div className={'row'}>
            <Col className={styles.tabcontainer} xs={12}>...c</Col>
          </div>
        </div>
      </Tab>
    </Tabs>
  </Layout>
)

const styles = {
  tabcontainer: style({
    padding: '5px',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',
    borderLeft: '1px solid #ddd',
    backgroundColor: 'white'
  })
}
