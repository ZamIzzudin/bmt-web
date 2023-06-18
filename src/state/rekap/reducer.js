import { ActionType } from "./action";

export default function RekapReducer(rekap = [], action = {}) {
        switch (action.type) {
                case ActionType.GET_REKAP:
                        return rekap = action.payload.rekap
                default:
                        return rekap
        }    
}