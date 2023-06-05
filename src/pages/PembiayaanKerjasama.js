import { useState } from 'react'
import { useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'

import TambahPembiayaan from '../components/Form/TambahPembiayaan'
import DetailPembiayaan from '../components/Detail/DetailPembiayaan'

import { ReactComponent as Search } from "../assets/icons/search.svg";


export default function PembiayaanKerjasama() {
    // const { auth = { status: false, role: null } } = useSelector(states => states)

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
            <div
                style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: 'column'
                }}
            >
                <h1 className="page-header">Daftar Pembiayaan</h1>
                <div style={{ paddingRight: "50px", display: 'flex', alignItems:'center', justifyContent: 'space-between', paddingTop: '35px' }}>
                <button
                    className="button-not-lunas"
                >Lihat Belum Lunas</button>
                <button
                    onClick={() => setShowAddForm(true)}
                    className={`section-add-btn ${type === "rekap" ? "hidden" : null}`}
                >+</button>
                </div>
            </div>
            <section className="content-section">
            <div className="section-header-container">
          <h4 className="section-header">Pembiayaan {type}</h4>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              className="section-search"
              required
              style={{
                width: "100%",
                height: "24px",
                padding: "15px 25px",
                borderRadius: "18px",
                fontSize: "16px",
              }}
            />
            <Search
              style={{
                position: "absolute",
                top: "50%",
                left: "90%",
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
            />
          </div>
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