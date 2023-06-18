import { ActionType } from "./action";

export default function PembiayaanReducer(pembiayaan = [], action = {}) {
        switch (action.type) {
                case ActionType.GET_PEMBIAYAAN:
                        return pembiayaan = action.payload.pembiayaan
                default:
                        return pembiayaan
        }    
}