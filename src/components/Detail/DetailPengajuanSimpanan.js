import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { AsyncApprovePengajuanSimpanan, AsyncRejectPengajuanSimpanan } from '../../state/pengajuan/middleware';

import moment from 'moment/moment';

export default function DetailPengajuanSimpanan({ backButton, currentData }) {
    const dispatch = useDispatch();
    const { auth = {} } = useSelector(states => states)

    const location = useLocation().pathname
    const type = location.split('/')[2]

    const date_created = moment.utc(currentData.created_at).format('YYYY-MM-DD')
    function formatMoney(amount) {
        return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(amount);
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
                            <tr>
                                <td>ID Pengajuan</td>
                                <td>{`SMPSKR-${currentData.id_pengajuan.substring(0,3)}`}</td>
                            </tr>
                            <tr>
                                <td>Anggota</td>
                                <td>{`NSB-${currentData.id_nasabah.substring(0,3)}`}</td>
                            </tr>
                            <tr>
                                <td>Jenis Simpanan</td>
                                <td>{currentData.produk_pengajuan}</td>
                            </tr>
                            <tr>
                                <td>Penyetoran Awal</td>
                                <td>Rp. {formatMoney(currentData.nominal_awal)}</td>
                            </tr>
                            <tr>
                                <td>Tanggal Pengajuan</td>
                                <td>{date_created}</td>
                            </tr>
                            <tr>
                                <td>Status Pengajuan</td>
                                <td>{currentData.status_pengajuan}</td>
                            </tr>
                    </table>
                    {(auth.role === 'OFFICER' || auth.role === 'ADMIN') && currentData.status_pengajuan === 'BELUM DISETUJUI' ? (
                        <div className="form-cta gap-3">
                            <button className="form-submit-button" onClick={() => {dispatch(AsyncApprovePengajuanSimpanan(currentData.id_pengajuan)); backButton()}} type="button">Setujui</button>
                            <button className="form-cancel-button" type="button" onClick={() => {dispatch(AsyncRejectPengajuanSimpanan(currentData.id_pengajuan)); backButton()}}>Tolak</button>
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