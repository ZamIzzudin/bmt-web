import { Form, Row, Col } from 'react-bootstrap'

import '../../styles/components/FormLayout.css'

export default function FormPengajuanPembiayaan({ showForm }) {
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
                            <option>Mudharabah</option>
                            <option>Murabahah</option>
                            <option>Hawalah</option>
                            <option>Ijarah</option>
                            <option>Qardul Hasan</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Nominal (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Durasi (Bulan)<span className="required">*</span></Form.Label>
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