import { useSelector } from 'react-redux'
import { useState } from 'react'

import SetorModal from '../Modal/SetorModal'

export default function DetailSimpananWajib({ backButton }) {
    const { auth = { status: false, role: null } } = useSelector(states => states)

    const [showModal, setShowModal] = useState(false)

    const transaksi = [
        {
            no: 1,
            bulan: "Maret",
            tahun: "2023",
            nama: "Mawar",
            nominal: "Rp.200.000",
            status: "Lunas",
        },
        {
            no: 2,
            bulan: "April",
            tahun: "2023",
            nama: "Mawar",
            nominal: "Rp.200.000",
            status: "Lunas",
        },
        {
            no: 3,
            bulan: "Mei",
            tahun: "2023",
            nama: "Mawar",
            nominal: "Rp.200.000",
            status: "Lunas",
        },
        {
            no: 4,
            bulan: "Juni",
            tahun: "2023",
            nama: "Mawar",
            nominal: "Rp.200.000",
            status: "Belum Lunas",
        }
    ]

    return (
        <main>
            <h1 className="page-header">Detail Simpanan Wajib</h1>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Detail Transaksi</h4>
                    <button onClick={() => backButton()} className="section-add-btn">-</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Bulan</th>
                            <th>Tahun</th>
                            <th>Teller</th>
                            <th>Nominal</th>
                            <th>Status</th>
                        </tr>
                        {transaksi.map(each => (
                            <tr>
                                <td>{each.no}</td>
                                <td>{each.bulan}</td>
                                <td>{each.tahun}</td>
                                <td>{each.nama}</td>
                                <td>{each.nominal}</td>
                                <td>{each.status}</td>
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
            <SetorModal show={showModal} setShow={setShowModal} />
        </main >
    )
}