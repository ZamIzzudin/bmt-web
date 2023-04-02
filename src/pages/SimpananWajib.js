import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import TambahSimpananWajib from '../components/Form/TambahSimpananWajib'
import DetailSimpananWajib from '../components/Detail/DetailSimpananWajib'

export default function SimpananWajib() {
    const { auth = { status: false, role: null } } = useSelector(states => states)

    const location = useLocation().pathname
    const type = location.split('/')[2]

    const [showAddForm, setShowAddForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)

    function backButton() {
        setShowDetail(false)
    }


    const data = [
        {
            no: 1,
            id: "NSB-001",
            nama: "Agus",
            bulan: "Juni",
            tahun: "2023",
            status: "Lunas",
            nominal: "Rp.200.000",
        },
        {
            no: 2,
            id: "NSB-002",
            nama: "Joko",
            bulan: "Juni",
            tahun: "2023",
            status: "Belum Lunas",
            nominal: "Rp.200.000",
        },
        {
            no: 3,
            id: "NSB-003",
            nama: "Lastri",
            bulan: "Juni",
            tahun: "2023",
            status: "Lunas",
            nominal: "Rp.200.000",
        },
        {
            no: 4,
            id: "NSB-004",
            nama: "Supriadi",
            bulan: "Juni",
            tahun: "2023",
            status: "Belum Lunas",
            nominal: "Rp.200.000",
        }
    ]

    // Form that shown when parameter (true)
    if (showDetail) {
        return (
            <DetailSimpananWajib backButton={backButton} />
        )
    }

    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">Daftar Simpanan</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Simpanan {type}</h4>
                        <button onClick={() => { setShowAddForm(false) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <TambahSimpananWajib showForm={setShowAddForm} />
                    </div>
                </section>
            </main>
        )
    }


    return (
        <main>
            <h1 className="page-header">Daftar Simpanan </h1>
            <div>
                {auth.role !== 'user' ? (
                    <button className="section-edit-btn" >Cetak</button>
                ) : null}
            </div>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Simpanan {type}</h4>
                    <button onClick={() => setShowAddForm(true)} className={`section-add-btn ${(auth.role === 'admin' || auth.role === 'officer') ? null : 'hidden'}`}>+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Bulan</th>
                            <th>Tahun</th>
                            <th>Nominal</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {data.map(each => (
                            <tr>
                                <td>{each.no}</td>
                                <td>{each.id}</td>
                                <td>{each.nama}</td>
                                <td>{each.bulan}</td>
                                <td>{each.tahun}</td>
                                <td>{each.nominal}</td>
                                <td>{each.status}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button className="section-edit-btn" onClick={() => setShowDetail(true)}>Detail</button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </table>
                </div>
            </section>
        </main>
    )
}