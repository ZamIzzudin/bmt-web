import { Modal, Form } from 'react-bootstrap'

import '../../styles/components/CTAModal.css'

export default function TarikModal({ show, setShow }) {
    return (
        <Modal
            size="lg"
            centered
            show={show}
            onHide={() => setShow(false)}
            className="modal-content-cta">
            <Modal.Body>
                <Form onSubmit={(e) => { e.preventDefault(); setShow(false) }}>
                    <Form.Group>
                        <Form.Label>Nominal (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <div className="form-cta gap-3">
                        <button className="form-submit-button" type="submit">Tarik</button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}