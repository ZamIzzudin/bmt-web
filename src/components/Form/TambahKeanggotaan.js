import { Form, Row, Col } from 'react-bootstrap'

import '../../styles/components/FormLayout.css'

export default function TambahKeanggotaan({ showForm, data }) {
    return (
        <Form >
            <Form.Group>
                <Form.Label>Nama Lengkap <span className="required">*</span></Form.Label>
                 <Form.Control required />
             </Form.Group>
            <Form.Group>
                <Form.Label>NIK <span className="required">*</span></Form.Label>
                <Form.Control required />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Jenis Kelamin<span className="required">*</span></Form.Label>
                        <Form.Select>
                            <option></option>
                            <option value={'Laki-laki'}>Laki-laki</option>
                            <option value={'Perempuan'}>Perempuan</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>No Telp <span className="required">*</span></Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Username <span className="required">*</span></Form.Label>
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
                        <Form.Label>Password <span className="required">*</span></Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Alamat <span className="required">*</span></Form.Label>
                <Form.Control required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Pekerjaan <span className="required">*</span></Form.Label>
                <Form.Control required />
            </Form.Group>
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Status Perkawinan <span className="required">*</span></Form.Label>
                        <Form.Select>
                            <option></option>
                            <option value={'Belum Menikah'}>Belum Menikah</option>
                            <option value={'Menikah'}>Menikah</option>
                            <option value={'Janda'}>Janda</option>
                            <option value={'Duda'}>Duda</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group>
                    <Form.Label>Produk Simpanan <span className="required">*</span></Form.Label>
                    <Form.Select>
                        <option value={'Simpanan Pokok'}>Simpanan Pokok</option>
                    </Form.Select>
                </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Nominal Simpanan Pokok <span className="required">*</span></Form.Label>
                            <div style={{display: 'flex', gap: '10px'}}>
                                <p style={{fontSize: '18px', fontWeight: '600'}}>Rp.</p>
                                <Form.Control required />
                            </div>
                    </Form.Group>
                </Col>
            </Row>
            <div className="form-cta gap-3">
                <button onClick={() => showForm(false)} className="form-back-button" type="button">Kembali</button>
                <button onClick={() => showForm(false)} className="form-submit-button" type="button">Tambah</button>
            </div>
        </Form>
    )
}