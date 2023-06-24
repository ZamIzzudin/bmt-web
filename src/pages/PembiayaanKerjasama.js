import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import DetailPembiayaan from '../components/Detail/DetailPembiayaan'

import { AsyncGetPembiayaanKerjasama } from '../state/pembiayaan/middleware'

import { ReactComponent as Search } from "../assets/icons/search.svg";
import { useEffect } from 'react'
import moment from 'moment'


export default function PembiayaanKerjasama() {
    const { auth = {}, pembiayaan = [] } = useSelector(states => states)
    const dispatch = useDispatch();
    const location = useLocation().pathname
    const type = location.split('/')[2]

    const [showDetail, setShowDetail] = useState(false)
    const [selectedData, setSelectedData] = useState(null)
    const [search, setSearch] = useState("");

    function backButton() {
        setShowDetail(false)
    }

    function formatMoney(amount) {
        return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(amount);
    }

    useEffect(() => {
        if(auth.role.toLowerCase() === 'nasabah'){
            dispatch(AsyncGetPembiayaanKerjasama("nasabah"))
            return;
        }
        dispatch(AsyncGetPembiayaanKerjasama("pengelola"))
    }, [dispatch, auth.role])

    function handleSearchPembiayaan(query) {
        if (query === null) {
          return;
        }
        try {
          if (auth.role === "NASABAH") {
            dispatch(AsyncGetPembiayaanKerjasama("nasabah", query));
          } else {
            dispatch(AsyncGetPembiayaanKerjasama("pengelola", query));
          }
        } catch (e) {
          console.log(e);
        }
      }

    // Form that shown when parameter (true)
    if (showDetail) {
        return (
            <DetailPembiayaan backButton={backButton} currentData={selectedData} />
        )
    }

    return (
        <main>
            <div
                style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: 'column'
                }}
            >
                <h1 className="page-header">Daftar Pembiayaan</h1>
            </div>
            <section className="content-section">
            <div className="section-header-container">
          <h4 className="section-header">Pembiayaan {type}</h4>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              className="section-search"
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearchPembiayaan(search)}
              placeholder="masukan nama"
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
              onClick={() => handleSearchPembiayaan(search)}
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
                            <th>Pelunasan</th>
                            <th>Durasi</th>
                            <th>Min Angsuran</th>
                            <th>Tenggat</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {pembiayaan.map((each, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{`NSB-${each.id_nasabah.substr(0,3)}`}</td>
                                <td>{each.nama}</td>
                                <td>{each.produk_pembiayaan}</td>
                                <td>{`Rp. ${formatMoney(each.nominal)}`}</td>
                                <td>{`Rp. ${formatMoney(each.pelunasan)}`}</td>
                                <td>{each.durasi} Bulan</td>
                                <td>{`Rp. ${formatMoney(each.min_angsuran)}`}</td>
                                <td>{moment.unix(each.tenggat_pelunasan).format("DD/MM/YYYY")}</td>
                                <td>{each.status}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => { setShowDetail(true); setSelectedData(each) }} className="section-edit-btn">Detail</button>
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