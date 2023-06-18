import { GetRekapAction } from "./action";
import api from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// import { ShowSuccess } from '../success/middleware';
// import { ShowError } from '../error/middleware';

function AsyncGetRekapKasPengelola(){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetRekapPengelola();
                        dispatch(GetRekapAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }     
}

function AsyncGetRekapKasNasabah(){
        return async dispatch => {
                dispatch(showLoading());
                try {
                        const data = await api.GetRekapNasabah();
                        dispatch(GetRekapAction(data));
                } catch (err) {
                        console.error(err);
                }
                dispatch(hideLoading());
        }     
}

export { AsyncGetRekapKasNasabah, AsyncGetRekapKasPengelola }