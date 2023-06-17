import { Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AsyncCreatePengajuanKerjasama } from '../../state/pengajuan/middleware'

import InputImage from '../InputImage'


import '../../styles/components/FormLayout.css'

export default function FormPengajuanPembiayaan({ showForm }) {
    const dispatch = useDispatch()
    const { auth = {} } = useSelector(states => states)
    const [produk_pembiayaan, setProdukPembiayaan] = useState('Mudharabah')
    const [durasi_pembiayaan, setDurasiPembiayaan] = useState('1')
    const [nominal_pembiayaan, setNominalPembiayaan] = useState()
    const [nominal_pelunasan, setNominalPelunasan] = useState()
    const [foto_ktp, setGambarKTP] = useState(null)
    const [foto_kk, setGambarKK] = useState(null)
    const [dokumen_rab, setDokumenRKB] = useState(null)

    function handleSubmitPengajuan(e) {
        e.preventDefault()
        try{
          dispatch(AsyncCreatePengajuanKerjasama({
            id_nasabah: auth.id,
            produk_pembiayaan,
            durasi_pembiayaan,
            nominal_pembiayaan,
            nominal_pelunasan,
            foto_ktp,
            foto_kk,
            dokumen_rab
          }))
        }
        catch(err){
            console.log(err)
        }
        showForm(false)
    }

    return (
        <Form onSubmit={handleSubmitPengajuan}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Nasabah<span className="required">*</span></Form.Label>
                        <Form.Control disabled required value={auth.name} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Produk Pembiayaan<span className="required">*</span></Form.Label>
                        <Form.Select value={produk_pembiayaan} onChange={e => setProdukPembiayaan(e.target.value)} required>
                            <option selected value={'Mudharabah'}>Mudharabah</option>
                            <option value={'Musyarakah'}>Musyarakah</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Durasi Pembiayaan <span className="required">*</span></Form.Label>
                        <Form.Select value={durasi_pembiayaan} onChange={e => setDurasiPembiayaan(e.target.value)} required>
                            <option selected value={'1'}>1</option>
                            <option value={'2'}>2</option>
                            <option value={'3'}>3</option>
                            <option value={'4'}>4</option>
                            <option value={'5'}>5</option>
                            <option value={'6'}>6</option>
                            <option value={'7'}>7</option>
                            <option value={'8'}>8</option>
                            <option value={'9'}>9</option>
                            <option value={'10'}>10</option>
                            <option value={'11'}>11</option>
                            <option value={'12'}>12</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Nominal Pembiayaan (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control required value={nominal_pembiayaan} onChange={e => setNominalPembiayaan(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Nominal Pelunasan (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control required value={nominal_pelunasan} onChange={e => setNominalPelunasan(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Data Foto <span className="required">*</span></Form.Label>
                <InputImage label="Upload Foto KTP" getData={setGambarKTP} currentData={foto_ktp} />
                <InputImage label="Upload Foto KK" getData={setGambarKK} currentData={foto_kk} />
                <InputImage label="Upload Dokumen RAB" getData={setDokumenRKB} currentData={dokumen_rab} />
            </Form.Group>
            <div className="form-cta gap-3">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}