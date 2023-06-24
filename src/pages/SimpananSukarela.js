import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AsyncGetSimpananSukarela } from "../state/simpanan/middleware";

import DetailSimpananSukarela from "../components/Detail/DetailSimpananSukarela";

import { ReactComponent as Search } from "../assets/icons/search.svg";

export default function Simpanan() {
  const { auth = {}, simpanan = [] } = useSelector(states => states);
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const type = location.split("/")[2];

  const [showDetail, setShowDetail] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const [search, setSearch] = useState("");

  function backButton() {
    setShowDetail(false);
  }

  function formatMoney(amount) {
    return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(amount);
}

  useEffect(() => {
    if(auth.role === "NASABAH"){
      dispatch(AsyncGetSimpananSukarela('nasabah'));
      return;
    }
    dispatch(AsyncGetSimpananSukarela('pengelola'));
  }, [dispatch, auth.role])

  function handleSearchSimpanan(query) {
    if (query === null) {
      return;
    }
    try {
      if(auth.role === "NASABAH"){
        dispatch(AsyncGetSimpananSukarela('nasabah', query));
        return;
      }
      dispatch(AsyncGetSimpananSukarela('pengelola', query));
    } catch (e) {
      console.log(e);
    }
  }

  // Form that shown when parameter (true)
  if (showDetail) {
   return <DetailSimpananSukarela backButton={backButton} currentData={selectedData} />;
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
              placeholder={auth.role === "NASABAH" ? "produk simpanan" : "nama nasabah"}
              style={{
                width: "100%",
                height: "24px",
                padding: "15px 25px",
                borderRadius: "18px",
                fontSize: "16px",
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearchSimpanan(search)}
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
          <table>
            <tr>
              <th>No.</th>
              <th>ID</th>
              <th>Nama</th>
              <th>Produk Simpanan</th>
              <th>Nominal</th>
              <th className="text-center">Action</th>
            </tr>
            {simpanan.map((each, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{`NSB-${each.id_nasabah.substr(0,3)}`}</td>
                <td>{each.nama}</td>
                <td>{each.produk_simpanan}</td>
                <td>Rp. {formatMoney(each.nominal)}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button
                      className="section-edit-btn"
                      onClick={() => { setShowDetail(true); setSelectedData(each) }}
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
