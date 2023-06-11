// import { useSelector } from "react-redux";
// import { useState } from "react";

import { ReactComponent as BackButton } from "../../assets/icons/arrow_back.svg";

export default function DetailTabunganSimpananSukarela({ backButton }) {
//   const { auth = { status: false, role: null } } = useSelector(
//     (states) => states
//   );

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

  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: '55px'
        }}
      >
        <div style={{ paddingRight: "100px", cursor: "pointer" }}>
          <BackButton onClick={() => backButton()} />
        </div>
      </div>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Detail Tabungan</h4>
          <button className="section-add-btn hidden">+</button>
        </div>
        <div className="section-body">
          <table>
                <tr>
                   <th>Nama</th>
                   <th style={{ transform: 'translateX(50%)' }}>Ahmad Waluyo</th>
                </tr>
                <tr>
                   <th>No Rek</th>
                   <th style={{ transform: 'translateX(50%)' }}>499-1000-3333</th>
                </tr>
                <tr style={{ backgroundColor: "#fff"}}>
                    <th>Jenis Simpanan</th>
                    <th style={{ transform: 'translateX(50%)' }}>Simpanan Kurban</th>
                </tr>
          </table>

          <table>
            <tr>
              <th>No.</th>
              <th>Tanggal Setor/Tarik</th>
              <th>Status</th>
              <th>Setor</th>
              <th>Tarik</th>
            </tr>
            {transaksi.map((each) => (
              <tr>
                <td>{each.no}</td>
                <td>{each.tanggal}</td>
                <td>{each.jenis}</td>
                <td>{each.nominal}</td>
                <td>{each.nominal}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr style={{ width: "100%" }}>
              <th>Total</th>
              <th style={{ transform: 'translateX(65%)' }}>Rp. 200.000</th>
            </tr>
          </table>
        </div>
      </section>
    </main>
  );
}
