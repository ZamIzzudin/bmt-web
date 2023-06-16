// eslint-disable-next-line
import { useSelector } from 'react-redux';
import '../styles/pages/Dashboard.css'

export default function Dashboard() {
  const { auth = {} } = useSelector(states => states)

  const total_pembiayaan = 3700000
  const simpanan_pokok = 50000
  const simpanan_wajib = 10000
  const total_tabungan = 550000

  const kas_masuk = 260564749000
  const kas_keluar = 25786534
  const anggota = 13
  const nasabah = 3
  const saldo_sementara = kas_masuk - kas_keluar

  function formatMoney(amount) {
    return new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(amount);
  }

  return (
    <main>
      <div className='header-dashboard-section'>
        <p>Selamat datang di <span>BMT AL FATH IKMI,</span></p>
        <h1 className="dashboard-page-header">DASHBOARD</h1>
      </div>
      {auth.role !== 'user' ? (
        <section className="dashboard">
          <div className="dashboard-item dashboard-anggota">
            <span>
              Jumlah Nasabah
            </span>
            <span style={{fontSize: '40px', fontWeight: 'normal'}}>
              {anggota}
            </span>
          </div>
          <div className="dashboard-item dashboard-nasabah">
            <span>
              Total Simpanan Sukarela
            </span>
            <span style={{fontSize: '40px', fontWeight: 'normal'}}>
              {nasabah}
            </span>
          </div>
          <div className="dashboard-item dashboard-kas-masuk">
            <span>
              Total Simpanan Pokok
            </span>
            <span style={{fontSize: '32px', fontWeight: 'normal'}}>
            Rp. {formatMoney(kas_masuk)}
            </span>
          </div>
          <div className="dashboard-item dashboard-kas-keluar">
            <span>
              Total Simpanan Wajib
            </span>
            <span style={{fontSize: '32px', fontWeight: 'normal'}}>
            Rp. {formatMoney(kas_keluar)}
            </span>
          </div>
          <div className="dashboard-item dashboard-simpanan-pokok">
            <span>
              Total Kas Masuk
            </span>
            <span style={{fontSize: '32px', fontWeight: 'normal'}}>
            Rp. {formatMoney(simpanan_pokok)}
            </span>
          </div>
          <div className="dashboard-item dashboard-simpanan-wajib">
            <span>
              Total Kas Keluar
            </span>
            <span style={{fontSize: '32px', fontWeight: 'normal'}}>
            Rp. {formatMoney(simpanan_wajib)}
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
              Rp. {formatMoney(saldo_sementara)}
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
              Rp.{total_pembiayaan}
            </span>
          </div>
          <div className="dashboard-item dashboard-tabungan">
            <span>
              Total Tabungan
            </span>
            <span>
              Rp.{total_tabungan}
            </span>
          </div>
          <div className="dashboard-item dashboard-simpanan-pokok">
            <span>
              Total Simpanan Pokok
            </span>
            <span>
              Rp.{simpanan_pokok}
            </span>
          </div>
          <div className="dashboard-item dashboard-simpanan-wajib">
            <span>
              Total Simpanan Wajib
            </span>
            <span>
              Rp.{simpanan_wajib}
            </span>
          </div>
        </section>
      )}
    </main>
  );
}
