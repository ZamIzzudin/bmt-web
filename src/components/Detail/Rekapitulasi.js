import React from "react";

import "../../styles/components/details/Rekapitulasi.css";
import formatRupiah from "../../utils/formatRupiah";
import moment from "moment";

const Rekapitulasi = ({ showForm, dataRekapitulasi, dataPembiayaan }) => {

  return (
    <section className="section-rekapitulasi">
      <div className="user-information">
        <div class="detail">
          <div class="detail-label">Nama</div>
          <div class="detail-value">: {dataPembiayaan.nama}</div>
        </div>
        <div class="detail">
          <div class="detail-label">Jenis Pembiayaan</div>
          <div class="detail-value">: {dataPembiayaan.produk_pembiayaan}</div>
        </div>
        <div class="detail">
          <div class="detail-label">Nominal Pembiayaan</div>
          <div class="detail-value">: {`Rp. ${formatRupiah(dataPembiayaan.nominal)}`}</div>
        </div>
        <div class="detail">
          <div class="detail-label">Nominal Pelunasan</div>
          <div class="detail-value">: {`Rp. ${formatRupiah(dataPembiayaan.pelunasan)}`}</div>
        </div>
        <div class="detail">
          <div class="detail-label">Status</div>
          <div class="detail-value">: {dataPembiayaan.status}</div>
        </div>
      </div>

      <div style={{paddingTop: '20px'}}>
        <table>
            <tr>
              <th>No.</th>
              <th>Tanggal</th>
              <th>Teller</th>
              <th>Nominal</th>
              <th>Transaksi</th>
            </tr>
            {dataRekapitulasi.map((each, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{moment.utc(each.created_at).format("DD MMMM YYYY")}</td>
                <td>{each.teller}</td>
                <td>{formatRupiah(each.nominal)}</td>
                <td>{each.tipe_angsuran}</td>
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
