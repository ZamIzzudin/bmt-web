const ActionType = {
        GET_ANGSURAN: "GET_ANGSURAN",
}

function GetAngsuranAction(angsuran){
        return {
                type: ActionType.GET_ANGSURAN,
                payload: { angsuran },
        }
}

export { ActionType, GetAngsuranAction }