import { Form, Row, Col } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AsyncEditAdmin } from '../../state/admin/middleware';
import { AsyncEditManager } from '../../state/manager/middleware';
import { AsyncEditOfficer } from '../../state/account_officer/middleware';
import { AsyncEditAdminMaster } from '../../state/admin_master/middleware';

import '../../styles/components/FormLayout.css'
import { ReactComponent as BackButton } from '../../assets/icons/arrow_back.svg';

export default function EditPengelola({ backButton, currentData }) {
  const dispatch = useDispatch();
  const [role, setRole] = useState();
  const [username, setUsername] = useState(currentData.username);
  const [jenisKelamin, setJenisKelamin] = useState(currentData.jenis_kelamin);
  const [nama, setNama] = useState(currentData.nama_admin || currentData.nama_manager || currentData.nama_account_officer || currentData.nama_admin_master);
  const [password, setPassword] = useState(currentData.password_admin || currentData.password_manager || currentData.password_account_officer || currentData.password_admin_master);
  const [email, setEmail] = useState(currentData.email_admin || currentData.email_manager || currentData.email_account_officer || currentData.email_admin_master);
  const [noTelp, setNoTelp] = useState(currentData.no_hp_admin || currentData.no_hp_manager || currentData.no_hp_account_officer || currentData.no_hp_admin_master);
  const [alamat, setAlamat] = useState(currentData.alamat_admin || currentData.alamat_manager || currentData.alamat_account_officer || currentData.alamat_admin_master);

  const handleEditPengelola = (e) => {
    e.preventDefault();
    if(role === '') return alert('Isi data secara menyeluruh!');
    switch (role) {
      case 'Admin':
        dispatch(AsyncEditAdmin({nama, password, email, username, jenisKelamin, noTelp, alamat}));
        break;
      case 'Manager':
        dispatch(AsyncEditManager({nama, password, email, username, jenisKelamin, noTelp, alamat}));
        break;
      case 'Officer':
        dispatch(AsyncEditOfficer({nama, password, email, username, jenisKelamin, noTelp, alamat}));
        break;
      case 'Admin Master':
        dispatch(AsyncEditAdminMaster({nama, password, email, username, jenisKelamin, noTelp, alamat}));
        break;
      default:
        alert('Role tidak ditemukan');       
    }
  }

  useEffect(() => {
    if('nama_admin' in currentData){
      setRole('Admin');
    }
    if('nama_manager' in currentData){
      setRole('Manager');
    }
    if('nama_account_officer' in currentData){
      setRole('Officer');
    }
    if('nama_admin_master' in currentData){
      setRole('Admin Master');
    }
  }, [currentData])
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
                        <Form.Select value={role} onChange={e => setRole(e.target.value)} disabled>
                            <option></option>
                            <option value="Admin">Admin</option>
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

  
