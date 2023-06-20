import { Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AsyncEditUser } from '../../state/users/middleware';

import '../../styles/components/FormLayout.css'
import { ReactComponent as BackButton } from '../../assets/icons/arrow_back.svg';

export default function EditPengelola({ backButton, currentData }) {
  const dispatch = useDispatch();
  const [role, setRole] = useState(currentData.role);
  const [username, setUsername] = useState(currentData.username);
  const [nama, setNama] = useState(currentData.nama);
  const [jenisKelamin, setJenisKelamin] = useState(currentData.jenis_kelamin);
  const [password, setPassword] = useState(currentData.password);
  const [email, setEmail] = useState(currentData.email);
  const [noTelp, setNoTelp] = useState(currentData.no_hp);
  const [alamat, setAlamat] = useState(currentData.alamat);

  const handleEditPengelola = (e) => {
    e.preventDefault();
    try {
      dispatch(AsyncEditUser({
        id: currentData.id_user,
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
    backButton(false);
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
        <h1 className="page-header">Edit Pengelola</h1>
        <div style={{ paddingRight: "100px", cursor: "pointer" }}>
          <BackButton onClick={() => backButton()} />
        </div>
      </div>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Form Edit Pengelola</h4>
        </div>
        <div className="section-body">
          <Form onSubmit={handleEditPengelola}>
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
                            <option value={'Wanita'}>Wanita</option>
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
                        <Form.Select value={role} onChange={e => setRole(e.target.value)} disabled>
                          <option value={"Admin Master"}>Admin Master</option>
                          <option>Admin={"Admin"}</option>
                          <option>Manager={"Manager"}</option>
                          <option>Officer={"Officer"}</option>
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

  
