import { useSelector } from "react-redux";
import { useState } from "react";

import SetorModal from "../Modal/SetorModal";
import TarikModal from "../Modal/TarikModal";
import DetailTabunganSimpananSukarela from "./DetailTabunganSimpananSukarela";

import { ReactComponent as BackButton } from "../../assets/icons/arrow_back.svg";

export default function DetailSimpananSukarela({ backButton }) {
  const { auth = { status: false, role: null } } = useSelector(
    (states) => states
  );

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showDetailTabungan, setShowDetailTabungan] = useState(false);

  const detail = {
    id: "SMPSKR-001",
    anggota: "Agus Mulyadi (NSB-001)",
    jenis_simpanan: "Simpanan Haji",
    jumlah_simpanan: "Rp. 4.000.000",
    tanggal_pembuatan: "09/05/2020",
  };

  const transaksi = [
    {
      no: 1,
      tanggal: "12/09/2023",
      nama: "Mawar",
      nominal: "Rp.200.000",
      jenis: "Setor",
    },
    {
      no: 2,
      tanggal: "07/08/2023",
      nama: "Mawar",
      nominal: "Rp.200.000",
      jenis: "Setor",
    },
    {
      no: 3,
      tanggal: "19/07/2023",
      nama: "Mawar",
      nominal: "Rp.200.000",
      jenis: "Tarik",
    },
    {
      no: 4,
      tanggal: "09/07/2023",
      nama: "Mawar",
      nominal: "Rp.200.000",
      jenis: "Setor",
    },
  ];

  if(showDetailTabungan){
    return <DetailTabunganSimpananSukarela backButton={backButton} />
  }

  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="page-header">Daftar Pembiayaan</h1>
        <div style={{ paddingRight: "100px", cursor: "pointer" }}>
          <BackButton onClick={() => backButton()} />
        </div>
      </div>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Detail</h4>
        </div>
        <div className="section-body">
          <table className="detail-table">
            {Object.keys(detail).map((each) => (
              <tr>
                <td>{each.replace("_", " ")}</td>
                <td>{detail[each]}</td>
              </tr>
            ))}
          </table>
          {auth.role === "admin" ? (
            <div className="form-cta gap-3">
              <button
                onClick={() => setShowDetailTabungan(true)}
                className="form-submit-button"
                type="button"
              >
                Cetak Laporan
              </button>
              <button
                onClick={() => setShowModal2(true)}
                className="form-submit-button"
                type="button"
              >
                Tarik
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="form-submit-button"
                type="button"
              >
                Setor
              </button>
            </div>
          ) : (
            null
          )}
        </div>
      </section>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Detail Transaksi</h4>
          <button className="section-add-btn hidden">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Tanggal</th>
              <th>Teller</th>
              <th>Nominal</th>
              <th>Transaski</th>
            </tr>
            {transaksi.map((each) => (
              <tr>
                <td>{each.no}</td>
                <td>{each.tanggal}</td>
                <td>{each.nama}</td>
                <td>{each.nominal}</td>
                <td>{each.jenis}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr style={{ width: "100%" }}>
              <th>Total</th>
              <th style={{ transform: 'translateX(65 %)' }}>Rp. 200.000</th>
            </tr>
          </table>
        </div>
      </section>
      <SetorModal show={showModal} setShow={setShowModal} />
      <TarikModal show={showModal2} setShow={setShowModal2} />
    </main>
  );
}
