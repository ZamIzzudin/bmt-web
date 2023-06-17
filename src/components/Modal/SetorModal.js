import { Modal, Form } from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AsyncSetorSimpananSukarela } from "../../state/angsuran/middleware";

import '../../styles/components/CTAModal.css'

export default function SetorModal({ show, setShow, data }) {
    const dispatch = useDispatch();
    const [nominal, setNominal] = useState()

    function handleSetor(e){
        e.preventDefault();
        try{
            dispatch(AsyncSetorSimpananSukarela({
                id: data.id_simpanan,
                nominal: nominal,
        }))
        }
        catch(e){
            console.log(e)
        }
        setShow(false);
    }
    return (
        <Modal
            size="lg"
            centered
            show={show}
            onHide={() => setShow(false)}
            className="modal-content-cta">
            <Modal.Body>
                <Form onSubmit={ handleSetor }>
                    <Form.Group>
                        <Form.Label>Nominal (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control required type='number' value={nominal} onChange={(e) => setNominal(e.target.value)} />
                    </Form.Group>
                    <div className="form-cta gap-3">
                        <button className="form-submit-button" type="submit">Setor</button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}