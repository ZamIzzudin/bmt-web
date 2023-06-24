import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { AsyncApprovePengajuanKerjasama, AsyncRejectPengajuanKerjasama } from '../../state/pengajuan/middleware'

import moment from 'moment'

export default function DetailPengajuanKerjasama({ backButton, currentData }) {
    const { auth = {} } = useSelector(states => states)
    const dispatch = useDispatch()

    const location = useLocation().pathname
    const type = location.split('/')[2].split('-')[1]

    const attach_ktp = JSON.parse(currentData.attach_ktp)
    const attach_kk = JSON.parse(currentData.attach_kk)
    const dokumen_rab = JSON.parse(currentData.attach_lainnya)

    function formatMoney(amount) {
        return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(amount);
    }

    return (
        <main>
            <h1 className="page-header">Detail Pengajuan {type}</h1>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Detail Pengajuan</h4>
                    <button onClick={() => backButton()} className="section-add-btn">-</button>
                </div>
                <div className="section-body">
                    <table className="detail-table">
                            <tr>
                                <td>ID Pengajuan</td>
                                <td>{`PMBKRJ-${currentData.id_pengajuan.substring(0,3)}`}</td>
                            </tr>
                            <tr>
                                <td>Anggota</td>
                                <td>{`NSB-${currentData.id_nasabah.substring(0,3)}`}</td>
                            </tr>
                            <tr>
                                <td>Jenis Pembiayaan</td>
                                <td>{currentData.produk_pengajuan}</td>
                            </tr>
                            <tr>
                                <td>Durasi Pembiayaan</td>
                                <td>{currentData.durasi} Bulan</td>
                            </tr>
                            <tr>
                                <td>Nominal Pembiayaan</td>
                                <td>{`Rp. ${formatMoney(currentData.nominal_awal)}`}</td>
                            </tr>
                            <tr>
                                <td>Nominal Pelunasan</td>
                                <td>{`Rp. ${formatMoney(currentData.nominal_akhir)}`}</td>
                            </tr>
                            <tr>
                                <td>Tanggal Pengajuan</td>
                                <td>{moment.utc(currentData.created_at).format("DD MMMM YYYY")}</td>
                            </tr>
                            <tr>
                                <td>Status Pengajuan</td>
                                <td>{currentData.status_pengajuan}</td>
                            </tr>
                    </table>
                </div>
            </section>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Bukti</h4>
                    <button onClick={() => backButton()} className="section-add-btn hidden">-</button>
                </div>
                <div className="section-body">
                    <table className="detail-table">
                            <tr>
                                <td className="padding-l -50">BUKTI KTP</td>
                                <td className="centered"><img src={attach_ktp.url} width={500} alt="attachment" /></td>
                            </tr>
                            <tr>
                                <td className="padding-l -50">BUKTI KK</td>
                                <td className="centered"><img src={attach_kk.url} width={500} alt="attachment" /></td>
                            </tr>
                            <tr>
                                <td className="padding-l -50">BUKTI DOKUMEN RAB</td>
                                <td className="centered"><img src={dokumen_rab.url} width={500} alt="attachment" /></td>
                            </tr>
                    </table>
                    {(auth.role === 'OFFICER' || auth.role === 'ADMIN') && currentData.status_pengajuan === 'BELUM DISETUJUI' ? (
                        <div className="form-cta gap-3">
                            <button className="form-submit-button" type="button" onClick={() => { backButton(); 
                                dispatch(AsyncApprovePengajuanKerjasama(currentData.id_pengajuan))}}>Setujui</button>
                            <button className="form-cancel-button" type="button" onClick={() => { backButton(); 
                                dispatch(AsyncRejectPengajuanKerjasama(currentData.id_pengajuan))}}>Tolak</button>
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