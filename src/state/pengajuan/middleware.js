import { GetPengajuanAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetPengajuanKerjasama(type){
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.GetPengajuanKerjasama(type);
            dispatch(GetPengajuanAction(data));
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

function AsyncGetPengajuanJualBeli(type){
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.GetPengajuanJualBeli(type);
            dispatch(GetPengajuanAction(data));
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

function AsyncGetPengajuanSimpanan(type){
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.GetPengajuanSimpanan(type);
            dispatch(GetPengajuanAction(data));
        } catch (err) {
            console.error(err);
        }
        dispatch(hideLoading());
    }
}

function AsyncCreatePengajuanKerjasama(data){
    return async dispatch => {    
        try {
            const result = await api.CreatePengajuanKerjasama(data);
            dispatch(ShowSuccess("Berhasil menambah Pengajuan"));
            console.info(result)
            dispatch(AsyncGetPengajuanKerjasama("nasabah"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menambah Pengajuan"));
        }
    }
}

function AsyncCreatePengajuanJualBeli(data){
    return async dispatch => {    
        try {
            const result = await api.CreatePengajuanJualBeli(data);
            dispatch(ShowSuccess("Berhasil menambah Pengajuan"));
            console.info(result)
            dispatch(AsyncGetPengajuanJualBeli("nasabah"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menambah Pengajuan"));
        }
    }
}

function AsyncCreatePengajuanSimpanan(data){
    return async dispatch => {    
        try {
            const result = await api.CreatePengajuanSimpanan(data);
            dispatch(ShowSuccess("Berhasil menambah Pengajuan"));
            console.info(result)
            dispatch(AsyncGetPengajuanSimpanan("nasabah"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menambah Pengajuan"));
        }
    }
}

//Approval
function AsyncApprovePengajuanKerjasama(data){
    return async dispatch => {    
        try {
            const result = await api.ApprovePengajuanKerjasama(data);
            dispatch(ShowSuccess("Berhasil menyetujui Pengajuan"));
            console.info(result)
            dispatch(AsyncGetPengajuanKerjasama("nasabah"));
            dispatch(AsyncGetPengajuanKerjasama("pengelola"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menyetujui Pengajuan"));
        }
    }
}

function AsyncApprovePengajuanJualBeli(data){
    return async dispatch => {    
        try {
            const result = await api.ApprovePengajuanJualBeli(data);
            dispatch(ShowSuccess("Berhasil menyetujui Pengajuan"));
            console.info(result)
            dispatch(AsyncGetPengajuanJualBeli("nasabah"));
            dispatch(AsyncGetPengajuanJualBeli("pengelola"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menyetujui Pengajuan"));
        }
    }
}

function AsyncApprovePengajuanSimpanan(data){
    return async dispatch => {    
        try {
            const result = await api.ApprovePengajuanSimpanan(data);
            dispatch(ShowSuccess("Berhasil menyetujui Pengajuan"));
            console.info(result)
            dispatch(AsyncGetPengajuanSimpanan("nasabah"));
            dispatch(AsyncGetPengajuanSimpanan("pengelola"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menyetujui Pengajuan"));
        }
    }
}

export {
    AsyncGetPengajuanKerjasama,
    AsyncGetPengajuanJualBeli,
    AsyncGetPengajuanSimpanan,
    AsyncCreatePengajuanKerjasama,
    AsyncCreatePengajuanJualBeli,
    AsyncCreatePengajuanSimpanan,
    AsyncApprovePengajuanKerjasama,
    AsyncApprovePengajuanJualBeli,
    AsyncApprovePengajuanSimpanan,
}