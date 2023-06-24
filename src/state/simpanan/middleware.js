import { GetSimpananAction, GetDetailSimpananAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

//SIMPANAN POKOK
function AsyncGetSimpananPokok(search){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetSimpananPokok(search);
                        dispatch(GetSimpananAction(data));
                } catch (err) {
                        console.error(err);
                        dispatch(GetSimpananAction([]));
                }
                dispatch(hideLoading());
        }
}

//SIMPANAN WAJIB
function AsyncGetSimpananWajib(search){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetSimpananWajib(search);
                        dispatch(GetSimpananAction(data));
                } catch (err) {
                        console.error(err);
                        dispatch(GetSimpananAction([]));
                }
                dispatch(hideLoading());
        }
}

function AsyncGetDetailSimpananWajib(id, tahun){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetDetailSimpananWajib(id, tahun);
                        dispatch(GetDetailSimpananAction(data));
                } catch (err) {
                        console.error(err);
                        dispatch(GetDetailSimpananAction([]));
                }
                dispatch(hideLoading());
        }
}

function AsyncGetNotLunas(bulan, tahun, search){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetNotLunasSimpananWajib(bulan, tahun, search);
                        dispatch(GetSimpananAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }
}

function AsyncSetorSimpananWajib(id){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.SetorSimpananWajib(id);
                        console.info(data);
                        dispatch(AsyncGetSimpananWajib());
                        dispatch(ShowSuccess("Sukses setor simpanan"));
                } catch (err) {
                        console.error(err);
                        dispatch(ShowError("Gagal setor simpanan"));
                }
                dispatch(hideLoading());
        }
}

//SIMPANAN SUKARELA
function AsyncGetSimpananSukarela(type, search){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetSimpananSukarela(type, search);
                        dispatch(GetSimpananAction(data));
                } catch (err) {
                        console.error(err);
                        dispatch(GetSimpananAction([]));
                }
                dispatch(hideLoading());
        }
}


export { AsyncGetSimpananPokok, AsyncGetSimpananWajib, AsyncGetSimpananSukarela, AsyncGetDetailSimpananWajib, AsyncGetNotLunas, AsyncSetorSimpananWajib }