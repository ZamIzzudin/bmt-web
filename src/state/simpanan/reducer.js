import { ActionType } from "./action"

export default function SimpananReducer(simpanan = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_SIMPANAN:
            return simpanan = action.payload.simpanan
        case ActionType.GET_DETAIL_SIMPANAN:
                return simpanan = action.payload.simpanan    
        default:
            return simpanan
    }
}