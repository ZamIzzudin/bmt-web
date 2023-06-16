import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import FormPengajuanSimpanan from '../components/Form/FormPengajuanSimpanan'
import DetailPengajuanSimpanan from '../components/Detail/DetailPengajuanSimpanan'
import { useEffect } from 'react'

import { AsyncGetPengajuanSimpanan } from '../state/pengajuan/middleware'

export default function PengajuanSimpanan() {
    const { auth = {}, pengajuan = [] } = useSelector(states => states)
    const dispatch = useDispatch();

    const [selectedData, setSelectedData] = useState(null)

    const [showAddForm, setShowAddForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)

    function backButton() {
        setShowDetail(false)
    }

    function formatMoney(amount) {
        return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(amount);
      }

    useEffect(() => {
        dispatch(AsyncGetPengajuanSimpanan("nasabah"))
    }, [dispatch])
    // Form that shown when parameter (true)
    if (showDetail) {
        return (
            <DetailPengajuanSimpanan backButton={backButton} currentData={selectedData} />
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
            <div style={{ paddingRight: "50px", display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '35px' }}>
                <button
                    className={`section-add-btn hidden`}
                >+</button>
                <button
                    onClick={() => setShowAddForm(true)}
                    className={`section-add-btn ${auth.role !== "NASABAH" ? "hidden" : null}`}
                >+</button>
            </div>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Simpanan Sukarela</h4>
                    <button onClick={() => setShowAddForm(true)} className={`section-add-btn hidden`} >+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Jenis</th>
                            <th>Setoran Awal</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {pengajuan?.map((each, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{`NSB-${each.id_nasabah.substring(0,3)}`}</td>
                                <td>{each.nama}</td>
                                <td>{each.produk_pengajuan}</td>
                                <td>Rp. {formatMoney(each.nominal_awal)}</td>
                                <td>{each.status_pengajuan}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => { setShowDetail(true); setSelectedData(each)}} className="section-edit-btn">Detail</button>
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