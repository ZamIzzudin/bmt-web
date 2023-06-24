import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { AsyncGetSimpananWajib, AsyncGetDetailSimpananWajib } from "../state/simpanan/middleware";

import { HideError } from '../state/error/middleware'
import { HideSuccess } from '../state/success/middleware'
import InfoModal from '../components/InfoModal'

import TambahSimpananWajib from "../components/Form/TambahSimpananWajib";
import DetailSimpananWajib from "../components/Detail/DetailSimpananWajib";
import AnggotaBelomLunas from "../components/Detail/AnggotaBelomLunas";

import { ReactComponent as Search } from "../assets/icons/search.svg";

export default function SimpananWajib() {
  const { auth = {}, simpanan = [], success, error } = useSelector(states => states)
  const dispatch = useDispatch();

  const location = useLocation().pathname;
  const type = location.split("/")[2];

  const [showAddForm, setShowAddForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showNotLunas, setShowNotLunas] = useState(false);

  const [currentData, setCurrentData] = useState(null);

  const [search, setSearch] = useState('');

  function backButton() {
    setShowDetail(false);
    setShowNotLunas(false);
    dispatch(AsyncGetSimpananWajib());
  }

  function formatMoney(amount) {
    return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(amount);
}
  useEffect(() => {
    if(auth.role === "NASABAH"){
      dispatch(AsyncGetDetailSimpananWajib(auth.id));
      return;
    }
      dispatch(AsyncGetSimpananWajib());
  }, [dispatch, auth.role, auth.id])

  function handleSearchSimpanan(query) {
    if (query === null) {
      return;
    }
    try {
      if(auth.role === "NASABAH"){
        dispatch(AsyncGetDetailSimpananWajib(auth.id, query));
        return;
      }
        dispatch(AsyncGetSimpananWajib(query));
    } catch (e) {
      console.log(e);
    }
  }

  // Form that shown when parameter (true)
  if (showDetail) {
    return <DetailSimpananWajib backButton={backButton} id={currentData} />;
  }

  if (showNotLunas) {
    return <AnggotaBelomLunas backButton={backButton} />;
  }

  function handleModal() {
    dispatch(HideError())
    dispatch(HideSuccess())
}

  if (showAddForm) {
    return (
      <main>
        <h1 className="page-header">Daftar Simpanan</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Simpanan {type}</h4>
          </div>
          <div className="section-body">
            <TambahSimpananWajib showForm={setShowAddForm} />
          </div>
        </section>
      </main>
    );
  }
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <h1 className="page-header">Angsuran Simpanan Wajib</h1>
        <div
          style={{
            paddingRight: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "35px",
          }}
        >
          {auth.role !== "NASABAH" && (          
            <button
              className="button-not-lunas"
              onClick={() => setShowNotLunas(true)}
            >
              Lihat Belum Lunas
            </button>
          )}
        </div>
      </div>

      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Simpanan {type}</h4>
          <div style={{ position: "relative" }}>
              <input
                type="text"
                className="section-search"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearchSimpanan(search)}
                placeholder={`${auth.role === "NASABAH" ? "tahun/bulan" : "nama nasabah"}`}
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
                onClick={() => handleSearchSimpanan(search)}
              />
            </div>
        </div>
        <div className="section-body">
          {auth.role !== 'NASABAH' ? (
            <table>
              <tr>
                <th>No.</th>
                <th>ID Anggota</th>
                <th>Nama</th>
                <th>Tahun</th>
                <th>Nominal/Bln</th>
                <th className="text-center">Action</th>
              </tr>
              {simpanan.map((each, index) => (
                
                <tr>
                  <td>{index + 1}</td>
                  <td>{`NSB-${each.id_nasabah.substr(0,3)}`}</td>
                  <td>{each.nama}</td>
                  <td>{each.tahun}</td>
                  <td>{formatMoney(each.nominal)} / 1 Bln</td>
                  <td className="table-cta">
                    <div className="table-cta-container">
                      <button
                        className="section-edit-btn"
                        onClick={() => { setShowDetail(true); setCurrentData(each.id_nasabah) }}
                      >
                        Detail
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          ) : (
            <table>
            <tr>
              <th>No.</th>
              <th>ID Anggota</th>
              <th>Nama</th>
              <th>Bulan</th>
              <th>Tahun</th>
              <th>Teller</th>
              <th>Nominal/Bln</th>
              <th>Status</th>
            </tr>
            {simpanan.map((each, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{`NSB-${each.id_nasabah.substr(0,3)}`}</td>
                <td>{each.nama}</td>
                <td>{each.bulan}</td>
                <td>{each.tahun}</td>
                <td>{each.teller}</td>
                <td>Rp. {formatMoney(each.nominal)} / 1 Bln</td>
                <td>{each.status}</td>
              </tr>
            ))}
          </table>
          )} 
        </div>
      </section>
       {/* Error Modal */}
       <InfoModal show={error.status} setShow={handleModal} value={error.message} type="error" />
       {/* Success Draft*/}
       <InfoModal show={success.status} setShow={handleModal} value={success.message} type="success" />
    </main>
  );
}
