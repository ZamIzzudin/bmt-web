import { BrowserRouter, Switch, Route } from "react-router-dom"
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
import Kas from "./pages/Kas"
import Keanggotaan from "./pages/Keanggotaan"

import Login from './pages/Login'
import Page404 from './pages/404'

import Loading from './components/Loading'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

export default function Router() {
    const { auth = { status: false, role: null } } = useSelector(states => states)

    return (
        <BrowserRouter>
            <Loading />
            {!auth.status ? (
                // Route if user doesnt Login
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="*" component={Page404} />
                </Switch>
            ) : (
                // Route if user already Login
                <>
                    {(auth?.role === 'admin' || auth.role === 'officer') && (
                        <>
                            <Header />
                            <Sidebar />
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                                <Route exact path="/keanggotaan/nasabah" component={Keanggotaan} />
                                <Route exact path="/pembiayaan/kerjasama" component={PembiayaanKerjasama} />
                                <Route exact path="/pembiayaan/jual-beli" component={PembiayaanJualBeli} />
                                <Route exact path="/simpanan/pokok" component={SimpananPokok} />
                                <Route exact path="/simpanan/wajib" component={SimpananWajib} />
                                <Route exact path="/simpanan/sukarela" component={SimpananSukarela} />
                                <Route exact path="/pengajuan/pembiayaan-kerjasama" component={PengajuanPembiayaan} />
                                <Route exact path="/pengajuan/pembiayaan-jual-beli" component={PengajuanPembiayaan} />
                                <Route exact path="/pengajuan/simpanan-sukarela" component={PengajuanSimpanan} />
                                <Route exact path="/kas/masuk" component={Kas} />
                                <Route exact path="/kas/keluar" component={Kas} />
                                <Route exact path="/kas/rekap" component={Kas} />
                                <Route path="*" component={Page404} />
                            </Switch>
                        </>
                    )}
                    {auth?.role === 'user' && (
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
                                <Route exact path="/pengajuan/pembiayaan-kerjasama" component={PengajuanPembiayaan} />
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
                                <Route exact path="/pengajuan/pembiayaan-kerjasama" component={PengajuanPembiayaan} />
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