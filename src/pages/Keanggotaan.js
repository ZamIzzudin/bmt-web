import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import TambahKeanggotaan from '../components/Form/TambahKeanggotaan'

export default function Keanggotaan() {
    const location = useLocation().pathname
    const type = location.split('/')[2]

    const [showAddForm, setShowAddForm] = useState(false)

    let data = [
        {
            no: 1,
            id: "NSB-002",
            role: "Admin",
            email: "agus@gmail.com",
            nama: "Agus",
        },
        {
            no: 2,
            id: "NSB-002",
            role: "Officer",
            email: "agus@gmail.com",
            nama: "Agus",
        },
        {
            no: 3,
            id: "NSB-002",
            role: "Manager",
            email: "agus@gmail.com",
            nama: "Agus",
        },
        {
            no: 4,
            id: "NSB-002",
            role: "Anggota",
            email: "agus@gmail.com",
            nama: "Agus",
        },
        {
            no: 5,
            id: "NSB-002",
            role: "Anggota",
            email: "agus@gmail.com",
            nama: "Agus",
        },
        {
            no: 6,
            id: "NSB-002",
            role: "Anggota",
            email: "agus@gmail.com",
            nama: "Agus",
        }
    ]

    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">Tambah Keanggotaan</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Form Keanggotaan</h4>
                        <button onClick={() => { setShowAddForm(false) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <TambahKeanggotaan showForm={setShowAddForm} />
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main>
            <h1 className="page-header">Daftar Keanggotaan</h1>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Kas {type}</h4>
                    <button onClick={() => setShowAddForm(true)} className={`section-add-btn ${type === 'rekap' ? 'hidden' : null}`}>+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>ID Anggota</th>
                            <th>Role</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {data.map(each => (
                            <tr>
                                <td>{each.no}</td>
                                <td>{each.id}</td>
                                <td>{each.role}</td>
                                <td>{each.nama}</td>
                                <td>{each.email}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button className="section-edit-btn" onClick={() => setShowAddForm(true)} >Edit</button>
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