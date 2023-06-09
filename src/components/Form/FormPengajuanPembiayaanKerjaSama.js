import { Form, Row, Col } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'


import '../../styles/components/FormLayout.css'

export default function FormPengajuanPembiayaan({ showForm }) {
    const [gambarKTP, setGambarKTP] = useState(null)
    const [gambarKK, setGambarKK] = useState(null)
    const [dokumenRKB, setDokumenRKB] = useState(null)

    return (
        <Form onSubmit={(e) => { e.preventDefault(); showForm(false) }}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Nama Lengkap <span className="required">*</span></Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Produk Pembiayaan<span className="required">*</span></Form.Label>
                        <Form.Select>
                            <option>Mudharabah</option>
                            <option>Musyarakah</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Durasi Pembiayaan <span className="required">*</span></Form.Label>
                        <Form.Select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Nominal Pembiayaan (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Nominal Pelunasan (Rp)<span className="required">*</span></Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group>
                <Form.Label>Logo Himpunan <span className="required">*</span></Form.Label>
                <InputImage label="Upload Foto KTP" getData={setGambarKTP} currentData={gambarKTP} />
                <InputImage label="Upload Foto KK" getData={setGambarKK} currentData={gambarKK} />
                <InputImage label="Upload Dokumen RAB" getData={setDokumenRKB} currentData={dokumenRKB} />
            </Form.Group>
            <div className="form-cta gap-3">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}