import { GetAngsuranAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { AsyncGetSimpananSukarela } from "../simpanan/middleware";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

//Angsuran Sukarela
function AsyncGetAngsuranSukarela(id){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetDetailTransaksiSukarela(id);
                        dispatch(GetAngsuranAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }
}

function AsyncTarikSimpananSukarela(data){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const response = await api.TarikSimpananSukarela(data);
                        console.info(response);
                        dispatch(AsyncGetAngsuranSukarela(data.id))
                        dispatch(AsyncGetSimpananSukarela('nasabah'))
                        dispatch(AsyncGetSimpananSukarela('pengelola'))
                        dispatch(ShowSuccess("Sukses setor/tarik simpanan"));
                } catch (err) {
                        console.error(err);
                        dispatch(ShowError("Gagal setor/tarik simpanan"));
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
                        dispatch(AsyncGetAngsuranSukarela(data.id))
                        dispatch(AsyncGetSimpananSukarela('nasabah'))
                        dispatch(AsyncGetSimpananSukarela('pengelola'))
                        dispatch(ShowSuccess("Sukses setor/tarik simpanan"));
                } catch (err) {
                        console.error(err);
                        dispatch(ShowError("Gagal setor/tarik simpanan"));
                }
                dispatch(hideLoading());
        }
}

export { AsyncGetAngsuranSukarela, AsyncSetorSimpananSukarela, AsyncTarikSimpananSukarela }