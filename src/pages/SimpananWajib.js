import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { useSelector } from 'react-redux'

import TambahSimpananWajib from "../components/Form/TambahSimpananWajib";
import DetailSimpananWajib from "../components/Detail/DetailSimpananWajib";
import AnggotaBelomLunas from "../components/Detail/AnggotaBelomLunas";

import { ReactComponent as Search } from "../assets/icons/search.svg";

export default function SimpananWajib() {
  // const { auth = { status: false, role: null } } = useSelector(states => states)

  const location = useLocation().pathname;
  const type = location.split("/")[2];

  const [showAddForm, setShowAddForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showNotLunas, setShowNotLunas] = useState(false);

  function backButton() {
    setShowDetail(false);
    setShowNotLunas(false);
  }
  const data = [
    {
      no: 1,
      id: "NSB-001",
      nama: "Agus",
      bulan: "Juni",
      tahun: "2023",
      status: "Lunas",
      nominal: "Rp.200.000",
    },
    {
      no: 2,
      id: "NSB-002",
      nama: "Joko",
      bulan: "Juni",
      tahun: "2023",
      status: "Belum Lunas",
      nominal: "Rp.200.000",
    },
    {
      no: 3,
      id: "NSB-003",
      nama: "Lastri",
      bulan: "Juni",
      tahun: "2023",
      status: "Lunas",
      nominal: "Rp.200.000",
    },
    {
      no: 4,
      id: "NSB-004",
      nama: "Supriadi",
      bulan: "Juni",
      tahun: "2023",
      status: "Belum Lunas",
      nominal: "Rp.200.000",
    },
  ];

  // Form that shown when parameter (true)
  if (showDetail) {
    return <DetailSimpananWajib backButton={backButton} />;
  }

  if (showNotLunas) {
    return <AnggotaBelomLunas backButton={backButton} />;
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
          <button
            className="button-not-lunas"
            onClick={() => setShowNotLunas(true)}
          >
            Lihat Belum Lunas
          </button>
          {/* <button
                    onClick={() => setShowAddForm(true)}
                    className={`section-add-btn ${type === "rekap" ? "hidden" : null}`}
                >+</button> */}
        </div>
      </div>
      {/* <div>
                {auth.role !== 'user' ? (
                    <button className="section-edit-btn" >Cetak</button>
                ) : null}
            </div> */}
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Simpanan {type}</h4>
          <div style={{ position: "relative" }}>
              <input
                type="text"
                className="section-search"
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
              />
            </div>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>ID Anggota</th>
              <th>Nama</th>
              <th>Tahun</th>
              <th>Nominal/Bln</th>
              <th className="text-center">Action</th>
            </tr>
            {data.map((each) => (
              <tr>
                <td>{each.no}</td>
                <td>{each.id}</td>
                <td>{each.nama}</td>
                <td>{each.tahun}</td>
                <td>{each.nominal}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button
                      className="section-edit-btn"
                      onClick={() => setShowDetail(true)}
                    >
                      Detail
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </main>
  );
}
