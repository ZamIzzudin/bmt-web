import axios from "axios";

const api = (() => {
  const baseUrl = "https://be-bmt.vercel.app";

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
    const url = baseUrl + `/anggota/${data.id}`;
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
      password_admin: data.password_admin,
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
    const url = baseUrl + `/admin/${data.id}`;
    const data_edit = {
      username: data.username,
      nama_admin: data.nama_admin,
      password_admin: data.password_admin,
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

  //Manager
  async function getManager(id) {
    const url = baseUrl + `/manager/${id ? id : ""}`;

    const response = await axios.get(url);
    return response.data.data;
  }
  async function createManager(data) {
    const url = baseUrl + "/manager";
    const data_create = {
      username: data.username,
      nama_manager: data.nama_manager,
      password_manager: data.password_manager,
      no_hp_manager: data.no_hp_manager,
      jenis_kelamin: data.jenis_kelamin,
      email_manager: data.email_manager,
      alamat_manager: data.alamat_manager,
      level_manager: data.level_manager,
    };
    const response = await axios.post(url, data_create);

    return response;
  }

  async function editManager(data) {
    const url = baseUrl + `/manager/${data.id}`;
    const data_edit = {
      username: data.username,
      nama_manager: data.nama_manager,
      password_manager: data.password_manager,
      no_hp_manager: data.no_hp_manager,
      jenis_kelamin: data.jenis_kelamin,
      email_manager: data.email_manager,
      alamat_manager: data.alamat_manager,
      level_manager: data.level_manager,
    };
    const response = await axios.put(url, data_edit);

    return response;
  }

  async function deleteManager(id) {
    const url = baseUrl + `/manager/${id}`;
    const response = await axios.delete(url);
    return response;
  }

  //Officer
  async function getOfficer(id) {
    const url = baseUrl + `/account-officer/${id ? id : ""}`;

    const response = await axios.get(url);
    return response.data.data;
  }
  async function createOfficer(data) {
    const url = baseUrl + "/account-officer";
    const data_create = {
      username: data.username,
      nama_account_officer: data.nama_account_officer,
      password_account_officer: data.password_account_officer,
      no_hp_account_officer: data.no_hp_account_officer,
      jenis_kelamin: data.jenis_kelamin,
      email_account_officer: data.email_account_officer,
      alamat_account_officer: data.alamat_account_officer,
      level_account_officer: data.level_account_officer,
    };
    const response = await axios.post(url, data_create);

    return response;
  }

  async function editOfficer(data) {
    const url = baseUrl + `/account-officer/${data.id}`;
    const data_edit = {
      username: data.username,
      nama_account_officer: data.nama_account_officer,
      password_account_officer: data.password_account_officer,
      no_hp_account_officer: data.no_hp_account_officer,
      jenis_kelamin: data.jenis_kelamin,
      email_account_officer: data.email_account_officer,
      alamat_account_officer: data.alamat_account_officer,
      level_account_officer: data.level_account_officer,
    };
    const response = await axios.put(url, data_edit);

    return response;
  }

  async function deleteOfficer(id) {
    const url = baseUrl + `/account-officer/${id}`;
    const response = await axios.delete(url);
    return response;
  }

  //Master Admin
  async function getAdminMaster(id) {
    const url = baseUrl + `/admin-master/${id ? id : ""}`;

    const response = await axios.get(url);
    return response.data.data;
  }
  async function createAdminMaster(data) {
    const url = baseUrl + "/admin-master";
    const data_create = {
      username: data.username,
      nama_admin_master: data.nama_admin_master,
      password_admin_master: data.password_admin_master,
      no_hp_admin_master: data.no_hp_admin_master,
      jenis_kelamin: data.jenis_kelamin,
      email_admin_master: data.email_admin_master,
      alamat_admin_master: data.alamat_admin_master,
      level_admin_master: data.level_admin_master,
    };
    const response = await axios.post(url, data_create);

    return response;
  }

  async function editAdminMaster(data) {
    const url = baseUrl + `/admin-master/${data.id}`;
    const data_edit = {
      username: data.username,
      nama_admin_master: data.nama_admin_master,
      password_admin_master: data.password_admin_master,
      no_hp_admin_master: data.no_hp_admin_master,
      jenis_kelamin: data.jenis_kelamin,
      email_admin_master: data.email_admin_master,
      alamat_admin_master: data.alamat_admin_master,
      level_admin_master: data.level_admin_master,
    };
    const response = await axios.put(url, data_edit);

    return response;
  }

  async function deleteAdminMaster(id) {
    const url = baseUrl + `/admin-master/${id}`;
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
    getManager,
    createManager,
    editManager,
    deleteManager,
    getOfficer,
    createOfficer,
    editOfficer,
    deleteOfficer,
    getAdminMaster,
    createAdminMaster,
    editAdminMaster,
    deleteAdminMaster,
  };
})();

export default api;
