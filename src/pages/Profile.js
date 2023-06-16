import { Form, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';

import '../styles/components/FormLayout.css'

export default function Profile() {
  const { auth = {} } = useSelector(states => states)

  if(auth.role === 'NASABAH') {
    return(
      <main>
      <h1 className="page-header">Profile</h1>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Edit Profile</h4>
        </div>
        <div className="section-body">
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Id Nasabah<span className="required">*</span></Form.Label>
                  <Form.Control required disabled />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Tanggal Daftar<span className="required">*</span></Form.Label>
                  <Form.Control type='date' required disabled />
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
                        <Form.Label>NIK <span className="required">*</span></Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Col>
              <Col>
                <Form.Group>
                  <Form.Label>No Rek <span className="required">*</span></Form.Label>
                  <Form.Control required />
                </Form.Group>
              </Col>
            </Row>
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
              <Form.Label>Pekerjaan <span className="required">*</span></Form.Label>
              <Form.Control required />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Status Perkawinan<span className="required">*</span></Form.Label>
                    <Form.Select>
                            <option></option>
                            <option value={'Laki-laki'}>Belum Kawin</option>
                            <option value={'Perempuan'}>Kawin</option>
                        </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            {/* <div className="form-cta">
              <button className="form-submit-button" type="submit">Simpan</button>
            </div> */}
          </Form>
        </div>
      </section>
    </main>
    )
  }

  return (
    <main>
      <h1 className="page-header">Profile</h1>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Edit Profile</h4>
        </div>
        <div className="section-body">
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Id Pengelola <span className="required">*</span></Form.Label>
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
                            <option value={'Pria'}>Pria</option>
                            <option value={'Wanitas'}>Wanitas</option>
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
