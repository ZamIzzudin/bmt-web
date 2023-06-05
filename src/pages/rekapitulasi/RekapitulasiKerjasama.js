import React from 'react'
import { useEffect } from 'react'

import Rekapitulasi from '../../components/Detail/Rekapitulasi'
import '../../styles/components/details/Rekapitulasi.css'

const RekapitulasiKerjasama = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <main className='rekapitulasi-page'>
    <h1 className="page-header">Rekapitulasi Pembiayaan Kerjasama</h1>
      <>
        <Rekapitulasi />
      </>
    </main>    
  )
  
}

export default RekapitulasiKerjasama