import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import TambahPembiayaan from '../components/Form/TambahPembiayaan'
import DetailPembiayaan from '../components/Detail/DetailPembiayaan'

export default function PembiayaanJualBeli() {
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
            jenis: "Hawalah",
            nominal: "Rp.200.000",
            pelunasan: "Rp.205.000",
            durasi: "3 bln",
            angsuran: "Rp.68.333",
            laba: "0%",
            tenggat: "09/05/2022",
            status: "Belum Lunas",
        },
        {
            no: 2,
            id: "NSB-001",
            nama: "Agus",
            jenis: "Mudharabah",
            nominal: "Rp.200.000",
            pelunasan: "Rp.205.000",
            durasi: "5 bln",
            angsuran: "Rp.68.333",
            laba: "5%",
            tenggat: "09/05/2022",
            status: "Belum Lunas",
        },
        {
            no: 3,
            id: "NSB-001",
            nama: "Agus",
            jenis: "Qardul Hasan",
            nominal: "Rp.200.000",
            pelunasan: "Rp.205.000",
            durasi: "3 bln",
            angsuran: "Rp.68.333",
            laba: "0%",
            tenggat: "09/05/2022",
            status: "Lunas",
        }
    ]

    // Form that shown when parameter (true)
    if (showDetail) {
        return (
            <DetailPembiayaan backButton={backButton} />
        )
    }

    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">Pengajuan Simpanan</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Form Pengajuan</h4>
                        <button onClick={() => { setShowAddForm(false) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <TambahPembiayaan showForm={setShowAddForm} />
                    </div>
                </section>
            </main>
        )
    }


    return (
        <main>
            <h1 className="page-header">Daftar Pembiayaan</h1>
            <div>
                {auth.role !== 'user' ? (
                    <button className="section-edit-btn" >Cetak</button>
                ) : null}
            </div>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Pembiayaan {type}</h4>
                    <button onClick={() => { setShowAddForm(true) }} className={`section-add-btn ${(auth.role === 'admin' || auth.role === 'officer') ? null : 'hidden'}`}>+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Jenis</th>
                            <th>Nominal</th>
                            <th>Pelunasan</th>
                            <th>Durasi</th>
                            <th>Min Angsuran</th>
                            <th>Laba</th>
                            <th>Tenggat</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {data.map(each => (
                            <tr>
                                <td>{each.no}</td>
                                <td>{each.id}</td>
                                <td>{each.nama}</td>
                                <td>{each.jenis}</td>
                                <td>{each.nominal}</td>
                                <td>{each.pelunasan}</td>
                                <td>{each.durasi}</td>
                                <td>{each.angsuran}</td>
                                <td>{each.laba}</td>
                                <td>{each.tenggat}</td>
                                <td>{each.status}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => setShowDetail(true)} className="section-edit-btn">Detail</button>
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