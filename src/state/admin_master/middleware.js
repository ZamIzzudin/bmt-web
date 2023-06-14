import { GetAdminMasterAction } from './action'
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

function AsyncGetAdminMaster(id) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.getAdminMaster(id);
            dispatch(GetAdminMasterAction(data));
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

function AsyncCreateAdminMaster(data) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const createData = {
                username: data.username,
                nama_admin_master: data.nama_admin_master,
                password_admin_master: data.password,
                no_hp_admin_master: data.no_hp_admin_master,
                jenis_kelamin: data.jenis_kelamin,
                email_admin_master: data.email_admin_master,
                alamat_admin_master: data.alamat_admin_master,
                level_admin_master: data.level_admin_master,
            }
            const result = await api.createAdminMaster(createData);
            console.info(result)
            dispatch(AsyncGetAdminMaster());
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncEditAdminMaster(data) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const editData = {
                username: data.username,
                nama_admin_master: data.nama_admin_master,
                password_admin_master: data.password,
                no_hp_admin_master: data.no_hp_admin_master,
                jenis_kelamin: data.jenis_kelamin,
                email_admin_master: data.email_admin_master,
                alamat_admin_master: data.alamat_admin_master,
                level_admin_master: data.level_admin_master,
            }
            const result = await api.editAdminMaster(editData);
            console.info(result)
            dispatch(AsyncGetAdminMaster());
        } catch (err) {
            console.error(err);
        }
    }
}

function AsyncDeleteAdminMaster(id) {
    return async dispatch => {    
        try {
            if (id === null) {
                throw new Error()
            }
            const result = await api.deleteAdminMaster(id);
            console.info(result)
            dispatch(AsyncGetAdminMaster());
        } catch (err) {
            console.error(err);
        }
    }
}

export { AsyncGetAdminMaster, AsyncCreateAdminMaster, AsyncEditAdminMaster, AsyncDeleteAdminMaster }