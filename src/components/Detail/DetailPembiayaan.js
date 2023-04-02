import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import SetorModal from '../Modal/SetorModal'

export default function DetailPembiayaan({ backButton }) {
    const { auth = { status: false, role: null } } = useSelector(states => states)

    const location = useLocation().pathname
    const type = location.split('/')[2]

    const [showModal, setShowModal] = useState(false)

    const detail = {
        id: "SMPSKR-001",
        anggota: "Agus Mulyadi (NSB-001)",
        jenis_pembiayaan: "Murabahah",
        nominal_pembiayaan: "Rp. 800.000",
        nominal_pelunasasn: "Rp. 805.000",
        angsuran_bulanan: "Rp. 200.000",
        laba: "0%",
        durasi_pembiayaan: "4 Bulan",
        tanggal_pembuatan: "09/06/2020",
        tanggal_pembayaran: "12/11/2023",
        status_pembiayaan: "Lunas",
    }

    const transaksi = [
        {
            no: 1,
            tanggal: "12/10/2023",
            nama: "Mawar",
            sisa_angsuran: 'Rp. 0',
            nominal: "Rp.205.000",
            jenis: "Setor",
        },
        {
            no: 2,
            tanggal: "07/09/2023",
            nama: "Mawar",
            sisa_angsuran: 'Rp.205.000',
            nominal: "Rp.200.000",
            jenis: "Setor",
        },
        {
            no: 3,
            tanggal: "19/08/2023",
            nama: "Mawar",
            sisa_angsuran: 'Rp.405.000',
            nominal: "Rp.200.000",
            jenis: "Setor",
        },
        {
            no: 4,
            tanggal: "09/07/2023",
            nama: "Mawar",
            sisa_angsuran: 'Rp.605.000',
            nominal: "Rp.200.000",
            jenis: "Setor",
        }
    ]

    return (
        <main>
            <h1 className="page-header">Detail Pembiayaan {type.replace('-', ' ')}</h1>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Detail</h4>
                    <button onClick={() => backButton()} className="section-add-btn">-</button>
                </div>
                <div className="section-body">
                    <table className="detail-table">
                        {Object.keys(detail).map(each => (
                            <tr>
                                <td>{each.replace('_', ' ')}</td>
                                <td>{detail[each]}</td>
                            </tr>
                        ))}
                    </table>
                    {auth.role === 'admin' || auth.role === 'officer' ? (
                        <div className="form-cta gap-3">
                            <button onClick={() => backButton()} className="form-submit-button" type="button">Kembali</button>
                            <button onClick={() => setShowModal(true)} className="form-submit-button" type="button">Setor</button>
                        </div>
                    ) : (
                        <div className="form-cta gap-3">
                            <button onClick={() => backButton()} className="form-submit-button" type="button">Kembali</button>
                        </div>
                    )}

                </div>
            </section>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Detail Transaksi</h4>
                    <button className="section-add-btn hidden">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Tanggal</th>
                            <th>Teller</th>
                            <th>Nominal</th>
                            <th>Sisa Angsuran</th>
                            <th>Transaski</th>
                        </tr>
                        {transaksi.map(each => (
                            <tr>
                                <td>{each.no}</td>
                                <td>{each.tanggal}</td>
                                <td>{each.nama}</td>
                                <td>{each.nominal}</td>
                                <td>{each.sisa_angsuran}</td>
                                <td>{each.jenis}</td>
                            </tr>
                        ))}

                    </table>
                </div>
            </section>
            <SetorModal show={showModal} setShow={setShowModal} />
        </main >
    )
}