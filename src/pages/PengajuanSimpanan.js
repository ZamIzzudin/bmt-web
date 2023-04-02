import { useState } from 'react'
import { useSelector } from 'react-redux'

import FormPengajuanSimpanan from '../components/Form/FormPengajuanSimpanan'
import DetailPengajuanSimpanan from '../components/Detail/DetailPengajuanSimpanan'

export default function PengajuanSimpanan() {
    const { auth = { status: false, role: null } } = useSelector(states => states)

    const [showAddForm, setShowAddForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)

    function backButton() {
        setShowDetail(false)
    }

    const data = [
        {
            no: 1,
            id: "NSB-325",
            nama: "Joko",
            jenis: "Simpanan Kurban",
            status: "Diajukan",
            tanggal: "09/05/2022",
        },
        {
            no: 2,
            id: "NSB-328",
            nama: "Supriadi",
            jenis: "Simpanan Haji",
            status: "Diajukan",
            tanggal: "09/05/2022",
        },
        {
            no: 3,
            id: "NSB-001",
            nama: "Agus",
            jenis: "Simpanan Hari Tua",
            status: "Disetujui",
            tanggal: "09/05/2022",
        },
        {
            no: 4,
            id: "NSB-001",
            nama: "Agus",
            jenis: "Simpanan Haji",
            status: "Ditolak",
            tanggal: "09/05/2022",
        }
    ]

    // Form that shown when parameter (true)
    if (showDetail) {
        return (
            <DetailPengajuanSimpanan backButton={backButton} />
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
                        <FormPengajuanSimpanan showForm={setShowAddForm} />
                    </div>
                </section>
            </main>
        )
    }


    return (
        <main>
            <h1 className="page-header">Pengajuan Simpanan</h1>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Simpanan Sukarela</h4>
                    <button onClick={() => setShowAddForm(true)} className={`section-add-btn ${(auth.role === 'user') ? null : 'hidden'}`} >+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Jenis</th>
                            <th>Tanggal Pengajuan</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {data.map(each => (
                            <tr>
                                <td>{each.no}</td>
                                <td>{each.id}</td>
                                <td>{each.nama}</td>
                                <td>{each.jenis}</td>
                                <td>{each.tanggal}</td>
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