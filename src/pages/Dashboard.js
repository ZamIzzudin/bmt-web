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

  return (
    <main>
      <h1 className="page-header">Dashboard</h1>
      {auth.role !== 'user' ? (
        <section className="dashboard">
          <div className="dashboard-item dashboard-anggota">
            <span>
              Anggota
            </span>
            <span>
              {anggota}
            </span>
          </div>
          <div className="dashboard-item dashboard-nasabah">
            <span>
              Nasabah
            </span>
            <span>
              {nasabah}
            </span>
          </div>
          <div className="dashboard-item dashboard-kas-masuk">
            <span>
              Total Kas Masuk
            </span>
            <span>
              Rp.{kas_masuk}
            </span>
          </div>
          <div className="dashboard-item dashboard-kas-keluar">
            <span>
              Total Kas Keluar
            </span>
            <span>
              Rp.{kas_keluar}
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
          <div className="dashboard-item dashboard-saldo">
            <span>
              Total Saldo Sementara
            </span>
            <span>
              Rp.{saldo_sementara}
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
