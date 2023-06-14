import { GetManagerAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetManager(id) {
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.getManager(id);
            dispatch(GetManagerAction(data));
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

function AsyncCreateManager(data) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const createData = {
                username: data.username,
                nama_manager: data.nama_manager,
                password_manager: data.password,
                no_hp_manager: data.no_hp_manager,
                jenis_kelamin: data.jenis_kelamin,
                email_manager: data.email_manager,
                alamat_manager: data.alamat_manager,
                level_manager: data.level_manager,
            }
            const result = await api.createManager(createData);
            dispatch(ShowSuccess("Berhasil membuat Manager"));
            console.info(result)
            dispatch(AsyncGetManager());
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal membuat Manager"));
        }
    }
}

function AsyncEditManager(data) {
    return async dispatch => {    
        try {
            if (data === null) {
                throw new Error()
            }
            const editData = {
                id_manager: data.id,
                username: data.username,
                nama_manager: data.nama_manager,
                password_manager: data.password,
                no_hp_manager: data.no_hp_manager,
                jenis_kelamin: data.jenis_kelamin,
                email_manager: data.email_manager,
                alamat_manager: data.alamat_manager,
                level_manager: data.level_manager,
            }
            const result = await api.editManager(editData);
            dispatch(ShowSuccess("Berhasil mengedit Manager"));
            console.info(result)
            dispatch(AsyncGetManager());
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal mengedit Manager"));
        }
    }
}

function AsyncDeleteManager(id) {
    return async dispatch => {    
        try {
            if (id === null) {
                throw new Error()
            }
            const result = await api.deleteManager(id);
            dispatch(ShowSuccess("Berhasil menghapus Manager"));
            console.info(result)
            dispatch(AsyncGetManager());
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menghapus Manager"));
        }
    }
}

export { AsyncGetManager, AsyncCreateManager, AsyncEditManager, AsyncDeleteManager }