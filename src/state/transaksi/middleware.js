import { GetTransaksiAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

//Transaksi Sukarela
function AsyncGetTransaksiSukarela(id){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetDetailTransaksiSukarela(id);
                        dispatch(GetTransaksiAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }
}

//Transaksi Kerjasama
function AsyncGetTransaksiKerjasama(id){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetDetailTransaksiPembiayaanKerjasama(id);
                        dispatch(GetTransaksiAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }
}

//Transaksi JualBeli
function AsyncGetTransaksiJualBeli(id){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetDetailTransaksiPembiayaanJualBeli(id);
                        dispatch(GetTransaksiAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }
}

export { AsyncGetTransaksiSukarela, AsyncGetTransaksiKerjasama, AsyncGetTransaksiJualBeli }