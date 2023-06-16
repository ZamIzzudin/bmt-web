import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from 'react-redux-loading-bar'
import ErrorReducer from './error/reducer'
import SuccessReducer from './success/reducer'
import AuhtReducer from "./auth/reducer"

import UsersReducer from "./users/reducer"
import PengajuanReducer from "./pengajuan/reducer"

const store = configureStore({
    reducer: {
        auth: AuhtReducer,
        loadingBar: loadingBarReducer,
        error: ErrorReducer,
        success: SuccessReducer,
        users: UsersReducer,
        pengajuan: PengajuanReducer,
    },
});

export { store }