import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ReactComponent as Search } from "../assets/icons/search.svg";
import moment from 'moment';

import { HideError } from '../state/error/middleware'
import { HideSuccess } from '../state/success/middleware'
import InfoModal from '../components/InfoModal'

import { AsyncGetKas } from '../state/kas/middleware';
import { AsyncGetRekapKasPengelola } from '../state/rekap/middleware';

import TambahKas from '../components/Form/TambahKas'

export default function Kas() {
    const { auth = {}, kas = [], rekap = [], success, error } = useSelector(states => states)
    const dispatch = useDispatch()
    const location = useLocation().pathname
    const type = location.split('/')[2]

    const [showAddForm, setShowAddForm] = useState(false)   
    const [search, setSearch] = useState('');

    function formatMoney(amount) {
        return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(amount);
    }

    function handleModal() {
        dispatch(HideError())
        dispatch(HideSuccess())
    }
    useEffect(() => {
        if(type === 'masuk') {
            dispatch(AsyncGetKas("masuk"))
            return;
        }
        else if (type === 'keluar') {
            dispatch(AsyncGetKas("keluar"))
            return;
        } else if(type === 'rekap') {
            dispatch(AsyncGetKas())
            dispatch(AsyncGetRekapKasPengelola())
            return;
        }
    }, [dispatch, type])

    function handleSearchKas(query) {
        if (query === null) {
          return;
        }
        try {
          if(type === "masuk"){
            dispatch(AsyncGetKas("masuk", query))
            return;
          }
          else if (type === "keluar") {
            dispatch(AsyncGetKas("keluar", query))
            return;
          } else if(type === "rekap"){
            dispatch(AsyncGetKas(null , query))
            dispatch(AsyncGetRekapKasPengelola())
            return;
          }
        } catch (e) {
          console.log(e);
        }
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
                            placeholder='id transaksi'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSearchKas(search)}
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
                            onClick={() => handleSearchKas(search)}
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
                            {kas.map((each, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{`${each.nominal_masuk === null ? 'KRD-' : 'DBT-'}${each.id_transaksi.substr(0,3)}`}</td>
                                    <td>{each.catatan}</td>
                                    <td>{moment.utc(each.tanggal).format('DD/MM/YYYY')}</td>
                                    <td>Rp. {formatMoney(each.nominal_masuk)}</td>
                                    <td>Rp. {formatMoney(each.nominal_keluar)}</td>
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
                            {kas.map((each, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{`DPT-${each.id_transaksi.substr(0, 3)}`}</td>
                                    <td>{each.jenis_transaksi}</td>
                                    <td>Rp. {formatMoney(each.nominal_masuk)}</td>
                                    <td>{moment.utc(each.tanggal).format('DD/MM/YYYY')}</td>
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
                            {kas.map((each, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{`KRD-${each.id_transaksi.substr(0, 3)}`}</td>
                                    <td>{each.jenis_transaksi}</td>
                                    <td>Rp. {formatMoney(each.nominal_keluar)}</td>
                                    <td>{moment.utc(each.tanggal).format('DD/MM/YYYY')}</td>
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
                                <td className="text-center">{`${formatMoney(rekap.kas_masuk)}`} (+)</td>
                                <td className="text-center">{`${formatMoney(rekap.kas_keluar)}`} (-)</td>
                                <td className="text-center">{`${formatMoney(rekap.total_saldo_sementara)}`}</td>
                            </tr>
                        </table>
                    </div>
                </section>
            ) : null}
            {/* Error Modal */}
            <InfoModal show={error.status} setShow={handleModal} value={error.message} type="error" />
            {/* Success Draft*/}
            <InfoModal show={success.status} setShow={handleModal} value={success.message} type="success" />
        </main>
    )
}