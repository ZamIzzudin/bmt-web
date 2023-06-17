import { GetKasAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetKas(type){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetKas(type);
                        dispatch(GetKasAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }
}

function AsyncCreateKas(data, type){
        return async dispatch => {    
                try {
                        const result = await api.CreateKas(data);
                        console.info(result)
                        dispatch(ShowSuccess("Berhasil menambah Kas"));
                        dispatch(AsyncGetKas(type));
                } catch (err) {
                        console.error(err);
                        dispatch(ShowError("Gagal menambah Kas"));
                }
        }
}

export { AsyncGetKas, AsyncCreateKas }