import { Form, Row, Col } from 'react-bootstrap'
// import { useSelector } from 'react-redux';

import '../../styles/components/FormLayout.css'
import { ReactComponent as BackButton } from '../../assets/icons/arrow_back.svg';

export default function TambahAdmin({ backButton }) {
    return(
      <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="page-header">Tambah Admin</h1>
        <div style={{ paddingRight: "100px", cursor: "pointer" }}>
          <BackButton onClick={() => backButton()} />
        </div>
      </div>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Form Tambah Admin</h4>
        </div>
        <div className="section-body">
          <Form>
            <Form.Group>
              <Form.Label>Nama Lengkap <span className="required">*</span></Form.Label>
              <Form.Control required />
            </Form.Group>
            <Row>
              <Col md={6}>
              <Form.Group>
                        <Form.Label>Jenis Kelamin<span className="required">*</span></Form.Label>
                        <Form.Select>
                            <option></option>
                            <option value={'Laki-laki'}>Laki-laki</option>
                            <option value={'Perempuan'}>Perempuan</option>
                        </Form.Select>
                    </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>No Telp<span className="required">*</span></Form.Label>
                  <Form.Control type='date' required disabled />
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
                  <Form.Control required type='password' />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Alamat <span className="required">*</span></Form.Label>
              <Form.Control required />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Role<span className="required">*</span></Form.Label>
                    <Form.Select>
                            <option></option>
                            <option value={1}>Admin</option>
                            <option value={2}>Manager</option>
                            <option value={3}>Account Officer</option>
                            <option value={4}>Admin Master</option>
                        </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <div className="form-cta">
              <button className="form-submit-button" type="submit">Tambah</button>
            </div>
          </Form>
        </div>
      </section>
    </main>
    )
  }

  
