import { LoginAction, RefreshTokenAction, LogoutAction } from './action'
import { ShowError, HideError } from '../error/middleware'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { ShowSuccess } from '../success/middleware';

import { AsyncGetUsers } from '../users/middleware';

import axios from 'axios'
import api from '../../utils/api'
import cookies from '../../utils/cookies'

function asyncLogin(email, password) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            const response = await api.Login(email, password);
            console.info(response)
            cookies.remove("refreshToken");
            cookies.add("refreshToken", response.data.access_token, 7);

            const data = {
                username: response.data.data.username,
                role: response.data.data.role,
                id: response.data.data.id_user,
                no_hp: response.data.data.no_hp,
                nik: response.data.data.nik,
                pekerjaan: response.data.data.pekerjaan,
                status_perkawinan: response.data.data.status_perkawinan,
                alamat: response.data.data.alamat,
                name: response.data.data.nama,
                email: response.data.data.email,
                token: response.data.access_token,
                no_rekening: response.data.data.no_rekening,
                jenis_kelamin: response.data.data.jenis_kelamin
            }

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`
            sessionStorage.setItem('bmt_login_data', JSON.stringify(data))
            dispatch(LoginAction(data))
            // Pass to Action
            // dispatch(LoginAction(data))
            dispatch(HideError())
        } catch (err) {
            dispatch(ShowError('Cannot Login'))
        }

        dispatch(hideLoading())
    }
}

function asyncRegister(data, type) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.CreateUser(data);
            console.info(response)
            dispatch(ShowSuccess("Berhasil membuat User"));
            dispatch(AsyncGetUsers(type));
            dispatch(HideError())
        } catch (err) {
            dispatch(ShowError('Cannot Register'))
        }

        dispatch(hideLoading())
    }
}

function asyncCheckLogin() {
    return async dispatch => {
        dispatch(showLoading())
        
        try {
            // Get From Session Storage
            let auth_data = JSON.parse(sessionStorage.getItem('bmt_login_data'));
            //Setup Cookies 
            cookies.remove('refreshToken')
            cookies.add('refreshToken', auth_data.token, 7)

            axios.defaults.headers.common['Authorization'] = `Bearer ${auth_data.token}`
            sessionStorage.setItem('bmt_login_data', JSON.stringify(auth_data))

            // Pass to Action
            dispatch(LoginAction(auth_data))
            dispatch(HideError())
        } catch (err) {
            // Do Nothing
        }

        dispatch(hideLoading())
    }
}

function asyncRefreshToken() {
    return async dispatch => {
        try {
            const response = await api.Refresh()
            // cookies.remove('token')
            cookies.add('refreshToken', response.data.accessToken, 7)

            let auth_data = JSON.parse(sessionStorage.getItem('bmt_login_data'));
            auth_data.token = response.data.access_token

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`
            sessionStorage.setItem('bmt_login_data', JSON.stringify(auth_data))

            dispatch(RefreshTokenAction(response.data.access_token))
        } catch (err) {
            dispatch(LogoutAction())
            cookies.remove('refreshToken')
            sessionStorage.clear()

            // Set Route to default
            window.location.assign("/")
        }
    }
}

function asyncLogout() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            dispatch(LogoutAction())
            sessionStorage.clear();
            // Set Route to default
            window.location.assign("/")
        } catch (err) {
            console.log(err)
        }

        dispatch(hideLoading())
    }
}

export { asyncLogin, asyncRegister, asyncCheckLogin, asyncRefreshToken, asyncLogout }