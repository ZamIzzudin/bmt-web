import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import moment from "moment";

import SetorModal from "../Modal/SetorModal";
import TarikModal from "../Modal/TarikModal";
// import DetailTabunganSimpananSukarela from "./DetailTabunganSimpananSukarela";

import { HideError } from '../../state/error/middleware'
import { HideSuccess } from '../../state/success/middleware'
import InfoModal from '../../components/InfoModal'

import { AsyncGetTransaksiSukarela } from "../../state/transaksi/middleware";

import { ReactComponent as BackButton } from "../../assets/icons/arrow_back.svg";

export default function DetailSimpananSukarela({ backButton, currentData }) {
  const { auth = {}, transaksi = [], error, success } = useSelector((states) => states);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  // const [showDetailTabungan, setShowDetailTabungan] = useState(false);

  function formatMoney(amount) {
    return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(amount);
}

function handleModal() {
  dispatch(HideError())
  dispatch(HideSuccess())
}

useEffect(() => {
  dispatch(AsyncGetTransaksiSukarela(currentData.id_simpanan));
}, [dispatch, currentData.id_simpanan]);


  // if(showDetailTabungan){
  //   return <DetailTabunganSimpananSukarela backButton={backButton} />
  // }

  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="page-header">Daftar Simpanan Sukarela</h1>
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
                <td>ID Simpanan</td>
                <td>{`SMPSKR-${currentData.id_simpanan.substr(0,3)}`}</td>
              </tr>
              <tr>
                <td>Nasabah</td>
                <td>{`NSB-${currentData.id_nasabah.substr(0,3)}`}</td>
              </tr>
              <tr>
                <td>Jenis Simpanan</td>
                <td>{currentData.produk_simpanan}</td>
              </tr>
              <tr>
                <td>Jumlah Simpanan</td>
                <td>{formatMoney(currentData.nominal)}</td>
              </tr>
              <tr>
                <td>Tanggal Pembuatan</td>
                <td>{moment.utc(currentData.created_at).format("DD MMMM YYYY")}</td>
              </tr>
          </table>
          {(auth.role === "ADMIN" || auth.role === 'ADMIN_MASTER') ? (
            <div className="form-cta gap-3">
              {/* <button
                onClick={() => setShowDetailTabungan(true)}
                className="form-submit-button"
                type="button"
              >
                Cetak Laporan
              </button> */}
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
            {transaksi.map((each, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{moment.utc(each.created_at).format("DD MMMM YYYY")}</td>
                <td>{each.teller}</td>
                <td>{formatMoney(each.nominal)}</td>
                <td>{each.tipe_angsuran}</td>
              </tr>
            ))}
          </table>
          <table>
            <tr style={{ width: "100%" }}>
              <th>Total</th>
              <th style={{ transform: 'translateX(65%)' }}>Rp. {formatMoney(currentData.nominal)}</th>
            </tr>
          </table>
        </div>
      </section>
      <SetorModal show={showModal} setShow={setShowModal} data={currentData}/>
      <TarikModal show={showModal2} setShow={setShowModal2} data={currentData} />

      {/* Error Modal */}
      <InfoModal show={error.status} setShow={handleModal} value={error.message} type="error" />
      {/* Success Draft*/}
      <InfoModal show={success.status} setShow={handleModal} value={success.message} type="success" />
    </main>
  );
}
