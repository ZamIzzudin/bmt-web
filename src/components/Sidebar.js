import Accordion from './Accordion';
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

import '../styles/components/Sidebar.css'

export default function Sidebar() {
    const { auth = {} } = useSelector(states => states)
    const location = useLocation().pathname

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pembiayaan = [
        {
            payload: 'kerjasama',
            nama: 'Pembiayaan Kerjasama'
        },
        {
            payload: 'jual-beli',
            nama: 'Pembiayaan Jual Beli'
        }
    ]

    const keanggotaan = [
        {
            payload: 'nasabah',
            nama: 'Nasabah'
        },
    ]

    const adminMasterViewKeanggotaan = [
        {
            payload: 'nasabah',
            nama: 'Nasabah'
        },
        {
            payload: 'admin',
            nama: 'Admin'
        }
    ]

    const pengajuan = [
        {
            payload: 'pembiayaan-kerjasama',
            nama: 'Pembiayaan Kerjasama'
        },
        {
            payload: 'pembiayaan-jual-beli',
            nama: 'Pembiayaan Jual Beli'
        },
        {
            payload: 'simpanan-sukarela',
            nama: 'Simpanan Sukarela'
        }
    ]

    const admin_kas = [
        {
            payload: 'masuk',
            nama: 'Masuk'
        },
        {
            payload: 'keluar',
            nama: 'Keluar'
        },
        {
            payload: 'rekap',
            nama: 'Rekap'
        }
    ]

    const admin_simpanan = [
        {
            payload: 'pokok',
            nama: 'Simpanan Pokok'
        },
        {
            payload: 'wajib',
            nama: 'Simpanan Wajib'
        },
        {
            payload: 'sukarela',
            nama: 'Simpanan Sukarela'
        }
    ]

    const user_simpanan = [
        {
            payload: 'wajib',
            nama: 'Simpanan Wajib'
        },
        {
            payload: 'sukarela',
            nama: 'Simpanan Sukarela'
        }
    ]



    return (
        <nav>
        {(auth?.role === 'ADMIN' || auth?.role === 'officer' || auth?.role === 'ADMIN_MASTER') && (
                <ul className="navbar-link-container">
                    <li className="navbar-link-item">
                        <Link to='/' className={location === '/' ? 'active' : null}>Home</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Link to='/profile' className={location === '/profile' ? 'active' : null}>Profile</Link>
                    </li>
                    {auth.role === 'ADMIN' ? (
                        <li className="navbar-link-item">
                            <Accordion isActive={location.includes('/keanggotaan/') ? true : false} dynamicData={keanggotaan} title={{ title: 'Keanggotaan', payload: 'keanggotaan' }} />
                        </li>
                    ) : (
                        <li className="navbar-link-item">
                            <Accordion isActive={location.includes('/keanggotaan/') ? true : false} dynamicData={adminMasterViewKeanggotaan} title={{ title: 'Keanggotaan', payload: 'keanggotaan' }} />
                        </li>
                    )}
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/pembiayaan/') ? true : false} dynamicData={pembiayaan} title={{ title: 'Angsuran Pembiayaan', payload: 'pembiayaan' }} />
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/simpanan/') ? true : false} dynamicData={admin_simpanan} title={{ title: 'Angsuran Simpanan', payload: 'simpanan' }} />
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/pengajuan/') ? true : false} dynamicData={pengajuan} title={{ title: 'Pengajuan', payload: 'pengajuan' }} />
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/kas/') ? true : false} dynamicData={admin_kas} title={{ title: 'Laporan', payload: 'kas' }} />
                    </li>
                </ul>
            )}
            {auth?.role === 'user' && (
                <ul className="navbar-link-container">
                    <li className="navbar-link-item">
                        <Link to='/' className={location === '/' ? 'active' : null}>Home</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Link to='/profile' className={location === '/profile' ? 'active' : null}>Profile</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/pembiayaan/') ? true : false} dynamicData={pembiayaan} title={{ title: 'Angsuran Pembiayaan', payload: 'pembiayaan' }} />
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/simpanan/') ? true : false} dynamicData={user_simpanan} title={{ title: 'Angsuran Simpanan', payload: 'simpanan' }} />
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/pengajuan/') ? true : false} dynamicData={pengajuan} title={{ title: 'Pengajuan', payload: 'pengajuan' }} />
                    </li>
                </ul>
            )}
            {auth?.role === 'manager' && (
                <ul className="navbar-link-container">
                    <li className="navbar-link-item">
                        <Link to='/' className={location === '/' ? 'active' : null}>Home</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/pembiayaan/') ? true : false} dynamicData={pembiayaan} title={{ title: 'Angsuran Pembiayaan', payload: 'pembiayaan' }} />
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/simpanan/') ? true : false} dynamicData={admin_simpanan} title={{ title: 'Angsuran Simpanan', payload: 'simpanan' }} />
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/pengajuan/') ? true : false} dynamicData={pengajuan} title={{ title: 'Pengajuan', payload: 'pengajuan' }} />
                    </li>
                </ul>
            )}
 
        </nav>
    )
}