import React from 'react'
import withAuth from '../enhancers/withAuth'
import {initStore} from '../store'
import Layout from '../components/Layout'
import CreateJob from '../components/Confirmation/components/CreateJob'
import {Col, Modal, Button, Panel, FormControl, FormGroup, InputGroup} from 'react-bootstrap'
import {css} from 'glamor'

class Confirmation extends React.Component {
  constructor (props) {
    super(props)
    this.initialState = {
      showModal: false
    }
    this.state = this.initialState
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  close () {
    this.setState({ showModal: false })
  }

  open () {
    this.setState({ showModal: true })
  }

  render () {
    const headerPanel = (
      <div className='row'>
        <Col xs={6}> Confirmation </Col>
        <Col xs={6} >
          <div className='pull-right'>
            <Button className={styles.btn_marg + ' btn btn-primary'} onClick={this.open} >Add New Job</Button>
            <Button className={styles.btn_marg + ' btn btn-success'} >Sign Off</Button>
          </div>
        </Col>
      </div>

       )

    const footerText = (
      <FormGroup>
        <InputGroup>
          <FormControl type='text' placeholder='Add a patient note...' />
          <InputGroup.Button>
            <Button><i className='fa fa-plus' aria-hidden='true' /></Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
     )

    return (
      <Layout activePage={this.props.pathname}>

        <Col xs={12} mdOffset={2} sm={10} smOffset={1} md={8}>
          <Panel header={headerPanel} footer={footerText}>
            <h3>Doctor 1 wrote:</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <h3>Doctor 2 wrote:</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Panel>
        </Col>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Create new Job</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateJob close={this.close} />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </Layout>
    )
  }
}

const styles = {
  btn_marg: css({
    marginRight: '5px',
    marginLeft: '5px'
  })
}

export default withAuth(initStore)(Confirmation)
