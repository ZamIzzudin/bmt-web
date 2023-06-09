import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";

import { ReactComponent as Search } from "../assets/icons/search.svg";
import { useEffect, useState } from "react";
import { AsyncGetSimpananPokok } from "../state/simpanan/middleware";

export default function Simpanan() {
  const dispatch = useDispatch();
  const { simpanan = [] } = useSelector((states) => states);
  const location = useLocation().pathname;
  const type = location.split("/")[2];

  const [search, setSearch] = useState("");

  function formatMoney(amount) {
    return new Intl.NumberFormat('id-ID').format(amount);
}

  useEffect(() => {
    dispatch(AsyncGetSimpananPokok());
  }, [dispatch])

  function handleSearchSimpanan(query) {
    if (query === null) {
      return;
    }
    try {
        dispatch(AsyncGetSimpananPokok(query));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main>
      <h1 className="page-header">Simpanan Pokok</h1>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Daftar Simpanan {type}</h4>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              className="section-search"
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearchSimpanan(search)}
              placeholder="nama nasabah"
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
              onClick={() => handleSearchSimpanan(search)}
            />
          </div>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>ID Anggota</th>
              <th>Nama</th>
              <th>Nominal</th>
              <th>Tanggal</th>
            </tr>
            {simpanan.map((each, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{`NSB-${each.id_nasabah.substring(0,3)}`}</td>
                <td>{each.nama}</td>
            <td>{`Rp. ${formatMoney(each.nominal)}`}</td>
                <td>{moment.utc(each.created_at).format("DD MMMM YYYY")}</td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </main>
  );
}
