const ActionType = {
        GET_TRANSAKSI: "GET_TRANSAKSI",
}

function GetTransaksiAction(transaksi){
        return {
                type: ActionType.GET_TRANSAKSI,
                payload: { transaksi },
        }
}

export {
        ActionType,
        GetTransaksiAction
}