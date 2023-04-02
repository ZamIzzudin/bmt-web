import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

export default function DetailPengajuanSimpanan({ backButton }) {
    const { auth = { status: false, role: null } } = useSelector(states => states)

    const location = useLocation().pathname
    const type = location.split('/')[2]

    const detail = {
        id: "SMPSKR-001",
        anggota: "Agus Mulyadi (NSB-001)",
        jenis_simpanan: "Simpanan Sukarela",
        setoran_awal: "Rp. 800.000",
        tanggal_pengajuan: "09/06/2020",
        status_pengajuan: "Diajukan",
    }

    return (
        <main>
            <h1 className="page-header">Detail {type.replace('-', ' ')}</h1>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Detail</h4>
                    <button onClick={() => backButton()} className="section-add-btn">-</button>
                </div>
                <div className="section-body">
                    <table className="detail-table">
                        {Object.keys(detail).map(each => (
                            <tr>
                                <td>{each.replace('_', ' ')}</td>
                                <td>{detail[each]}</td>
                            </tr>
                        ))}
                    </table>
                    {auth.role === 'officer' && detail.status_pengajuan === 'Diajukan' ? (
                        <div className="form-cta gap-3">
                            <button onClick={() => backButton()} className="form-submit-button" type="button">Kembali</button>
                            <button className="form-submit-button" type="button">Setujui</button>
                            <button className="form-submit-button" type="button">Tolak</button>
                        </div>
                    ) : (
                        <div className="form-cta gap-3">
                            <button onClick={() => backButton()} className="form-submit-button" type="button">Kembali</button>
                        </div>
                    )}

                </div>
            </section>
        </main >
    )
}