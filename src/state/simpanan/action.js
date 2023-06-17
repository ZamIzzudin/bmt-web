const ActionType = {
        GET_SIMPANAN: 'GET_SIMPANAN',
        GET_DETAIL_SIMPANAN: 'GET_DETAIL_SIMPANAN',
}

function GetSimpananAction(simpanan){
    return {
        type: ActionType.GET_SIMPANAN,
        payload: {
                simpanan
        }
    }
}

function GetDetailSimpananAction(simpanan){
        return{
                type: ActionType.GET_DETAIL_SIMPANAN,
                payload: {
                        simpanan
                }
        }
}

export { ActionType, GetSimpananAction, GetDetailSimpananAction }