import { Form, Row, Col } from 'react-bootstrap'

import '../styles/components/FormLayout.css'

export default function Profile() {
  return (
    <main>
      <h1 className="page-header">Profile</h1>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Edit Profile</h4>
          <button className="section-add-btn hidden">+</button>
        </div>
        <div className="section-body">
          <Form >
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Id Admin <span className="required">*</span></Form.Label>
                  <Form.Control required disabled />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Nama Lengkap <span className="required">*</span></Form.Label>
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
                  <Form.Control type='password' required />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Alamat <span className="required">*</span></Form.Label>
              <Form.Control required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role <span className="required">*</span></Form.Label>
              <Form.Control required disabled />
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
