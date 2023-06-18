const ActionType = {
        GET_PEMBIAYAAN: "GET_ANGSURAN",
}

function GetPembiayaanAction(pembiayaan){
        return {
                type: ActionType.GET_PEMBIAYAAN,
                payload: { pembiayaan },
        }
}

export { ActionType, GetPembiayaanAction }