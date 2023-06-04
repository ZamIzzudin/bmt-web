import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import TambahKeanggotaan from '../components/Form/TambahKeanggotaan'
import { ReactComponent as Search } from '../assets/icons/search.svg'

export default function Keanggotaan() {
    const location = useLocation().pathname
    const type = location.split('/')[2]

    const [showAddForm, setShowAddForm] = useState(false)

    let data = [
        {
            no: 1,
            id: "NSB-002",
            email: "agus@gmail.com",
            nama: "Agus",
            jenis_kelamin: "Laki-laki"
        },
        {
            no: 2,
            id: "NSB-002",
            email: "agus@gmail.com",
            nama: "Agus",
            jenis_kelamin: "Laki-laki"
        },
        {
            no: 3,
            id: "NSB-002",
            email: "agus@gmail.com",
            nama: "Agus",
            jenis_kelamin: "Laki-laki"
        },
        {
            no: 4,
            id: "NSB-002",
            email: "agus@gmail.com",
            nama: "Agus",
            jenis_kelamin: "Laki-laki"
        },
        {
            no: 5,
            id: "NSB-002",
            email: "agus@gmail.com",
            nama: "Agus",
            jenis_kelamin: "Laki-laki"
        },
        {
            no: 6,
            id: "NSB-002",
            email: "agus@gmail.com",
            nama: "Agus",
            jenis_kelamin: "Laki-laki"
        }
    ]

    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">Tambah Nasabah</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Form Tambah Nasabah</h4>
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
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1 className="page-header">Daftar Nasabah</h1>
                <div style={{paddingRight:'50px'}}>
                    <button onClick={() => setShowAddForm(true)} className={`section-add-btn ${type === 'rekap' ? 'hidden' : null}`}>+</button>
                </div>
            </div>
            <section className="content-section">
                <div className="section-header-container" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h4 className="section-header">Kas {type}</h4>
                    <div style={{position: 'relative'}}>
                        <input type="text" className='section-search' required 
                            style={{width: '100%', height: '24px', padding:'15px 25px', borderRadius:'18px', fontSize:'16px'}} />
                        <Search style={{position: 'absolute', top: '50%', left: '90%', transform: 'translate(-50%, -50%)', cursor: 'pointer'}} />
                    </div>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>ID Nasabah</th>
                            <th>Nama</th>
                            <th>Jenis Kelamin</th>
                            <th>Email</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {data.map(each => (
                            <tr>
                                <td>{each.no}</td>
                                <td>{each.id}</td>
                                <td>{each.nama}</td>
                                <td>{each.jenis_kelamin}</td>
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