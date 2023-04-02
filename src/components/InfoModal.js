import { Modal } from 'react-bootstrap'

import { ReactComponent as Success } from '../assets/icons/success.svg'
import { ReactComponent as Error } from '../assets/icons/error.svg'
import { ReactComponent as Draft } from '../assets/icons/draft.svg'

import '..//styles/components/InputModal.css'

export default function InfoFunction({ show, setShow, value, type }) {
    return (
        <Modal
            size="sm"
            centered
            show={show}
            onHide={() => setShow(false)}
            className="modal-content-info">
            <Modal.Body className="info-modal-body">
                <span>{value}</span>
            </Modal.Body>
            <div className={`${type === 'error' && ('red')} ${type === 'draft' && ('yellow')} modal-logo`}>
                {type === 'success' && (
                    <Success />
                )}
                {type === 'error' && (
                    <Error />
                )}
                {type === 'draft' && (
                    <Draft />
                )}
            </div>
        </Modal>
    )
}