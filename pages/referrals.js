import React from 'react'
import WithAuth from '../components/WithAuth'
import {initStore} from '../store'
import Layout from '../components/Layout'
import {Tabs, Tab, Col} from 'react-bootstrap'
import {style} from 'glamor'
import CreateNew from '../components/Referrals/components/CreateNew'

class Referral extends React.Component {
  render() {
    return (
      <Layout>
        <Tabs id='controlled-tab-example'>
          <Tab eventKey={1} title={<span><i className='fa fa-plus' aria-hidden='true' /> New Referral </span>}>
            <div className={styles.tabcontainer}>
              <div className={'row'}>
                <Col xs={12}><CreateNew/></Col>
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
  }
}

const styles = {
  tabcontainer: style({
    padding: '5px',
    borderBottom: '1px solid #ddd',
    borderRight: '1px solid #ddd',
    borderLeft: '1px solid #ddd',
    backgroundColor: 'white'
  })
}

export default WithAuth(initStore)(Referral)