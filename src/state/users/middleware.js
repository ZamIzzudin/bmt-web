import { GetUsersActions } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetUsers(type) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.GetUsers(type);
            dispatch(GetUsersActions(data));
        } catch (err) {
            console.error(err);
            dispatch(GetUsersActions([]));
        }
        dispatch(hideLoading());
    }
}

function AsyncEditUser(data, type) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const editData = {
                id: data.id,
                username: data.username,
                password: data.password,
                nama: data.nama,
                nik: data.nik,
                jenisKelamin: data.jenisKelamin,
                noTelp: data.noTelp,
                alamat: data.alamat,
                pekerjaan: data.pekerjaan,
                noRekening: data.noRekening,
                statusPerkawinan: data.statusPerkawinan,
                email: data.email,
                role: data.role
            }
            const result = await api.EditUser(editData, type);
            dispatch(ShowSuccess("Berhasil mengedit User"));
            console.info(result)
            dispatch(AsyncGetUsers(type));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal mengedit User"));
        }
    }
}

function AsyncDeleteUser(id, type) {
    return async dispatch => {    
        try {
            if (id === null) {
                throw new Error()
            }
            const result = await api.DeleteUser(id, type);
            dispatch(ShowSuccess("Berhasil menghapus User"));
            dispatch(AsyncGetUsers(type));
            console.info(result)
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menghapus User"));
        }
    }
}

export { AsyncGetUsers, AsyncEditUser, AsyncDeleteUser }