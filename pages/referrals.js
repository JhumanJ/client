import React from 'react'
import withAuth from '../enhancers/withAuth'
import {initStore} from '../store'
import Layout from '../components/Layout'
import {Tabs, Tab, Col} from 'react-bootstrap'
import {style} from 'glamor'
import {CreateNew} from '../components/Referrals'
import Previous from '../components/Referrals/components/Previous'
import Tutorial from '../components/Referrals/components/Tutorial'


class Referral extends React.Component {
  render() {
    return (
      <Layout>
        <Tabs id='controlled-tab-example'>
          <Tab eventKey={1} title={<span><i className='fa fa-plus' aria-hidden='true' /> New Referral </span>}>
            <div className={styles.tabcontainer}>
              <div className={styles.contentPad+' row'}>
                <Col xs={12}><CreateNew/></Col>
              </div>
            </div>
          </Tab>

          <Tab eventKey={2} title={<span><i className='fa fa-clock-o' aria-hidden='true' /> Previous Referrals</span>}>
            <div className={styles.tabcontainer}>
              <div className={styles.contentPad+' row'}>
                <Col className={styles.tabcontainer} xs={12}><Previous/></Col>
              </div>
            </div>
          </Tab>

          <Tab eventKey={3} title={<span><i className='fa fa-question-circle' aria-hidden='true' /> Tutorial</span>}>
            <div className={styles.tabcontainer}>
              <div className={styles.contentPad+' row'}>
                <Col className={styles.tabcontainer} xs={12}><Tutorial/></Col>
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
    }),
    contentPad: style({
        padding: '30px'
    })
}

export default withAuth(initStore)(Referral)
