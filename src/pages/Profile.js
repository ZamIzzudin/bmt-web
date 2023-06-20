import { Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AsyncEditUser } from '../state/users/middleware';

import '../styles/components/FormLayout.css'
import moment from 'moment';

export default function Profile() {
  const { auth = {} } = useSelector(states => states)
  const dispatch = useDispatch();

  const [username, setUsername] = useState(auth?.username)
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState(auth?.email)
  const [nama, setNama] = useState(auth?.name)
  const [jenisKelamin, setJenisKelamin] = useState(auth?.jenis_kelamin)
  const [noTelp, setNoTelp] = useState(auth?.no_hp)
  const [alamat, setAlamat] = useState(auth?.alamat)
  const [pekerjaan, setPekerjaan] = useState(auth?.pekerjaan)
  const [noRekening, setNoRekening] = useState(auth?.no_rekening)
  const [statusPerkawinan, setStatusPerkawinan] = useState(auth?.status_perkawinan)
  
  const handleEditAnggota = (e) => {
    e.preventDefault();
    try {
      if(auth.role === 'NASABAH'){
        dispatch(AsyncEditUser({
          id: auth.id,
          role: "Nasabah",
          nama,
          password,
          email,
          username,
          nik: auth.nik,
          noRekening,
          jenisKelamin,
          statusPerkawinan,
          pekerjaan,
          noTelp,
          alamat,
        }, "nasabah"));
        return;
      }
      dispatch(AsyncEditUser({
        id: auth.id,
        role: "Pengelola",
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
  }

  if(auth.role === 'NASABAH') {
    return(
      <main>
      <h1 className="page-header">Profile</h1>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Edit Profile</h4>
        </div>
        <div className="section-body">
         <Form onSubmit={handleEditAnggota}>
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
             <Form.Control required value={nama} onChange={(e) => setNama(e.target.value)} />
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
                  <Form.Control required value={noRekening} onChange={(e) => setNoRekening(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            <Col>
                    <Form.Group>
                        <Form.Label>Jenis Kelamin<span className="required">*</span></Form.Label>
                        <Form.Select value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)}>
                            <option value={'Pria'}>Pria</option>
                            <option value={'Wanita'}>Wanita</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
              <Col>
                <Form.Group>
                  <Form.Label>No Telp <span className="required">*</span></Form.Label>
                  <Form.Control required value={noTelp} onChange={(e) => setNoTelp(e.target.value)}  />
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
                  <Form.Control type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Password <span className="required">*</span></Form.Label>
                  <Form.Control type='password' placeholder='Abaikan jika tidak ingin merubah' onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Alamat <span className="required">*</span></Form.Label>
              <Form.Control required value={alamat} onChange={(e) => setAlamat(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Pekerjaan <span className="required">*</span></Form.Label>
              <Form.Control required value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)} />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Status Perkawinan<span className="required">*</span></Form.Label>
                        <Form.Select required value={auth.status_perkawinan} onChange={(e) => setStatusPerkawinan(e.target.value)}>
                            <option value={'Belum Kawin'}>Belum Kawin</option>
                            <option value={'Kawin'}>Kawin</option>
                            <option value={'Janda'}>Janda</option>
                            <option value={'Duda'}>Duda</option>
                        </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <div className="form-cta">
              <button className="form-submit-button" type="submit">Simpan</button>
            </div>
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
          <Form onSubmit={handleEditAnggota}>
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
              <Form.Control required value={nama} onChange={(e) => setNama(e.target.value)} />
            </Form.Group>
            <Row>
            <Col>
                    <Form.Group>
                        <Form.Label>Jenis Kelamin<span className="required">*</span></Form.Label>
                        <Form.Select value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)}>
                            <option value={'Pria'}>Pria</option>
                            <option value={'Wanita'}>Wanita</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
              <Col>
                <Form.Group>
                  <Form.Label>No Telp <span className="required">*</span></Form.Label>
                  <Form.Control required value={noTelp} onChange={(e) => setNoTelp(e.target.value)}  />
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
                  <Form.Control type='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Password <span className="required">*</span></Form.Label>
                  <Form.Control type='password' placeholder='Abaikan jika tidak ingin merubah' onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Alamat <span className="required">*</span></Form.Label>
              <Form.Control required value={alamat} onChange={(e) => setAlamat(e.target.value)} />
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
