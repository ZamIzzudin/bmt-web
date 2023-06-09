import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import KTP from '../../assets/ktp.jpg'

export default function DetailPengajuan({ backButton }) {
    const { auth = { status: false, role: null } } = useSelector(states => states)

    const location = useLocation().pathname
    const type = location.split('/')[2].split('-')[1]

    const detail = {
        id_pengajuan: "SMPSKR-001",
        anggota: "Agus Mulyadi (NSB-001)",
        jenis_pembiayaan: "Murabahah",
        nominal_pembiayaan: "Rp. 800.000",
        durasi_pembiayaan: "4 Bulan",
        tanggal_pengajuan: "09/06/2020",
        status_pengajuan: "Diajukan",
    }

    const attachments = {
        ktp: null,
        kartu_keluarga: null,
    }

    return (
        <main>
            <h1 className="page-header">Detail Pengajuan {type}</h1>
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
                </div>
            </section>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Detail</h4>
                    <button onClick={() => backButton()} className="section-add-btn hidden">-</button>
                </div>
                <div className="section-body">
                    <table className="detail-table">
                        {Object.keys(attachments).map(each => (
                            <tr>
                                <td className="padding-l -50">{each.replace('_', ' ')}</td>
                                <td className="centered"><img src={KTP} alt="attachment" /></td>
                            </tr>
                        ))}
                    </table>
                    {auth.role === 'officer' && detail.status_pengajuan === 'Diajukan' ? (
                        <div className="form-cta gap-3">
                            <button className="form-submit-button" type="button">Setujui</button>
                            <button className="form-cancel-button" type="button">Tolak</button>
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