import { Form, Row, Col } from 'react-bootstrap'

import '../../styles/components/FormLayout.css'

export default function FormPengajuanSimpanan({ showForm }) {
    return (
        <Form onSubmit={(e) => { e.preventDefault(); showForm(false) }}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Nasabah <span className="required">*</span></Form.Label>
                        <Form.Control value="Agus (NSB-001)" disabled />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Jenis <span className="required">*</span></Form.Label>
                        <Form.Select>
                            <option>Tabungan Haji</option>
                            <option>Tabungan Kurban</option>
                            <option>Tabungan Anak</option>
                            <option>Tabungan Hari Tua</option>
                            <option>Tabungan Pendidikan</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Setoran Awal (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Col>
                <Col>
                </Col>
            </Row>
            <div className="form-cta gap-3">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}