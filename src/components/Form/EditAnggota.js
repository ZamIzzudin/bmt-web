import { Form, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useState } from 'react';

import { AsyncEditUser } from '../../state/users/middleware';

import '../../styles/components/FormLayout.css'
import { ReactComponent as BackButton } from '../../assets/icons/arrow_back.svg';

export default function EditProfileNasabah({ backButton, currentData }) {
    const { auth = {} } = useSelector(states => states);
    const dispatch = useDispatch();
    const [username, setUsername] = useState(currentData.username);
    const [nama, setNama] = useState(currentData.nama);
    const [password, setPassword] = useState(null);
    const [jenisKelamin, setJenisKelamin] = useState(currentData.jenis_kelamin);
    const [noRekening, setNoRekening] = useState(currentData.no_rekening);
    const [nik, setNik] = useState(currentData.nik);
    const [email, setEmail] = useState(currentData.email);
    const [noTelp, setNoTelp] = useState(currentData.no_hp);
    const [alamat, setAlamat] = useState(currentData.alamat);
    const [pekerjaan, setPekerjaan] = useState(currentData.pekerjaan);
    const [statusPerkawinan, setStatusPerkawinan] = useState(currentData.status_perkawinan);

    const date_created = new Date(currentData.created_at);
    const handleEditAnggota = (e) => {
      e.preventDefault();
      try {
        dispatch(AsyncEditUser({
          id: currentData.id_user,
          role: currentData.role,
          nama,
          password,
          email,
          username,
          nik,
          noRekening,
          jenisKelamin,
          statusPerkawinan,
          pekerjaan,
          noTelp,
          alamat,
        }, "nasabah"));
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
    {(auth.role === "ADMIN_MASTER" || auth.role === "ADMIN") ? (
      <h1 className="page-header">Edit Anggota</h1>
      ):(
      <h1 className="page-header">Detail Data Nasabah</h1>
    )}
        <div style={{ paddingRight: "100px", cursor: "pointer" }}>
          <BackButton onClick={() => backButton()} />
        </div>
      </div>
      <section className="content-section">
        <div className="section-header-container">
        {(auth.role === "ADMIN_MASTER" || auth.role === "ADMIN") ? (
          <h4 className="section-header">Form Edit Anggota</h4>
          ):(
          <h4 className="section-header">Form Detail Data Nasabah</h4>
        )}
        </div>
        <div className="section-body">
          <Form onSubmit={handleEditAnggota}>
            <Row>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Id Nasabah<span className="required">*</span></Form.Label>
                  <Form.Control required disabled value={currentData.id_user} readOnly={true} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                    <Form.Label>Tanggal Daftar<span className="required">*</span></Form.Label>
                  <Form.Control value={date_created.toDateString()} required disabled />
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
                        <Form.Control required value={nik} onChange={(e) => setNik(e.target.value)} />
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
                        <Form.Select required value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)}>
  
                            <option value={'Laki-laki'}>Laki-laki</option>
                            <option value={'Perempuan'}>Perempuan</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
              <Col>
                <Form.Group>
                  <Form.Label>No Telp <span className="required">*</span></Form.Label>
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
                  <Form.Control type='password'value={password} onChange={(e) => setPassword(e.target.value)} />
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
                    <Form.Select required value={statusPerkawinan} onChange={(e) => setStatusPerkawinan(e.target.value)}>
                            <option value={'Belum Menikah'}>Belum Menikah</option>
                            <option value={'Menikah'}>Menikah</option>
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

  
