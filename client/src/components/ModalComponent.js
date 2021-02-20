import React from 'react'
import {Modal, Button} from 'react-bootstrap'
function ModalComponent(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.status}
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.msg}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent
