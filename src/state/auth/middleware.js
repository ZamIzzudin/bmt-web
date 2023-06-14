import { LoginAction, RefreshTokenAction, LogoutAction } from './action'
import { ShowError, HideError } from '../error/middleware'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
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
            cookies.add("refreshToken", response.data.accessToken, 7);

            const data = {
                username: response.data.data.username,
                role: response.data.data.role,
                id: response.data.data.id,
                name: response.data.data.nama_admin_master,
                email: response.data.data.email_admin_master,
                token: response.data.accessToken
            }

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
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

            cookies.remove('refreshToken')
            cookies.add('refreshToken', response.data.accessToken, 7)

            let auth_data = JSON.parse(sessionStorage.getItem('bmt_login_data'));
            auth_data.token = response.data.accessToken

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
            sessionStorage.setItem('dashboard_himsi_login', JSON.stringify(auth_data))

            dispatch(RefreshTokenAction(response.data.accessToken))
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
            // Set Route to default
            window.location.assign("/")
        } catch (err) {
            console.log(err)
        }

        dispatch(hideLoading())
    }
}

export { asyncLogin, asyncCheckLogin, asyncRefreshToken, asyncLogout }