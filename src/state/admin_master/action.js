const ActionType = {
        GET_ADMIN_MASTER: 'GET_ADMIN_MASTER',
}

function GetAdminMasterAction(admin_master){
        return{
                type: ActionType.GET_ADMIN_MASTER,
                payload: {
                        admin_master
                }
        }
}

export { ActionType, GetAdminMasterAction }