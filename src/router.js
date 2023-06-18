import { BrowserRouter, Switch, Route } from "react-router-dom"
// import { useEffect } from "react"
import { useSelector } from 'react-redux'

import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import SimpananSukarela from './pages/SimpananSukarela'
import SimpananWajib from './pages/SimpananWajib'
import SimpananPokok from './pages/SimpananPokok'
import PembiayaanKerjasama from './pages/PembiayaanKerjasama'
import PembiayaanJualBeli from './pages/PembiayaanJualBeli'
import PengajuanSimpanan from './pages/PengajuanSimpanan'
import PengajuanPembiayaan from './pages/PengajuanPembiayaan'
import PengajuanKerjasama from './pages/PengajuanKerjasama'
import Kas from "./pages/Kas"
import Keanggotaan from "./pages/Keanggotaan"

import Login from './pages/Login'
import Page404 from './pages/404'

import Loading from './components/Loading'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import KeanggotaanAdmin from "./pages/KeanggotaanAdmin"

// import { asyncLogout, asyncRefreshToken, asyncCheckLogin } from "./state/auth/middleware"

export default function Router() {
    const { auth = {} } = useSelector(states => states)
    // const dispatch = useDispatch()

        // Refresh Token Cycle
        // useEffect(() => {
        //     // do refresh token where token is'nt undefined
        //     if (auth.token !== undefined) {
        //         try {
        //             // Do in 8 minutes
        //             const interval = setInterval(() => {
        //                 dispatch(asyncRefreshToken())
        //             }, 30000);
    
        //             return () => clearInterval(interval);
        //         } catch (err) {
        //             // dispatch(asyncLogout())
        //         }
        //     } 
        //     // else {
        //     //     // Try Tto get token from Session Storage
        //     //     try {
        //     //         dispatch(asyncCheckLogin())
        //     //     } catch (err) {
        //     //         dispatch(asyncLogout())
        //     //     }
        //     // }
        // }, [auth, dispatch])

    return (
        <BrowserRouter>
            <Loading />
            {!auth.role ? (
                // Route if user doesnt Login
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="*" component={Page404} />
                </Switch>
            ) : (
                // Route if user already Login
                <>
                    {(auth?.role === 'ADMIN' || auth.role === 'OFFICER' || auth.role === 'ADMIN_MASTER') && (
                        <>
                            <Header />
                            <Sidebar />
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route exact path="/profile" component={Profile} />
                                <Route exact path="/keanggotaan/nasabah" component={Keanggotaan} />
                                <Route exact path="/keanggotaan/admin" component={KeanggotaanAdmin} />
                                <Route exact path="/pembiayaan/kerjasama" component={PembiayaanKerjasama} />
                                <Route exact path="/pembiayaan/jual-beli" component={PembiayaanJualBeli} />
                                <Route exact path="/simpanan/pokok" component={SimpananPokok} />
                                <Route exact path="/simpanan/wajib" component={SimpananWajib} />
                                <Route exact path="/simpanan/sukarela" component={SimpananSukarela} />
                                <Route exact path="/pengajuan/pembiayaan-kerjasama" component={PengajuanKerjasama} />
                                <Route exact path="/pengajuan/pembiayaan-jual-beli" component={PengajuanPembiayaan} />
                                <Route exact path="/pengajuan/simpanan-sukarela" component={PengajuanSimpanan} />
                                <Route exact path="/kas/masuk" component={Kas} />
                                <Route exact path="/kas/keluar" component={Kas} />
                                <Route exact path="/kas/rekap" component={Kas} />
                                <Route path="*" component={Page404} />
                            </Switch>
                        </>
                    )}
                    {auth?.role === 'NASABAH' && (
                        <>
                            <Header />
                            <Sidebar />
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route exact path="/profile" component={Profile} />
                                <Route exact path="/pembiayaan/kerjasama" component={PembiayaanKerjasama} />
                                <Route exact path="/pembiayaan/jual-beli" component={PembiayaanJualBeli} />
                                <Route exact path="/simpanan/wajib" component={SimpananWajib} />
                                <Route exact path="/simpanan/sukarela" component={SimpananSukarela} />
                                <Route exact path="/pengajuan/pembiayaan-kerjasama" component={PengajuanKerjasama} />
                                <Route exact path="/pengajuan/pembiayaan-jual-beli" component={PengajuanPembiayaan} />
                                <Route exact path="/pengajuan/simpanan-sukarela" component={PengajuanSimpanan} />

                                <Route path="*" component={Page404} />
                            </Switch>
                        </>
                    )}
                    {auth?.role === 'manager' && (
                        <>
                            <Header />
                            <Sidebar />
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route exact path="/pembiayaan/kerjasama" component={PembiayaanKerjasama} />
                                <Route exact path="/pembiayaan/jual-beli" component={PembiayaanJualBeli} />
                                <Route exact path="/simpanan/pokok" component={SimpananPokok} />
                                <Route exact path="/simpanan/wajib" component={SimpananWajib} />
                                <Route exact path="/simpanan/sukarela" component={SimpananSukarela} />
                                <Route exact path="/pengajuan/pembiayaan-kerjasama" component={PengajuanKerjasama} />
                                <Route exact path="/pengajuan/pembiayaan-jual-beli" component={PengajuanPembiayaan} />
                                <Route exact path="/pengajuan/simpanan-sukarela" component={PengajuanSimpanan} />
                                <Route exact path="/kas/masuk" component={Kas} />
                                <Route exact path="/kas/keluar" component={Kas} />
                                <Route exact path="/kas/rekap" component={Kas} />
                                <Route path="*" component={Page404} />
                            </Switch>
                        </>
                    )}
                </>
            )}
        </BrowserRouter>
    )
}