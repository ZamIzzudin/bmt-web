import { useLocation } from "react-router-dom";
import { useState } from "react";
// import { useSelector } from "react-redux";

import TambahSimpananSukarela from "../components/Form/TambahSimpananSukarela";
import DetailSimpananSukarela from "../components/Detail/DetailSimpananSukarela";

import { ReactComponent as Search } from "../assets/icons/search.svg";

export default function Simpanan() {
//   const { auth = { status: false, role: null } } = useSelector(
//     (states) => states
//   );

  const location = useLocation().pathname;
  const type = location.split("/")[2];

  const [showAddForm, setShowAddForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  function backButton() {
    setShowDetail(false);
  }

  const data = [
    {
      no: 1,
      id: "NSB-051",
      nama: "Lastri",
      nominal: "Rp.200.000",
      jenis: "Simpanan Kurban",
    },
    {
      no: 2,
      id: "NSB-001",
      nama: "Agus",
      nominal: "Rp.200.000",
      jenis: "Simpanan Pendidikan",
    },
    {
      no: 3,
      id: "NSB-002",
      nama: "Joko",
      nominal: "Rp.200.000",
      jenis: "Simpanan Hari Tua",
    },
    {
      no: 4,
      id: "NSB-001",
      nama: "Agus",
      nominal: "Rp.200.000",
      jenis: "Simpanan Haji",
    },
  ];

  // Form that shown when parameter (true)
  if (showDetail) {
    return <DetailSimpananSukarela backButton={backButton} />;
  }
  if (showAddForm) {
    return (
      <main>
        <h1 className="page-header">Daftar Simpanan</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Simpanan {type}</h4>
            <button
              onClick={() => {
                setShowAddForm(false);
              }}
              className="section-add-btn"
            >
              -
            </button>
          </div>
          <div className="section-body">
            <TambahSimpananSukarela showForm={setShowAddForm} />
          </div>
        </section>
      </main>
    );
  }
  return (
    <main>
      <h1 className="page-header">Simpanan Sukarela</h1>
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
              <th>ID</th>
              <th>Nama</th>
              <th>Produk Simpanan</th>
              <th>Nominal/Bln</th>
              <th className="text-center">Action</th>
            </tr>
            {data.map((each) => (
              <tr>
                <td>{each.no}</td>
                <td>{each.id}</td>
                <td>{each.nama}</td>
                <td>{each.jenis}</td>
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
