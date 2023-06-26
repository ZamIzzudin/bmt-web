import { useState } from 'react'
import { useDispatch } from 'react-redux'
import formatRupiah from '../../utils/formatRupiah'

import { AsyncCreateKas } from '../../state/kas/middleware'
import { Form, Row, Col } from 'react-bootstrap'

import '../../styles/components/FormLayout.css'

export default function TambahKas({ showForm }) {
    const dispatch = useDispatch();

    const [jenis_transaksi, setJenisTransaksi] = useState('MASUK')
    const [nominal, setNominal] = useState('')
    const [showedNominal, setShowedNominal] = useState('')
    const [catatan, setCatatan] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = parseFloat(value.replace(/[^,\d]/g, '').replace(',', ''));
        setShowedNominal(formatRupiah(value, 'Rp. '));
        setNominal(numericValue.toString());
      };

    function handleSubmitKas(e){
        e.preventDefault();
        try{
            dispatch(AsyncCreateKas({
                jenis_transaksi,
                nominal : parseInt(nominal),
                catatan,
        }, jenis_transaksi.toLowerCase()))
        }
        catch(e){
            console.log(e)
        }
        showForm(false);
    }
    return (
        <Form onSubmit={ handleSubmitKas }>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Jenis Transaksi <span className="required">*</span></Form.Label>
                        <Form.Select required value={jenis_transaksi} onChange={(e) => setJenisTransaksi(e.target.value)}>
                            <option selected value={'MASUK'}>Masuk (Debit)</option>
                            <option value={'KELUAR'}>Keluar (Kredit)</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Nominal (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control required value={showedNominal} onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Catatan <span className="required">*</span></Form.Label>
                <Form.Control required value={catatan} onChange={(e) => setCatatan(e.target.value)} />
            </Form.Group>
            <div className="form-cta gap-3">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}