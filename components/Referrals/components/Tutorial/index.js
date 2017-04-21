import React from 'react'
import {Panel, FormGroup, InputGroup, FormControl, Button, Col} from 'react-bootstrap'
import {css} from 'glamor'


class Tutorial extends React.Component {
  render() {

    return (
        <div>

            <div className={styles.header}>
                <img className={styles.headerImg} src="/static/img/referral/tutorial.jpg"/>
            </div>

            <Col xs={12} smOffset={1} sm={10}>
                <h2>Referral Tutorial</h2>
                <p>Here will come some video tutorials so that users fully understand how to refer a patient.</p>
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

export default Tutorial
