import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import SetorModal from "../Modal/SetorModal";
import Rekapitulasi from "./Rekapitulasi";

import { HideError } from '../../state/error/middleware'
import { HideSuccess } from '../../state/success/middleware'
import InfoModal from '../../components/InfoModal'
import formatRupiah from "../../utils/formatRupiah";

import { AsyncGetTransaksiKerjasama } from "../../state/transaksi/middleware";

import { ReactComponent as BackButton } from "../../assets/icons/arrow_back.svg";
import moment from "moment";

export default function DetailPembiayaan({ backButton, currentData }) {
  const { auth = {}, transaksi = [], error, success } = useSelector((states) => states);
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const [showModal, setShowModal] = useState(false);
  const [showRekapitulasi, setShowRekapitulasi] = useState(false);

function handleModal() {
  dispatch(HideError())
  dispatch(HideSuccess())
}

useEffect(() => {
  dispatch(AsyncGetTransaksiKerjasama(currentData.id_pembiayaan));
}, [dispatch, currentData.id_pembiayaan]);

  if (showRekapitulasi) {
    return (
        <main>
            <h1 className="page-header">Rekapitulasi Pembiayaan</h1>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Form Rekapitulasi</h4>
                    <button onClick={() => { setShowRekapitulasi(false) }} className="section-add-btn">-</button>
                </div>
                <div className="section-body">
                    <Rekapitulasi showForm={setShowRekapitulasi} dataRekapitulasi={transaksi} dataPembiayaan={currentData} />
                </div>
            </section>
        </main>
    )
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
        {location.includes("/pembiayaan/kerjasama") ? (
          <h1 className="page-header">Daftar Pembiayaan Kerjasama</h1>
        ) : (
          <h1 className="page-header">Daftar Pembiayaan Jual Beli</h1>
        )}
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
              <tr>
                <td>ID Transaksi</td>
                <td>{`PMBKRJ-${currentData.id_pembiayaan.substr(0,3)}`}</td>
              </tr>
              <tr>
                <td>Nasabah</td>
                <td>{`${currentData.nama} (NSB-${currentData.id_nasabah.substr(0,3)})`}</td>
              </tr>
              <tr>
                <td>Jenis Pembiayaan</td>
                <td>{currentData.produk_pembiayaan}</td>
              </tr>
              <tr>
                <td>Nominal Pembiayaan</td>
                <td>{`Rp. ${formatRupiah(currentData.nominal)}`}</td>
              </tr>
              <tr>
                <td>Nominal Pelunasan</td>
                <td>{`Rp. ${formatRupiah(currentData.pelunasan)}`}</td>
              </tr>
              <tr>
                <td>Angsuran Bulanan</td>
                <td>{`Rp. ${formatRupiah(currentData.min_angsuran)}`}</td>
              </tr>
              <tr>
                <td>Durasi Pembiayaan</td>
                <td>{currentData.durasi} Bulan</td>
              </tr>
              <tr>
                <td>Tanggal Pembuatan</td>
                <td>{moment.utc(currentData.created_at).format("DD MMMM YYYY")}</td>
              </tr>
              <tr>
                <td>Tenggat Pembayaran</td>
                <td>{moment.unix(currentData.tenggat_pelunasan).format("DD MMMM YYYY")}</td>
              </tr>
              <tr>
                <td>Sisa Angsuran</td>
                <td>{`Rp. ${formatRupiah(currentData.sisa_angsuran)}`}</td>
              </tr>
              <tr>
                <td>Status Pembiayaan</td>
                <td>{currentData.status}</td>
              </tr>
          </table>
          {auth.role === "ADMIN" || auth.role === "ADMIN_MASTER" ? (
            <div className="form-cta gap-3">
              {location.includes("/pembiayaan/kerjasama") ? (
                <>
                </>
              ) : (
                <></>
              )}
              <button
                onClick={() => setShowModal(true)}
                className="form-submit-button"
                type="button"
              >
                Setor
              </button>
            </div>
          ) : auth.role === "MANAGER" ? (
            <></>
          ) : null}
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
              <th>Transaksi</th>
            </tr>
            {transaksi.map((each, index) => (
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
      </section>
      <SetorModal show={showModal} setShow={setShowModal} data={currentData}/>

       {/* Error Modal */}
       <InfoModal show={error.status} setShow={handleModal} value={error.message} type="error" />
      {/* Success Draft*/}
      <InfoModal show={success.status} setShow={handleModal} value={success.message} type="success" />
    </main>
  );
}
