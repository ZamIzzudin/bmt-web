import { Modal } from 'react-bootstrap'

import '..//styles/components/CTAModal.css'

export default function CTAFunction({ show, setShow, value, action1, action2 }) {
    return (
        <Modal
            size="md"
            centered
            show={show}
            onHide={() => setShow(false)}
            className="modal-content-cta">
            <Modal.Body className="cta-modal-body">
                <span>{value}</span>
                <div className="modal-cta">
                    <button onClick={() => action1(false)} className="modal-cta-cancel" type="button">Hapus</button>
                    <button onClick={() => action2()} className="modal-cta-make" type="button">Buat Draft</button>
                </div>
            </Modal.Body>
        </Modal>
    )
}