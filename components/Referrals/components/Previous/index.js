import React from 'react'
import {Panel, FormGroup, InputGroup, FormControl, Button, Col} from 'react-bootstrap'
import {css} from 'glamor'

class Previous extends React.Component {
  render () {
    return (
      <div>
        <div className={styles.header}>
          <img className={styles.headerImg} src='/static/img/referral/previous.jpg' />
        </div>

        <Col xs={12} smOffset={1} sm={10}>
          <h2>Previous Referrals</h2>
          <p>Here will come the previously done referrals.</p>
        </Col>
      </div>
    )
  }
}

const styles = {
  header: css({
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '3px',
    height: '250px',
    backgound: 'url()',
    overflow: 'hidden',
    marginBottom: '30px'
  }),
  headerImg: css({
    width: '100%'
  }),
  marg30Top: css({
    marginTop: '30px'
  })
}

export default Previous
