/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogout } from '../state/auth/middleware'

import Loading from './Loading'
import HIMSI_LOGO from '../assets/HIMSI_LOGO.webp'
import { ReactComponent as Logout } from '../assets/icons/logout.svg'
import '../styles/components/Header.css'


export default function Header() {
    const { auth = {} } = useSelector(states => states)
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(asyncLogout())
    }

    return (
        <header>
            <Loading />
            <section className="header-cta">
                <span className="role-name">{auth.role}</span>
                <img src={HIMSI_LOGO} width="60px" alt="Logo HIMSI" />
                <button onClick={() => handleLogout()} className="logout-button"><Logout /></button>
            </section>
        </header>
    )
}