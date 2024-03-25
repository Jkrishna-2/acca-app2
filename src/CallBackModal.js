import React from 'react'
import {Button, Modal} from 'react-bootstrap'

const CallBackModal = ({show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header classname='d-flex justify-content-center'>
        <Modal.Title classname='request'>Request Call Back</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Thank you for your request. We will get back to you shortly.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CallBackModal
