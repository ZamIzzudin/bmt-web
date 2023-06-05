import React from 'react'

import Rekapitulasi from '../../components/Detail/Rekapitulasi'
import '../../styles/components/details/Rekapitulasi.css'
import { useEffect } from 'react'

const RekapitulasiJualBeli = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <main className='rekapitulasi-page'>
    <h1 className="page-header">Rekapitulasi Pembiayaan Jual Beli</h1>
      <>
        <Rekapitulasi />
      </>
    </main>    
  )
  
}

export default RekapitulasiJualBeli