import { Form, Row, Col } from 'react-bootstrap'

import '../../styles/components/FormLayout.css'

export default function TambahKas({ showForm }) {
    return (
        <Form onSubmit={(e) => { e.preventDefault(); showForm(false) }}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Jenis Transaksi <span className="required">*</span></Form.Label>
                        <Form.Select>
                            <option>Masuk (Debit)</option>
                            <option>Keluar (Kredit)</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Nominal (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Catatan <span className="required">*</span></Form.Label>
                <Form.Control />
            </Form.Group>
            <div className="form-cta gap-3">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}