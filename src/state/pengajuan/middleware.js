import { GetPengajuanAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

//PENGAJUAN KERJASAMA
function AsyncGetPengajuanKerjasama(type){
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.GetPengajuanKerjasama(type);
            dispatch(GetPengajuanAction(data));
        } catch (err) {
            console.error(err);
            dispatch(GetPengajuanAction([]));
        }
        dispatch(hideLoading());
    }
}
function AsyncCreatePengajuanKerjasama(data){
    return async dispatch => {    
        try {
            const result = await api.CreatePengajuanKerjasama(data);
            console.info(result)
            dispatch(ShowSuccess("Berhasil menambah Pengajuan"));
            dispatch(AsyncGetPengajuanKerjasama("nasabah"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menambah Pengajuan"));
        }
    }
}

function AsyncDeletePengajuanKerjasama(id){
    return async dispatch => {
        try {
            const result = await api.DeletePengajuanKerjasama(id);
            console.info(result)
            dispatch(ShowSuccess("Berhasil menghapus Pengajuan"));
            dispatch(AsyncGetPengajuanKerjasama("nasabah"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menghapus Pengajuan"));
        }
    }
}

//PENGAJUAN JUALBELI
function AsyncGetPengajuanJualBeli(type){
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.GetPengajuanJualBeli(type);

            dispatch(GetPengajuanAction(data));
        } catch (err) {
            console.error(err);
            dispatch(GetPengajuanAction([]));
        }
        dispatch(hideLoading());
    }
}

function AsyncCreatePengajuanJualBeli(data){
    return async dispatch => {    
        try {
            const result = await api.CreatePengajuanJualBeli(data);
            console.info(result)
            dispatch(ShowSuccess("Berhasil menambah Pengajuan"));
            dispatch(AsyncGetPengajuanJualBeli("nasabah"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menambah Pengajuan"));
        }
    }
}

function AsyncDeletePengajuanJualBeli(id){
    return async dispatch => {
        try {
            const result = await api.DeletePengajuanJualBeli(id);
            console.info(result)
            dispatch(ShowSuccess("Berhasil menghapus Pengajuan"));
            dispatch(AsyncGetPengajuanKerjasama("nasabah"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menghapus Pengajuan"));
        }
    }
}

//PENGAJUAN SIMPANAN
function AsyncGetPengajuanSimpanan(type){
    return async dispatch => {
        dispatch(showLoading());
        try {
            const data = await api.GetPengajuanSimpanan(type);
            dispatch(GetPengajuanAction(data));
        } catch (err) {
            console.error(err);
            dispatch(GetPengajuanAction([]));
        }
        dispatch(hideLoading());
    }
}

function AsyncCreatePengajuanSimpanan(data){
    return async dispatch => {    
        try {
            const result = await api.CreatePengajuanSimpanan(data);
            console.info(result)
            dispatch(ShowSuccess("Berhasil menambah Pengajuan"));
            dispatch(AsyncGetPengajuanSimpanan("nasabah"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menambah Pengajuan"));
        }
    }
}

function AsyncDeletePengajuanSimpanan(id){
    return async dispatch => {
        try {
            const result = await api.DeletePengajuanSimpanan(id);
            console.info(result)
            dispatch(ShowSuccess("Berhasil menghapus Pengajuan"));
            dispatch(AsyncGetPengajuanSimpanan("nasabah"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Gagal menghapus Pengajuan"));
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

//REJECTION

function AsyncRejectPengajuanKerjasama(data){
    return async dispatch => {    
        try {
            const result = await api.TolakPengajuanKerjasama(data);
            dispatch(ShowSuccess("Pengajuan Tidak Disetujui"));
            console.info(result)
            dispatch(AsyncGetPengajuanKerjasama("nasabah"));
            dispatch(AsyncGetPengajuanKerjasama("pengelola"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Terjadi kesalahan"));
        }
    }
}

function AsyncRejectPengajuanJualBeli(data){
    return async dispatch => {    
        try {
            const result = await await api.TolakPengajuanJualBeli(data);
            dispatch(ShowSuccess("Pengajuan Tidak Disetujui"));
            console.info(result)
            dispatch(AsyncGetPengajuanJualBeli("nasabah"));
            dispatch(AsyncGetPengajuanJualBeli("pengelola"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Terjadi kesalahan"));
        }
    }
}

function AsyncRejectPengajuanSimpanan(data){
    return async dispatch => {    
        try {
            const result = await api.TolakPengajuanSimpanan(data);
            dispatch(ShowSuccess("Pengajuan Tidak Disetujui"));
            console.info(result)
            dispatch(AsyncGetPengajuanSimpanan("nasabah"));
            dispatch(AsyncGetPengajuanSimpanan("pengelola"));
        } catch (err) {
            console.error(err);
            dispatch(ShowError("Terjadi kesalahan"));
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
    AsyncDeletePengajuanSimpanan,
    AsyncDeletePengajuanKerjasama,
    AsyncDeletePengajuanJualBeli,
    AsyncApprovePengajuanKerjasama,
    AsyncApprovePengajuanJualBeli,
    AsyncApprovePengajuanSimpanan,
    AsyncRejectPengajuanKerjasama,
    AsyncRejectPengajuanJualBeli,
    AsyncRejectPengajuanSimpanan,
}