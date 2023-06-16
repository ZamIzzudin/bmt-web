const ActionType = {
    GET_PENGAJUAN: "GET_PENGAJUAN",
}

function GetPengajuanAction(pengajuan){
    return {
        type: ActionType.GET_PENGAJUAN,
        payload: {
            pengajuan
        }
    }
}

export { ActionType, GetPengajuanAction }