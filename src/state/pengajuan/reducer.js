import { ActionType } from "./action"

export default function PengajuanReducer(pengajuan = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_PENGAJUAN:
            return pengajuan = action.payload.pengajuan
        default:
            return pengajuan
    }
}