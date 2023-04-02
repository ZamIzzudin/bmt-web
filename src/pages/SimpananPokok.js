import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Simpanan() {
    const { auth = { status: false, role: null } } = useSelector(states => states)

    const location = useLocation().pathname
    const type = location.split('/')[2]

    const data = [
        {
            no: 1,
            id: "NSB-001",
            nama: "Agus",
            nominal: "Rp.50.000",
            tanggal: "09/05/2022",
        },
        {
            no: 2,
            id: "NSB-002",
            nama: "Joko",
            nominal: "Rp.50.000",
            tanggal: "09/05/2022",
        },
        {
            no: 3,
            id: "NSB-003",
            nama: "Supriadi",
            nominal: "Rp.50.000",
            tanggal: "09/05/2022",
        }
    ]

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
                    <button className="section-add-btn hidden">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Nominal</th>
                            <th>Tanggal</th>
                        </tr>
                        {data.map(each => (
                            <tr>
                                <td>{each.no}</td>
                                <td>{each.id}</td>
                                <td>{each.nama}</td>
                                <td>{each.nominal}</td>
                                <td>{each.tanggal}</td>
                            </tr>
                        ))}

                    </table>
                </div>
            </section>
        </main>
    )
}