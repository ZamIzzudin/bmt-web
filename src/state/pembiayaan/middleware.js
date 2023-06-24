import { GetPembiayaanAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { AsyncGetSimpananSukarela } from "../simpanan/middleware";
import { AsyncGetTransaksiSukarela, AsyncGetTransaksiKerjasama, AsyncGetTransaksiJualBeli } from "../transaksi/middleware";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

//Angsuran Kerjasama
function AsyncGetPembiayaanKerjasama(type, search){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetPembiayaanKerjasama(type, search);
                        dispatch(GetPembiayaanAction(data));
                } catch (err) {
                        console.error(err);
                        dispatch(GetPembiayaanAction([]));
                }
                dispatch(hideLoading());
        }     
}

function AsyncSetorPembiayaanKerjasama(data){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const response = await api.SetorPembiayaanKerjasama(data);
                        console.info(response);
                        dispatch(AsyncGetTransaksiKerjasama(data.id))
                        dispatch(AsyncGetPembiayaanKerjasama('nasabah'))
                        dispatch(AsyncGetPembiayaanKerjasama('pengelola'))
                        dispatch(ShowSuccess("Sukses setor/tarik pembiayaan"));
                } catch (err) {
                        console.error(err);
                        dispatch(ShowError("Gagal setor/tarik pembiayaan"));
                        
                }
                dispatch(hideLoading());
        }
}

//Angsuran Jual Beli
function AsyncGetPembiayaanJualBeli(type, search){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetPembiayaanJualBeli(type, search);
                        dispatch(GetPembiayaanAction(data));
                } catch (err) {
                        console.error(err);
                        dispatch(GetPembiayaanAction([]));
                }
                dispatch(hideLoading());
        }     
}

function AsyncSetorPembiayaanJualBeli(data){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const response = await api.SetorPembiayaanJualBeli(data);
                        console.info(response);
                        dispatch(AsyncGetTransaksiJualBeli(data.id))
                        dispatch(AsyncGetPembiayaanJualBeli('nasabah'))
                        dispatch(AsyncGetPembiayaanJualBeli('pengelola'))
                        dispatch(ShowSuccess("Sukses setor/tarik pembiayaan"));
                } catch (err) {
                        console.error(err);
                        dispatch(ShowError("Gagal setor/tarik pembiayaan"));
                }
                dispatch(hideLoading());
        }
}

//Angsuran Sukarela
function AsyncTarikSimpananSukarela(data){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const response = await api.TarikSimpananSukarela(data);
                        console.info(response);
                        dispatch(AsyncGetTransaksiSukarela(data.id))
                        dispatch(AsyncGetSimpananSukarela('nasabah'))
                        dispatch(AsyncGetSimpananSukarela('pengelola'))
                        dispatch(ShowSuccess("Sukses setor/tarik pembiayaan"));
                } catch (err) {
                        console.error(err);
                        dispatch(ShowError("Gagal setor/tarik pembiayaan"));
                }
                dispatch(hideLoading());
        }
}

function AsyncSetorSimpananSukarela(data){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const response = await api.SetorSimpananSukarela(data);
                        console.info(response);
                        dispatch(AsyncGetTransaksiSukarela(data.id))
                        dispatch(AsyncGetSimpananSukarela('nasabah'))
                        dispatch(AsyncGetSimpananSukarela('pengelola'))
                        dispatch(ShowSuccess("Sukses setor/tarik pembiayaan"));
                } catch (err) {
                        console.error(err);
                        dispatch(ShowError("Gagal setor/tarik pembiayaan"));
                }
                dispatch(hideLoading());
        }
}


export { 
        AsyncSetorSimpananSukarela, 
        AsyncTarikSimpananSukarela, 
        AsyncGetPembiayaanKerjasama, 
        AsyncSetorPembiayaanKerjasama,
        AsyncGetPembiayaanJualBeli,
        AsyncSetorPembiayaanJualBeli,
 };