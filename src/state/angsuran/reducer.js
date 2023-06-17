import { ActionType } from "./action";

export default function AngsuranReducer(angsuran = [], action = {}) {
        switch (action.type) {
                case ActionType.GET_ANGSURAN:
                        return angsuran = action.payload.angsuran
                default:
                        return angsuran
        }    
}