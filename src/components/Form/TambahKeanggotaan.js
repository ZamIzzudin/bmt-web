import { Form, Row, Col } from 'react-bootstrap'

import '../../styles/components/FormLayout.css'

export default function TambahKeanggotaan({ showForm }) {
    return (
        <Form >
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>No Anggota <span className="required">*</span></Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Tanggal Daftar <span className="required">*</span></Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>NIK <span className="required">*</span></Form.Label>
                <Form.Control required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Nama Lengkap <span className="required">*</span></Form.Label>
                <Form.Control required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Nama Panggilan <span className="required">*</span></Form.Label>
                <Form.Control required />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Email <span className="required">*</span></Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>No Handphone <span className="required">*</span></Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Alamat <span className="required">*</span></Form.Label>
                <Form.Control required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Role <span className="required">*</span></Form.Label>
                <Form.Select>
                    <option>Admin</option>
                    <option>Manajer</option>
                    <option>Officer</option>
                    <option>Anggota</option>
                </Form.Select>
            </Form.Group>
            <div className="form-cta gap-3">
                <button onClick={() => showForm(false)} className="form-submit-button" type="button">Kembali</button>
                <button onClick={() => showForm(false)} className="form-submit-button" type="button">Tambah</button>
            </div>
        </Form>
    )
}