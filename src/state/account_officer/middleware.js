import { GetOfficerAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

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
            console.info(result)
            dispatch(AsyncGetOfficer());
        } catch (err) {
            console.error(err);
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
            console.info(result)
            dispatch(AsyncGetOfficer());
        } catch (err) {
            console.error(err);
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
            console.info(result)
            dispatch(AsyncGetOfficer());
        } catch (err) {
            console.error(err);
        }
    }
}

export { AsyncGetOfficer, AsyncCreateOfficer, AsyncEditOfficer, AsyncDeleteOfficer }