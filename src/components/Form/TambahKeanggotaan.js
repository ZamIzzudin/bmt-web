import { Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { asyncRegister } from '../../state/auth/middleware'

import '../../styles/components/FormLayout.css'

export default function TambahKeanggotaan({ showForm }) {
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [nama, setNama] = useState('')
    const [nik, setNIK] = useState('')
    const [jenisKelamin, setJenisKelamin] = useState('Pria')
    const [noTelp, setNoTelp] = useState('')
    const [alamat, setAlamat] = useState('')
    const [pekerjaan, setPekerjaan] = useState('')
    const [statusPerkawinan, setStatusPerkawinan] = useState('Belum Kawin')

   const handleRegister = (e) => {
       e.preventDefault();
        try{
            dispatch(asyncRegister({
                username,
                password,
                email,
                nama,
                nik,
                jenisKelamin,
                noTelp,
                alamat,
                pekerjaan,
                statusPerkawinan,   
                role: "Nasabah",
            }, "nasabah"))
        }
        catch (err){
            console.error(err)
        }
        showForm(false)
   }
    return (
        <Form onSubmit={handleRegister}>
            <Form.Group>
                <Form.Label>Nama Lengkap <span className="required">*</span></Form.Label>
                 <Form.Control required value={nama} onChange={(e) => setNama(e.target.value)} />
             </Form.Group>
            <Form.Group>
                <Form.Label>NIK <span className="required">*</span></Form.Label>
                <Form.Control required value={nik} onChange={(e) => setNIK(e.target.value)} />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Jenis Kelamin<span className="required">*</span></Form.Label>
                        <Form.Select required value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)}>
                            <option value selected={'Pria'}>Pria</option>
                            <option value={'Wanita'}>Wanita</option>
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
                        <Form.Control type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
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
                        <Form.Label>Status Perkawinan <span className="required">*</span></Form.Label>
                        <Form.Select required value={statusPerkawinan} onChange={(e) => setStatusPerkawinan(e.target.value)}>
                            <option value selected={'Belum Menikah'}>Belum Menikah</option>
                            <option value={'Menikah'}>Menikah</option>
                            <option value={'Janda'}>Janda</option>
                            <option value={'Duda'}>Duda</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <div className="form-cta gap-3">
                <button onClick={() => showForm(false)} className="form-back-button" type="button">Kembali</button>
                <button className="form-submit-button" type="submit">Tambah</button>
            </div>
        </Form>
    )
}