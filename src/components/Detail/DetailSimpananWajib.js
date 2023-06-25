// import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import formatRupiah from "../../utils/formatRupiah";

import { AsyncGetDetailSimpananWajib, AsyncSetorSimpananWajib } from "../../state/simpanan/middleware";

import { ReactComponent as BackButton } from "../../assets/icons/arrow_back.svg";

export default function DetailSimpananWajib({ backButton, id }) {
  const { simpanan = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AsyncGetDetailSimpananWajib(id));
  }, [dispatch, id])

  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="page-header">Detail Simpanan Wajib</h1>
        <div style={{ paddingRight: "100px", cursor: "pointer" }}>
          <BackButton onClick={() => backButton()} />
        </div>
      </div>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Detail Transaksi</h4>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Bulan</th>
              <th>Tahun</th>
              <th>Teller</th>
              <th>Nominal</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {simpanan.map((each, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{each.nama}</td>
                <td>{each.bulan}</td>
                <td>{each.tahun}</td>
                <td>{each.id_teller}</td>
                <td>Rp. {formatRupiah(each.nominal)}</td>
                <td>{each.status}</td>
                {each.status === "BELUM LUNAS" && (
                  <td>
                    <button
                      onClick={() => { dispatch(AsyncSetorSimpananWajib(each.id_simpanan)); backButton();}}
                      type="button"
                      style={{
                        padding: "10px 15px",
                        backgroundColor: "#F2994A",
                        color: "#fff",
                        borderRadius: "12px",
                        border: "none",
                        transform: 'translateX(-10px)'
                      }}
                    >
                      Setor
                    </button>
                  </td>
            )}
              </tr>
            ))}
          </table>
        </div>
      </section>
    </main>
  );
}
