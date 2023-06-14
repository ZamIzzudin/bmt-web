import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TambahKeanggotaan from '../components/Form/TambahKeanggotaan'
import EditProfileNasabah from '../components/Form/EditAnggota'

import { AsyncGetAnggota } from '../state/keanggotaan/middleware'

import { ReactComponent as Search } from '../assets/icons/search.svg'

export default function Keanggotaan() {
    const { auth = {}, anggota = [] } = useSelector(states => states);
    const dispatch = useDispatch();

    const location = useLocation().pathname
    const type = location.split('/')[2]

    const [showAddForm, setShowAddForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    const [selectedData, setSelectedData] = useState(null)

    useEffect(() => {
        dispatch(AsyncGetAnggota());
    }, [dispatch])

    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">Tambah Nasabah</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Form Tambah Nasabah</h4>
                        <button onClick={() => { setShowAddForm(false) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <TambahKeanggotaan showForm={setShowAddForm} />
                    </div>
                </section>
            </main>
        )
    }

    if(showEditForm) {
        return (
            <EditProfileNasabah backButton={() => setShowEditForm(false)} currentData={selectedData}/>
        )
    }
  if(auth.role === 'ADMIN_MASTER' || auth.role === 'ADMIN' || auth.role === 'MANAGER' || auth.role === 'ACCOUNT_OFFICER'){
      return (
          <main>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <h1 className="page-header">Daftar Nasabah</h1>
                  {(auth.role === 'ADMIN_MASTER' || auth.role === 'ADMIN') && (
                      <div style={{paddingRight:'50px'}}>
                          <button onClick={() => setShowAddForm(true)} className={`section-add-btn ${type === 'rekap' ? 'hidden' : null}`}>+</button>
                      </div>
                  )}
              </div>
              <section className="content-section">
                  <div className="section-header-container" style={{display: 'flex', justifyContent: 'space-between'}}>
                      <h4 className="section-header">List Akun Nasabah</h4>
                      <div style={{position: 'relative'}}>
                          <input type="text" className='section-search' required 
                              style={{width: '100%', height: '24px', padding:'15px 25px', borderRadius:'18px', fontSize:'16px'}} />
                          <Search style={{position: 'absolute', top: '50%', left: '90%', transform: 'translate(-50%, -50%)', cursor: 'pointer'}} />
                      </div>
                  </div>
                  <div className="section-body">
                      <table>
                          <tr>
                              <th>No.</th>
                              <th>ID Nasabah</th>
                              <th>Nama</th>
                              <th>Jenis Kelamin</th>
                              <th>Email</th>
                              <th className="text-center">Action</th>
                          </tr>
                          {anggota?.map((each, index) => (
                              <tr>
                                  <td>{index + 1}</td>
                                  <td>{`NSB-${each.id_anggota.substring(0,3)}`}</td>
                                  <td>{each.nama_anggota}</td>
                                  <td>{each.jenis_kelamin}</td>
                                  <td>{each.email_anggota}</td>
                                  <td className="table-cta">
                                    {(auth.role === "MANAGER" || auth.role === "ACCOUNT_OFFICER") ? (
                                      <div className="table-cta-container">
                                        <button className="section-edit-btn" onClick={() => { setShowEditForm(true); setSelectedData(each) }} >Detail</button>
                                      </div>
                                    ): (
                                      <div className="table-cta-container">
                                        <button className="section-edit-btn" onClick={() => { setShowEditForm(true); setSelectedData(each) }} >Edit</button>
                                      </div>

                                    )}
                                  </td>
                              </tr>
                          ))}
                      </table>
                  </div>
              </section>
          </main>
      )
  }
    return (
        <EditProfileNasabah />
       )
  
}