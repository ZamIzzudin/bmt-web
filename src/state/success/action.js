const ActionType = {
    IS_SUCCESS: 'IS_SUCCESS',
    ISNT_SUCCESS: 'ISNT_SUCCESS'
}

function IsSuccessAction(message) {
    return {
        type: ActionType.IS_SUCCESS,
        payload: {
            status: true,
            message: message
        }
    }
}

function IsntSuccessAction() {
    return {
        type: ActionType.ISNT_SUCCESS,
    }
}

export { ActionType, IsSuccessAction, IsntSuccessAction }