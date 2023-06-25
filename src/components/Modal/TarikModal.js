import { Modal, Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import formatRupiah from '../../utils/formatRupiah';

import { AsyncTarikSimpananSukarela } from "../../state/pembiayaan/middleware";

import '../../styles/components/CTAModal.css'

export default function TarikModal({ show, setShow, data }) {
    const dispatch = useDispatch();
    const [nominal, setNominal] = useState('')
    const [showedNominal, setShowedNominal] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = parseFloat(value.replace(/[^,\d]/g, '').replace(',', ''));
        setShowedNominal(formatRupiah(value, 'Rp. '));
        setNominal(numericValue.toString());
      };

    function handleTarik(e){
        e.preventDefault();
        try{
            dispatch(AsyncTarikSimpananSukarela({
                id: data.id_simpanan,
                nominal: parseInt(nominal),
        }))
        }
        catch(e){
            console.log(e)
        }
        setShow(false);
        setTimeout(() => {
            window.location.reload();
        }, 5000)
    }
    return (
        <Modal
            size="lg"
            centered
            show={show}
            onHide={() => setShow(false)}
            className="modal-content-cta">
            <Modal.Body>
                <Form onSubmit={handleTarik}>
                    <Form.Group>
                        <Form.Label>Nominal (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control required value={showedNominal} onChange={handleChange} />
                    </Form.Group>
                    <div className="form-cta gap-3">
                        <button className="form-submit-button" type="submit">Tarik</button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}