import { GetSimpananAction, GetDetailSimpananAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

//SIMPANAN POKOK
function AsyncGetSimpananPokok(){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetSimpananPokok();
                        dispatch(GetSimpananAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }
}

//SIMPANAN WAJIB
function AsyncGetSimpananWajib(){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetSimpananWajib();
                        dispatch(GetSimpananAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }
}

function AsyncGetDetailSimpananWajib(id){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetDetailSimpananWajib(id);
                        dispatch(GetDetailSimpananAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }
}

function AsyncGetNotLunas(bulan, tahun){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetNotLunasSimpananWajib(bulan, tahun);
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
function AsyncGetSimpananSukarela(type){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetSimpananSukarela(type);
                        dispatch(GetSimpananAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }
}

export { AsyncGetSimpananPokok, AsyncGetSimpananWajib, AsyncGetSimpananSukarela, AsyncGetDetailSimpananWajib, AsyncGetNotLunas, AsyncSetorSimpananWajib }