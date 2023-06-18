const ActionType = {
        GET_REKAP: "GET_REKAP",
}

function GetRekapAction(rekap){
        return {
                type: ActionType.GET_REKAP,
                payload: { rekap },
        }
}

export { ActionType, GetRekapAction }