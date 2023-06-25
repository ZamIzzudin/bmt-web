import { Form, Row, Col } from 'react-bootstrap'

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { AsyncCreatePengajuanSimpanan } from '../../state/pengajuan/middleware';
import formatRupiah from '../../utils/formatRupiah';

import '../../styles/components/FormLayout.css'

export default function FormPengajuanSimpanan({ showForm }) {
    const dispatch = useDispatch()

    const { auth = {} } = useSelector(states => states)
    const [produkSimpanan, setProdukSimpanan] = useState('Simpanan Idul Fitri')
    const [showedNominal, setShowedNominal] = useState('')
    const [setoranAwal, setSetoranAwal] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const numericValue = parseFloat(value.replace(/[^,\d]/g, '').replace(',', ''));
        setShowedNominal(formatRupiah(value, 'Rp. '));
        setSetoranAwal(numericValue.toString());
      };

    const handleSubmitPengajuanSimpanan = (e) => {
        e.preventDefault()
        try{
            dispatch(AsyncCreatePengajuanSimpanan({ id_nasabah: auth.id, produk_simpanan: produkSimpanan, setoran_awal: parseInt(setoranAwal) }))
        }
        catch(err){
            console.log(err)
        }
        showForm(false)
    }

    return (
        <Form onSubmit={handleSubmitPengajuanSimpanan}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Nasabah <span className="required">*</span></Form.Label>
                        <Form.Control value={`NSB-${auth.id.substring(0,3)}`} disabled />
                    </Form.Group>
                </Col>
            </Row>
            <Row>

                <Col>
                    <Form.Group>
                        <Form.Label>Produk Simpanan <span className="required">*</span></Form.Label>
                        <Form.Select value={produkSimpanan} onChange={e => setProdukSimpanan(e.target.value)}>
                            <option selected value={"Simpanan Idul Fitri"}>Simpanan IdulFitri</option>
                            <option value={"Simpanan Kurban"}>Simpanan Kurban</option>
                            <option value={"Simpanan Haji dan Umrah"}>Simpanan Haji dan Umrah</option>
                            <option value={"Simpanan Berjangka"}>Simpanan Berjangka</option>
                            <option value={"Simpanan Pendidikan"}>Simpanan Pendidikan</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Setoran Awal (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control value={showedNominal} onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <div className="form-cta gap-3">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}