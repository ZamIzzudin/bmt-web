import { Form, Row, Col } from 'react-bootstrap'

import '../styles/components/FormLayout.css'

export default function Profile() {
  return (
    <main>
      <h1 className="page-header">Profile</h1>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Ubah Profile</h4>
          <button className="section-add-btn hidden">+</button>
        </div>
        <div className="section-body">
          <Form >
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>No Anggota <span className="required">*</span></Form.Label>
                  <Form.Control required disabled />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Tanggal Daftar <span className="required">*</span></Form.Label>
                  <Form.Control required disabled />
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
            <div className="form-cta">
              <button className="form-submit-button" type="submit">Simpan</button>
            </div>
          </Form>
        </div>
      </section>
    </main>
  );
}
