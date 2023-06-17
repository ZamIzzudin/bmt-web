import { Form, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';

import '../styles/components/FormLayout.css'
import moment from 'moment';

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
                  <Form.Control required disabled value={auth.id} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Tanggal Daftar<span className="required">*</span></Form.Label>
                    <Form.Control type='date' required disabled value={moment(auth.created_at).format('YYYY-MM-DD')} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Nama Lengkap <span className="required">*</span></Form.Label>
              <Form.Control required value={auth.name} disabled />
            </Form.Group>
            <Row>
            <Col>
                    <Form.Group>
                        <Form.Label>NIK <span className="required">*</span></Form.Label>
                        <Form.Control required value={auth.nik} disabled />
                    </Form.Group>
                </Col>
              <Col>
                <Form.Group>
                  <Form.Label>No Rek <span className="required">*</span></Form.Label>
                  <Form.Control required disabled value={auth.no_rekening} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                    <Form.Group>
                        <Form.Label>Jenis Kelamin<span className="required">*</span></Form.Label>
                        <Form.Select disabled value={auth.jenis_kelamin}>
                            <option value={'Pria'}>Pria</option>
                            <option value={'Wanita'}>Wanita</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
              <Col>
                <Form.Group>
                  <Form.Label>No Telp <span className="required">*</span></Form.Label>
                  <Form.Control required value={auth.no_hp} disabled />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Username <span className="required">*</span></Form.Label>
              <Form.Control required value={auth.username} disabled />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Email <span className="required">*</span></Form.Label>
                  <Form.Control required value={auth.email} disabled />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Password <span className="required">*</span></Form.Label>
                  <Form.Control type='password' required disabled />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Alamat <span className="required">*</span></Form.Label>
              <Form.Control required value={auth.alamat} disabled />
            </Form.Group>
            <Form.Group>
              <Form.Label>Pekerjaan <span className="required">*</span></Form.Label>
              <Form.Control required value={auth.pekerjaan} disabled />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Status Perkawinan<span className="required">*</span></Form.Label>
                        <Form.Select required value={auth.status_perkawinan} disabled>
                            <option value={'Belum Kawin'}>Belum Kawin</option>
                            <option value={'Kawin'}>Kawin</option>
                            <option value={'Janda'}>Janda</option>
                            <option value={'Duda'}>Duda</option>
                        </Form.Select>
                </Form.Group>
              </Col>
            </Row>
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
                    <Form.Control required disabled value={auth.id} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Nama Lengkap <span className="required">*</span></Form.Label>
              <Form.Control required value={auth.name} />
            </Form.Group>
            <Row>
            <Col>
                    <Form.Group>
                        <Form.Label>Jenis Kelamin<span className="required">*</span></Form.Label>
                        <Form.Select value={auth.jenis_kelamin} disabled>
                            <option value={'Pria'}>Pria</option>
                            <option value={'Wanita'}>Wanita</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
              <Col>
                <Form.Group>
                  <Form.Label>No Telp <span className="required">*</span></Form.Label>
                  <Form.Control required value={auth.no_hp} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Username <span className="required">*</span></Form.Label>
              <Form.Control required value={auth.username} />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Email <span className="required">*</span></Form.Label>
                  <Form.Control required value={auth.email} />
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
              <Form.Control required value={auth.alamat} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role <span className="required">*</span></Form.Label>
              <Form.Control required disabled value={auth.role} />
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
