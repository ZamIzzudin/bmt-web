import axios from "axios";

const api = (() => {
  const baseUrl = "https://bmt-gateway.vercel.app";

  // Auth
  async function Login(email, password) {
    const url = baseUrl + "/auth/login";

    const data = {
      email,
      password,
    };
    
    const response = await axios.post(url, data);
    return response;
  }

  async function Refresh() {
    const url = baseUrl + "/auth/refresh";

    try {
      const response = await axios.get(url, {
        credentials: 'include',
        withCredentials: true,
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  async function Logout() {
    const url = baseUrl + "/auth/logout";

    const response = await axios.get(url);

    return response;
  }

  //User
  async function GetUsers(type) {
    const url = baseUrl + `/user?type=${type}`;

    const response = await axios.get(url);

    if (response.data.data.length === 0) {
      return {};
    }
    return response.data.data;
  }

  
  async function CreateUser(data) {
    const url = baseUrl + "/auth/register";
    const data_register = {
      username: data.username,
      password: data.password,
      nama: data.nama,
      nik: data.nik || "",
      jenis_kelamin: data.jenisKelamin,
      no_hp: data.noTelp,
      alamat: data.alamat,
      pekerjaan: data.pekerjaan || "",
      no_rekening: data.noRekening || "",
      status_perkawinan: data.statusPerkawinan || "",
      email: data.email,
      role: data.role
    }
    const response = await axios.post(url, data_register);
    return response;
  }

  async function EditUser(data, type) {
    const url = baseUrl + `/user/${data.id}?type=${type}`;
    const data_edit = {
      username: data.username,
      password: data.password || "",
      nama: data.nama,
      nik: data.nik || "",
      jenis_kelamin: data.jenisKelamin,
      no_hp: data.noTelp,
      alamat: data.alamat,
      pekerjaan: data.pekerjaan || "",
      no_rekening: data.noRekening || "",
      status_perkawinan: data.statusPerkawinan || "",
      email: data.email,
      role: data.role
    }
    const response = await axios.put(url, data_edit);
    return response;
  }

  async function DeleteUser(id, type) {
    const url = baseUrl + `/user/${id}?type=${type}`;
    const response = await axios.delete(url);
    return response;
  }

  async function GetDetailUser(id) {
    const url = baseUrl + `/user/${id}`;

    const response = await axios.get(url);

    if (response.data.data.length === 0) {
      return {};
    }
    return response.data.data;
  }

  //MODUL PENGAJUAN
  async function GetPengajuanKerjasama(type){
    const url = baseUrl + `/pengajuan/kerjasama?type=${type}`;

    const response = await axios.get(url);;
    
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetPengajuanJualBeli(type){
    const url = baseUrl + `/pengajuan/jualbeli?type=${type}`;

    const response = await axios.get(url);;
    
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetPengajuanSimpanan(type){
    const url = baseUrl + `/pengajuan/sukarela?type=${type}`;

    const response = await axios.get(url);;
    
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function CreatePengajuanKerjasama(){
    const url = baseUrl + `/pengajuan/kerjasama`;

    const data_pengajuan = {

    }
    const response = await axios.post(url, data_pengajuan);
    return response;
  }

  async function CreatePengajuanJualBeli(data){
    const url = baseUrl + `/pengajuan/jualbeli`;

    const data_pengajuan = {

    }
    const response = await axios.post(url, data_pengajuan);
    return response;
  }

  async function CreatePengajuanSimpanan(data){
    const url = baseUrl + `/pengajuan/sukarela`;

    const data_pengajuan = {
      id_nasabah: data.id_nasabah,
      produk_simpanan: data.produk_simpanan,
      setoran_awal: data.setoran_awal,
    }
    const response = await axios.post(url, data_pengajuan);
    return response;
  }

  async function ApprovePengajuanKerjasama(id){
    const url = baseUrl + `/pengajuan/kerjasama/${id}`;

    const response = await axios.put(url);
    return response;
  }
  async function ApprovePengajuanJualBeli(id){
    const url = baseUrl + `/pengajuan/jualbeli/${id}`;

    const response = await axios.put(url);
    return response;
  }
  async function ApprovePengajuanSimpanan(id){
    const url = baseUrl + `/pengajuan/sukarela/${id}`;

    const response = await axios.put(url, {});
    return response;
  }
  return {
    Login,
    Refresh,
    Logout,
    GetUsers,
    CreateUser,
    EditUser,
    DeleteUser,
    GetDetailUser,
    GetPengajuanKerjasama,
    GetPengajuanJualBeli,
    GetPengajuanSimpanan,
    CreatePengajuanKerjasama,
    CreatePengajuanJualBeli,
    CreatePengajuanSimpanan,
    ApprovePengajuanKerjasama,
    ApprovePengajuanJualBeli,
    ApprovePengajuanSimpanan,
  };
})();

export default api;
