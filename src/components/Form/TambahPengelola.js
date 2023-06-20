import { Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { asyncRegister } from '../../state/auth/middleware';

import '../../styles/components/FormLayout.css'
import { ReactComponent as BackButton } from '../../assets/icons/arrow_back.svg';

export default function TambahPengelola({ backButton }) {
  const dispatch = useDispatch();

  const [role, setRole] = useState('Admin');
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [alamat, setAlamat] = useState('');

  const handleAddPengelola = (e) => {
    e.preventDefault();
    try {
      dispatch(asyncRegister({
        role,
        nama,
        password,
        email,
        username,
        jenisKelamin,
        noTelp,
        alamat,
      }, "pengelola"));
    }
    catch(err) {
      console.error(err);
    }
    backButton();
  }
    return(
      <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="page-header">Tambah Pengelola</h1>
        <div style={{ paddingRight: "100px", cursor: "pointer" }}>
          <BackButton onClick={() => backButton()} />
        </div>
      </div>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Form Tambah Pengelola</h4>
        </div>
        <div className="section-body">
          <Form onSubmit={handleAddPengelola}>
            <Form.Group>
              <Form.Label>Nama Lengkap <span className="required">*</span></Form.Label>
              <Form.Control required value={nama} onChange={(e) => setNama(e.target.value)} />
            </Form.Group>
            <Row>
              <Col md={6}>
              <Form.Group>
                        <Form.Label>Jenis Kelamin<span className="required">*</span></Form.Label>
                        <Form.Select value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)}>
                            <option></option>
                            <option value={'Pria'}>Pria</option>
                            <option value={'Perempuan'}>Perempuan</option>
                        </Form.Select>
                    </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>No Telp<span className="required">*</span></Form.Label>
                    <Form.Control required value={noTelp} onChange={(e) => setNoTelp(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Username <span className="required">*</span></Form.Label>
              <Form.Control required value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Row>
               <Col>
                 <Form.Group>
                        <Form.Label>Email <span className="required">*</span></Form.Label>
                        <Form.Control required value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Password <span className="required">*</span></Form.Label>
                  <Form.Control required type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Alamat <span className="required">*</span></Form.Label>
              <Form.Control required value={alamat} onChange={(e) => setAlamat(e.target.value)} />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Role<span className="required">*</span></Form.Label>
                        <Form.Select onChange={e => setRole(e.target.value)} value={role}>                
                            <option  value="Admin" selected>Admin</option>
                            <option value="Manager">Manager</option>
                            <option value="Officer">Account Officer</option>
                            <option value="Admin Master">Admin Master</option>
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

  
