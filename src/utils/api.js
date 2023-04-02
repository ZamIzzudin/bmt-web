import axios from 'axios'

const api = (() => {

    const baseUrl = process.env.REACT_APP_API_ENDPOINT

    axios.defaults.withCredentials = true

    // Auth
    async function Login(username, password) {
        const url = baseUrl + '/login'

        const data = {
            username, password
        }

        const response = await axios.post(url, data)

        return response

    }

    async function Refresh() {
        const url = baseUrl + '/refresh'

        try {
            const response = await axios.get(url, {
                credentials: "include"
            })

            return response
        } catch (err) {
            console.log(err)
        }

    }

    async function Logout() {
        const url = baseUrl + '/logout'

        const response = await axios.get(url)

        return response

    }

    // FAQ
    async function GetAllFAQ() {
        const url = baseUrl + '/faq'

        const response = await axios.get(url)
        return response.data.data
    }

    async function CreateFAQ(data) {
        const url = baseUrl + '/faq'

        const response = await axios.post(url, data)
        return response.data.data
    }

    async function EditFAQ(data) {
        const url = baseUrl + '/faq/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    async function RemoveFAQ(_id) {
        const url = baseUrl + '/faq/' + _id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Link (Layanan Mahasiswa)
    async function GetContact() {
        const url = baseUrl + '/link?kategori=contact'

        const response = await axios.get(url)
        return response.data.data
    }

    async function GetTautan() {
        const url = baseUrl + '/link?kategori=tautan'

        const response = await axios.get(url)
        return response.data.data
    }

    async function GetAllLink() {
        const url = baseUrl + '/link?kategori=e-layanan'
        const url2 = baseUrl + '/link?kategori=database-materi'

        const response = await axios.get(url)
        const response2 = await axios.get(url2)

        const data = {
            e_layanan: response.data.data,
            database_materi: response2.data.data
        }

        return data
    }

    async function CreateLink(data) {
        const url = baseUrl + '/link'

        const response = await axios.post(url, data)
        return response.data.data
    }

    async function EditLink(data) {
        const url = baseUrl + '/link/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    async function RemoveLink(_id) {
        const url = baseUrl + '/link/' + _id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Berita
    async function GetAllBerita() {
        const url = baseUrl + '/berita'

        const response = await axios.get(url)

        return response.data.data[0].berita || null
    }

    async function CreateBerita(data) {
        const url = baseUrl + '/berita'
        const form = new FormData()

        form.append('judul_berita', data.judul_berita)
        form.append('penulis_berita', data.penulis_berita)
        form.append('isi_berita', data.isi_berita)
        form.append('link_berita', data.link_berita)
        form.append('link_pdf', data.link_pdf)
        form.append('header_berita', data.header_berita.file || undefined)
        form.append('gambar_berita', data.gambar_berita.file || undefined)

        data.kategori_berita.forEach(kategori => {
            form.append('kategori_berita[]', kategori)
        })

        const response = await axios.post(url, form)
        return response.data.data
    }

    async function EditBerita(data) {
        const url = baseUrl + '/berita/' + data._id

        const form = new FormData()

        form.append('judul_berita', data.judul_berita)
        form.append('penulis_berita', data.penulis_berita)
        form.append('isi_berita', data.isi_berita)
        form.append('link_berita', data.link_berita)
        form.append('link_pdf', data.link_pdf)
        form.append('header_berita', data.header_berita.file || data.header_berita)
        form.append('gambar_berita', data.gambar_berita.file || data.gambar_berita)

        data.kategori_berita.forEach(kategori => {
            form.append('kategori_berita[]', kategori)
        })

        const response = await axios.put(url, form)
        return response.data.data
    }

    async function RemoveBerita(_id) {
        const url = baseUrl + '/berita/' + _id

        const response = await axios.delete(url)
        return response.data.data
    }

    // User
    async function GetAllUser() {
        const url = baseUrl + '/admin'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function CreateUser(data) {
        const url = baseUrl + '/admin'

        const response = await axios.post(url, data)
        return response.data.data
    }

    async function EditUser(data) {
        const url = baseUrl + '/admin/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    async function RemoveUser(_id) {
        const url = baseUrl + '/admin/' + _id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Himpunan
    async function GetDataHimpunan() {
        const url = baseUrl + '/himpunan'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function EditDataHimpunan(data) {
        const url = baseUrl + '/himpunan'

        const form = new FormData()

        form.append('nama_himpunan', data.nama_himpunan)
        form.append('nama_universitas', data.nama_universitas)
        form.append('logo_himpunan', data.logo_himpunan.file || undefined)
        form.append('gambar_struktur', data.gambar_struktur.file || undefined)

        const response = await axios.put(url, form)
        return response.data.data

    }

    // Visi Misi
    async function GetVisiMisi() {
        const url = baseUrl + '/visi'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function EditVisiMisi(data) {
        const url = baseUrl + '/visi'

        const response = await axios.put(url, data)
        return response.data.data
    }

    // Bidang
    async function GetBidang() {
        const url = baseUrl + '/bidang'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function CreateBidang(data) {
        const url = baseUrl + '/bidang'

        const form = new FormData()

        form.append('nama_bidang', data.nama_bidang)
        form.append('kepanjangan_bidang', data.kepanjangan_bidang)
        form.append('deskripsi_bidang', data.deskripsi_bidang)
        form.append('logo_bidang', data.logo_bidang.file || undefined)

        const response = await axios.post(url, form)
        return response.data.data
    }

    async function EditBidang(data) {
        const url = baseUrl + '/bidang/' + data._id

        const form = new FormData()

        form.append('nama_bidang', data.nama_bidang)
        form.append('kepanjangan_bidang', data.kepanjangan_bidang)
        form.append('deskripsi_bidang', data.deskripsi_bidang)
        form.append('logo_bidang', data.logo_bidang.file || undefined)

        const response = await axios.put(url, form)
        return response.data.data
    }

    async function RemoveBidang(id) {
        const url = baseUrl + '/bidang/' + id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Divisi
    async function GetDivisi(bidang) {
        const url = baseUrl + '/divisi?bidang=' + bidang

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function CreateDivisi(data) {
        const url = baseUrl + '/divisi'

        const response = await axios.post(url, data)
        return response.data.data
    }

    async function EditDivisi(data) {
        const url = baseUrl + '/divisi/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    async function RemoveDivisi(id) {
        const url = baseUrl + '/divisi/' + id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Pengurus
    async function GetPengurus(bidang) {
        const url = baseUrl + '/pengurus?bidang=' + bidang

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function CreatePengurus(data) {
        const url = baseUrl + '/pengurus'

        const form = new FormData()

        form.append('nama_pengurus', data.nama_pengurus)
        form.append('jabatan', data.jabatan)
        form.append('media_social', data.media_social)
        form.append('id_bidang', data.id_bidang)
        form.append('foto_pengurus', data.foto_pengurus.file || undefined)

        const response = await axios.post(url, form)
        return response.data.data
    }

    async function EditPengurus(data) {
        const url = baseUrl + '/pengurus/' + data._id

        const form = new FormData()

        form.append('nama_pengurus', data.nama_pengurus)
        form.append('jabatan', data.jabatan)
        form.append('media_social', data.media_social)
        form.append('id_bidang', data.id_bidang)
        form.append('foto_pengurus', data.foto_pengurus.file || undefined)

        const response = await axios.put(url, form)
        return response.data.data
    }

    async function RemovePengurus(id) {
        const url = baseUrl + '/pengurus/' + id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Events
    async function GetEvent(bidang) {
        const url = baseUrl + '/event?bidang=' + bidang

        try {
            const response = await axios.get(url)
            return response.data.data[0].event
        } catch (err) {
            return []
        }

    }

    async function CreateEvent(data) {
        const url = baseUrl + '/event'

        const form = new FormData()

        form.append('judul_event', data.judul_event)
        form.append('penulis_event', data.penulis_event)
        form.append('tanggal_mulai_event', data.tanggal_mulai_event)
        form.append('isi_event', data.isi_event)
        form.append('status_event', data.status_event)
        form.append('kategori_event', data.kategori_event)
        form.append('id_divisi', data.id_divisi)
        form.append('link_pdf', data.link_pdf)
        form.append('link_pendaftaran', data.link_pendaftaran)
        form.append('header_event', data?.header_event.file || undefined)
        form.append('gambar_event', data?.gambar_event.file || undefined)

        if (data.tanggal_selesai_event !== null) {
            form.append('tanggal_selesai_event', data.tanggal_selesai_event)
        }

        data.dokumentasi_event.forEach(gambar => {
            form.append('dokumentasi_event', gambar)
        })

        const response = await axios.post(url, form)
        return response.data.data
    }

    async function EditEvent(data) {
        const url = baseUrl + '/event/' + data._id

        const form = new FormData()

        form.append('judul_event', data.judul_event)
        form.append('penulis_event', data.penulis_event)
        form.append('tanggal_mulai_event', data.tanggal_mulai_event)
        form.append('isi_event', data.isi_event)
        form.append('status_event', data.status_event)
        form.append('kategori_event', data.kategori_event)
        form.append('id_divisi', data.id_divisi)
        form.append('link_pdf', data.link_pdf)
        form.append('link_pendaftaran', data.link_pendaftaran)
        form.append('header_event', data?.header_event.file || undefined)
        form.append('gambar_event', data?.gambar_event.file || undefined)

        if (data.tanggal_selesai_event !== null) {
            form.append('tanggal_selesai_event', data.tanggal_selesai_event)
        }

        data.dokumentasi_event.forEach(gambar => {
            form.append('dokumentasi_event', gambar)
        })

        const response = await axios.put(url, form)
        return response.data.data
    }

    async function RemoveEvent(id) {
        const url = baseUrl + '/event/' + id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Social Media
    async function GetSocmed() {
        const url = baseUrl + '/link?kategori=sosmed'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function EditSocmed(data) {
        const url = baseUrl + '/link/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    // Partners
    async function GetPatrner() {
        const url = baseUrl + '/partner'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function CreatePartner(data) {
        const url = baseUrl + '/partner'

        const form = new FormData()

        form.append('nama_partner', data.nama_partner)
        form.append('logo_partner', data.logo_partner.file || undefined)

        const response = await axios.post(url, form)
        return response.data.data
    }

    async function EditPartner(data) {
        const url = baseUrl + '/partner/' + data._id

        const form = new FormData()

        form.append('nama_partner', data.nama_partner)
        form.append('logo_partner', data.logo_partner.file || undefined)

        const response = await axios.put(url, form)
        return response.data.data
    }

    async function RemovePartner(id) {
        const url = baseUrl + '/partner/' + id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Slider Information
    async function GetSlider() {
        const url = baseUrl + '/slider'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function CreateSlider(data) {
        const url = baseUrl + '/slider'

        const form = new FormData()

        form.append('judul_slider', data.judul_slider)
        form.append('gambar_slider', data.gambar_slider.file || undefined)

        const response = await axios.post(url, form)
        return response.data.data
    }

    async function EditSlider(data) {
        const url = baseUrl + '/slider/' + data._id

        const form = new FormData()

        form.append('judul_slider', data.judul_slider)
        form.append('gambar_slider', data.gambar_slider.file || undefined)

        const response = await axios.put(url, form)
        return response.data.data
    }

    async function RemoveSlider(id) {
        const url = baseUrl + '/slider/' + id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Footer
    async function GetFooter() {
        const url = baseUrl + '/footer'

        try {
            const response = await axios.get(url)
            return response.data.data[0]
        } catch (err) {
            console.log(err)
        }
    }

    async function EditFooter(data) {
        const url = baseUrl + '/footer/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    // Utils
    async function GetKategori() {
        const url = baseUrl + '/kategori_berita'

        const response = await axios.get(url)

        return response.data.data
    }

    return {
        Login,
        Refresh,
        Logout,
        GetAllFAQ,
        CreateFAQ,
        EditFAQ,
        RemoveFAQ,
        GetContact,
        GetTautan,
        GetAllLink,
        CreateLink,
        EditLink,
        RemoveLink,
        GetAllBerita,
        CreateBerita,
        EditBerita,
        RemoveBerita,
        GetAllUser,
        CreateUser,
        EditUser,
        RemoveUser,
        GetDataHimpunan,
        EditDataHimpunan,
        GetVisiMisi,
        EditVisiMisi,
        GetBidang,
        CreateBidang,
        EditBidang,
        RemoveBidang,
        GetDivisi,
        CreateDivisi,
        EditDivisi,
        RemoveDivisi,
        GetPengurus,
        CreatePengurus,
        EditPengurus,
        RemovePengurus,
        GetEvent,
        CreateEvent,
        EditEvent,
        RemoveEvent,
        GetSocmed,
        EditSocmed,
        GetPatrner,
        CreatePartner,
        EditPartner,
        RemovePartner,
        GetSlider,
        CreateSlider,
        EditSlider,
        RemoveSlider,
        GetFooter,
        EditFooter,
        GetKategori
    }
})()

export default api