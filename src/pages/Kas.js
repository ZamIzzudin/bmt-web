import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import TambahKas from '../components/Form/TambahKas'

export default function Kas() {
    const { auth = { status: false, role: null } } = useSelector(states => states)

    const location = useLocation().pathname
    const type = location.split('/')[2]

    const [showAddForm, setShowAddForm] = useState(false)

    let data = [
        {
            no: 1,
            id: "KRD-001",
            nama: "Keluar",
            nominal: "Rp.50.000",
            tanggal: "09/05/2022",
            catatan: "Pengadaan Barang",
        },
        {
            no: 2,
            id: "DBT-001",
            nama: "Masuk",
            nominal: "Rp.50.000",
            tanggal: "09/05/2022",
            catatan: "Simpanan Pokok",
        },
        {
            no: 3,
            id: "DBT-002",
            nama: "Masuk",
            nominal: "Rp.50.000",
            tanggal: "09/05/2022",
            catatan: "Hibah",
        },
        {
            no: 4,
            id: "KRD-001",
            nama: "Keluar",
            nominal: "Rp.50.000",
            tanggal: "09/05/2022",
            catatan: "Pengadaan Barang",
        },
        {
            no: 5,
            id: "DBT-001",
            nama: "Masuk",
            nominal: "Rp.50.000",
            tanggal: "09/05/2022",
            catatan: "Simpanan Pokok",
        },
        {
            no: 6,
            id: "DBT-002",
            nama: "Masuk",
            nominal: "Rp.50.000",
            tanggal: "09/05/2022",
            catatan: "Hibah",
        }
    ]

    if (type === 'masuk') {
        data = [
            {
                no: 1,
                id: "DBT-001",
                nama: "Masuk",
                nominal: "Rp.50.000",
                tanggal: "09/05/2022",
                catatan: "Simpanan Pokok",
            },
            {
                no: 2,
                id: "DBT-002",
                nama: "Masuk",
                nominal: "Rp.50.000",
                tanggal: "09/05/2022",
                catatan: "Hibah",
            },
            {
                no: 3,
                id: "DBT-001",
                nama: "Masuk",
                nominal: "Rp.50.000",
                tanggal: "09/05/2022",
                catatan: "Simpanan Pokok",
            },
            {
                no: 4,
                id: "DBT-002",
                nama: "Masuk",
                nominal: "Rp.50.000",
                tanggal: "09/05/2022",
                catatan: "Hibah",
            }
        ]
    }

    if (type === 'keluar') {
        data = [
            {
                no: 1,
                id: "KRD-001",
                nama: "Keluar",
                nominal: "Rp.50.000",
                tanggal: "09/05/2022",
                catatan: "Pengadaan Barang",
            },
            {
                no: 2,
                id: "KRD-001",
                nama: "Keluar",
                nominal: "Rp.50.000",
                tanggal: "09/05/2022",
                catatan: "Pengadaan Barang",
            }
        ]
    }

    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">Input Kas</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Form Transaksi Kas</h4>
                        <button onClick={() => { setShowAddForm(false) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <TambahKas showForm={setShowAddForm} />
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main>
            <h1 className="page-header">Laporan Kas</h1>
            <div>
                {auth.role !== 'user' ? (
                    <button className="section-edit-btn" >Cetak</button>
                ) : null}
            </div>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Kas {type}</h4>
                    <button onClick={() => setShowAddForm(true)} className={`section-add-btn ${type === 'rekap' ? 'hidden' : null}`}>+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>ID Transaksi</th>
                            <th>Jenis Transaksi</th>
                            <th>Nominal</th>
                            <th>Tanggal</th>
                            <th>Catatan</th>
                        </tr>
                        {data.map(each => (
                            <tr>
                                <td>{each.no}</td>
                                <td>{each.id}</td>
                                <td>{each.nama}</td>
                                <td>{each.nominal}</td>
                                <td>{each.tanggal}</td>
                                <td>{each.catatan}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </section>
        </main>
    )
}