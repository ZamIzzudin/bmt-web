import { GetAnggotaAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAnggota(id) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.getAnggota(id);
            dispatch(GetAnggotaAction(data));
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

function AsyncCreateAnggota(data) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const createData = {
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
            }
            const result = await api.createAnggota(createData);
            dispatch(ShowSuccess("Berhasil membuat Anggota"));
            console.info(result)
            dispatch(AsyncGetAnggota());
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal membuat Anggota"));
        }
    }
}

function AsyncEditAnggota(data) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const editData = {
                id_anggota: data.id,
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
            }
            const result = await api.editAnggota(editData);
            dispatch(ShowSuccess("Berhasil mengedit Anggota"));
            console.info(result)
            dispatch(AsyncGetAnggota());
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal mengedit Anggota"));
        }
    }
}

function AsyncDeleteAnggota(id) {
    return async dispatch => {    
        try {
            if (id === null) {
                throw new Error()
            }
            const result = await api.deleteAnggota(id);
            dispatch(ShowSuccess("Berhasil menghapus Anggota"));
            console.info(result)
            dispatch(AsyncGetAnggota());
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menghapus Anggota"));
        }
    }
}

export { AsyncGetAnggota, AsyncCreateAnggota, AsyncEditAnggota, AsyncDeleteAnggota }