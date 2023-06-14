const ActionType = {
        GET_OFFICER: 'GET_OFFICER',
}

function GetOfficerAction(officer){
        return{
                type: ActionType.GET_OFFICER,
                payload: {
                        officer
                }
        }
}

export { ActionType, GetOfficerAction }