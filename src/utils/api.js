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
      return [];
    }
    if(response.status === 400){
      return [];
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
    if(response.data.status === 400 || response.data.status === 500){
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
    if(response.data.status === 400 || response.data.status === 500){
      return [];
    }
    return response.data.data;
  }

  async function GetPengajuanSimpanan(type){
    const url = baseUrl + `/pengajuan/sukarela?type=${type}`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    if(response.data.status === 400 || response.data.status === 500){
      return [];
    }
    return response.data.data;
  }

  async function CreatePengajuanKerjasama(data){
    const url = baseUrl + `/pengajuan/kerjasama`;

    const formData = new FormData();
    formData.append("id_nasabah", data.id_nasabah);
    formData.append("produk_pembiayaan", data.produk_pembiayaan);
    formData.append("durasi_pembiayaan", data.durasi_pembiayaan);
    formData.append("nominal_pembiayaan", data.nominal_pembiayaan);
    formData.append("nominal_pelunasan", data.nominal_pelunasan);
    formData.append("foto_ktp", data.foto_ktp.file);
    formData.append("foto_kk", data.foto_kk.file);
    formData.append("dokumen_rab", data.dokumen_rab.file);

    const response = await axios.post(url, formData);
    return response;
  }

  async function CreatePengajuanJualBeli(data){
    const url = baseUrl + `/pengajuan/jualbeli`;

    const formData = new FormData();
    formData.append("id_nasabah", data.id_nasabah);
    formData.append("produk_pembiayaan", data.produk_pembiayaan);
    formData.append("durasi_pembiayaan", data.durasi_pembiayaan);
    formData.append("nominal_pembiayaan", data.nominal_pembiayaan);
    formData.append("nominal_pelunasan", data.nominal_pelunasan);
    formData.append("foto_ktp", data.foto_ktp.file);
    formData.append("foto_kk", data.foto_kk.file);
    formData.append("dokumen_rab", data.dokumen_rab.file);

    const response = await axios.post(url, formData);
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

  async function DeletePengajuanKerjasama(id){
    const url = baseUrl + `/pengajuan/kerjasama/${id}`;

    const response = await axios.delete(url);
    return response;
  }
  async function DeletePengajuanJualBeli(id){
    const url = baseUrl + `/pengajuan/jualbeli/${id}`;

    const response = await axios.delete(url);
    return response;
  }
  async function DeletePengajuanSimpanan(id){
    const url = baseUrl + `/pengajuan/sukarela/${id}`;

    const response = await axios.delete(url);
    return response;
  }

  async function ApprovePengajuanKerjasama(id){
    const url = baseUrl + `/pengajuan/kerjasama/approve/${id}`;

    const response = await axios.put(url);
    return response;
  }

  async function TolakPengajuanKerjasama(id){
    const url = baseUrl + `/pengajuan/kerjasama/reject/${id}`;

    const response = await axios.put(url);
    return response;
  }

  async function ApprovePengajuanJualBeli(id){
    const url = baseUrl + `/pengajuan/jualbeli/approve/${id}`;

    const response = await axios.put(url);
    return response;
  }
  
  async function TolakPengajuanJualBeli(id){
    const url = baseUrl + `/pengajuan/jualbeli/reject/${id}`;

    const response = await axios.put(url);
    return response;
  }

  async function ApprovePengajuanSimpanan(id){
    const url = baseUrl + `/pengajuan/sukarela/approve/${id}`;

    const response = await axios.put(url);
    return response;
  }

  async function TolakPengajuanSimpanan(id){
    const url = baseUrl + `/pengajuan/sukarela/reject/${id}`;

    const response = await axios.put(url);
    return response;
  }

  //Kas
  async function GetKas(type){
    let url = baseUrl + `/kas${type ? `?type=${type}` : ''}`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function CreateKas(data){
    const url = baseUrl + `/kas`;

    const data_create = {
      jenis_transaksi: data.jenis_transaksi,
      nominal: data.nominal,
      catatan: data.catatan,
    }
    const response = await axios.post(url, data_create);
    return response;
  }

  async function GetRekapPengelola(){
    const url = baseUrl + `/kas/rekap`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetRekapNasabah(){
    const url = baseUrl + `/kas/rekap/profile`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  //Simpanan
  async function GetSimpananPokok(){
    const url = baseUrl + `/simpanan/pokok`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetSimpananWajib(){
    let url = baseUrl + `/simpanan/wajib`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetDetailSimpananWajib(id){
    const url = baseUrl + `/simpanan/wajib/${id}`;

    const response = await axios.get(url);
    console.info(response);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetNotLunasSimpananWajib(bulan, tahun){
    const url = baseUrl + `/simpanan/wajib/check/belum-setor?bulan=${bulan}&tahun=${tahun}`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function SetorSimpananWajib(id){
    const url = baseUrl + `/simpanan/wajib/setor/${id}`;

    const response = await axios.put(url);
    return response;
  }

  async function GetSimpananSukarela(type){
    let url = baseUrl + `/simpanan/sukarela`;

    if(type){
      url += `?type=${type}`;
    }

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetDetailTransaksiSukarela(id){
    const url = baseUrl + `/angsuran/sukarela/${id}`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }
  
    async function TarikSimpananSukarela(data){
    const url = baseUrl + `/angsuran/sukarela/tarik/${data.id}`;

    const data_post = {
      nominal: data.nominal,
    }
    const response = await axios.post(url, data_post);
    return response;
  }
  
    async function SetorSimpananSukarela(data){
    const url = baseUrl + `/angsuran/sukarela/setor/${data.id}`;

    const data_post = {
      nominal: Number(data.nominal),
    }
    const response = await axios.post(url, data_post);
    return response;
  }

  //PEMBIAYAAN & ANGSURAN

  //===============================================Kerjasama
  async function GetPembiayaanKerjasama(type){
    const url = baseUrl + `/pembiayaan/kerjasama?type=${type}`;

    const response = await axios.get(url);

    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetDetailTransaksiPembiayaanKerjasama(id){
    const url = baseUrl + `/angsuran/kerjasama/${id}`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetNotLunasPembiayaanKerjasama(bulan, tahun){
    const url = baseUrl + `/pembiayaan/kerjasama/check/belum-setor?bulan=${bulan}&tahun=${tahun}`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function SetorPembiayaanKerjasama(data){
    const url = baseUrl + `/angsuran/kerjasama/setor/${data.id}`;

    const data_post = {
      nominal: Number(data.nominal),
    }
    const response = await axios.post(url, data_post);
    return response;
  }

  //======================================Jual Beli

  async function GetPembiayaanJualBeli(type){
    const url = baseUrl + `/pembiayaan/jualbeli?type=${type}`;

    const response = await axios.get(url);

    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetDetailTransaksiPembiayaanJualBeli(id){
    const url = baseUrl + `/angsuran/jualbeli/${id}`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function GetNotLunasPembiayaanJualBeli(bulan, tahun){
    const url = baseUrl + `/pembiayaan/jualbeli/check/belum-setor?bulan=${bulan}&tahun=${tahun}`;

    const response = await axios.get(url);
    if(response.data.data.length === 0){
      return [];
    }
    return response.data.data;
  }

  async function SetorPembiayaanJualBeli(data){
    const url = baseUrl + `/angsuran/jualbeli/setor/${data.id}`;

    const data_post = {
      nominal: Number(data.nominal),
    }
    const response = await axios.post(url, data_post);
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
    DeletePengajuanSimpanan,
    DeletePengajuanKerjasama,
    DeletePengajuanJualBeli,
    ApprovePengajuanKerjasama,
    ApprovePengajuanJualBeli,
    ApprovePengajuanSimpanan,
    GetSimpananPokok,
    GetSimpananWajib,
    GetSimpananSukarela,
    GetDetailSimpananWajib,
    GetNotLunasSimpananWajib,
    SetorSimpananWajib,
    SetorSimpananSukarela,
    TarikSimpananSukarela,
    GetDetailTransaksiSukarela,
    GetPembiayaanKerjasama,
    GetDetailTransaksiPembiayaanKerjasama,
    GetNotLunasPembiayaanKerjasama,
    SetorPembiayaanKerjasama,
    GetPembiayaanJualBeli,
    GetDetailTransaksiPembiayaanJualBeli,
    GetNotLunasPembiayaanJualBeli,
    SetorPembiayaanJualBeli,
    GetKas,
    CreateKas,
    GetRekapNasabah,
    GetRekapPengelola,
    TolakPengajuanKerjasama,
    TolakPengajuanJualBeli,
    TolakPengajuanSimpanan
  };
})();

export default api;
