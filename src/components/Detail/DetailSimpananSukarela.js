import { useSelector } from 'react-redux'
import { useState } from 'react'

import SetorModal from '../Modal/SetorModal'
import TarikModal from '../Modal/TarikModal'

export default function DetailSimpananSukarela({ backButton }) {
    const { auth = { status: false, role: null } } = useSelector(states => states)

    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)

    const detail = {
        id: "SMPSKR-001",
        anggota: "Agus Mulyadi (NSB-001)",
        jenis_simpanan: "Simpanan Haji",
        jumlah_simpanan: "Rp. 4.000.000",
        tanggal_pembuatan: "09/05/2020",
    }

    const transaksi = [
        {
            no: 1,
            tanggal: "12/09/2023",
            nama: "Mawar",
            nominal: "Rp.200.000",
            jenis: "Setor",
        },
        {
            no: 2,
            tanggal: "07/08/2023",
            nama: "Mawar",
            nominal: "Rp.200.000",
            jenis: "Setor",
        },
        {
            no: 3,
            tanggal: "19/07/2023",
            nama: "Mawar",
            nominal: "Rp.200.000",
            jenis: "Tarik",
        },
        {
            no: 4,
            tanggal: "09/07/2023",
            nama: "Mawar",
            nominal: "Rp.200.000",
            jenis: "Setor",
        }
    ]

    return (
        <main>
            <h1 className="page-header">Detail Simpanan Sukarela</h1>
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
                            <button onClick={() => setShowModal2(true)} className="form-submit-button" type="button">Tarik</button>
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
                            <th>Transaski</th>
                        </tr>
                        {transaksi.map(each => (
                            <tr>
                                <td>{each.no}</td>
                                <td>{each.tanggal}</td>
                                <td>{each.nama}</td>
                                <td>{each.nominal}</td>
                                <td>{each.jenis}</td>
                            </tr>
                        ))}

                    </table>
                </div>
            </section>
            <SetorModal show={showModal} setShow={setShowModal} />
            <TarikModal show={showModal2} setShow={setShowModal2} />
        </main >
    )
}