const ActionType = {
        GET_ANGGOTA: 'GET_ANGGOTA',
    }
    
    function GetAnggotaAction(anggota) {
        return {
            type: ActionType.GET_ANGGOTA,
            payload: {
                anggota
            }
        }
    }

    
    export { ActionType, GetAnggotaAction }