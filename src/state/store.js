import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from 'react-redux-loading-bar'
import ErrorReducer from './error/reducer'
import SuccessReducer from './success/reducer'
import AuhtReducer from "./auth/reducer"

const store = configureStore({
    reducer: {
        loadingBar: loadingBarReducer,
        error: ErrorReducer,
        success: SuccessReducer,
        auth: AuhtReducer,
    },
});

export { store }