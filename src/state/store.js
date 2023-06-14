import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from 'react-redux-loading-bar'
import ErrorReducer from './error/reducer'
import SuccessReducer from './success/reducer'
import AuhtReducer from "./auth/reducer"

import AnggotaReducer from "./keanggotaan/reducer"
import AdminReducer from "./admin/reducer"
import ManagerReducer from "./manager/reducer"
import OfficerReducer from "./account_officer/reducer"
import AdminMasterReducer from "./admin_master/reducer"

const store = configureStore({
    reducer: {
        auth: AuhtReducer,
        loadingBar: loadingBarReducer,
        error: ErrorReducer,
        success: SuccessReducer,
        anggota: AnggotaReducer,
        admin: AdminReducer,
        manager: ManagerReducer,
        officer: OfficerReducer,
        admin_master: AdminMasterReducer
    },
});

export { store }