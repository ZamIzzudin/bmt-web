import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AsyncGetUsers, AsyncDeleteUser } from "../state/users/middleware";

import { HideError } from "../state/error/middleware";
import { HideSuccess } from "../state/success/middleware";

import TambahPengelola from "../components/Form/TambahPengelola";
import EditPengelola from "../components/Form/EditPengelola";
import InfoModal from "../components/InfoModal";

import { ReactComponent as Delete } from "../assets/icons/Delete.svg";

export default function KeanggotaanAdmin(){
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
  const [selectedData, setSelectedData] = useState(null);


  function handleModal() {
    dispatch(HideError());
    dispatch(HideSuccess());
  }

  useEffect(() => {
    dispatch(AsyncGetUsers("pengelola"));
  }, [dispatch]);


  if (showAddForm) {
    return <TambahPengelola backButton={() => setShowAddForm(false)} />;
  }

  if (showEditForm) {
    return (
      <EditPengelola
        backButton={() => setShowEditForm(false)}
        currentData={selectedData}
      />
    );
  }
  if (auth.role === "ADMIN_MASTER") {
    return (
      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="page-header">Daftar Admin</h1>
          {auth.role === "ADMIN_MASTER" && (
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
            <h4 className="section-header">List Akun Admin Master</h4>
            <div style={{ position: "relative" }}>
            </div>
          </div>
          <div className="section-body">
            <table>
              <tr>
                <th>No.</th>
                <th>ID Admin Master</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Email</th>
                <th className="text-center">Action</th>
              </tr>
              {users?.admin_master?.map((each, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{`MSTR-${each.id_user.substring(0, 3)}`}</td>
                  <td>{each.nama}</td>
                  <td>
                    {each.jenis_kelamin.charAt(0).toUpperCase() +
                      each.jenis_kelamin.slice(1)}
                  </td>
                  <td>{each.email}</td>
                  <td className="table-cta">
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
                          dispatch(AsyncDeleteUser(each.id_user, "pengelola"))
                        }
                        cursor={"pointer"}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section>

        {/* Admin */}
        <section className="content-section">
          <div
            className="section-header-container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h4 className="section-header">List Akun Admin</h4>
            <div style={{ position: "relative" }}>
            </div>
          </div>
          <div className="section-body">
            <table>
              <tr>
                <th>No.</th>
                <th>ID Admin</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Email</th>
                <th className="text-center">Action</th>
              </tr>
              {users?.admin?.map((each, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{`ADM-${each.id_user.substring(0, 3)}`}</td>
                  <td>{each.nama}</td>
                  <td>
                    {each.jenis_kelamin.charAt(0).toUpperCase() +
                      each.jenis_kelamin.slice(1)}
                  </td>
                  <td>{each.email}</td>
                  <td className="table-cta">
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
                          dispatch(AsyncDeleteUser(each.id_user, "pengelola"))
                        }
                        cursor={"pointer"}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section>

        {/* Manager */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="page-header">Daftar Manager</h1>
        </div>
        <section className="content-section">
          <div
            className="section-header-container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h4 className="section-header">List Akun Manager</h4>
            <div style={{ position: "relative" }}>
            </div>
          </div>
          <div className="section-body">
            <table>
              <tr>
                <th>No.</th>
                <th>ID Manager</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Email</th>
                <th className="text-center">Action</th>
              </tr>
              {users?.manager?.map((each, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{`MNG-${each.id_user.substring(0, 3)}`}</td>
                  <td>{each.nama}</td>
                  <td>{each.jenis_kelamin}</td>
                  <td>{each.email}</td>
                  <td className="table-cta">
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
                          dispatch(AsyncDeleteUser(each.id_user, "pengelola"))
                        }
                        cursor={"pointer"}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section>

        {/* ACCOUNT OFFICER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="page-header">Daftar Account Officer</h1>
        </div>
        <section className="content-section">
          <div
            className="section-header-container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h4 className="section-header">List Akun Officer</h4>
            <div style={{ position: "relative" }}>
            </div>
          </div>
          <div className="section-body">
            <table>
              <tr>
                <th>No.</th>
                <th>ID Officer</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Email</th>
                <th className="text-center">Action</th>
              </tr>
              {users?.officer?.map((each, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{`OFC-${each.id_user.substring(0, 3)}`}</td>
                  <td>{each.nama}</td>
                  <td>{each.jenis_kelamin}</td>
                  <td>{each.email}</td>
                  <td className="table-cta">
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
                          dispatch(AsyncDeleteUser(each.id_user, "pengelola"))
                        }
                        cursor={"pointer"}
                      />
                    </div>
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
}
