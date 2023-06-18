import { ActionType } from "./action";

export default function TransaksiReducer(transaksi = [], action = {}) {
        switch (action.type) {
                case ActionType.GET_TRANSAKSI:
                        return transaksi = action.payload.transaksi
                default:
                        return transaksi
        }    
}