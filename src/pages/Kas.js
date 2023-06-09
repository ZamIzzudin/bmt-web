import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

import { ReactComponent as Search } from "../assets/icons/search.svg";

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
            masuk: "Rp.50.000",
            keluar: "Rp.0",
            tanggal: "09/05/2022",
            catatan: "Pengadaan Barang",
        },
        {
            no: 2,
            id: "DBT-001",
            nama: "Masuk",
            masuk: "Rp.50.000",
            keluar: "Rp.0",
            tanggal: "09/05/2022",
            catatan: "Simpanan Pokok",
        },
        {
            no: 3,
            id: "DBT-002",
            nama: "Masuk",
            masuk: "Rp.50.000",
            keluar: "Rp.0",
            tanggal: "09/05/2022",
            catatan: "Hibah",
        },
        {
            no: 4,
            id: "KRD-001",
            nama: "Keluar",
            masuk: "Rp.50.000",
            keluar: "Rp.0",
            tanggal: "09/05/2022",
            catatan: "Pengadaan Barang",
        },
        {
            no: 5,
            id: "DBT-001",
            nama: "Masuk",
            masuk: "Rp.50.000",
            keluar: "Rp.0",
            tanggal: "09/05/2022",
            catatan: "Simpanan Pokok",
        },
        {
            no: 6,
            id: "DBT-002",
            nama: "Masuk",
            masuk: "Rp.50.000",
            keluar: "Rp.0",
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

            <div style={{ paddingRight: "50px", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a className={`section-edit-btn ${auth.role === 'user' ? ('hidden') : null}`} href="/" target="_blank">Cetak</a>
                <button
                    onClick={() => setShowAddForm(true)}
                    className={`section-add-btn ${auth.role !== "user" && type !== 'rekap' ? null : "hidden"}`}
                >+</button>
            </div>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Kas {type}</h4>
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
                    </div>                </div>
                <div className="section-body">
                    {type === 'rekap' ? (
                        <table>
                            <tr>
                                <th>No.</th>
                                <th>ID Transaksi</th>
                                <th>Catatan</th>
                                <th>Tanggal</th>
                                <th>Jumlah Masuk</th>
                                <th>Jumlah Keluar</th>
                            </tr>
                            {data.map(each => (
                                <tr>
                                    <td>{each.no}</td>
                                    <td>{each.id}</td>
                                    <td>{each.catatan}</td>
                                    <td>{each.tanggal}</td>
                                    <td>{each.masuk}</td>
                                    <td>{each.keluar}</td>
                                </tr>
                            ))}
                        </table>
                    ) : null}
                    {type === 'masuk' ? (
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
                    ) : null}
                    {type === 'keluar' ? (
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
                    ) : null}
                </div>
            </section>
            {type === 'rekap' ? (
                <section className="content-section">
                    <div className="section-body">
                        <table>
                            <tr>
                                <th colspan="2" className="text-center">Total</th>
                                <th className="text-center">Saldo Sementara</th>
                            </tr>
                            <tr>
                                <td className="text-center">Rp.150.000 (+)</td>
                                <td className="text-center">Rp.10.000 (-)</td>
                                <td className="text-center">Rp.140.000</td>
                            </tr>
                        </table>
                    </div>
                </section>
            ) : null}
        </main>
    )
}