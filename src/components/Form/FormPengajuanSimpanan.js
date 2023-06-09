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
            </Row>
            <Row>

                <Col>
                    <Form.Group>
                        <Form.Label>Produk Simpanan <span className="required">*</span></Form.Label>
                        <Form.Select>
                            <option>Simpanan IdulFitri</option>
                            <option>Simpanan Kurban</option>
                            <option>Simpanan Haji dan Umrah</option>
                            <option>Simpanan Berjangka</option>
                            <option>Simpanan Pendidikan</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Setoran Awal (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Col>
            </Row>
            <div className="form-cta gap-3">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}