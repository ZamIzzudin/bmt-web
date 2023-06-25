import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SetorModal from "../Modal/SetorModal";
import { Form, Row } from "react-bootstrap";
import "../../styles/components/FormLayout.css";

import { ReactComponent as BackButton } from "../../assets/icons/arrow_back.svg";
import { AsyncGetNotLunas } from "../../state/simpanan/middleware";

export default function AnggotaBelomLunas({ backButton }) {
  const { simpanan = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  const [bulan, setBulan] = useState("Januari");
  const [tahun, setTahun] = useState("2023");
  const [showModal, setShowModal] = useState(false);

  function formatMoney(amount) {
    return new Intl.NumberFormat('id-ID').format(amount);
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
        <h1 className="page-header">Anggota yang belum lunas</h1>
        <div style={{ paddingRight: "100px", cursor: "pointer" }}>
          <BackButton onClick={() => backButton()} />
        </div>
      </div>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Cek yang belum lunas</h4>
        </div>
        <div className="section-body">
          <Form>
            <Row>
              <Form.Group>
                <Form.Label>
                  Periode Bulan<span className="required">*</span>
                </Form.Label>
                 <Form.Select required value={bulan} onChange={(e) => setBulan(e.target.value)}>
                  <option selected value={"Januari"}>Januari</option>
                  <option value={"Februari"}>Februari</option>
                  <option value={"Maret"}>Maret</option>
                  <option value={"April"}>April</option>
                  <option value={"Mei"}>Mei</option>
                  <option value={"Juni"}>Juni</option>
                  <option value={"Juli"}>Juli</option>
                  <option value={"Agustus"}>Agustus</option>
                  <option value={"September"}>September</option>
                  <option value={"Oktober"}>Oktober</option>
                  <option value={"November"}>November</option>
                  <option value={"Desember"}>Desember</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
                <Form.Label>
                  Periode Tahun<span className="required">*</span>
                </Form.Label>
              <Form.Select required value={tahun} onChange={(e) => setTahun(e.target.value)}>
                  <option value={"2023"}>2023</option>
                  <option value={"2024"}>2024</option>
                  <option value={"2025"}>2025</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
             <div className="form-cta gap-3" onClick={() => dispatch(AsyncGetNotLunas(bulan, tahun))}>
            <button
              className="form-submit-button"
              type="button"
            >
              Cek
            </button>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Daftar yang belum lunas</h4>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Nama</th>
              <th>Bulan</th>
              <th>Tahun</th>
              <th>Teller</th>
              <th>Nominal</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {simpanan.filter((each) => each.status === "BELUM LUNAS").map((each, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{each.nama}</td>
                <td>{each.bulan}</td>
                <td>{each.tahun}</td>
                <td>{each.teller}</td>
                <td>{`Rp. ${formatMoney(each.nominal)}`}</td>
                <td>{each.status}</td>
                <td>
                  <button
                    onClick={() => setShowModal(true)}
                    type="button"
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "#F2994A",
                      color: "#fff",
                      borderRadius: "12px",
                      border: "none",
                      transform: "translateX(-10px)",
                    }}
                  >
                    Setor
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
      <SetorModal show={showModal} setShow={setShowModal} />
    </main>
  );
}
