import React from "react";

import "../../styles/components/details/Rekapitulasi.css";

const data = [
        {
            no: 1,
            nama: "Agus",
            nominal: "Rp.200.000",
            angsuran: "Rp.68.333",
            tanggal: "09/05/2022",
            sisa_angsuran: "Rp.205.000",
            status: "Belum Lunas",
            transaksi: "Setor"
        },
        {
            no: 2,
            nama: "Agus",
            jenis: "Mudharabah",
            nominal: "Rp.200.000",
            tanggal: "09/05/2022",
            sisa_angsuran: "Rp.205.000",
            status: "Belum Lunas",
            transaksi: "Setor"
        },
        {
            no: 3,
            nama: "Agus",
            nominal: "Rp.200.000",
            angsuran: "Rp.68.333",
            tanggal: "09/05/2022",
            sisa_angsuran: "Rp.205.000",
            status: "Lunas",
            transaksi: "Setor"
        }
    ]

const Rekapitulasi = () => {
  return (
    <section className="section-rekapitulasi">
      <div className="user-information">
        <div class="detail">
          <div class="detail-label">Nama</div>
          <div class="detail-value">: Amir Kholiluddin</div>
        </div>
        <div class="detail">
          <div class="detail-label">Jenis Pembiayaan</div>
          <div class="detail-value">: Mudharabah</div>
        </div>
        <div class="detail">
          <div class="detail-label">Nominal Pembiayaan</div>
          <div class="detail-value">: Rp 800.000</div>
        </div>
        <div class="detail">
          <div class="detail-label">Nominal Pelunasan</div>
          <div class="detail-value">: Rp 805.000</div>
        </div>
        <div class="detail">
          <div class="detail-label">Status</div>
          <div class="detail-value">: Lunas</div>
        </div>
      </div>

      <div style={{paddingTop: '20px'}}>
        <table>
          <tr>
            <th>No.</th>
            <th>Tanggal</th>
            <th>Teller</th>
            <th>Nominal</th>
            <th>Sisa Angsuran</th>
            <th>Transaksi</th>
          </tr>
          {data.map((each) => (
            <tr>
              <td>{each.no}</td>
              <td>{each.tanggal}</td>
              <td>{each.nominal}</td>
              <td>{each.nominal}</td>
              <td>{each.sisa_angsuran}</td>
              <td>{each.transaksi}</td>
            </tr>
          ))}
        </table>
      </div>

      <div className="section-footer">
        <button className="section-unduh-btn">Unduh Laporan</button>

        <div className="section-ttd">
            <p>Ciputat, 08 Agustus 2023</p>    
            <div className="ttd-admin">
             <span>Wahyu Sentosa</span>   
             <p>Admin BMT</p>
            </div>    
        </div>
      </div>
    </section>
  );
};

export default Rekapitulasi;
