import { GetOfficerAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetOfficer(id) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.getOfficer(id);

            dispatch(GetOfficerAction(data));
        } catch (err) {
            console.error(err);

        }
        dispatch(hideLoading());
    }
}

function AsyncCreateOfficer(data) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const createData = {
                username: data.username,
                nama_account_officer: data.nama_account_officer,
                password_account_officer: data.password,
                no_hp_account_officer: data.no_hp_account_officer,
                jenis_kelamin: data.jenis_kelamin,
                email_account_officer: data.email_account_officer,
                alamat_account_officer: data.alamat_account_officer,
                level_account_officer: data.level_account_officer,
            }
            const result = await api.createOfficer(createData);
            dispatch(ShowSuccess("Berhasil membuat Officer"));
            console.info(result)
            dispatch(AsyncGetOfficer());
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal membuat Officer"));
        }
    }
}

function AsyncEditOfficer(data) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const editData = {
                id: data.id_account_officer,
                username: data.username,
                nama_account_officer: data.nama_account_officer,
                password_account_officer: data.password,
                no_hp_account_officer: data.no_hp_account_officer,
                jenis_kelamin: data.jenis_kelamin,
                email_account_officer: data.email_account_officer,
                alamat_account_officer: data.alamat_account_officer,
                level_account_officer: data.level_account_officer,
            }
            const result = await api.editOfficer(editData);
            dispatch(ShowSuccess("Berhasil mengedit Officer"));
            console.info(result)
            dispatch(AsyncGetOfficer());
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal mengedit Officer"));
        }
    }
}

function AsyncDeleteOfficer(id) {
    return async dispatch => {    
        try {
            if (id === null) {
                throw new Error()
            }
            const result = await api.deleteOfficer(id);
            dispatch(ShowSuccess("Berhasil menghapus Officer"));
            console.info(result)
            dispatch(AsyncGetOfficer());
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menghapus Officer"));
        }
    }
}

export { AsyncGetOfficer, AsyncCreateOfficer, AsyncEditOfficer, AsyncDeleteOfficer }