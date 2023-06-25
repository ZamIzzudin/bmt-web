// eslint-disable-next-line
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { AsyncGetRekapKasNasabah, AsyncGetRekapKasPengelola } from '../state/rekap/middleware';

import '../styles/pages/Dashboard.css'

export default function Dashboard() {
  const { auth = {}, rekap = [] } = useSelector(states => states)
  const dispatch = useDispatch();

  function formatMoney(amount) {
    return new Intl.NumberFormat('id-ID').format(amount);
}

  useEffect(() => {
    if(auth.role === 'NASABAH'){
      dispatch(AsyncGetRekapKasNasabah())
      return;
    }
    dispatch(AsyncGetRekapKasPengelola())
  }, [dispatch, auth.role])

  return (
    <main>
      <div className='header-dashboard-section'>
        <p>Selamat datang di <span>BMT AL FATH IKMI,</span></p>
        <h1 className="dashboard-page-header">DASHBOARD</h1>
      </div>
      {auth.role !== 'NASABAH' ? (
        <section className="dashboard">
          <div className="dashboard-item dashboard-anggota">
            <span>
              Jumlah Nasabah
            </span>
            <span style={{fontSize: '40px', fontWeight: 'normal'}}>
              {rekap.jumlah_nasabah}
            </span>
          </div>
          <div className="dashboard-item dashboard-nasabah">
            <span>
              Total Simpanan Sukarela
            </span>
            <span style={{fontSize: '40px', fontWeight: 'normal'}}>
            Rp. {formatMoney(rekap.total_simpanan_sukarela)}
            </span>
          </div>
          <div className="dashboard-item dashboard-kas-masuk">
            <span>
              Total Simpanan Pokok
            </span>
            <span style={{fontSize: '32px', fontWeight: 'normal'}}>
            Rp. {formatMoney(rekap.total_simpanan_pokok)}
            </span>
          </div>
          <div className="dashboard-item dashboard-kas-keluar">
            <span>
              Total Simpanan Wajib
            </span>
            <span style={{fontSize: '32px', fontWeight: 'normal'}}>
            Rp. {formatMoney(rekap.total_simpanan_wajib)}
            </span>
          </div>
          <div className="dashboard-item dashboard-simpanan-pokok">
            <span>
              Total Kas Masuk
            </span>
            <span style={{fontSize: '32px', fontWeight: 'normal'}}>
            Rp. {formatMoney(rekap.kas_masuk)}
            </span>
          </div>
          <div className="dashboard-item dashboard-simpanan-wajib">
            <span>
              Total Kas Keluar
            </span>
            <span style={{fontSize: '32px', fontWeight: 'normal'}}>
            Rp. {formatMoney(rekap.kas_keluar)}
            </span>
          </div>
          <div className="dashboard-item dashboard-saldo">
            <span>
              Total Saldo Sementara
            </span>
            <span style={{fontWeight: 'normal', fontSize:'16px'}}>
              Akumulasi total saldo dari tiap transaksi
            </span>
            <span style={{fontSize: '32px', fontWeight: 'normal'}}>
            Rp. {formatMoney(rekap.total_saldo_sementara)}
            </span>
          </div>
        </section>
      ) : (
        <section className="dashboard">
          <div className="dashboard-item dashboard-pembiayaan">
            <span>
              Total Pembiayaan
            </span>
            <span>
            Rp. {formatMoney(rekap.total_pembiayaan)}
            </span>
          </div>
          <div className="dashboard-item dashboard-tabungan">
            <span>
              Total Simpanan Wajib
            </span>
            <span>
            Rp. {formatMoney(rekap.total_simpanan_wajib)}
            </span>
          </div>
          <div className="dashboard-item dashboard-simpanan-pokok">
            <span>
              Total Simpanan Pokok
            </span>
            <span>
            Rp. {formatMoney(rekap.total_simpanan_pokok)}
            </span>
          </div>
          <div className="dashboard-item dashboard-simpanan-wajib">
            <span>
              Total Simpanan Sukarela
            </span>
            <span>
            Rp. {formatMoney(rekap.total_simpanan_sukarela)}
            </span>
          </div>
        </section>
      )}
    </main>
  );
}
