import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from 'react-redux-loading-bar'
import ErrorReducer from './error/reducer'
import SuccessReducer from './success/reducer'
import AuhtReducer from "./auth/reducer"

import UsersReducer from "./users/reducer"
import PengajuanReducer from "./pengajuan/reducer"
import KasReducer from './kas/reducer';
import SimpananReducer from './simpanan/reducer';
import TransaksiReducer from "./transaksi/reducer"
import PembiayaanReducer from "./pembiayaan/reducer"
import RekapReducer from "./rekap/reducer"

const store = configureStore({
    reducer: {
        auth: AuhtReducer,
        loadingBar: loadingBarReducer,
        error: ErrorReducer,
        success: SuccessReducer,
        users: UsersReducer,
        pengajuan: PengajuanReducer,
        kas: KasReducer,
        simpanan: SimpananReducer,
        pembiayaan: PembiayaanReducer,
        transaksi: TransaksiReducer,
        rekap: RekapReducer,
    },
});

export { store }