const ActionType = {
        GET_ADMIN: 'GET_ADMIN',
}

function GetAdminAction(admin){
        return{
                type: ActionType.GET_ADMIN,
                payload: {
                        admin
                }
        }
}

export { ActionType, GetAdminAction }