import axios from "axios";

const api = (() => {
  const baseUrl = "https://be-bmt.vercel.app";

  axios.defaults.withCredentials = true;

  // Auth
  async function Login(email, password) {
    const url = baseUrl + "/login";

    const data = {
      email,
      password,
    };

    const response = await axios.post(url, data);

    return response;
  }

  async function Refresh() {
    const url = baseUrl + "/refresh";

    try {
      const response = await axios.get(url, {
        credentials: "include",
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async function Logout() {
    const url = baseUrl + "/logout";

    const response = await axios.get(url);

    return response;
  }

  //Keanggotaan

  async function getAnggota(id) {
    const url = baseUrl + `/anggota/${id ? id : ""}`;

    const response = await axios.get(url);
    return response.data.data;
  }
  async function createAnggota(data) {
    const url = baseUrl + "/anggota";
    const data_create = {
      username: data.username,
      password_anggota: data.password_anggota,
      nama_anggota: data.nama_anggota,
      nik: data.nik,
      jenis_kelamin: data.jenis_kelamin,
      no_hp_anggota: data.no_hp_anggota,
      alamat_anggota: data.alamat_anggota,
      pekerjaan_anggota: data.pekerjaan_anggota,
      no_rekening: data.no_rekening,
      status_perkawinan: data.status_perkawinan,
      email_anggota: data.email_anggota,
    };
    const response = await axios.post(url, data_create);

    return response;
  }

  async function editAnggota(data) {
    const url = baseUrl + "/anggota";
    const data_create = {
      username: data.username,
      password_anggota: data.password_anggota,
      nama_anggota: data.nama_anggota,
      nik: data.nik,
      jenis_kelamin: data.jenis_kelamin,
      no_hp_anggota: data.no_hp_anggota,
      alamat_anggota: data.alamat_anggota,
      pekerjaan_anggota: data.pekerjaan_anggota,
      no_rekening: data.no_rekening,
      status_perkawinan: data.status_perkawinan,
      email_anggota: data.email_anggota,
    };
    const response = await axios.put(url, data_create);

    return response;
  }

  async function deleteAnggota(id) {
    const url = baseUrl + `/anggota/${id}`;
    const response = await axios.delete(url);
    return response;
  }

  //Admin
  async function getAdmin(id) {
    const url = baseUrl + `/admin/${id ? id : ""}`;

    const response = await axios.get(url);
    return response.data.data;
  }
  async function createAdmin(data) {
    const url = baseUrl + "/admin";
    const data_create = {
      username: data.username,
      nama_admin: data.nama_admin,
      password_admin: data.password,
      no_hp_admin: data.no_hp_admin,
      jenis_kelamin: data.jenis_kelamin,
      email_admin: data.email_admin,
      alamat_admin: data.alamat_admin,
      level_admin: data.level_admin,
    };
    const response = await axios.post(url, data_create);

    return response;
  }

  async function editAdmin(data) {
    const url = baseUrl + "/admin";
    const data_edit = {
      username: data.username,
      nama_admin: data.nama_admin,
      password_admin: data.password,
      no_hp_admin: data.no_hp_admin,
      jenis_kelamin: data.jenis_kelamin,
      email_admin: data.email_admin,
      alamat_admin: data.alamat_admin,
      level_admin: data.level_admin,
    };
    const response = await axios.put(url, data_edit);

    return response;
  }

  async function deleteAdmin(id) {
    const url = baseUrl + `/admin/${id}`;
    const response = await axios.delete(url);
    return response;
  }
  return {
    Login,
    Refresh,
    Logout,
    getAnggota,
    createAnggota,
    editAnggota,
    deleteAnggota,
    getAdmin,
    createAdmin,
    editAdmin,
    deleteAdmin,
  };
})();

export default api;
