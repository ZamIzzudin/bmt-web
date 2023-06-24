import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TambahKeanggotaan from "../components/Form/TambahKeanggotaan";
import EditProfileNasabah from "../components/Form/EditAnggota";

import { HideError } from "../state/error/middleware";
import { HideSuccess } from "../state/success/middleware";

import { AsyncGetUsers, AsyncDeleteUser } from "../state/users/middleware";

import InfoModal from "../components/InfoModal";

import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Delete } from "../assets/icons/Delete.svg";

export default function Keanggotaan() {
  const {
    auth = {},
    users = {},
    success,
    error,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const location = useLocation().pathname;
  const type = location.split("/")[2];

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [search, setSearch] = useState("");

  const [selectedData, setSelectedData] = useState(null);

  function handleModal() {
    dispatch(HideError());
    dispatch(HideSuccess());
  }

  useEffect(() => {
    dispatch(AsyncGetUsers("nasabah"));
  }, [dispatch]);

  function handleSearch(query) {
    if (query === null) {
      return;
    }
    try {
      dispatch(AsyncGetUsers("nasabah", query));
    } catch (e) {
      console.log(e);
    }
  }

  if (showAddForm) {
    return (
      <main>
        <h1 className="page-header">Tambah Nasabah</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Form Tambah Nasabah</h4>
            <button
              onClick={() => {
                setShowAddForm(false);
              }}
              className="section-add-btn"
            >
              -
            </button>
          </div>
          <div className="section-body">
            <TambahKeanggotaan showForm={setShowAddForm} />
          </div>
        </section>
      </main>
    );
  }

  if (showEditForm) {
    return (
      <EditProfileNasabah
        backButton={() => setShowEditForm(false)}
        currentData={selectedData}
      />
    );
  }
  if (
    auth.role === "ADMIN_MASTER" ||
    auth.role === "ADMIN" ||
    auth.role === "MANAGER" ||
    auth.role === "OFFICER"
  ) {
    return (
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="page-header">Daftar Nasabah</h1>
          {(auth.role === "ADMIN_MASTER" || auth.role === "ADMIN") && (
            <div style={{ paddingRight: "50px" }}>
              <button
                onClick={() => setShowAddForm(true)}
                className={`section-add-btn ${
                  type === "rekap" ? "hidden" : null
                }`}
              >
                +
              </button>
            </div>
          )}
        </div>
        <section className="content-section">
          <div
            className="section-header-container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h4 className="section-header">List Akun Nasabah</h4>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                className="section-search"
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch(search)}
                placeholder="masukan nama"
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
                onClick={() => handleSearch(search)}
              />
            </div>
          </div>
          <div className="section-body">
            <table>
              <tr>
                <th>No.</th>
                <th>ID Nasabah</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Email</th>
                <th className="text-center">Action</th>
              </tr>
              {users?.nasabah?.map((each, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{`NSB-${each.id_user.substring(0, 3)}`}</td>
                  <td>{each.nama}</td>
                  <td>{each.jenis_kelamin}</td>
                  <td>{each.email}</td>
                  <td className="table-cta">
                    {auth.role === "MANAGER" || auth.role === "OFFICER" ? (
                      <div className="table-cta-container">
                        <button
                          className="section-edit-btn"
                          onClick={() => {
                            setShowEditForm(true);
                            setSelectedData(each);
                          }}
                        >
                          Detail
                        </button>
                      </div>
                    ) : (
                      <div className="table-cta-container">
                        <button
                          className="section-edit-btn"
                          onClick={() => {
                            setShowEditForm(true);
                            setSelectedData(each);
                          }}
                        >
                          Edit
                        </button>
                        <Delete
                          onClick={() =>
                            dispatch(AsyncDeleteUser(each.id_user, "nasabah"))
                          }
                          cursor={"pointer"}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section>
        {/* Error Modal */}
        <InfoModal
          show={error.status}
          setShow={handleModal}
          value={error.message}
          type="error"
        />
        {/* Success Draft*/}
        <InfoModal
          show={success.status}
          setShow={handleModal}
          value={success.message}
          type="success"
        />
      </main>
    );
  }
  return <EditProfileNasabah />;
}
