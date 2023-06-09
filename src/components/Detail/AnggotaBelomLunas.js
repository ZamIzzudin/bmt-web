import { useState } from "react";

import SetorModal from "../Modal/SetorModal";
import { Form, Row } from "react-bootstrap";
import "../../styles/components/FormLayout.css";

import { ReactComponent as BackButton } from "../../assets/icons/arrow_back.svg";

export default function AnggotaBelomLunas({ backButton }) {
  const [showModal, setShowModal] = useState(false);

  const transaksi = [
    {
      no: 1,
      bulan: "Maret",
      tahun: "2023",
      nama: "Mawar",
      nominal: "Rp.200.000",
      status: "Lunas",
    },
    {
      no: 2,
      bulan: "April",
      tahun: "2023",
      nama: "Mawar",
      nominal: "Rp.200.000",
      status: "Lunas",
    },
    {
      no: 3,
      bulan: "Mei",
      tahun: "2023",
      nama: "Mawar",
      nominal: "Rp.200.000",
      status: "Lunas",
    },
    {
      no: 4,
      bulan: "Juni",
      tahun: "2023",
      nama: "Mawar",
      nominal: "Rp.200.000",
      status: "Belum Lunas",
    },
  ];

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
                <Form.Select>
                  <option></option>
                  <option value={"Laki-laki"}>Januari</option>
                  <option value={"Laki-laki"}>Februari</option>
                  <option value={"Laki-laki"}>Maret</option>
                  <option value={"Laki-laki"}>April</option>
                  <option value={"Laki-laki"}>Mei</option>
                  <option value={"Laki-laki"}>Juni</option>
                  <option value={"Laki-laki"}>Juli</option>
                  <option value={"Laki-laki"}>Agustus</option>
                  <option value={"Laki-laki"}>September</option>
                  <option value={"Laki-laki"}>October</option>
                  <option value={"Laki-laki"}>November</option>
                  <option value={"Laki-laki"}>Desember</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group>
                <Form.Label>
                  Periode Tahun<span className="required">*</span>
                </Form.Label>
                <Form.Select>
                  <option></option>
                  <option value={"Laki-laki"}>2023</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
          <div className="form-cta gap-3">
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
            {transaksi.map((each) => (
              <tr>
                <td>{each.no}</td>
                <td>{each.nama}</td>
                <td>{each.bulan}</td>
                <td>{each.tahun}</td>
                <td>{each.nama}</td>
                <td>{each.nominal}</td>
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
          {/* {auth.role === 'admin' || auth.role === 'officer' ? (
                        <div className="form-cta gap-3">
                            <button onClick={() => backButton()} className="form-submit-button" type="button">Kembali</button>
                            <button onClick={() => setShowModal(true)} className="form-submit-button" type="button">Setor</button>
                        </div>
                    ) : (
                        <div className="form-cta gap-3">
                            <button onClick={() => backButton()} className="form-submit-button" type="button">Kembali</button>
                        </div>
        )} */}
        </div>
      </section>
      <SetorModal show={showModal} setShow={setShowModal} />
    </main>
  );
}
