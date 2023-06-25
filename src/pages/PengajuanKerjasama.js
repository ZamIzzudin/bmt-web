import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import moment from 'moment';

import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

import { HideError } from '../state/error/middleware'
import { HideSuccess } from '../state/success/middleware'
import InfoModal from '../components/InfoModal'

import { AsyncDeletePengajuanKerjasama, AsyncGetPengajuanKerjasama } from '../state/pengajuan/middleware';

import FormPengajuanPembiayaan from '../components/Form/FormPengajuanPembiayaanKerjaSama'
import DetailPengajuanKerjasama from '../components/Detail/DetailPengajuanKerjasama';

export default function PengajuanKerjasama() {
    const { auth = {}, pengajuan = [], error, success } = useSelector(states => states)
    const dispatch = useDispatch();

    const [showAddForm, setShowAddForm] = useState(false)
    const [showDetail, setShowDetail] = useState(false)
    const [selectedData, setSelectedData] = useState(null)

    const [search, setSearch] = useState('');

    function handleModal() {
        dispatch(HideError())
        dispatch(HideSuccess())
    }

    function backButton() {
        setShowDetail(false)
    }

    function formatMoney(amount) {
        return new Intl.NumberFormat('id-ID').format(amount);
    }

    useEffect(() => {
        if(auth.role === "NASABAH"){
           dispatch(AsyncGetPengajuanKerjasama("nasabah"))
           return;
        }
           dispatch(AsyncGetPengajuanKerjasama("pengelola"))
    }, [dispatch, auth.role])

    function handleSearchPengajuan(query) {
        if (query === null) {
          return;
        }
        try {
          if(auth.role === "NASABAH"){
            dispatch(AsyncGetPengajuanKerjasama("nasabah", query))
            return;
          }
          dispatch(AsyncGetPengajuanKerjasama("pengelola", query))
        } catch (e) {
          console.log(e);
        }
      }

    // Form that shown when parameter (true)
    if (showDetail) {
        return (
            <DetailPengajuanKerjasama backButton={backButton} currentData={selectedData} />
        )
    }

    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">Tambah Pengajuan</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Form Tambah Pengajuan Pembiayaan Kerjasama</h4>
                        <button onClick={() => { setShowAddForm(false) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormPengajuanPembiayaan showForm={setShowAddForm} />
                    </div>
                </section>
            </main>
        )
    }


    return (
        <main>
            <h1 className="page-header">Pengajuan Pembiayaan</h1>
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
                    <h4 className="section-header">Pembiayaan Kerjasama</h4>
                    <div style={{ position: "relative" }}>
                        <input
                            type="text"
                            className="section-search"
                            required
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSearchPengajuan(search)}
                            placeholder={`${auth.role === "NASABAH" ? "id pengajuan" : "nama nasabah"}`}
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
                            onClick={() => handleSearchPengajuan(search)}
                        />
                    </div>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>ID</th>
                            <th>Nama</th>
                            <th>Jenis</th>
                            <th>Nominal</th>
                            <th>Durasi</th>
                            <th>Tanggal Pengajuan</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {pengajuan.map((each, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{`PMBKRJ-${each.id_pengajuan.substring(0,3)}`}</td>
                                <td>{each.nama}</td>
                                <td>{each.produk_pengajuan}</td>
                                <td>{`Rp. ${formatMoney(each.nominal_akhir)}`}</td>
                                <td>{each.durasi} Bulan</td>
                                <td>{moment(each.tanggal_pengajuan).format("DD MMMM YYYY")}</td>
                                <td>{each.status_pengajuan}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => { setShowDetail(true); setSelectedData(each) }} className="section-edit-btn">Detail</button>
                                        {auth.role === "NASABAH" ? (
                                        <Delete onClick={() => dispatch(AsyncDeletePengajuanKerjasama(each.id_pengajuan))} cursor={'pointer'} />
                                        ): (null)}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </section>
             {/* Error Modal */}
             <InfoModal show={error.status} setShow={handleModal} value={error.message} type="error" />
            {/* Success Draft*/}
            <InfoModal show={success.status} setShow={handleModal} value={success.message} type="success" />
        </main >
    )
}