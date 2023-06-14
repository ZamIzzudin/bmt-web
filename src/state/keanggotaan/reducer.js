import { ActionType } from "./action"

export default function AnggotaReducer(anggota = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_ANGGOTA:
            return anggota = action.payload.anggota
        default:
            return anggota
    }
}