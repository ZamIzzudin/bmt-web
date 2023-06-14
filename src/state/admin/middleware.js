import { GetAdminAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

function AsyncGetAdmin(id) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.getAdmin(id);
            dispatch(GetAdminAction(data));
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

function AsyncCreateAdmin(data) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const createData = {
                username: data.username,
                nama_admin: data.nama,
                password_admin: data.password,
                no_hp_admin: data.noTelp,
                jenis_kelamin: data.jenisKelamin,
                email_admin: data.email,
                alamat_admin: data.alamat,
                level_admin: 1,
            }
            const result = await api.createAdmin(createData);
            console.info(result)
            dispatch(AsyncGetAdmin());
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncEditAdmin(data) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const editData = {
                username: data.username,
                nama_admin: data.nama,
                password_admin: data.password,
                no_hp_admin: data.noTelp,
                jenis_kelamin: data.jenisKelamin,
                email_admin: data.email,
                alamat_admin: data.alamat,
                level_admin: 1,
            }
            const result = await api.editAdmin(editData);
            console.info(result)
            dispatch(AsyncGetAdmin());
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncDeleteAdmin(id) {
    return async dispatch => {    
        try {
            if (id === null) {
                throw new Error()
            }
            const result = await api.deleteAdmin(id);
            console.info(result)
            dispatch(AsyncGetAdmin());
        } catch (err) {
            console.error(err);
        }
    }
}

export { AsyncGetAdmin, AsyncCreateAdmin, AsyncEditAdmin, AsyncDeleteAdmin }